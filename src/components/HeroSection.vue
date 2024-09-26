<template>
    <div class="herosection-container text-center d-flex flex-column justify-content-center align-items-center">
        <div class="row justify-content-center align-items-center w-100">
            <div class="col-lg-6 text-center">
                <img class="img-herosection" src="../assets/img/imagenempanadapint.jpg" alt="imagen empanada">
            </div>
            <div class="text-hero col-lg-6 text-center">
                <h1 class="display-4 mt-4">Empanadas Chilenas</h1>
                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis
                    molestias ullam quia totam vel eum minus cum possimus ea nostrum labore ad optio illo, eligendi in
                    quibusdam magnam fugit.</p>
                <a href="#" class="btn btn-warning btn-lg">Hacer Pedido</a>
            </div>
        </div>
    </div>
</template>


<style>
.herosection-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #ecdfef;
}

.img-herosection {
    width: 50%;
    max-width: 300px;
    object-fit: cover;
    filter: brightness(0.8);
    border-radius: 50%;
}
</style>
