<template>
  <section class="creacion">
    <section class="creacion_container">
      <img src="../assets/icons8-virus-pur.svg" alt="logo coronactual" />
      <h2>Perfil</h2>
      <p>
        <center>!Bienvenido {{ userDetailById.name }}!</center>
      </p>
      
        <p>Su información de usuario es:</p>
        
        <h3><p>Nombre de usuario: {{ userDetailById.username }}</p></h3>
        <h3><p>Correo electrónico: {{ userDetailById.email }} </p></h3>

      <p><button v-on:click="procesarModificarUsuario()"> Modificar correo </button></p>
      <p><button v-on:click="procesarEliminarUsuario()"> Eliminar Usuario </button></p>
      
    </section>
  </section>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Perfil",
  data: function() {
    return {
      userDetailById: {
        id: 0,
        username: "",
        name: "",
        email: "",
      },
    };
  },

  apollo: {
    userDetailById: {
      query: gql`
        query {
          userDetailById {
            username
            name
            email
          }
        }
      `
    },
  },

methods: {
    procesarModificarUsuario: function() {
          alert("En la siguiente ventana podrá modificar el correo asociado a su cuenta");
          this.$router.push({ name: "ModificarCorreo" });
    },
    
  },

};
</script>
<style></style>
