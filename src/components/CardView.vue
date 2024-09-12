<template>
    <div class="card" style="width: 18rem;">
        <img :src="{}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">

            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CardComponent',
    data() {
        return [
            {
                producto: "Empanada de Pino",
                imagen: "",
                descripcion: "rica empanada de pino"
            },
            {
                producto: "Empanada de Pollo",
                imagen: "",
                descripcion: "rica empanada de pino"
            },
            {
                producto: "Empanada de Palmito",
                imagen: "",
                descripcion: "rica empanada de pino"
            }
        ]
    }
}
</script>