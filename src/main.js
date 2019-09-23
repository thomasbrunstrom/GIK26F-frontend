// Import vue from vue
import Vue from 'vue'
// Import our component/view app.vue
import App from './App.vue'
// Import vue-moment to help us handle dates easier
import VueMoment from 'vue-moment';

//Tell vue to use VueMoment
Vue.use(VueMoment);

//Hide productionTip in console 
Vue.config.productionTip = false

//Create our app and mount it to a 
// element with the id app which is defined in our index.html
// located in the "public" folder
new Vue({
  render: h => h(App),
}).$mount('#app')
