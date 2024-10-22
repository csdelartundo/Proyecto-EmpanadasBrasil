<template>
    <div class="container">
        <h1>¿Quiénes Somos?</h1>
        <p>En El Chileno, nos especializamos en traer el auténtico sabor de las empanadas chilenas a Maceió, Alagoas.
            Con una combinación perfecta entre la tradición chilena y la frescura de los ingredientes brasileños,
            nuestras empanadas reflejan lo mejor de ambas culturas.

            Cristian, chileno, y Lúcy, brasileña, unimos nuestras pasiones para ofrecer una experiencia única, donde
            cada empanada es elaborada con dedicación y sabor auténtico. ¡Ven y descubre el verdadero sabor de Chile con
            un toque brasileño!</p>
        <h5>A continuación, te dejamos unos destinos imperdibles de Chile!</h5>
        <div class="collage">
            <div v-for="(item, index) in collageItems" :key="index" class="item">
                <img :src="item.image" :alt="item.title">
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
    margin-top: 20px;
}

.collage {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 10px;
    max-width: 800px;
    margin: 0 auto;
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
</style>
