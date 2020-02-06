<template>
  <div id="app">
    <AppHeader title="浙江省公安厅视频信息联网运行管理系统" :account="account" />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import AppHeader from '@/views/components/app-header/AppHeader.vue';

export default Vue.extend({
  components: {
    AppHeader,
  },
  data() {
    return {
      account: {
        name: '系统管理',
      },
    };
  },
});
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
