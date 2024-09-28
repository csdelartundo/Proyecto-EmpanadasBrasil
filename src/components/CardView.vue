<template>
    <div class="container">
        <h1 class="card-title">Conoce nuestras variedades!</h1>
        <p class="card-subtitle">
            Disfruta nuestras deliciosas empanadas, sin colorantes artificiales e
            ingredientes cuidadosamente seleccionados.
        </p>
        <div class="row">
            <div v-for="(item, index) in cards" :key="index" class="col-12 col-md-6 col-lg-4 mb-4 d-flex">
                <div class="card">
                    <div class="image-box">
                        <img :src="item.image" :alt="item.title" class="card-img-top" />
                    </div>
                    <div class="content d-flex flex-column justify-content-center align-items-center p-3">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                        <a href="#" class="btn btn-warning btn-md mt-auto">Hacer Pedido</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    title: "Empanada de Pino",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non pulvinar nisi, at ultricies felis. Donec vel velit at mauris elementum pellentesque.",
                    image: require('@/assets/img/empanada.jpg'),
                },
                {
                    title: "Empanada de Pollo",
                    description:
                        "Sed vel ligula vel justo iaculis aliquet. Sed vel dolor non urna sodales lobortis. Sed convallis, dolor vitae commodo consectetur, metus diam ultrices lectus.",
                    image: require('@/assets/img/emppollo.jpg'),
                },
                {
                    title: "Empanada de Palmito",
                    description:
                        "Proin vel ante non ligula facilisis consectetur. Nulla facilisi. Sed convallis, dolor vitae commodo consectetur, metus diam ultrices lectus.",
                    image: require('@/assets/img/emppalmito.jpg'),
                },
            ],
        };
    },
};
</script>

<style scoped>
.container {
    background-color: #46434e;
    padding: 50px;
}

.card-title {
    color: white;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 40px;
}

.card-subtitle {
    color: white;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 20px;
}

.card {
    border-radius: 8px;
    overflow: hidden;
    flex-grow: 1;
    background-color: #1C161D;
    transition: transform 0.3s ease-in-out; /* Animación suave para el escalado */
}

/* Escala levemente más pequeña en pantallas grandes */
@media (min-width: 992px) {
    .card {
        transform: scale(0.9); /* Reduce levemente el tamaño en pantallas grandes */
        max-width: 450px; /* Limita el ancho en pantallas grandes */
    }
}

/* En pantallas pequeñas, el tamaño es 100% del contenedor */
@media (max-width: 991px) {
    .card {
        width: 100%; /* Ocupa todo el ancho en pantallas pequeñas */
    }
}

.image-box img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: 0.5s ease-in-out;
}

.content {
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.content h3 {
    margin-bottom: 10px;
}

.content p {
    margin-bottom: 20px;
}
</style>
