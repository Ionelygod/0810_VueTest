<template>
  <div>
    <HelloWorld/>
    <img src="./assets/logo.png" alt="logo" class="logo">
  </div>
</template>
<script>
  import HelloWorld from './components/HelloWorld.vue';
  export default {
    components:{
      HelloWorld
    }
  }
</script>
<style>
.logo{
  position: fixed;
  right:0;
  top: 0;
}
</style>
