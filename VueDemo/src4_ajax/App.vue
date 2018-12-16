<template>
    <div class="container">
      <Search/>
      <SearchMain/>
    </div>
</template>
<script>
  import Search from './components/Search.vue'
  import Main from './components/Main.vue'

  export default {
    components:{
      Search,
      SearchMain:Main
    }
  }
</script>
<style>
</style>
