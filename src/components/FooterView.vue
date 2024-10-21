<template>
    <footer class="footer bg-dark text-white p-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p>&copy; 2024 El Chileno. Todos los derechos reservados.</p>
                </div>
                <div class="col-md-6 text-center">
                    <a @click="toInstagram"><i class="fab fa-instagram fa-2x text-white me-4"></i></a>
                    <a @click="toWhatsapp"><i class="fab fa-whatsapp fa-2x text-white"></i></a>
                </div>
                
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    methods: {
        toInstagram() {
            window.open('https://www.instagram.com/el.chileno.tematico/', '_blank');
        },
        toWhatsapp() {
            window.open('https://wa.me/5582981530022', '_blank');
        }
    }
}
</script>
<style scoped>
.footer {
    background-color: #353531;
}

.footer a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
}

.footer a:hover {
    color: #ffbb33;
}

.footer i {
    transition: transform 0.3s ease;
}

.footer i:hover {
    transform: scale(1.2);
}
</style>