<template>
  <section class="allregister">
    <section class="allregister_container">
      <div class="allregister_container-info">
        <!-- Acá va el titulo -->
        <h2>Consultar Todos los Afiliados</h2>
        <!-- Acá va el parrafo -->
        <p>
          Aqui estás visualizando todos los Afiliados de las EPS. Puedes
          modificar el estado del paciente con los botones de la última columna.
          <!--   <br>Recuerde que para modificar un registro debe seleccionarlo. -->
        </p>
      </div>

      <!--sección TABLA -->

      <h2>Lista de Registros Covid19</h2>
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
              <th>Modificar Afiliado</th>
            </tr>
          </thead>
          <tbody class="tabla_table-body">
            <!-- sección FILAS -->

            <tr
              class="table_body-values"
              v-for="afiliados in todosAfiliados"
              :key="afiliados.identificacion"
            >
              <!--Fila 1, datos registro -->
              <td>{{ afiliados.identificacion }}</td>
              <td>{{ afiliados.nombres }}</td>
              <td>{{ afiliados.apellidos }}</td>
              <td>{{ afiliados.edad }}</td>
              <td>{{ afiliados.medidaEdad }}</td>
              <td>{{ afiliados.sexo }}</td>

              <!-- <td v-if="afiliado.sexo == 'M'">Masculino</td>
              <td v-else-if="afiliado.sexo == 'F'">Femenino</td> -->

              <td>{{ afiliados.correo }}</td>
              <td>{{ afiliados.ciudad }}</td>
              <td>{{ afiliados.direccion }}</td>

              <td>
                <button v-on:click="llamarVacunasAfiliado(afiliados.identificacion)">
                  Ver vacunas Afiliado id:{{ afiliados.identificacion }}
                </button>
              </td>
              <td>
                <button v-on:click="llamarContagiosAfiliado(afiliados.identificacion)">
                  Ver contagios Afiliado id:{{ afiliados.identificacion }}
                </button>
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
  name: "MostrarAfiliados",

  data: function() {
    return {
      //   todosAfiliado: [],
    };
  },

  methods: {
    llamarVacunasAfiliado: function(identificacion) {
      alert(`En la siguiente ventana podrá ver las vacunas del Afiliado con id ${identificacion}`);
      localStorage.removeItem("identificacion");
      localStorage.setItem("identificacion", identificacion);
      this.$router.push({ name: "Vacunas" });
    },

    llamarContagiosAfiliado: function(identificacion) {
      alert(`En la siguiente ventana podrá ver los contagios asociados al Afiliado con id ${identificacion}`);
      localStorage.removeItem("identificacion");
      localStorage.setItem("identificacion", identificacion);
      this.$router.push({ name: "Contagios" });
    },

  },

  apollo: {
    todosAfiliados: {
      query: gql`
        query TodosAfiliados {
          todosAfiliados {
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

      variables() {
        return {
          //   username: this.username,
        };
      },
    },

    // accountByUsername: {
    //   query: gql`
    //     query($username: String!) {
    //       accountByUsername(username: $username) {
    //         balance

    //         lastChange
    //       }
    //     }
    //   `,

    //   variables() {
    //     return {
    //       username: this.username,
    //     };
    //   },
    // },
  },

  created: function() {
    this.$apollo.queries.todosAfiliados.refetch();
    //   this.$apollo.queries.accountByUsername.refetch();
  },
};
</script>

<style>
.allregister {
  width: 100%;
  min-width: 320px;
  color: #218dc9;
  margin-bottom: 200px;
}
.allregister_container-info {
  text-align: center;
  width: 90%;
  margin: 0 auto;
}
.allregister_container-info h2 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #218dc9;
  margin-bottom: 40px;
}
.allregister_container-info p {
  font-size: 1.6rem;
  margin-bottom: 40px;
}

.allregister_container-tabla {
  text-align: center;
  overflow: scroll;
  width: 90%;
  margin: 0 auto;
}
.allregister_container h2 {
  text-align: center;
  margin-bottom: 10px;
}
.container-tabla_table {
  overflow: scroll;
  width: 2000px;
  table-layout: fixed;

  border-collapse: collapse;
  border-spacing: 20px;
  /* border-left: 1px solid;
  border-right: 1px solid;
  border-color: black; */
}
.tabla_table-heading {
  /* UI Properties */
  /* background: #72cade 0% 0% no-repeat padding-box; */
  background-color: #218dc9;
  color: #ffffff;
  /* border: 1px solid #929292; */
  /* border-radius: 12px 12px 0px 0px; */

  opacity: 1;
  text-align: center;
  font-size: 1.2rem;
  /* padding: 20px 20px 20px; */
}
.tabla_table-heading tr th {
  padding: 5px;
  border-right: 1px solid #ffffff;
  width: 150px;
  height: 40px;
}

.tabla_table-body {
  background: #ffffff 0% 0% no-repeat padding-box;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
}
.table_body-values {
  font-size: 1.2rem;
  height: 40px;
}
.table_body-values:nth-child(odd) {
  background-color: #f2f2f2;
}
.table_body-values td:last-of-type button {
  background: #218dc9;
  width: 90px;
  height: 30px;
  border: none;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 3px 3px -2px rgb(0 0 0 / 10%), 0 3px 4px 0 rgb(0 0 0 / 14%),
    0 1px 8px 0 rgb(0 0 0 / 12%);
}
</style>
