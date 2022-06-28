import {createApp} from "vue";
import Vue from 'vue'
import App from "./App.vue";
import './style/index.css'
import './style/index.less'

const a = createApp(App)
a.mount("#app")

// new Vue({
//     render: (h) => h(App),
//   }).$mount("#app");