<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
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
                        <router-link class="nav-link" to="/">Início</router-link>
                    </li>
                    <li class="nav-item" @click="closeMenu">
                        <router-link class="nav-link" to="/productos">Produtos</router-link>
                    </li>
                    <li class="nav-item" @click="closeMenu">
                        <router-link class="nav-link" to="/origen">Nossa Origem</router-link>
                    </li>
                    <li class="nav-item" @click="closeMenu">
                        <router-link class="nav-link" to="/contacto">Contato</router-link>
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
            isMenuOpen: false, 
        };
    },
    methods: {
        closeMenu() {
            this.isMenuOpen = false; 
        },
    },
};
</script>

<style scoped>
.logo {
    width: 200px;
    height: auto;
}

.navbar {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #2C2B28;
}

.collapse.show {
    display: block !important;
}

.nav-link {
    color: #ffffff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    position: relative;
    transition: color 0.3s ease;
}

.nav-link::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #F18B19; 
    transition: width 0.3s;
    position: absolute;
    left: 0;
    bottom: 0;
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link:hover {
    color: #F18B19;
}
.container {
    max-width: 800px;
}
</style>

