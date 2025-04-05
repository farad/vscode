from flask import Flask, request, jsonify
import sqlite3
from datetime import datetime, timedelta

app = Flask(__name__)

# Conexão ao banco de dados SQLite
def get_db_connection():
    conn = sqlite3.connect('sugesta.db')
    conn.row_factory = sqlite3.Row
    return conn

# Inicialização do banco de dados
@app.before_first_request
def initialize_database():
    with get_db_connection() as conn:
        conn.execute('''
            CREATE TABLE IF NOT EXISTS locations (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                apelido TEXT UNIQUE,
                latitude REAL,
                longitude REAL,
                text TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        conn.commit()

# Endpoint para salvar a localização
@app.route('/api/save_location', methods=['POST'])
def save_location():
    data = request.get_json()
    apelido = data['apelido']
    latitude = data['latitude']
    longitude = data['longitude']

    with get_db_connection() as conn:
        try:
            cursor = conn.execute('''
                INSERT INTO locations (apelido, latitude, longitude) VALUES (?, ?, ?)
            ''', (apelido, latitude, longitude))
            conn.commit()
            location_id = cursor.lastrowid
        except sqlite3.IntegrityError:
            return jsonify({'valid': False}), 409

    return jsonify({'valid': True, 'location_id': location_id})

# Endpoint para verificar se o apelido é válido
@app.route('/api/check_alias', methods=['POST'])
def check_alias():
    data = request.get_json()
    apelido = data['apelido']

    with get_db_connection() as conn:
        cursor = conn.execute('''
            SELECT COUNT(*) FROM locations WHERE apelido = ?
        ''', (apelido,))
        count = cursor.fetchone()[0]

    if count > 0:
        return jsonify({'valid': False})
    else:
        return jsonify({'valid': True})

# Endpoint para obter localizações por distância
@app.route('/api/locations_by_distance', methods=['GET'])
def locations_by_distance():
    latitude = request.args.get('latitude', type=float)
    longitude = request.args.get('longitude', type=float)

    with get_db_connection() as conn:
        cursor = conn.execute('''
            SELECT * FROM locations
            ORDER BY (latitude - ?) * (latitude - ?) + 
                     (longitude - ?) * (longitude - ?)
        ''', (latitude, latitude, longitude, longitude))
        locations = [dict(loc) for loc in cursor.fetchall()]

    return jsonify({'locations': locations})

if __name__ == '__main__':
    app.run(debug=True)