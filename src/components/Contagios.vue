<template>
  <section class="allregister">
    <section class="allregister_container">
      <div class="allregister_container-info">
        <h2>Contagios del Afiliado</h2>
        <p>
          Aqui podras ver las vacunas de un afiliado de acuerdo con la consula #
          <!-- {{ afiliados.identificacion }} -->
        </p>
      </div>

      <h2>Contagios</h2>

      <div class="allregister_container-tabla">
        <table class="container-tabla_table">
          <thead class="tabla_table-heading">
            <tr>
              <!--sección COLUMNAS -->
              <th>Identificacion</th>
              <th>Fecha Diagnóstico</th>
              <th>Estado Enfermedad</th>
              <th>Ubicación caso</th>
              <th>Estado recuperación</th>
              <th>Fecha de recuperación</th>
              <th>Fecha de muerte</th>
            </tr>
          </thead>
          <tbody class="tabla_table-body">
            <!-- sección FILAS -->

            <tr
              class="table_body-values"
              v-for="contagios in contagiosByIdPersona"
              :key="contagios.idPersona"
            >
              <!--Fila 1, datos registro -->
              <td>{{ contagios.idPersona }}</td>
              <td>{{ contagios.fechaDiagnostico }}</td>
              <td>{{ contagios.estadoEnfermedad }}</td>
              <td>{{ contagios.ubicacionCaso }}</td>
              <td>{{ contagios.estadoRecuperacion }}</td>
              <td>{{ contagios.fechaRecuperacion }}</td>
              <td>{{ contagios.fechcontagios }}</td>
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
      idPersona: 2222,
      contagiosByIdPersona: {
        idPersona: 0,
        fechaDiagnostico: "",
        estadoEnfermedad: "",
        ubicacionCaso: "",
        estadoRecuperacion: "",
        fechaRecuperacion: "",
        fechaMuerte: "",
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
      this.apollo.query({ query: contagiosByIdPersona });
    },
  },
  //   created: function() {
  //     this.$apollo.queries.afiliadoByIdentificacion.refetch();
  //     //   this.$apollo.queries.accountByUsername.refetch();
  //   },

  apollo: {
    contagiosByIdPersona: {
      query: gql`
        query Query($idPersona: Int!) {
          contagiosByIdPersona(idPersona: $idPersona) {
            idPersona
            fechaDiagnostico
            estadoEnfermedad
            ubicacionCaso
            estadoRecuperacion
            fechaRecuperacion
            fechaMuerte
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
