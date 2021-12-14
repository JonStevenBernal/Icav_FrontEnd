<template>
  <section class="creacion">
    <section class="creacion_container">
      <img src="../assets/only-shield.png" alt="logo Icav" />
      <h2>Crear una nueva cuenta de usuario</h2>
      <p>
        Para crear un nueva cuenta, por favor ingrese un nombre de usuario,
        nombres y apellidos, una contraseña y un correo electrónico:
      </p>
      <form class="creacion_container-form" v-on:submit.prevent="processSignUp">
        <input
          class="form_creacion-input"
          type="text"
          placeholder="Usuario"
          v-model="user.username"
        />

        <input
          class="form_creacion-input"
          type="text"
          placeholder="Nombre"
          v-model="user.name"
        />

        <input
          class="form_creacion-input"
          type="password"
          placeholder="Contraseña"
          v-model="user.password"
        />

        <input
          class="form_creacion-input"
          type="email"
          placeholder="Correo"
          v-model="user.email"
        />

        <button type="submit">Crear nueva cuenta de usuario</button>
      </form>
    </section>
  </section>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "CrearNuevoUsuario",
  data: function() {
    return {
      user: {
        username: "",
        name: "",
        password: "",
        email: "",
      },
    };
  },
  methods: {
    processSignUp: async function() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation($user: SignUpInput!) {
              createUser(user: $user) {
                refresh
                access
              }
            }
          `,
          variables: {
            user: this.user,
          },
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.createUser.access,
            token_refresh: result.data.createUser.refresh,
          };
          this.$emit("completedSignUp", dataLogIn);
        })
        .catch((error) => {
          alert("ERROR: Fallo en el registro.");
        });
    },
  },
};
</script>

<style>
.creacion {
  width: 100%;
  min-width: 320px;
  max-width: 425px;
  color: #218dc9;
  padding: 30px;
  margin: 30px auto;
  border-radius: 40px;
  border: 2px solid #218dc9;
}
.creacion_container img {
  width: 50px;
  display: block;
  margin: 0 auto;
}
.creacion_container h2 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #218dc9;
  margin-bottom: 40px;
}

.creacion_container p {
  font-size: 1.6rem;
  margin-bottom: 40px;
}
.creacion_container-form {
  display: var(--d-flex);
  flex-direction: column;
  justify-content: space-around;
}
.creacion_container-form label {
  font-size: 1.6rem;
  margin: 10px 0 8px 0;
}
.form_creacion-input {
  display: block;
  padding: 15px 10px;
  margin-bottom: 10px;
  width: 80%;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  color: var(--black-letter);
  background-color: transparent;
}
.creacion_container-form button {
  border: none;
  background-color: #218dc9;
  color: var(--white-color);
  padding: 20px 0;
  border-radius: 5px;
  margin-top: 15px;
}
</style>
