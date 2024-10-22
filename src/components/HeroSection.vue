<template>
    <div id="heroSection">
        <div class="container text-center d-flex flex-column justify-content-center align-items-center">
            <div class="row justify-content-center align-items-center w-100 position-relative">
                <div class="col-md-8 text-center">
                    <h1 class="mt-5 pt-5 text-white fw-bold">Empanadas Chilenas</h1>
                    <p class="slogan">¡Auténtico sabor chileno en cada bocado!</p>
                    <h4 class="mt-3 text-white fw-light">
                        Disfruta de nuestras empanadas típicas, elaboradas con ingredientes frescos y llenos de sabor.
                    </h4>
                    <div class="image-button-wrapper d-flex flex-column align-items-center mt-4">
                        <button @click="toOrder" type="button" class="btn-hero">Ver el menú</button>
                        <img class="logohome" src="@/assets/img/huge-notbg.png" alt="Logo">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toOrder() {
            this.$router.push('/productos');
        }
    }
}
</script>


<style scoped>
#heroSection {
    position: relative;
    background-image: url('../assets/img/tabla-mpanadas.jpg');
    background-size: cover;
    background-position: center;
    height: auto;
    padding: 50px;
}

#heroSection::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
}

#heroSection .container {
    position: relative;
    z-index: 2;
    color: white;
    text-align: center;
    padding: 2rem;
}
.slogan{
    color: #D6BCA8;
    font-size: 20px;
}

.image-button-wrapper {
    z-index: 2;
    position: relative;
}

.logohome {
    width: 300px;
    height: auto;
    
}

/* Estilos del botón */
.btn-hero {
    font-size: 1.25rem;
    padding: 0.75rem 2rem;
    border-radius: 30px;
    background-color: #F18B19;
    color: white;
}

.btn-hero:hover {
    background-color: #ff6e00;
    transform: scale(1.05);

}

@media (max-width: 768px) {
    .logohome {
        width: 250px;
    }

    .btn-warning {
        font-size: 1rem;
        padding: 0.5rem 1.5rem;
    }
}
</style>
