<template>
  <div>
    <ul>
      <li v-for="(m, index) in messagesArr" >
        <router-link :to="`/home/messages/${m.id}`">{{m.content}}</router-link>&nbsp;
        <button>push查看</button>&nbsp;
        <button>replce查看</button>
      </li>
    </ul>
        <router-view/>
    <button>返回</button>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        messagesArr:[]
      }
    },
    mounted(){
      setTimeout(()=> {
        this.messagesArr = [
          {id:1,content:'message01'},
          {id:2,content:'message02'},
          {id:4,content:'message04'},
          {id:5,content:'message05'},
        ]
      },1000)
    }
  }
</script>
<style scoped>

</style>
