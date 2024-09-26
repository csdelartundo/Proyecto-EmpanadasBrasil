<template>
    <div class="container-fluid text-center d-flex flex-column justify-content-center align-items-center vh-100 position-relative">
        <div class="row justify-content-center align-items-center w-100">
            <div class="col-lg-6 text-center">
                <img class="img-herosection" src="../assets/img/imagenempanadapint.jpg" alt="imagen empanada">
                <h1 class="display-4 text-white mt-4">Empanadas Chilenas</h1>
                <p class="lead text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis molestias ullam quia totam vel eum minus cum possimus ea nostrum labore ad optio illo, eligendi in quibusdam magnam fugit.</p>
                <a href="#" class="btn btn-warning btn-lg">Hacer Pedido</a>
            </div>
        </div>
        <div class="svg-container position-absolute bottom-0 w-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,192L80,170.7C160,149,320,107,480,101.3C640,96,800,128,960,154.7C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
    </div>
</template>



<style>
.container-fluid {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.img-herosection {
    width: 50%;
    max-width: 300px;
    object-fit: cover;
    filter: brightness(0.8);
    border-radius: 50%;
}

.svg-container {
    position: absolute;
    bottom: 0;
    width: 100%;
}


</style>
