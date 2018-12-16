<template>
  <div>
    <h2 v-if="firstView">请输入关键字搜索</h2>
    <h2 v-if="loading">loading...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row" v-if="users.length>0">
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.username}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data(){
      return {
        firstView:true,
        loading:false,
        errorMsg:'',
        users:[]
      }
    },
    mounted(){
      PubSub.subscribe('SEARCH_NAME',async (msg, searchName) => {
        this.firstView = false
        this.loading = true
        this.loading = true
        this.users = []
        const url = `http://api.github.com/search/users?q=${searchName}`
        try {
          const response = await axios.get(url)
          const result = response.data
          this.users = result.items.map(item => ({
            username:item.login,
            avatar_url:item.avatar_url,
            url:item.html_url
          }))

          this.loading = false

        } catch(e){
          this.loading = false
          this.errMsg = '请求错误'
        }
      })
    }
  }
</script>
<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
