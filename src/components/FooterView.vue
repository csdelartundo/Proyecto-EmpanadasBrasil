<template>
    <footer class="footer bg-dark text-white p-4">
        <div class="footer-container">
            <div class="footer-left">
                <p>&copy; 2024 El Chileno. Todos os direitos reservados.</p>
            </div>
            <div class="footer-right">
                <a @click="toInstagram"><i class="fab fa-instagram fa-2x text-white me-4"></i></a>
                <a @click="toWhatsapp"><i class="fab fa-whatsapp fa-2x text-white"></i></a>
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
    padding: 20px;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px; 
    margin: 0 auto; 
    width: 100%; 
}

.footer-left {
    flex: 1;
}

.footer-right {
    display: flex;
    justify-content: center;
    gap: 20px;
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