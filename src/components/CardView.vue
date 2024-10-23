<template>
    <div class="container">
        <h1 class="card-title">¡Conheça nossas variedades!</h1>
        <p class="card-subtitle">
            Desfrute das nossas deliciosas empanadas, com ingredientes 100% naturais, sem corantes artificiais, sem conservantes; teoria do baixo teor de sódio; teoria baixa da gordura saturada.
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
        <button @click="orderWhatsApp" class="floating-btn">Fazer pedido</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    title: "Empanada de Pinho",
                    description:
                        "Uma explosão de sabores tradicionais chilenos, recheada com suculenta carne bovina, cebola dourada, azeitonas e um pedaço de ovo cozido, tudo envolto em uma massa crocante e dourada. Um clássico irresistível que celebra a autenticidade!",
                    image: require('@/assets/img/empanada.jpg'),
                },
                {
                    title: "Empanada de Frango",
                    description:
                        "Uma deliciosa combinação de tenro frango desfiado, cebola temperada, azeitonas e um toque de tempero, tudo envolto em uma massa dourada assada. Cada mordida é um abraço de sabor caseiro e tradição!",
                    image: require('@/assets/img/emppollo.jpg'),
                },
                {
                    title: "Empanada de Palmito",
                    description:
                        "Uma experiência macia e cremosa, recheada com palmito fresco, queijo derretido e especiarias, envolta em uma massa dourada e crocante. Uma opção vegetariana cheia de sabor e textura que você não vai querer perder!",
                    image: require('@/assets/img/emppalmito.jpg'),
                },
            ],
        };
        
    },
    methods: {
        orderWhatsApp() {
            const whatsappNumber = "+5582981530022";
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Quero fazer um pedido.`;
            window.open(whatsappUrl, "_blank");
        },
    }
};
</script>

<style scoped>
.container {
    margin-top: 100px;
    text-align: center;
    max-width: 850px;
}

.card-title {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #ec4e20;
    font-weight: bold;
}

.card-subtitle {
    font-size: 1.2rem;
    color: #2C2B28;
    margin-bottom: 10px;
}

.card {
    position: relative;
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    background: white;
    box-shadow: 0px 1px 13px rgba(70, 58, 43, 0.3);
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
