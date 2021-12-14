<template>
  <section class="allregister">
    <section class="allregister_container">
      <div class="allregister_container-info">
        <h2>Vacunas del Afiliado</h2>
        <p>
          Aqui podras ver las vacunas aplicadas al afiliado con identificacion
          {{ this.idPersona }}
          <!-- {{ afiliados.identificacion }} -->
        </p>
      </div>

      <div>
        <center>
          <button
            class="allregister_container-button"
            v-on:click="crearVacuna(this.idPersona)"
          >
            Crear una nueva vacuna para el afiliado id:{{ this.idPersona }}
          </button>
        </center>
      </div>

      <h2>Vacunas</h2>

      <div class="allregister_container-tabla">
        <table class="container-tabla_table">
          <thead class="tabla_table-heading">
            <tr>
              <!--sección COLUMNAS -->
              <th>Identificacion</th>
              <th>Fabricante</th>
              <th>lote</th>
              <th>Numero de dosis</th>
              <th>Fecha de aplicacion</th>
            </tr>
          </thead>
          <tbody class="tabla_table-body">
            <!-- sección FILAS -->

            <tr
              class="table_body-values"
              v-for="vacunas in vacunasByIdPersona"
              :key="vacunas.idPersona"
            >
              <!--Fila 1, datos registro -->
              <td>{{ vacunas.idPersona }}</td>
              <td>{{ vacunas.fabricante }}</td>
              <td>{{ vacunas.lote }}</td>
              <td>{{ vacunas.dosis }}</td>
              <td>{{ vacunas.fechaAplicacion }}</td>
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
  name: "Vacunas",
  data: function() {
    return {
      idPersona: 0,
      vacunasByIdPersona: {
        idPersona: 0,
        fabricante: "",
        lote: 0,
        dosis: 0,
        fechaAplicacion: "",
      },
    };
  },

  /*   methods: {
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
          alert("Error en la búsqueda");
        });
    },
  }, */

  methods: {
    processSearch: function() {
      this.apollo.query({ query: vacunasByIdPersona });
    },

    crearVacuna: function(identificacion) {
      alert(
        `En la siguiente ventana podrá crear una nueva vacuna para el afiliado con id ${identificacion}`
      );
      localStorage.removeItem("identificacion");
      localStorage.setItem("identificacion", identificacion);
      this.$router.push({ name: "CrearVacuna" });
    },

    obtenerID: function() {
      this.idPersona = parseInt(localStorage.getItem("identificacion"));

      console.log(this.idPersona);
    },
  },
  //   created: function() {
  //     this.$apollo.queries.afiliadoByIdentificacion.refetch();
  //     //   this.$apollo.queries.accountByUsername.refetch();
  //   },

  apollo: {
    vacunasByIdPersona: {
      query: gql`
        query Query($idPersona: Int!) {
          vacunasByIdPersona(idPersona: $idPersona) {
            idPersona
            fabricante
            lote
            dosis
            fechaAplicacion
          }
        }
      `,
      variables() {
        return {
          idPersona: this.idPersona,
        };
      },
    },
  },

  created: function() {
    this.obtenerID();
  },
};
</script>
<style>
.allregister_container-button {
  background: #218dc9;
  width: 90%;
  height: 40px;
  border: none;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  box-shadow: 0 3px 3px -2px rgb(0 0 0 / 10%), 0 3px 4px 0 rgb(0 0 0 / 14%),
    0 1px 8px 0 rgb(0 0 0 / 12%);
  padding: 5px;
}
</style>
