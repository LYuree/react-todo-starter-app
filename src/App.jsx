import { useEffect, useState } from "react"
import "./styles.css"
import NewTodoForm from "./NewTodoForm";
import { TodoList } from "./TodoList";

let num = 2;
num = 3;

export default function App(){
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if(localValue === null) return [];
    return JSON.parse(localValue);
  });

  // useEffect: run the callback as soon
  // as the second argument changes
  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos])
  
  function addTodo(title){
    setTodos(prevTodos => {
      console.log("Set state callback #2");
      return [
        ...prevTodos,
        {id : crypto.randomUUID(),
              title,
              completed: false
        }
      ]
    })
  }

  function toggleTodo(id, completed){
    console.log("Toggle todo called");
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id)
          return {...todo, completed};
        return todo;
      })
    })
  }

  function deleteTodo(id){
    setTodos (currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

  return(
  <>
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className="header">Todo List (how original :)</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoList>
  </>
  )
}