<template>
  <section class="creacion">
    <section class="creacion_container">
      <img src="../assets/icons8-virus-pur.svg" alt="logo coronactual" />
      <p>hola</p>
      <p>
        !Bienvenido <span>{{ userDetailById.name }}</span>
      </p>
      <div class="details">
        <h3>Información</h3>
        <h2>
          Nombre de usuario:
          <span>{{ userDetailById.username }}</span>
        </h2>
        <h2>
          Correo electrónico:
          <span>{{ userDetailById.email }}</span>
        </h2>
      </div>
    </section>
  </section>
</template>
<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";

export default {
  name: "Perfil",
  data: function() {
    return {
      userId: jwt_decode(localStorage.getItem("tokenRefresh")).user_id,
      userDetailById: {
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
      variables() {
        return {
          userId: this.userId,
        };
      },
    },
  },
};
</script>
<style></style>
