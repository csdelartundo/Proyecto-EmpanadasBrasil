<template>
    <div class="container-origin text-center">
        <h1>¿Quienes Somos?</h1>
        <p>En El Chileno, nos especializamos en traer el auténtico sabor de las empanadas chilenas a Maceió, Alagoas.
            Con una combinación perfecta entre la tradición chilena y la frescura de los ingredientes brasileños,
            nuestras empanadas reflejan lo mejor de ambas culturas.

            Cristian, chileno, y Lúcy, brasileña, unimos nuestras pasiones para ofrecer una experiencia única, donde
            cada empanada es elaborada con dedicación y sabor auténtico. ¡Ven y descubre el verdadero sabor de Chile con
            un toque brasileño!</p>
    </div>
    <div class="carousel-container d-flex justify-content-center align-items-center">
        <div id="carouselExampleCaptions" class="carousel slide w-75">
            <!-- Indicadores dinámicos -->
            <div class="carousel-indicators">
                <button 
                    v-for="(slide, index) in slides" 
                    :key="'indicator-' + index" 
                    :class="{'active': index === activeIndex}" 
                    :data-bs-target="'#carouselExampleCaptions'" 
                    :data-bs-slide-to="index" 
                    aria-current="true" 
                    :aria-label="'Slide ' + (index + 1)">
                </button>
            </div>

            <!-- Carrusel dinámico con v-for -->
            <div class="carousel-inner">
                <div 
                    v-for="(slide, index) in slides" 
                    :key="'slide-' + index" 
                    :class="['carousel-item', { active: index === activeIndex }]">
                    <img :src="slide.image" class="d-block w-100" alt="Imagen de empanada">
                    <div class="carousel-caption d-block">
                        <h5>{{ slide.title }}</h5>
                        <p>{{ slide.description }}</p>
                    </div>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" @click="prevSlide">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" @click="nextSlide">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 0,
            slides: [
                {
                    image: require('../assets/img/empanada.jpg'),
                    title: 'Empanada Tradicional',
                    description: 'Empanada chilena tradicional con carne y cebolla.',
                },
                {
                    image: require('../assets/img/empanada.jpg'),
                    title: 'Empanada de Mariscos',
                    description: 'Deliciosa empanada rellena de mariscos frescos.',
                },
                {
                    image: require('../assets/img/empanada.jpg'),
                    title: 'Empanada de Queso',
                    description: 'Empanada con relleno de queso derretido.',
                },
            ],
        };
    },
    methods: {
        nextSlide() {
            this.activeIndex = (this.activeIndex + 1) % this.slides.length;
        },
        prevSlide() {
            this.activeIndex = (this.activeIndex - 1 + this.slides.length) % this.slides.length;
        },
    },
};
</script>

<style scoped>
.container-origin {
    background-color: #1C161D;
    padding: 20px;
    color: white;
}

.carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
}

.carousel-inner img {
    height: 400px;
    object-fit: cover;
}

.carousel-caption {
    background: rgba(0, 0, 0, 0.6);
    padding: 1rem;
    border-radius: 10px;
}

.carousel-caption h5,
.carousel-caption p {
    color: white;
}
</style>
