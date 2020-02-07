<template>
  <div id="app">
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

</style>
