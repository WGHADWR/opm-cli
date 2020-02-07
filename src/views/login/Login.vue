<template>
  <div class="page-home">
    <div class="container-login">
      <a-form :form="data">
        <a-form-item label="UserName" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input v-decorator="['userName', { rules: [{ required: true, message: 'Please input your note!' }] }]" />
        </a-form-item>
        <a-form-item label="password" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input v-decorator="['password', { rules: [{ required: true, message: 'Please input your note!' }] }]" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="button" @click="handleSubmit">
            Submit
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

import { AuthService } from '@/services/AuthService';

export default Vue.extend({
  data() {
    return {
      data: this.$form.createForm(this, {
        userName: '',
        password: '',
      } as any),
    };
  },
  methods: {
    async handleSubmit(e: any) {
      // console.log(this.data);
      e.preventDefault();
      this.data.validateFields((err: any, values: any) => {
        if (!err) {
          // console.log('Received values of form: ', values);
          this.handleLogin(values);
        }
      });
    },
    async handleLogin(params: any) {
      try {
        const result = await AuthService.login(params.userName, params.password);
        console.log(result);
        const { status, data } = result;
        if (status !== 0) {
          this.$message.warning('用户名或密码错误!');
          // return;
        }
        this.$router.replace({ path: '/pages/dashboard' });
      } catch (e) {
        console.warn(e);
        this.$message.warning('登录失败, 服务器错误!');
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.page-home {

}
</style>
