/**
 * Created by Fairy on 2018/12/13.
 */
export default {
  readTodos(){
    return JSON.parse(localStorage.getItem('todos_key') || '[]');
  },
  setTodos(value){
    localStorage.setItem('todos_key',JSON.stringify(value))
  }
}
