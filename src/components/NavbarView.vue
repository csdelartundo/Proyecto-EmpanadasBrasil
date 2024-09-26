<template>
  <nav>
    <div class="container">
      <a href="#">
        <img class="logo" src="@/assets/img/elchileno-removebg-preview.png" alt="Logo">
      </a>
      <ul>
        <li><a href="#" class="link">Inicio</a></li>
        <li><a href="#" class="link">Productos</a></li>
        <li><a href="#" class="link">Nuestro Origen</a></li>
        <li><a href="#" class="link">Contacto</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>


nav {
  background: #1C161D;
  height: 100vh; /* El navbar ocupará toda la altura de la pantalla */
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center;     /* Centra verticalmente */
}

/* Contenedor principal */
.container {
  display: flex;
  flex-direction: column; /* Coloca el logo arriba y los links abajo */
  justify-content: center; /* Asegura que todo esté centrado verticalmente */
  align-items: center;     /* Alinea horizontalmente */
  gap: 1.5rem;             /* Espacio entre el logo y los links */
}

/* Estilos del logo */
.logo {
  width: 300px; /* Tamaño del logo */
  height: auto;
}

/* Estilos de los links */
ul {
  display: flex;
  justify-content: center; /* Centra los links */
  gap: 2rem; /* Espacio entre los links */
  list-style: none;
  padding: 0;
  margin: 0;
}

.link {
  color: white; /* Cambia el color de los links para que sean visibles */
  text-decoration: none;
  font-size: 20px;
  position: relative;
}

.link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: white; /* Subrayado blanco */
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s ease;
}

.link:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}
</style>