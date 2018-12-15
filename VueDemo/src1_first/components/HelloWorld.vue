<template>
  <div class="title">
  <div>{{msg}}</div>
  </div>
</template>
<script>
  export default {
    name:'HelloWorld',
    data(){
      return {
        msg: 'First Vue Component'
      }
    }
  }
</script>
<style>
.title{
  background: skyblue;
}
</style>
