{
  import React from 'react';
  import { Map } from '../Map';
  import { Player } from '../Player';
  import { Enemy } from '../Enemy';
  import './style.css';
  
  export const Game = () => (
    <div className="game">
      <Map />
      <Player />
      <Enemy />
    </div>
  );
  <file_sep>/src/components/Map/index.js
  import React, { Component } from 'react';
  import L from 'leaflet';
  import './style.css';
  
  export class Map extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        map: null,
      };
    }
  
    componentDidMount() {
      const map = new L.Map('map');
      const tileLayer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      });
  
      map.addLayer(tileLayer);
      this.setState({ map });
    }
  
    render() {
      return (
        <div className="map" id="map" />
      );
    }
  }
  <file_sep>/src/components/Enemy/index.js
  import React from 'react';
  import './style.css';
  
  export const Enemy = () => (
    <div className="enemy">
      enemy
    </div>
  );