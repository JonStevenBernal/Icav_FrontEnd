<template>
  <section class="creacion">
    <section class="creacion_container">
      <img src="../assets/only-shield.png" alt="logo coronactual" />

      <h2>¡Bienvenido a Icav!</h2>
      <p>
        Por favor inicie sesión para acceder a los serivicios. <br />
        Si no tiene una cuenta puede crear una haciendo click en el botón
        respectivo <br />
      </p>
      <form
        class="creacion_container-form"
        v-on:submit.prevent="processLogInUser"
      >
        <input
          class="form_creacion-input"
          type="text"
          v-model="user.username"
          placeholder="Nombre de usuario"
        />
        <input
          class="form_creacion-input"
          type="password"
          v-model="user.password"
          placeholder="Contraseña"
        />
        <button type="submit">Iniciar Sesion</button>
      </form>
    </section>
  </section>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "IniciarSesion",

  data: function() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    processLogInUser: async function() {
      localStorage.clear();
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation($credentials: CredentialsInput!) {
              logIn(credentials: $credentials) {
                refresh
                access
              }
            }
          `,

          variables: {
            credentials: this.user,
          },
        })

        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.logIn.access,
            token_refresh: result.data.logIn.refresh,
          };
          console.log(dataLogIn);

          this.$emit("completedLogIn", dataLogIn);
        })

        .catch((error) => {
          alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
  },
};
</script>

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
  background-image: url("../assets/icons8-virus-pur.svg");
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
