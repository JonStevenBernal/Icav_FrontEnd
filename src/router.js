import gql from "graphql-tag";
import { createRouter, createWebHashHistory } from "vue-router";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import App from "./App.vue";
import Instrucciones from "./components/Instrucciones.vue";
// import SeleccionarUbicacion from "./components/SeleccionarUbicacion.vue";
import CrearAfiliado from "./components/CrearAfiliado.vue";
// import CrearSeguimiento from "./components/CrearSeguimiento.vue";
// import FiltrarEstado from "./components/FiltrarEstado.vue";
import ModificarCorreo from "./components/ModificarCorreo.vue";
import IniciarSesion from "./components/IniciarSesion.vue";
import CerrarSesion from "./components/CerrarSesion.vue";
import CrearNuevoUsuario from "./components/CrearNuevoUsuario.vue";
import EliminarCuenta from "./components/EliminarCuenta.vue";
import Perfil from "./components/Perfil.vue";
import MostrarAfiliados from "./components/MostrarAfiliados.vue";
import BuscarAfiliado from "./components/BuscarAfiliado.vue";
import Vacunas from "./components/Vacunas.vue";
import Contagios from "./components/Contagios.vue";
import CrearContagio from "./components/CrearContagio.vue";
import CrearVacuna from "./components/CrearVacuna.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: Instrucciones,
  },

  {
    path: "/Instrucciones",
    name: "Instrucciones",
    component: Instrucciones,
  },

  {
    path: "/Usuario/IniciarSesion",
    name: "IniciarSesion",
    component: IniciarSesion,
  },

  {
    path: "/Usuario/CerrarSesion",
    name: "CerrarSesion",
    component: CerrarSesion,
  },

  {
    path: "/Usuario/CrearNuevoUsuario",
    name: "CrearNuevoUsuario",
    component: CrearNuevoUsuario,
  },
  {
    path: "/Usuario/Perfil",
    name: "Perfil",
    component: Perfil,
  },
  {
    path: "/Afiliados/MostrarAfiliados",
    name: "MostrarAfiliados",
    component: MostrarAfiliados,
  },
  {
    path: "/Afiliados/CrearAfiliado",
    name: "CrearAfiliado",
    component: CrearAfiliado,
  },
  {
    path: "/Afiliados/BuscarAfiliado",
    name: "BuscarAfiliado",
    component: BuscarAfiliado,
  },
  {
    path: "/Usuario/EliminarCuenta",
    name: "EliminarCuenta",
    component: EliminarCuenta,
  },
  {
    path: "/Usuario/ModificarCorreo",
    name: "ModificarCorreo",
    component: ModificarCorreo,
  },
  {
    path: "/Afiliado/Vacunas",
    name: "Vacunas",
    component: Vacunas,
  },
  {
    path: "/Afiliado/Contagios",
    name: "Contagios",
    component: Contagios,
  },
  {
    path: "/Afiliado/CrearVacuna",
    name: "CrearVacuna",
    component: CrearVacuna,
  },
  {
    path: "/Afiliado/CrearContagio",
    name: "CrearContagio",
    component: CrearContagio,
  },
  // {
  //   path: "/crear/ubicacion",
  //   name: "SeleccionarUbicacion",
  //   component: SeleccionarUbicacion,
  // },
  // {
  //   path: "/crear/registro",
  //   name: "CrearRegistro",
  //   component: CrearRegistro,
  // },
  // {
  //   path: "/crear/seguimiento",
  //   name: "CrearSeguimiento",
  //   component: CrearSeguimiento,
  // },
  // {
  //   path: "/filtrar/sexo",
  //   name: "FiltrarSexo",
  //   component: FiltrarSexo,
  // },
  // {
  //   path: "/filtrar/estado",
  //   name: "FiltrarEstado",
  //   component: FiltrarEstado,
  // },
  // {
  //   path: "/ModificarSeguimiento",
  //   name: "ModificarSeguimiento",
  //   component: ModificarSeguimiento,
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
