<template>
  <div id="app">
    <!-- Barra de Ferramentas -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Sugésta</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <!-- Itens da Barra de Ferramentas -->
          <!-- Exemplo: <li class="nav-item"><a class="nav-link" href="#">Sobre</a></li> -->
        </ul>
      </div>
    </nav>

    <!-- Mapa -->
    <div class="map">
      <iframe src="https://www.google.com/maps/embed/v1/place?key={YOUR_API_KEY}&q=Curitiba%2C+PR" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"></iframe>
    </div>

    <!-- Painel de Texto -->
    <div class="text-board">
      <h1>Bem-vindo à Sugésta!</h1>
      <p>Esta é uma simples aplicação PWA com mapa e um painel de texto.</p>
    </div>

  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.map iframe {
  display: block;
  margin: 0 auto;
}
.text-board {
  padding: 20px;
  font-size: 18px;
  line-height: 1.5;
}
</style>
<style scoped>
/* Custom Properties */
:root {
  --primary-color: #2c3e50;
  --secondary-color: #f8f9fa;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: var(--primary-color);
}

.map iframe {
  display: block;
  margin: 0 auto;
  border-radius: 4px;
  background-color: var(--secondary-color);
}

.text-board {
  padding: 20px;
  font-size: 18px;
  line-height: 1.5;
  border-radius: 4px;
  background-color: var(--primary-color);
}
</style>
<template>
  <!-- ... -->

  <!-- Modal -->
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Aviso</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Este é um simples aplicativo PWA com mapa e um painel de texto.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ... -->
</template>

<script>
// JavaScript para o Aplicativo
$(document).ready(function() {

  // Barra de Ferramentas Toggler
  $('.navbar-toggler').click(function() {
    $(this).toggleClass('active');
    $('.navbar-collapse.show').toggle();
  });

  // Modal Toggler
  $('#modalToggler').click(function() {
    $(this).toggleClass('active');
    $('.modal-content').toggle();
  });

  // Mapa Clicável
  $('.map iframe').on('click', function(e) {
    if (!($(this).attr('target') === '_blank')) {
      e.preventDefault();
      window.open($(this).attr('src'), '_blank');
    }
  });

  // Painel de Texto Toggle Clicável
  $('.text-board').on('click', function() {
    $(this).toggleClass('active');
  });

});
</script>