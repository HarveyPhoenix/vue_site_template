<template>
  <div id="app" class="container">
    <page-header></page-header>
    <page-main></page-main>
    <page-footer></page-footer>
    <!--
    <router-link to="/testdemo">Go Test Demo</router-link>
    -->
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
@import './styles/bootstrap.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
