import Vue from 'vue';
// import Antd from 'ant-design-vue';
import { Button, Icon, Dropdown, Menu, message, Form,
  Input, Select } from 'ant-design-vue';
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

import App from './App.vue';
import router from './router';

Vue.use(Button);
Vue.use(Icon);
Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);

Vue.prototype.$message = message;
// Vue.use(Antd);

// import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h: any) => h(App),
}).$mount('#app');
