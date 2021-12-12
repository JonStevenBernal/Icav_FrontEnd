<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
  </head>
  <header class="header">
    <div class="header_section">
      <div class="header_section-item" v-on:click="loadInicio">
        <figure class="item_figure">
          <img src="./assets/logoIcav.png" alt="logo Icav" />
        </figure>
        <div class="item_title">
          <h1 class="">Icav<br />EPS</h1>
          <div></div>
          <p>Estrategia de vacunación <br />COVID-19</p>
        </div>
      </div>
      <figure class="header_section_buton" v-on:click="toggleShowNav">
        <img class="" src="./assets/icons8-menu_rounded.svg" alt="Menu" />
      </figure>
    </div>
    <nav class="nav animate__animated animate__fadeInDown" v-show="showNav">
      <ul class="nav_section">
        <li class="" v-if="!is_auth" v-on:click="loadInicio">Inicio</li>
        <li class="" v-if="is_auth" v-on:click="loadMostrar">
          Mostrar Afiliados
        </li>
        <li class="" v-if="is_auth" v-on:click="loadCrearAfiliado">
          Crear Afiliado
        </li>
        <li class="" v-if="is_auth" v-on:click="loadBuscarAfiliado">
          Buscar Afiliado
        </li>
        <li class="" v-if="is_auth" v-on:click="loadPerfil">
          Perfil
        </li>
        <!-- <li class="" v-if="is_auth" v-on:click="loadEliminarCuenta">
          Eliminar cuenta
        </li> -->
        <li class="" v-if="!is_auth" v-on:click="loadCrearNuevoUsuario">
          Crear nueva cuenta
        </li>
        <li class="" v-if="!is_auth" v-on:click="loadIniciarSesion">
          Iniciar Sesión
        </li>
        <li class="" v-if="is_auth" v-on:click="logOut">
          Cerrar Sesión
        </li>
      </ul>
    </nav>
  </header>
  <main class="main-component">
    <router-view
      v-on:completedSignUp="completedSignUp"
      v-on:completedLogIn="completedLogIn"
      v-on:logOut="logOut"
      v-on:completedModificarCorreo="completedModificarCorreo"
      v-on:completedCrearSeguimiento="completedCrearSeguimiento"
      v-on:completedCrearNuevoUsuario="completedCrearNuevoUsuario"
      v-on:completedCerrarSesion="completedCerrarSesion"
      v-on:completedEliminarUsuario="completedEliminarUsuario"
    >
    </router-view>
  </main>
  <px-footer />
</template>

<script>
//import PxHeader from "./components/PxHeader.vue";
import PxFooter from "./components/PxFooter.vue";
export default {
  name: "App",
  components: { PxFooter },
  data: function() {
    //inicializar variables dentro de este componente
    return {
      showNav: false,
      is_auth: false,
    };
  },

  methods: {
    //funciones js que voy a utilizar dentro del componente
    toggleShowNav: function() {
      if (this.showNav == true) this.showNav = false;
      else this.showNav = true;
    },
    verifyAuth: function() {
      this.is_auth = localStorage.getItem("isAuth") || false;
      if (this.is_auth == false) this.$router.push({ name: "IniciarSesion" });
      else this.$router.push({ name: "Instrucciones" });
    },

    // verificarAutenticacion: function() {
    //   console.log(localStorage.getItem("isAuth"));
    //   if (localStorage.getItem("isAuth") == "true") {
    //     this.isAuth = true;
    //     console.log("true");
    //     console.log(this.isAuth);
    //   } else {
    //     this.isAuth = false;
    //     console.log("false");
    //     console.log(this.isAuth);
    //   }
    // },
    loadInicio: function() {
      this.$router.push({ name: "Instrucciones" });
    },

    loadMostrar: function() {
      this.$router.push({ name: "MostrarAfiliados" });
    },

    loadIniciarSesion: function() {
      this.$router.push({ name: "IniciarSesion" });
    },

    loadCerrarSesion: function() {
      this.$router.push({ name: "CerrarSesion" });
    },

    loadEliminarCuenta: function() {
      this.$router.push({ name: "EliminarCuenta" });
    },

    loadCrearNuevoUsuario: function() {
      this.$router.push({ name: "CrearNuevoUsuario" });
    },

    completedSignUp: function(data) {
      alert("¡Registro de usuario exitoso!");
      this.completedLogIn(data);
    },

    completedLogIn: function(data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("tokenAccess", data.token_access);
      localStorage.setItem("tokenRefresh", data.token_refresh);
      alert("Autenticación exitosa");
      this.verifyAuth();
    },

    logOut: function() {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    },

    loadPerfil: function() {
      this.$router.push({ name: "Perfil" });
    },
    loadCrearAfiliado: function() {
      this.$router.push({ name: "CrearAfiliado" });
    },
    loadBuscarAfiliado: function() {
      this.$router.push({ name: "BuscarAfiliado" });
    },

    completedModificarCorreo: function() {
      alert("Modificación de correo exitosa");
      this.$router.push({ name: "Instrucciones" });
    },

    // completedCrearSeguimiento: function() {
    //   alert("Creación de seguimiento exitosa");
    //   this.$router.push({ name: "Instrucciones" });
    // },
    // completedCrearRegistro: function() {
    //   alert("Creación de registro exitosa ");
    //   this.$router.push({ name: "CrearSeguimiento" });
    // },
    // completedLogIn: function() {
    //   alert("Autenticación exitosa");
    //   this.$router.push({ name: "Instrucciones" });
    //   this.verificarAutenticacion();
    // },

    // completedSignUp: function(data) {
    //   alert("Creación de cuenta exitosa. Por favor inicie sesión");
    //   this.$router.push({ name: "IniciarSesion" });
    // },

    // completedCerrarSesion: function() {
    //   alert("Sesión cerrada correctamente");
    //   this.$router.push({ name: "Instrucciones" });
    //   this.verificarAutenticacion();
    // },

    completedEliminarUsuario: function() {
      alert("Usuario eliminado correctamente. Sesión cerrada");
      this.logOut();
    },
  },

  created: function() {
    //función que se ejecuta al crear el componente
    this.verifyAuth();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Open+Sans:wght@300;400;500;600&display=swap");
:root {
  --primary-color: #218dc9;
  --secunda-color: #20313b;
  --white-color: #ffffff;
  --off-white: #faf8f7;
  --red-color: #d86423;
  --black-letter: #3c4245;
  --d-flex: flex;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
  font-family: "DM Sans", sans-serif;
  font-family: "Open Sans", sans-serif;
  /* scroll behavior se refiere a una forma animada a la hora de hacer click en eun enlace y este se desplace */
  scroll-behavior: smooth;
}

.header {
  width: 100vw;
  background: linear-gradient(#135e9b, #1a78c1);
}
.HEADER-Logged_Class {
  /* position: absolute; */
  /* width: 1600px; */
  width: 100vw;
  height: 159px;
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
  --web-view-name: HEADER-Logged;
  --web-view-id: HEADER-Logged;
  --web-enable-deep-linking: true;
}
.HeaderLogged_Class {
  position: absolute;
  width: 1600px;
  height: 160px;
  left: 0px;
  top: 0px;
  overflow: visible;
}
.BreadcrumLogged_Class {
  position: absolute;
  width: 1600px;
  height: 80px;
  left: 0px;
  top: 80px;
  overflow: visible;
}
.BGBreadcrum_gg_Class {
  fill: url(#BGBreadcrum_gg);
}
.BGBreadcrum_gg {
  mix-blend-mode: multiply;
  overflow: visible;
  position: absolute;
  width: 1600px;
  height: 80px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.WelcomeText_Class {
  position: absolute;
  width: 278px;
  height: 45px;
  left: 29px;
  top: 20px;
  overflow: visible;
}
.Funcionario_de_EPS_gi_Class {
  left: 0px;
  top: 0px;
  position: absolute;
  overflow: visible;
  width: 192px;
  white-space: nowrap;
  line-height: 24px;
  margin-top: -1px;
  text-align: left;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  color: rgba(255, 255, 255, 1);
}
.Bienvenido_a_ICAV_Health_Solut_gj_Class {
  left: 2px;
  top: 25px;
  position: absolute;
  overflow: visible;
  width: 277px;
  white-space: nowrap;
  line-height: 24px;
  margin-top: -4px;
  text-align: left;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 0.5px;
}
.LogoutButton_Class {
  position: absolute;
  width: 185px;
  height: 44px;
  left: 1370px;
  top: 18px;
  overflow: visible;
}
.Button_BG_gl_Class {
  fill: rgba(52, 51, 70, 1);
}
.Button_BG_gl {
  position: absolute;
  overflow: visible;
  width: 185px;
  height: 44px;
  left: 0px;
  top: 0px;
}
.CERRAR_SESIN_Class {
  left: 34.339px;
  top: 15px;
  position: absolute;
  overflow: visible;
  width: 115px;
  white-space: nowrap;
  line-height: 24px;
  margin-top: -5.5px;
  text-align: center;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 1px;
}
.TopBarLogged_Class {
  position: absolute;
  width: 1600px;
  height: 80px;
  left: 0px;
  top: 0px;
  overflow: visible;
}
.BGTopBar_Class {
  fill: rgba(255, 255, 255, 1);
}
.BGTopBar {
  position: absolute;
  overflow: visible;
  width: 1600px;
  height: 80px;
  left: 0px;
  top: 0px;
}
.MENU_gp_Class {
  position: absolute;
  width: 697px;
  height: 49px;
  left: 276px;
  top: 31px;
  overflow: visible;
  padding: 0px;
}
.CUENTA_DE_USUARIO_gq_Class {
  left: 523px;
  top: 0px;
  position: absolute;
  overflow: visible;
  width: 175px;
  white-space: nowrap;
  line-height: 24px;
  margin-top: -4.5px;
  text-align: left;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: rgba(89, 98, 118, 1);
  letter-spacing: 1px;
}
.VACUNAS_Class {
  left: 391px;
  top: 0px;
  position: absolute;
  overflow: visible;
  width: 80px;
  white-space: nowrap;
  line-height: 24px;
  margin-top: -4.5px;
  text-align: left;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: rgba(89, 98, 118, 1);
  letter-spacing: 1px;
}
.CONTAGIOS_Class {
  left: 241px;
  top: 0px;
  position: absolute;
  overflow: visible;
  width: 98px;
  white-space: nowrap;
  line-height: 24px;
  margin-top: -4.5px;
  text-align: left;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: rgba(89, 98, 118, 1);
  letter-spacing: 1px;
}
.Group_54_Class {
  position: absolute;
  width: 89px;
  height: 49px;
  left: 99px;
  top: 0px;
  overflow: visible;
}
.Line_gu_Class {
  fill: rgba(62, 123, 151, 1);
}
.Line_gu {
  overflow: visible;
  position: absolute;
  width: 89px;
  height: 4px;
  left: 0px;
  top: 45px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.AFILIADOS_Class {
  left: 1px;
  top: 0px;
  position: absolute;
  overflow: visible;
  width: 88px;
  white-space: nowrap;
  line-height: 24px;
  margin-top: -4.5px;
  text-align: left;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: rgba(62, 123, 151, 1);
  letter-spacing: 1px;
}
.HOME_Class {
  left: 0px;
  top: 0px;
  position: absolute;
  overflow: visible;
  width: 49px;
  white-space: nowrap;
  line-height: 24px;
  margin-top: -4.5px;
  text-align: left;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: rgba(89, 98, 118, 1);
  letter-spacing: 1px;
}
.UserWelcomeMenu_Class {
  position: absolute;
  width: 233.717px;
  height: 48px;
  left: 1323.283px;
  top: 16px;
  overflow: visible;
}
.Bienvenido_Usuario_gy_Class {
  left: 0px;
  top: 13px;
  position: absolute;
  overflow: visible;
  width: 160px;
  white-space: nowrap;
  line-height: 24px;
  margin-top: -3px;
  text-align: right;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: lighter;
  font-size: 18px;
  color: rgba(100, 109, 130, 1);
  letter-spacing: 0.1px;
}
.Ellipse_9_gz_Class {
  fill: rgba(52, 51, 70, 1);
}
.Ellipse_9_gz {
  position: absolute;
  overflow: visible;
  width: 48px;
  height: 48px;
  left: 185.717px;
  top: 0px;
}
.ICAV-LOGO_g_Class {
  position: absolute;
  width: 130px;
  height: 46px;
  left: 32px;
  top: 19px;
  overflow: visible;
}
.header_section {
  width: 100%;
  display: var(--d-flex);
  justify-content: space-between;
  padding: 15px;
}
.header_section-item {
  display: var(--d-flex);
  align-items: center;
}
.item_figure {
  text-align: center;
  width: 6rem;
}
.item_figure img {
  width: 50px;
}
.item_title {
  display: flex;
  color: var(--white-color);
}
.item_title div {
  border-left: 1px solid #ccc;
  width: 1px;
  height: auto;
  margin: 0 3px;
}
.item_title h1 {
  font-size: 1.8rem;
  text-align: start;
  font-weight: 700;
  line-height: 1.5rem;
}
.header_section_buton {
  display: flex;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
}
.header_section_buton img {
  width: 3rem;
}
.nav {
  background: linear-gradient(#135e9b, #1a78c1);
}
.nav_section {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--white-color);
}
.nav_section li {
  padding: 1rem 2rem;

  cursor: pointer;
  transform: translate(0%, 0%);
}
.nav_section li::after {
  content: "";
  display: block;
  /* position: absolute; */
  width: 100%;
  height: 3px;
  background: var(--off-white);
  transition: transform 0.2s ease-in-out;
  transform: scale(0);
}
.nav_section li:hover::after {
  transform: scale(1);
}
.main-component {
  width: 100%;
  /* height: 75vh; */
  min-height: calc(100vh - 130px - 300px);
  background-color: var(--white-color);
  padding: 40px 0;
}
.footer {
  width: 100%;
  margin-top: 100px;
  font-size: 1.6rem;
  color: var(--white-color);
  background-color: var(--primary-color);
}
.footer_section {
  width: 100%;
}
.section_footer {
  display: flex;
  align-items: center;
  /* padding: 15px; */
  border-bottom: 0.1rem solid #131c20;
}
.section_footer-item h2 {
  font-size: 1.6rem;
  font-weight: 400;
}
.footer_section-names {
  list-style: none;
}
.footer_section-names li {
  margin-left: 18px;
}
.footer_section-names h2 {
  font-size: 2rem;
}
.footer_section-names {
  border-bottom: 0.1rem solid #131c20;
  padding: 15px;
}
.section_footer p {
  margin-left: 30px;
}
.section_footer-item {
  display: var(--d-flex);
  align-items: center;
  margin-bottom: 10px;
}
.section_footer-item img {
  width: 50px;
}
.footer_who {
  display: var(--d-flex);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  background-color: var(--secunda-color);
  height: 50px;
}
.footer_logo {
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 5px 0;
}
.footer_logo-figure {
  width: 70px;
}
.footer_logo-title {
  display: var(--d-flex);
  align-items: center;
  margin-left: 5px;
}
.footer_logo-title h3 {
  font-size: 1.6rem;
}
@media (min-width: 1024px) {
  .nav {
    background-color: var(--primary-color);
  }
  .nav_section li {
    border: none;
  }
  .nav_section {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .footer_section {
    display: var(--d-flex);
    justify-content: space-around;
  }
  .section_footer {
    border: none;
  }
  .footer_section-names {
    border: none;
  }
}
</style>
