import App from './App.vue';
import Vue from 'vue';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import iviewAreaWx from './index.js';
Vue.use(ViewUI);
Vue.use(iviewAreaWx);
new Vue({
  render: h => h(App),
}).$mount('#app')
