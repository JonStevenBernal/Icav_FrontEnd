<template>
  <section class="section_main">
    <div class="section_main-image"></div>
    <div class="section_main-home">
      <h2>¡Bienvenido a ICAV!</h2>
      <p>
        En este sitio web está destinado para los funcionarios de la EPS UNEPS.
        Como funcionario puede crear una cuenta, iniciar sesión, cerrar sesión y
        eliminar su cuenta.
        <br />
        <br />
        Este aplicativo permite gestionar la información de los afiliados de la
        EPS. Así mismo, teniendo en cuenta el actual brote de enfermedad por
        coronavirus (COVID-19), la aplicación permite llevar un registro tanto
        de los contagios como de las vacunas aplicadas de los afiliados.
        <br />
      </p>
      <p v-if="!isAuth">
        Para acceder a estos servicios, por favor inicie sesión o cree una nueva
        cuenta.
      </p>
    </div>
  </section>
</template>

<script></script>

<style>
.section_main {
  width: 100%;
  height: auto;
  padding-top: 50px;
  padding-bottom: 30px;
  text-align: center;
}
.section_main-image {
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  margin-bottom: 50px;
  background-image: url("../assets/vertical.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.section_main-home {
  width: 90%;
  min-width: 288px;
  max-width: 900px;
  margin: 0 auto;
}
.section_main-home h2 {
  margin-bottom: 30px;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.6rem;
  color: var(--primary-color);
}
.section_main-home p {
  margin-bottom: 30px;
  font-size: 1.6rem;
  color: var(--black-letter);
}
</style>
