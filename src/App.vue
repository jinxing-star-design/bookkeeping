<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="js">
import store from '@/store/index2';

export default{
  data() {
    return {
      store: store
    }
  }
}
</script>


<style lang="scss">
 @import "~@/assets/style/helper.scss";
 @import "~@/assets/style/reset.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

body {
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
}

a {
  text-decoration: none;
  color: inherit;
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
