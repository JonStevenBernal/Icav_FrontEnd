<template>
  <section class="creacion">
    <section class="creacion_container">
      <img src="../assets/only-shield.png" alt="logo Icav" />
      <h2>Crear un Registro</h2>
      <p>
        Para crear una Vacuna por favor ingrese los siguientes datos <br />
        <i>
          Recuerde que está creando un nuevo contagio para el afiliado con id:
          {{ this.createVacuna.idPersona }}
        </i>
      </p>

      <form
        class="creacion_container-form"
        v-on:submit.prevent="procesarCrearVacuna"
      >
        <!-- <label>Ingreasa tu numero de identificacion</label>
        <input
          class="form_creacion-input"
          type="number"
          placeholder="CC"
          v-model="createVacuna.idPersona"
        /> -->

        <label>Selecciona el Fabricante de la Vacuna</label>
        <select class="form_creacion-input" v-model="createVacuna.fabricante">
          <option value="Vacuna BioNTech, Pfizer"
            >Vacuna BioNTech, Pfizer</option
          >
          <option value="Vacuna CoronaVac">Vacuna CoronaVac</option>
          <option value="Janssen de Johnson And Johnson"
            >Janssen de Johnson And Johnson</option
          >
          <option value="Vacuna Moderna">Vacuna Moderna</option>
          <option value="Vacuna Oxford, AstraZeneca"
            >Vacuna Oxford, AstraZeneca</option
          >
        </select>

        <label>Ingreasa el lote de la vacuna</label>
        <input
          class="form_creacion-input"
          type="number"
          placeholder="Lote"
          v-model="createVacuna.lote"
        />

        <label>Ingreasa el numero de dosis</label>
        <input
          class="form_creacion-input"
          type="number"
          placeholder="Numero de vacuna"
          v-model="createVacuna.dosis"
        />

        <label>Selecciona Fecha la echa de aplicacion</label>
        <input
          class="form_creacion-input"
          type="date"
          placeholder="DD/MM/AAAA"
          v-model="createVacuna.fechaAplicacion"
        />
        <button type="submit">Crear Vacunacion</button>
      </form>
    </section>
  </section>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "CrearVacuna",

  data: function() {
    return {
      createVacuna: {
        idPersona: 0,
        fabricante: "",
        lote: 0,
        dosis: 0,
        fechaAplicacion: "",
      },
    };
  },

  methods: {
    procesarCrearVacuna: async function() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation($vacuna: VacunaInput!) {
              createVacuna(vacuna: $vacuna) {
                idPersona
                fabricante
                lote
                dosis
                fechaAplicacion
              }
            }
          `,

          variables: {
            vacuna: this.createVacuna,
          },
        })

        .then((result) => {
          alert("Vacuna Registrada exitosamente");
          this.$router.push({ name: "Instrucciones" });
        })

        .catch((error) => {
          alert("Hubo un problema al Registrar la Vacuna");
        });
    },

    obtenerID: function() {
      this.createVacuna.idPersona = parseInt(
        localStorage.getItem("identificacion")
      );
      console.log("final");
      console.log(this.createVacuna.idPersona);
    },
  },

  created: function() {
    this.obtenerID();
  },
};
</script>
