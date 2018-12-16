<template>
  <div>
    <ul>
      <li>id:{{this.$route.params.id}}</li>
      <li>title:{{messageDetail.title}}</li>
      <li>content:{{messageDetail.content}}</li>
    </ul>
  </div>
</template>
<script>
  const allMsgDetails = [
    {id:1, title:'message01',content:' content Message001'},
    {id:2, title:'message02',content:' content Message002'},
    {id:4, title:'message04',content:' content Message004'},
    {id:5, title:'message05',content:' content Message005'},
  ]
  export default {
    data(){
      return {
        messageDetail:{}
      }
    },
    mounted(){
      this.shouUI(this.$route)
    },
    watch:{
      $route(value){
         this.shouUI(value)
      }
    },
    methods:{
      shouUI(value){
        const id = value.params.id -0;
        const messageD = allMsgDetails.find(item => item.id === id)
        this.messageDetail = messageD
      }
    }

  }
</script>
<style scoped>

</style>
