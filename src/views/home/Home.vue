<template>
  <div class="page-home">
    <AppHeader title="浙江省公安厅视频信息联网运行管理系统" :account="account" />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/views/components/app-header/AppHeader.vue';
import { AppConfig } from '../../config/AppConfig';

export default {
  name: 'home',
  components: {
    AppHeader,
  },
  computed: {
    account() {
      return AppConfig.Account || {};
    },
  },
};
</script>
<style lang="scss" scoped>
.page-home {
  display: flex;
  flex: 1;
  flex-direction: column;

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

  .main {
    flex: 1;
  }
}
</style>
