<template>
  <section class="allregister">
    <section class="allregister_container">
      <div class="allregister_container-info">
        <h2>Vacunas del Afiliado</h2>
        <p>
          Aqui podras ver las vacunas de un afiliado de acuerdo con la consula #
          <!-- {{ afiliados.identificacion }} -->
        </p>
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
  name: "BuscarAfiliado",
  data: function() {
    return {
      idPersona: 12345,
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
};
</script>
