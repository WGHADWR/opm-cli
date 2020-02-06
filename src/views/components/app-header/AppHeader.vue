<template>
  <div class="app-header">
    <div class="app-title">
      <div class="app-icon"></div>
      {{title}}
    </div>
    <div class="app-account">
      <div class="account-wrapper">
        <a-icon type="user" :style="{color: '#FEFEFE'}" />
        <a-dropdown>
          <a class="ant-dropdown-link" href="#"> {{(account || {}).name}} <a-icon type="down" /> </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">用户设置</a>
            </a-menu-item>
            <a-menu-item key="1">
              <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">修改密码</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3" @click="logout">退出系统</a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    account: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$message.success('Success');
    },
  },
});
</script>
<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 16px;
  background: #333;

  .app-title {
    display: flex;
    align-items: center;
    flex: 1;
    color: #FEFEFE;
    font-size: 24px;
    font-weight: 700;

    .app-icon {
      width: 55px;
      height: 45px;
      background: url('../../../assets/police.png') center left no-repeat;
      background-size: contain;
    }
  }

  .app-account {
    width: 200px;

    .account-wrapper {
      text-align: right;
    }

    .ant-dropdown-link {
      color: #FEFEFE;
    }
  }
}
</style>
