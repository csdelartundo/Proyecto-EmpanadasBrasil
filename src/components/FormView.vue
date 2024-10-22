<template>
    <div id="FormSection">
        <div class="container mt-5">
            <h1 class="text-center mb-4">Formulario de Contacto</h1>
            <form @submit.prevent="handleSubmit" class="needs-validation" novalidate ref="form">
                <div class="mb-3">
                    <label for="name" class="form-label">Nombre</label>
                    <input v-model="name" type="text" id="name" class="form-control" required />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input v-model="email" type="email" id="email" class="form-control" required />
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Mensaje</label>
                    <textarea v-model="message" id="message" rows="4" class="form-control" required></textarea>
                </div>
                <button type="submit" class="btn btn-form">Enviar</button>
            </form>

            <!-- Botón de WhatsApp independiente -->
            <div class="text-center mt-4">
                <button @click="sendWhatsAppMessage" class="btn btn-success">
                    Contactar por WhatsApp
                    <i class="fa-brands fa-whatsapp fa-lg" style="color: #fafafa;"></i>
                </button>
            </div>

            <!-- Modales-->
            <div class="modalSection mt-5 text-dark">
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
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-modal" @click="closeModal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal de error -->
                <div v-if="showErrorModal" class="modal fade show" style="display: block;" tabindex="-1"
                    aria-labelledby="errorModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="errorModalLabel">Error</h5>
                                <button type="button" class="btn-close" @click="closeErrorModal"></button>
                            </div>
                            <div class="modal-body p-3">
                                Por favor, completa todos los campos del formulario.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn-modal" @click="closeErrorModal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    data() {
        return {
            name: "",
            email: "",
            message: "",
            showModal: false,
            showErrorModal: false,
        };
    },
    methods: {
        handleSubmit() {
            if (!this.name || !this.email || !this.message) {
                this.showErrorModal = true;
            } else {
                this.sendEmail();  // Llama al método para enviar el email
                this.showModal = true;  // Muestra el modal de éxito
                // Limpiar los campos del formulario
                this.name = "";
                this.email = "";
                this.message = "";
            }
        },
        closeModal() {
            this.showModal = false;
        },
        closeErrorModal() {
            this.showErrorModal = false;
        },
        sendWhatsAppMessage() {
            const whatsappNumber = "+5582981530022";
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola! Me gustaría hacer una consulta.`;
            window.open(whatsappUrl, "_blank");
        },
        sendEmail() {
            const templateParams = {
                name: this.name,
                email: this.email,
                message: this.message,
            };
            emailjs.send('service_1sxiwfl', 'template_rrsq69h', templateParams, 'oL6wTfkqW7PSSHKm_')
                .then(() => {
                    console.log('SUCCESS!');
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        },
    },
}
</script>


<style scoped>
#FormSection {
    background-image: url(../assets/img/patagonia.jpg);
    background-size: cover;
    position: relative;
    z-index: 1;
    padding: 50px 0;
    height: 900px;
}

#FormSection::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
}

.container {
    padding: 50px;
    max-width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: white;
    position: relative;
    z-index: 2;
}

.modal-dialog {
    margin-top: 150px;
}

.modal-backdrop {
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
}

.btn-form {
    background-color: #016fb9;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

.btn-modal {
    background-color: #ec4e20;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>
