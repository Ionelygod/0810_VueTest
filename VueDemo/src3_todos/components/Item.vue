<template>
  <li :style="{background: bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" >
    <label>
      <input type="checkbox" v-model="todo.complate" />
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>
<script>
  import PubSub from 'pubsub-js';
  export default {
    props:['todo','index'],
    data(){
      return {
        bgColor: 'white',
        isShow:false
      }
    },
    methods:{
      handleEnter(isEnter){
        if(isEnter){
          this.bgColor =  '#ccc';
          this.isShow = true;
        }else{
          this.bgColor =  '#fff';
          this.isShow = false;
        }
      },
      deleteItem(){
        if(window.confirm('你是否要删除吗？')){
          PubSub.publish('DELETODOS',this.index)
//          this.deleteTodo(this.index)
        }
      }
    }
  }
</script>
<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

</style>
