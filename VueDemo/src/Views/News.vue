<template>
  <ul>
    <li v-for="(news, index) in newsArr" :key="index">{{news.text}}</li>
  </ul>
</template>
<script>
  export default {
    data(){
      return {
        newsArr: []
      }
    },
    mounted(){
      setTimeout(()=>{
        this.newsArr = [
          {text:'news001'},
          {text:'news002'},
          {text:'news004'},
          ]
      },1000)
    }
  }
</script>
<style scoped>

</style>
