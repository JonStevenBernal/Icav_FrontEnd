<template>
  <section class="creacion">
    <section class="creacion_container">
      <div class="creacion_container-logo">
        <img src="../assets/logoIcav.png" alt="logo Icav" />
      </div>
      <div class="creacion_container-info">
        <h2>Perfil</h2>
        <p>!Bienvenido {{ userDetailById.name }}!</p>

        <h2>Su información de usuario es:</h2>

        <p>Nombre de usuario: {{ userDetailById.username }}</p>
        <p>Correo electrónico: {{ userDetailById.email }}</p>
        <div class="container-info_buttons">
          <button v-on:click="procesarModificarUsuario()">
            Modificar correo
          </button>
          <button v-on:click="procesarEliminarUsuario()">
            Eliminar Usuario
          </button>
        </div>
      </div>
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
      `,
    },
  },

  methods: {
    procesarModificarUsuario: function() {
      alert(
        "En la siguiente ventana podrá modificar el correo asociado a su cuenta"
      );
      this.$router.push({ name: "ModificarCorreo" });
    },
    procesarEliminarUsuario: function() {
      alert("En la siguiente ventana podrá eliminar su cuenta");
      this.$router.push({ name: "EliminarCuenta" });
    },
  },
};
</script>
<style>
.creacion_container-logo {
  background: linear-gradient(#135e9b, #1a78c1);
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.creacion_container-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  text-align: center;
}
.container-info_buttons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
}
.container-info_buttons button {
  border: none;
  background-color: #218dc9;
  color: var(--white-color);
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
}
</style>
