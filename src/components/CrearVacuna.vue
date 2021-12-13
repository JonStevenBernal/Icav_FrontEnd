<template>
  <section class="creacion">
    <section class="creacion_container">
      <img src="../assets/icons8-virus-pur.svg" alt="logo coronactual" />
      <h2>Crear un Registro</h2>
      <p>
        Para crear registro por favor ingrese los siguientes datos
      </p>
      <form
        class="creacion_container-form"
        v-on:submit.prevent="procesarCrearAfiliado"
      >
        <label>Ingreasa tu numero de identificacion</label>
        <input
          class="form_creacion-input"
          type="number"
          placeholder="CC"
          v-model="createAfiliado.identificacion"
        />

        <label>Ingreasa Nombres</label>
        <input
          class="form_creacion-input"
          type="text"
          placeholder="Tus Nombres"
          v-model="createAfiliado.nombres"
        />

        <label>Ingreasa Apellidos</label>
        <input
          class="form_creacion-input"
          type="text"
          placeholder="Tu Apellidos"
          v-model="createAfiliado.apellidos"
        />

        <label>Ingreasa la edad</label>
        <input
          class="form_creacion-input"
          type="number"
          placeholder="Edad"
          v-model="createAfiliado.edad"
        />

        <label>Unidad de medida</label>
        <select class="form_creacion-input" v-model="createAfiliado.medidaEdad">
          <option value="Dias">Dias</option>
          <option value="Meses">Meses</option>
          <option value="Años">Años</option>
        </select>

        <label for="sexo">Sexo</label>
        <select class="form_creacion-input" v-model="createAfiliado.sexo">
          <option value="F">Femenino</option>
          <option value="M">Masculino</option>
        </select>

        <label>Correo Electronico</label>
        <input
          class="form_creacion-input"
          type="email"
          placeholder="Correo@mail.com"
          v-model="createAfiliado.correo"
        />

        <label>Ciudad</label>
        <input
          class="form_creacion-input"
          type="text"
          placeholder="Ciudad"
          v-model="createAfiliado.ciudad"
        />

        <label>Direccion</label>
        <input
          class="form_creacion-input"
          type="text"
          placeholder="Ingrese el nombre del grupo étnico"
          v-model="createAfiliado.direccion"
        />
        <button type="submit">Crear Afiliado</button>
      </form>
    </section>
  </section>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "CrearAfiliado",

  data: function() {
    return {
      createAfiliado: {
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
    procesarCrearAfiliado: async function() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation($afiliado: AfiliadoInput!) {
              createAfiliado(afiliado: $afiliado) {
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
            afiliado: this.createAfiliado,
          },
        })

        .then((result) => {
          alert("Afiliado Registrado exitosamente");
        })

        .catch((error) => {
          alert("Hubo un problema al Registrar el Afiliado");
        });
    },
  },
};
</script>
