<template>
    <div class="container">
        <h1 class="card-title">Conoce nuestras variedades!</h1>
        <p class="card-subtitle">
            Disfruta nuestras deliciosas empanadas, sin colorantes artificiales e
            ingredientes cuidadosamente seleccionados.
        </p>
        <div class="row">
            <div v-for="(item, index) in cards" :key="index"
                class="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                <div class="card">
                    <div class="image-box">
                        <img :src="item.image" :alt="item.title" class="card-img-top" />
                    </div>
                    <div class="content d-flex flex-column justify-content-center align-items-center p-3">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>    
                    </div>
                </div>
            </div>
        </div>
        <button @click="orderWhatsApp" class="floating-btn">Hacer pedido</button>
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
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non pulvinar nisi, at ultricies felis.",
                    image: require('@/assets/img/empanada.jpg'),
                },
                {
                    title: "Empanada de Pollo",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non pulvinar nisi, at ultricies felis.",
                    image: require('@/assets/img/emppollo.jpg'),
                },
                {
                    title: "Empanada de Palmito",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non pulvinar nisi, at ultricies felis.",
                    image: require('@/assets/img/emppalmito.jpg'),
                },
            ],
        };
        
    },
    methods: {
        orderWhatsApp() {
            const whatsappNumber = "+5582981530022";
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola! Quiero hacer un pedido.`;
            window.open(whatsappUrl, "_blank");
        },
    }
};
</script>

<style scoped>
.container {
    margin-top: 100px;
    text-align: center;
    max-width: 900px;
}

.card-title {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #ec4e20;
    font-weight: bold;
}

.card-subtitle {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 10px;
}

.card {
    position: relative;
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    background: white;
    box-shadow: 0px 1px 13px rgba(236, 78, 32, 0.3);
    padding: 0.5em;
    transition: all 120ms ease-in-out;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.image-box {
    width: 100%;
    height: 200px;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.content {
    padding: 15px;
    text-align: center;
    flex-grow: 1;
}

/* Botón centrado debajo de las tarjetas */
.floating-btn {
    background-color: #ff9505;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: 1.25rem;
    margin-top: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    display: inline-block;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.floating-btn:hover {
    background-color: #ff7f05;
    transform: scale(1.05);
}
</style>
