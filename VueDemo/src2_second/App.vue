<template>
  <div class="todo-container">
    <div class="todo-wrap">
       <Header :addToDo="addToDo"/>
       <List :todos="todos" :deleteTodo="deleteTodo" />
       <Footer :todos="todos" :selectAllTodos="selectAllTodos" :clearComplate="clearComplate" />
    </div>
  </div>
</template>
<script>
  import Header from './components/Header.vue';
  import List from './components/List.vue';
  import Footer from './components/Footer.vue';
  import StorageUtils from '../utils/storageUtils';
  export default {
      data(){
        return {
          todos: StorageUtils.readTodos()
        }
      },
      methods:{
       addToDo(todo){
         this.todos.unshift(todo)
       },
        deleteTodo(index){
         this.todos.splice(index,1)
        },
        selectAllTodos(isSeclectAll){
          this.todos.forEach(item => item.complate = isSeclectAll)
        },
        clearComplate(){
          this.todos = this.todos.filter(item => !item.complate)
        }
      },
      watch:{
        todos:{
          keep:true,
          handler: function (val) {
            StorageUtils.setTodos(val)
          }
//          handler: StorageUtils.setTodos
        }
      },
      components:{
        Header,
        List,
        Footer
      }
    }
</script>
<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
