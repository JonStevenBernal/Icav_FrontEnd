<template>
  <section class="creacion">
    <section class="creacion_container">
      <img src="../assets/icons8-virus-pur.svg" alt="logo coronactual" />
      <h2>Creacion de Contagio del Afiliado</h2>
      <p>
        Para crear un contagio por favor ingrese los siguientes datos
      </p>
      <form
        class="creacion_container-form"
        v-on:submit.prevent="procesarCrearContagio"
      >
        <!-- <label>Ingreasa tu numero de identificacion</label>
        <input
          class="form_creacion-input"
          type="number"
          placeholder="CC"
          v-model="createContagio.idPersona"
        /> -->

        <label>Selecciona Fecha de Diagnostico</label>
        <input
          class="form_creacion-input"
          type="date"
          placeholder="DD/MM/AAAA"
          v-model="createContagio.fechaDiagnostico"
        />

        <label>Selecciona el estado de enfermedad del Afiliado</label>
        <select
          class="form_creacion-input"
          v-model="createContagio.estadoEnfermedad"
        >
          <option value="leve">Leve</option>
          <option value="moderado">Moderado</option>
          <option value="grave">Grave</option>
          <option value="fallecido">Fallecido</option>
        </select>

        <label>Selecciona ubicacion del caso del Afiliado</label>
        <select
          class="form_creacion-input"
          v-model="createContagio.ubicacionCaso"
        >
          <option value="casa">Casa</option>
          <option value="hospital">Hospital</option>
          <option value="uci">UCI</option>
          <option value="fallecido">Fallecido</option>
          <option value="NA">N/A</option>
        </select>

        <label>Selecciona estado de Recuperación</label>
        <!-- select dropdown Estado Recuperado-->
        <select
          class="form_creacion-input"
          v-model="createContagio.estadoRecuperacion"
        >
          <option value="activo">Activo</option>
          <option value="recuperado">Recuperado</option>
          <option value="fallecido">Fallecido</option>
          <option value="NA">N/A</option>
        </select>

        <label>Selecciona Fecha de Recuperacion del Afiliado</label>
        <input
          class="form_creacion-input"
          type="date"
          placeholder="DD/MM/AAAA"
          v-model="createContagio.fechaRecuperacion"
        />

        <label>Selecciona Fecha de muerte del Afiliado</label>
        <input
          class="form_creacion-input"
          type="date"
          placeholder="DD/MM/AAAA"
          v-model="createContagio.fechaMuerte"
        />

        <button type="submit">Crear Contagio</button>
      </form>
    </section>
  </section>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "CrearContagio",

  data: function() {
    return {
      createContagio: {
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

  methods: {
    procesarCrearContagio: async function() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation($contagio: ContagioInput!) {
              createContagio(contagio: $contagio) {
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

          variables: {
            contagio: this.createContagio,
          },
        })

        .then((result) => {
          alert("Contagio Registrado exitosamente");
        })

        .catch((error) => {
          alert("Hubo un problema al Registrar el Contagio");
        });
    },
  },
};
</script>
