<template>
    <div class="container-carousel">
        <h1>¿Quienes Somos?</h1>
        <p>En El Chileno, nos especializamos en traer el auténtico sabor de las empanadas chilenas a Maceió, Alagoas.
            Con una combinación perfecta entre la tradición chilena y la frescura de los ingredientes brasileños,
            nuestras empanadas reflejan lo mejor de ambas culturas.

            Cristian, chileno, y Lúcy, brasileña, unimos nuestras pasiones para ofrecer una experiencia única, donde
            cada empanada es elaborada con dedicación y sabor auténtico. ¡Ven y descubre el verdadero sabor de Chile con
            un toque brasileño!</p>
            <h5>A continuacion, te dejamos unos destinos imperdibles de Chile!</h5>
    </div>
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div v-for="(item, index) in carouselItems" :key="index"
                :class="['carousel-item', { active: index === 0 }]">
                <img :src="item.image" class="d-block w-100 img-fluid" :alt="item.title">
                <div class="carousel-caption d-none d-md-block">
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.description }}</p>
                </div>
                <div class="carousel-caption-below">
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            carouselItems: [
                {
                    image: require('../assets/img/fotosanpedro.jpg'),
                    title: 'San Pedro de Atacama',
                    description: 'Descripción 1'
                },
                {
                    image: require('../assets/img/fotovalleelqui.jpg'),
                    title: 'Valle del Elqui',
                    description: 'Descripción 2'
                },
                {
                    image: require('../assets/img/fotosietetazas.jpg'),
                    title: 'Parque Nacional Siete Tazas',
                    description: 'Descripción 3'
                },
                {
                    image: require('../assets/img/fotoislapascua.jpg'),
                    title: 'Isla de Pascua',
                    description: 'Descripción 3'
                },
                {
                    image: require('../assets/img/fotochillan.jpg'),
                    title: 'Termas de Chillán',
                    description: 'Descripción 3'
                },
                {
                    image: require('../assets/img/fotopucon.jpg'),
                    title: 'Pucon',
                    description: 'Descripción 3'
                },
                {
                    image: require('../assets/img/fotosalto.jpg'),
                    title: 'Salto del Petrohue',
                    description: 'Descripción 3'
                },
                {
                    image: require('../assets/img/fototorres.jpg'),
                    title: 'Torres del Paine',
                    description: 'Descripción 3'
                },
            ]
        }
    }
}
</script>

<style scoped>
/* Centrar el carrusel en la pantalla */
.container-carousel {
    text-align: center;
    padding-top: 100px;
    color: #fff;
}

#carouselExample {
    width: 60%;
    margin: 0 auto;
}

/* Asegurarse de que las imágenes ocupen el 100% del ancho del carrusel y mantener calidad */
.carousel-item img {
    width: 100%;
    height: 500px;
    object-fit: cover; /* Asegura que las imágenes cubran el área sin distorsión */
}

/* Texto superpuesto sobre la imagen (pantallas grandes) */
.carousel-caption {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
    color: #fff;
}

/* Texto debajo de la imagen (oculto en pantallas grandes) */
.carousel-caption-below {
    display: none;
}

/* Media query para dispositivos móviles */
@media (max-width: 768px) {
    /* Carrusel ocupa todo el ancho en móviles */
    #carouselExample {
        width: 100%;
    }

    /* Ajusta la altura de la imagen en móviles */
    .carousel-item img {
        height: 300px;
        object-fit: cover;
    }

    /* Esconder el texto superpuesto en móviles */
    .carousel-caption {
        display: none;
    }

    /* Mostrar el texto debajo de la imagen en móviles */
    .carousel-caption-below {
        display: block;
        text-align: center;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        border-radius: 5px;
        margin-top: 10px;
    }
}
</style>
