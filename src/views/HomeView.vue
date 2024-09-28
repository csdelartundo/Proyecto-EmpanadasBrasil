<template>
  <div class="herosection-container text-center d-flex flex-column justify-content-center align-items-center">
      <div class="row justify-content-center align-items-center w-100 position-relative">
          <div class="col-lg-2">
            <img class="logochile ps-5" src="@/assets/img/chilecanva1bg.png" alt="Mapa de Chile">
          </div>
          <div class="col-lg-5 text-center">
              <h1 class="mt-5 pt-5 text-white fw-bold">Empanadas Chilenas</h1>
              <p class="slogan text-warning">¡Auténtico sabor chileno en cada bocado!</p>
              <div>
                  <h4 class="mt-3 text-white fw-light">Disfruta de nuestras empanadas típicas, elaboradas con ingredientes
                      frescos y llenos de sabor.</h4>
                  <button class="btn btn-warning mt-2 text-white btn-hero">Ver Menú</button>
              </div>
              <img class="logohome" src="@/assets/img/huge-notbg.png" alt="Logo">
          </div>
          <div class="text-hero col-lg-5 text-center">
              <img class="img-herosection" src="../assets/img/fotohero.png" alt="imagen empanada">
          </div>
          
          
      </div>
  </div>
</template>

<style scoped>
.herosection-container {
  background: linear-gradient(to right, #38324A, #1C161D);

  padding: 20px;
  position: relative; /* Aseguramos que los elementos posicionados se refieran a este contenedor */
}

/* Efecto animado en el botón */
.btn-hero {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 25px;
  transition: background-color 0.4s ease, transform 0.4s ease;
}

.btn-hero:hover {
  background-color: #ffbb33;
  transform: scale(1.1);
}

/* Slogan atractivo */
.slogan {
  font-style: italic;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #ffd700;
  z-index: 2; /* Asegura que el slogan quede sobre la imagen */
}

.logohome {
  width: 400px;
  height: auto;
  margin-bottom: 2rem;
}

/* Para que la imagen ocupe más espacio */
.img-herosection {
  width: 80%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  filter: brightness(0.85) saturate(1.2);
  transition: transform 0.5s ease, filter 0.5s ease;
  box-shadow: 0 10px 20px rgba(239, 236, 236, 0.2);
  border-radius: 10px;
}

.img-herosection:hover {
  transform: scale(1.05);
  filter: brightness(1) saturate(1.5);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

/* Imagen de Chile, ocupa gran parte del contenedor */
.logochile {
  position: absolute;
  bottom: 0;      /* Posiciona la imagen en la parte inferior */
  left: -30px;    /* Mueve la imagen hacia la izquierda fuera del contenedor */
  height: 700px;   /* Mantiene la proporción de la imagen */
  opacity: 0.7;   /* Ajuste opcional de opacidad */
  z-index: 1;     /* Asegura que la imagen esté por detrás del texto */
}

</style>
