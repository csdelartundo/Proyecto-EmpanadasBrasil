<template>
    <footer class="footer bg-dark text-white p-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p>&copy; 2024 Empanadas Chilenas. Todos los derechos reservados.</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <a href="#" class="text-white me-3">Política de Privacidad</a>
                    <a href="#" class="text-white me-3">Términos de Servicio</a>
                    <a href="#" class="text-white me-3">Contacto</a>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col text-center">
                    <a href="#"><i class="fab fa-instagram fa-2x text-white me-4"></i></a>
                    <a href="#"><i class="fab fa-whatsapp fa-2x text-white"></i></a>
                </div>
            </div>
        </div>
    </footer>
</template>

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