<template>
  <section class="creacion">
    <section class="creacion_container">
      <img src="../assets/icons8-virus-pur.svg" alt="logo coronactual" />

      <h2>Modificar correo electrónico</h2>

      <p>
        Ingrese el nuevo correo electrónico:
      </p>
      <form
        class="creacion_container-form"
        v-on:submit.prevent="procesarModificionCorreo">
        <input
          class="form_creacion-input"
          type="text"
          v-model="email.email"
          placeholder="Nuevo correo electrónico"
        />
        <button type="submit">Modificar y Guardar</button>
        <button v-on:click="cancelar()">Cancelar</button>
      </form>
    </section>
  </section>
</template>

<script>

import gql from "graphql-tag";

export default {
  name: "ModificarCorreo",
  data: function() {
    return {
      email: {
        email: "",
      },
    };
  },

  methods: {
    procesarModificionCorreo: async function() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation($email: UserUpdateInput!) {
              updateUser(email: $email) {
                email
              }
            }
          `,

          variables: {
            email: this.email,
          },
        })

        .then((result) => {
          this.$emit("completedModificarCorreo", dataLogIn);
        })

        .catch((error) => {
          alert("ERROR al cambiar el correo. Intente nuevamente");
        });
    },

    cancelar: function() {
      alert("Modificación de correo cancelada");
      this.$router.push({ name: "Instrucciones" });
    },
  },
  
};
</script>

<style>
/* .ModificarSeguimiento {
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.titulo {
  text-align: center;
}
.titulo h1 {
  color: rgb(18, 50, 119);
  font-size: 60px;
}
.titulo p {
  text-align: center;
  font-size: 20px;
}
.formulario {
  border: 3px solid #364b63;
  border-radius: 10px;
  width: 30%;
  height: 45%;
  margin: auto;
  padding: 30px 20px;
  align-items: center;
  text-align: center;
}
.formulario button {
  color: #e5e7e9;
  background: #364b63;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;
}
.formulario button:hover {
  color: #364b63;
  background: #e5e7e9;
  border: 1px solid #364b63;
} */
</style>