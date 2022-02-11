const { createApp } = require("vue");
import App from "./App.vue";
import VueGoogleMaps from "@fawmi/vue-google-maps";

createApp(App)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyDFehHeNx1VksCxQ4UTDQUPiL7f_hJ2_RE"
    }
  })
  .mount("#app");
