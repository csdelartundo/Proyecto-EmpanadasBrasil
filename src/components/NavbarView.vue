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
    height: 70px; /* Altura ajustada del navbar */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Contenedor del navbar */
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 2rem;
}

/* Estilos del logo */
.logo {
    width: 250px;
    height: auto;
    padding: 10px;
}

/* Estilos de los links del navbar */
ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
}

.link {
    color: white;
    text-decoration: none;
    font-size: 18px;
    position: relative;
}

.link::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: white;
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
