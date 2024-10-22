<template>
    <div class="container">
        <h1>¿Quiénes Somos?</h1>
        <div class="text-center">
            <p>En <b>El Chileno</b>, fusionamos lo mejor de la tradición chilena y los ingredientes brasileños para ofrecer
                empanadas auténticas. ¡Cada bocado es una invitación a descubrir el
                verdadero sabor de Chile!</p>
        </div>

        <!-- Segunda fila con texto a la izquierda e imagen a la derecha -->
        <div class="about-section">
            <div class="text-section">
                <p><b>Cristian, chileno, y Lúcy, brasileña</b>, combinan sus pasiones para crear una experiencia única. Ven a
                    probar nuestras empanadas y descubre Chile a través de sus sabores, con un toque especial de Brasil.
                </p>
            </div>
            <div class="image">
                <img class="img-person" src="../assets/img/fotochileno2.png" alt="">
            </div>
        </div>

        <h5>A continuación, te mostramos algunos de los destinos imperdibles de Chile, para que sigas explorando su
            cultura y paisajes únicos.</h5>
        <div class="collage">
            <div v-for="(item, index) in collageItems" :key="index" class="item">
                <img :src="item.image" :alt="item.title">
                <div class="title-overlay">{{ item.title }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            collageItems: [
                {
                    image: require('../assets/img/valparaiso.jpg'),
                    title: 'Valparaiso'
                },
                {
                    image: require('../assets/img/fotovalleelqui.jpg'),
                    title: 'Valle del Elqui'
                },
                {
                    image: require('../assets/img/fotosietetazas.jpg'),
                    title: 'Parque Nacional Siete Tazas'
                },
                {
                    image: require('../assets/img/sanpedro2.jpg'),
                    title: 'San Pedro de Atacama'
                },
                {
                    image: require('../assets/img/templo.jpg'),
                    title: 'Templo Bahai'
                },
                {
                    image: require('../assets/img/fotoislapascua.jpg'),
                    title: 'Isla de Pascua'
                },
                {
                    image: require('../assets/img/fotochillan.jpg'),
                    title: 'Termas de Chillán'
                },
                {
                    image: require('../assets/img/fotopucon.jpg'),
                    title: 'Pucón'
                },
                {
                    image: require('../assets/img/fotosalto.jpg'),
                    title: 'Salto del Petrohué'
                },
                {
                    image: require('../assets/img/fototorres.jpg'),
                    title: 'Torres del Paine'
                },
                {
                    image: require('../assets/img/santiago.jpg'),
                    title: 'Santiago de Chile'
                }
            ]
        }
    }
}
</script>

<style scoped>
.container {
    text-align: center;
    margin-top: 100px;
    max-width: 800px;
    color: #463A2B;
}

.img-person {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 10px;
    object-fit: cover;
}

/* Flexbox para alinear texto a la izquierda e imagen a la derecha */
.about-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    gap: 20px;
}

.about-section .text-section {
    flex: 1;
    text-align: left;
}

.about-section .image {
    flex: 1;
    display: flex;
    justify-content: center;
}

/* Grilla de imágenes */
.collage {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 10px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 20px;
}

.collage .item {
    position: relative;
    overflow: hidden;
}

.collage .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    border-radius: 10px;
}

.collage .item img:hover {
    transform: scale(1.1);
    border-radius: 10px;
}

/* Personaliza el tamaño de algunas imágenes */
.collage .item:nth-child(1) {
    grid-column: span 2;
    grid-row: span 1;
}

.collage .item:nth-child(3) {
    grid-row: span 1;
}

.collage .item:nth-child(5) {
    grid-column: span 1;
}
/* Estilo para mostrar el título sobre la imagen */
.collage .item .title-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2); /* Fondo oscuro semi-transparente */
    color: white;
    padding: 10px;
    text-align: left;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 0 0 10px 10px;
    font-size: 20px;
}

.collage .item:hover .title-overlay {
    opacity: 1; /* Mostrar el título al hacer hover */
}
/* Estilos para móviles */
@media (max-width: 768px) {
    .collage .item .title-overlay {
        opacity: 1; /* Mantener el título visible en móviles */
        font-size: 12px; /* Ajustar el tamaño de la fuente si es necesario */
        color: white;
    }
    .about-section {
        flex-direction: column; /* Cambia la dirección a columna en móviles */
    }

    .about-section .text-section {
        text-align: center; /* Centra el texto en móviles */
    }

    .img-person {
        margin-bottom: 20px; /* Añade espacio entre la imagen y el texto en móviles */
    }
}
</style>