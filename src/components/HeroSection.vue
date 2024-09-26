<template>
    <div class="herosection-container text-center d-flex flex-column justify-content-center align-items-center">
        <div class="row justify-content-center align-items-center w-100">
            <div class="col-lg-6 text-center">
                <h1 class="mt-5 text-white">Empanadas Chilenas</h1>
                <p class="slogan text-warning">¡Auténtico sabor chileno en cada bocado!</p>
                <div>
                    <h4 class="mt-3 text-white">Disfruta de nuestras empanadas típicas, elaboradas con ingredientes
                        frescos y llenos de sabor.</h4>
                    <button class="btn btn-warning mt-5 text-white btn-hero">Ver Menú</button>
                </div>
                <img class="logo" src="@/assets/img/huge-notbg.png" alt="Logo">
            </div>
            <div class="text-hero col-lg-6 text-center">
                <img class="img-herosection" src="../assets/img/fotohero.png" alt="imagen empanada">
            </div>
        </div>
    </div>
</template>

<style scoped>
.herosection-container {
    padding-top: 100px; /* Espacio para evitar la superposición con el navbar */
    min-height: calc(100vh - 70px); /* Ajuste para que la sección ocupe al menos el viewport completo */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: linear-gradient(135deg, #1C161D, #38324A);
    padding: 2rem;
    /* overflow: hidden;  Eliminar esta línea para permitir el scroll */
}

/* Efecto animado en el botón */
.btn-hero {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    border-radius: 25px;
    transition: background-color 0.4s ease, transform 0.4s ease;
}

.btn-hero:hover {
    background-color: #ffbb33;
    transform: scale(1.1);
}

/* Slogan atractivo */
.slogan {
    font-style: italic;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: #ffd700;
}

/* Para que la imagen ocupe más espacio */
.img-herosection {
    width: 80%;
    max-width: 500px;
    height: auto;
    object-fit: cover;
    filter: brightness(0.85) saturate(1.2);
    transition: transform 0.5s ease, filter 0.5s ease;
    box-shadow: 0 10px 20px rgba(239, 236, 236, 0.2);
    border-radius: 10px;
}

.img-herosection:hover {
    transform: scale(1.05);
    filter: brightness(1) saturate(1.5);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}
</style>
