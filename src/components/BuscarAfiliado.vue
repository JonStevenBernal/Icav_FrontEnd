<template>
  <section class="allregister">
    <section class="allregister_container">
      <div class="allregister_container-info">
        <h2>Filtrar Estado</h2>
        <p>Aqui podras buscar un afiliado de acuerdo con su cédula</p>
      </div>

      <form class="creacion_container-form" v-on:submit.prevent="processSearch">
        <input
          class="form_creacion-input"
          type="number"
          placeholder="Cedula"
          v-model="identificacion"
        />

        <button type="submit">Buscar</button>
      </form>

      <h2>Lista de afiliados</h2>
      <p>{{ afiliadoByIdentificacion }}</p>

      <div class="allregister_container-tabla">
        <table class="container-tabla_table">
          <thead class="tabla_table-heading">
            <tr>
              <!--sección COLUMNAS -->
              <th>Identificacion</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Edad</th>
              <th>Medida de Edad</th>
              <th>Sexo</th>
              <th>Correo</th>
              <th>Ciudad</th>
              <th>Direccion</th>
              <!-- <th>Modificar Afiliado</th> -->
            </tr>
          </thead>
          <tbody class="tabla_table-body">
            <!-- sección FILAS -->

            <tr class="table_body-values">
              <!--Fila 1, datos registro -->
              <td>{{ afiliadoByIdentificacion.identificacion }}</td>
              <td>{{ afiliadoByIdentificacion.nombres }}</td>
              <td>{{ afiliadoByIdentificacion.apellidos }}</td>
              <td>{{ afiliadoByIdentificacion.edad }}</td>
              <td>{{ afiliadoByIdentificacion.medidaEdad }}</td>
              <td>{{ afiliadoByIdentificacion.sexo }}</td>
              <td>{{ afiliadoByIdentificacion.correo }}</td>
              <td>{{ afiliadoByIdentificacion.ciudad }}</td>
              <td>{{ afiliadoByIdentificacion.direccion }}</td>

              <td>
                <!-- <button
                  v-on:click="llamar(afiliadoByIdentificacion.identificacion)"
                >
                  Modificar id:{{ afiliadoByIdentificacion.identificacion }}
                </button> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </section>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "BuscarAfiliado",
  data: function() {
    return {
      identificacion: 0,
      afiliadoByIdentificacion: {
        identificacion: 0,
        nombres: "",
        apellidos: "",
        edad: 0,
        medidaEdad: "",
        sexo: "",
        correo: "",
        ciudad: "",
        direccion: "",
      },
    };
  },

  methods: {
    processSearch: async function() {
      await this.$apollo
        .query({
          query: gql`
            query AfiliadoByIdentificacion($identificacion: Int!) {
              afiliadoByIdentificacion(identificacion: $identificacion) {
                identificacion
                nombres
                apellidos
                edad
                medidaEdad
                sexo
                correo
                ciudad
                direccion
              }
            }
          `,
          variables: {
            identificacion: this.identificacion,
            afiliadoByIdentificacion: this.identificacion,
          },
        })
        .then((result) => {
          alert("Búsqueda exitosa");
          console.log(this.afiliadoByIdentificacion);
        })
        .catch((error) => {
          alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
  },
  //   created: function() {
  //     this.$apollo.queries.afiliadoByIdentificacion.refetch();
  //     //   this.$apollo.queries.accountByUsername.refetch();
  //   },
};
</script>

<style>
.allregister_container-buttons {
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 50px;
}
.allregister_container-buttons button {
  background: #218dc9;
  width: 90px;
  height: 40px;
  border: none;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  box-shadow: 0 3px 3px -2px rgb(0 0 0 / 10%), 0 3px 4px 0 rgb(0 0 0 / 14%),
    0 1px 8px 0 rgb(0 0 0 / 12%);
}
</style>
