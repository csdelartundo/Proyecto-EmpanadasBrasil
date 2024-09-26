<template>
    <div class="container">
        <div class="card">
            <div class="image-box">
                <img src="../assets/img/tablaempanada.png" alt="...">
            </div>
            <div class="content">
                <h3>Disfruta de nuestras 3 variedades!</h3>
                <p>Con ingredientes naturales, sin colorantes artificiales</p>
                <a href="#" class="btn btn-warning btn-sm">Hacer Pedido</a>
            </div>
        </div>
    </div>

</template>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
    padding: 20px;
    margin-top: 20px;
}

.card {
    width: 500px;
    aspect-ratio: 1 / 0.7;
    border-radius: 8px;
    position: relative;
    height: 300px;
    cursor: pointer;
}

.card .image-box {
    width: 100%;
    height: 100%;
    border-radius: inherit;
}

.card .image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 90%;
    border-radius: inherit;
    transition: 0.5s ease-in-out;
}

.card::after {
    content: "";
    position: absolute;
    inset: 0;
    border: 2px solid white;
    border-radius: inherit;
    opacity: 0;
    transition: 0.4s ease-in-out;
}

.card:hover img {
    filter: grayscale(1) brightness(0.4);
}

.card:hover::after {
    opacity: 1;
    inset: 20px;
}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.card:hover .content {
    opacity: 1;
    /* Muestra el contenido cuando se hace hover */
}
</style>
