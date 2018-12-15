<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="selectAll"/>
    </label>
    <span>
          <span>已完成{{complateSize}}  / 全部{{todos.length}}</span>
        </span>
    <button class="btn btn-danger" v-show="complateSize" @click="clearSelectAll">清除已完成任务</button>
  </div>
</template>
<script>
  export default {
    props:{
      todos:Array,
      selectAllTodos: Function,
      clearSelectAll:Function
    },
    computed:{
      complateSize(){
        return this.todos.reduce((perv,curr) => perv + (curr.complate ? 1 : 0)  ,0)
      },
      selectAll:{
        get(){
          return this.todos.length === this.complateSize &&  this.complateSize > 0;
        },
        set(value){
          this.selectAllTodos(value)
        }
      }
    }
  }
</script>
<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
