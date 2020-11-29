<template>
  <div id="app">
    <div class="app-wrapper">
      <div class="header">
        <header-component></header-component>
      </div>
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header/HeaderComponent'

export default {
  name: 'app',
  components: {
    HeaderComponent
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-align: left;
  font-style: normal;
  line-height: 23px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  margin: 0 auto;
  padding-left: 100px;
  padding-right: 100px;
  height: 100vh;
}
.app-wrapper {
  height: 100%;
  background-color: #F8F9FB;
}
</style>
