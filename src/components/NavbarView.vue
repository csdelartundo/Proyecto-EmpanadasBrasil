<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img class="logo" src="@/assets/img/elchileno-removebg-preview.png" alt="Logo" />
            </a>
            <button
                class="navbar-toggler"
                type="button"
                @click="isMenuOpen = !isMenuOpen" 
                aria-controls="navbarNav"
                aria-expanded="isMenuOpen"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Menu items -->
            <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" @click="closeMenu">
                        <router-link class="nav-link" to="/">Inicio</router-link>
                    </li>
                    <li class="nav-item" @click="closeMenu">
                        <router-link class="nav-link" to="/productos">Productos</router-link>
                    </li>
                    <li class="nav-item" @click="closeMenu">
                        <router-link class="nav-link" to="/origen">Nuestro Origen</router-link>
                    </li>
                    <li class="nav-item" @click="closeMenu">
                        <router-link class="nav-link" to="/contacto">Contacto</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false, // Controlamos el estado del menú
        };
    },
    methods: {
        closeMenu() {
            this.isMenuOpen = false; // Cierra el menú cuando se selecciona una opción
        },
    },
};
</script>



<style scoped>
.logo {
    width: 200px;
    height: auto;
}

/* Aseguramos que el navbar esté fijo en la parte superior */
.navbar {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.collapse.show {
    display: block !important;
}

</style>
