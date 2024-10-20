<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Formulario de Contacto</h1>

        <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
            <div class="mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input v-model="name" type="text" id="name" class="form-control" required />
                <div class="invalid-feedback">Por favor, ingresa tu nombre.</div>
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="email" type="email" id="email" class="form-control" required />
                <div class="invalid-feedback">Por favor, ingresa un correo electrónico válido.</div>
            </div>

            <div class="mb-3">
                <label for="message" class="form-label">Mensaje</label>
                <textarea v-model="message" id="message" rows="4" class="form-control" required></textarea>
                <div class="invalid-feedback">Por favor, ingresa un mensaje.</div>
            </div>

            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>

        <!-- Botón de WhatsApp independiente -->
        <div class="text-center mt-4">
            <button @click="sendWhatsAppMessage" class="btn btn-success">
                Contactar por WhatsApp
            </button>
        </div>

        <!-- Modal de éxito -->
        <div v-if="showModal" class="modal fade show" style="display: block;" tabindex="-1"
            aria-labelledby="successModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="successModalLabel">Formulario enviado</h5>
                        <button type="button" class="btn-close" @click="closeModal"></button>
                    </div>
                    <div class="modal-body">
                        ¡Formulario enviado con éxito!<br />
                        Nombre: {{ name }}<br />
                        Email: {{ email }}<br />
                        Mensaje: {{ message }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="closeModal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal de error (falta completar campos) -->
        <div v-if="showErrorModal" class="modal fade show" style="display: block;" tabindex="-1"
            aria-labelledby="errorModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="errorModalLabel">Error</h5>
                        <button type="button" class="btn-close" @click="closeErrorModal"></button>
                    </div>
                    <div class="modal-body">
                        Por favor, completa todos los campos del formulario.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" @click="closeErrorModal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Background overlay to simulate Bootstrap's modal backdrop -->
        <div v-if="showModal || showErrorModal" class="modal-backdrop fade show"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            message: "",
            showModal: false,      // Controla el modal de éxito
            showErrorModal: false, // Controla el modal de error
        };
    },
    methods: {
        // Manejar el envío del formulario
        handleSubmit() {
            if (!this.name || !this.email || !this.message) {
                // Mostrar el modal de error si faltan campos
                this.showErrorModal = true;
            } else {
                // Mostrar el modal de éxito cuando el formulario se envía correctamente
                this.showModal = true;
            }
        },
        // Cerrar el modal de éxito
        closeModal() {
            this.showModal = false;
        },
        // Cerrar el modal de error
        closeErrorModal() {
            this.showErrorModal = false;
        },
        // Enviar mensaje de WhatsApp independiente del formulario
        sendWhatsAppMessage() {
            const whatsappNumber = "+5582981530022"; // Número de WhatsApp proporcionado
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola! Me gustaría hacer una consulta.`;
            window.open(whatsappUrl, "_blank");
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 600px;
    padding: 50px;
}

.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1040;
}

.modal {
    z-index: 1050;
    display: block;
    /* Necesario para que funcione con v-if */
}
</style>
