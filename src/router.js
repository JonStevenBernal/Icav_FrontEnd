import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Instrucciones from "./components/Instrucciones.vue";
// import SeleccionarUbicacion from "./components/SeleccionarUbicacion.vue";
import CrearAfiliado from "./components/CrearAfiliado.vue";
// import CrearSeguimiento from "./components/CrearSeguimiento.vue";
// import FiltrarEstado from "./components/FiltrarEstado.vue";
// import ModificarSeguimiento from "./components/ModificarSeguimiento.vue";
import IniciarSesion from "./components/IniciarSesion.vue";
import CerrarSesion from "./components/CerrarSesion.vue";
import CrearNuevoUsuario from "./components/CrearNuevoUsuario.vue";
import EliminarCuenta from "./components/EliminarCuenta.vue";
import Perfil from "./components/Perfil.vue";
import MostrarAfiliados from "./components/MostrarAfiliados.vue";

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
    path: "/Usuario/EliminarCuenta",
    name: "EliminarCuenta",
    component: EliminarCuenta,
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
