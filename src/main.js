import { createApp } from "vue";
// import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  uri: "https://mision-tic-api-gateway.herokuapp.com/",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,

      Authorization: localStorage.getItem("token_access") || "",
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),

  cache: new InMemoryCache(),
});

const apolloProvider = new createApolloProvider({
  defaultClient: apolloClient,
});

// Vue.use(Vuex);
createApp(App)
  .use(router)
  .mount("#app");
