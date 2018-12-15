<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodos="addTodos"  />
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <Footer :todos="todos" :selectAllTodos="selectAllTodos" :clearSelectAll="clearSelectAll" />
    </div>
  </div>
</template>
<script>
  import PubSub from 'pubsub-js';

  import Header from './components/Header.vue';
  import List from './components/List.vue';
  import Footer from './components/Footer.vue';

  import storageUtils from '../utils/storageUtils';
  export default {
    data(){
      return {
        todos: [],
      }
    },
    mounted(){
      setTimeout(()=>{
        this.todos = storageUtils.readTodos()
      },2000)

      PubSub.subscribe('DELETODOS',(msg, index)=>{
        this.deleteTodo(index);
      })
    },
    methods:{
      addTodos(todo){
        this.todos.unshift(todo)
      },
      deleteTodo(index){
        this.todos.splice(index, 1)
      },
      selectAllTodos(isSelectAll){
        this.todos.forEach(item => item.complate = isSelectAll)
      },
      clearSelectAll(){
        this.todos = this.todos.filter(item => !item.complate)
      }
    },
    watch:{
      todos:{
        keep: true,
//        handler:function (value) {
////          localStorage.setItem('todos_key',JSON.stringify(value))
//          storageUtils.setTodos(value)
//        }
        handler:storageUtils.setTodos
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
