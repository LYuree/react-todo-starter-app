import { useState } from "react"
import "./styles.css"

let num = 2;
num = 3;

export default function App(){
  let [newItem, setNewItem] = useState("sdfsdf");
  const [todos, setTodos] = useState([]);
  // newItem = "aaaaa";
  // console.log(1);

  function handleSubmit(e){
    e.preventDefault();
    // setTodos([...todos,
    //   {id : crypto.randomUUID(),
    //     title: newItem,
    //     completed: false
    //   }
    // ])
    // console.log(todos);
    // setTodos([...todos,
    //   {id : crypto.randomUUID(),
    //     title: newItem,
    //     completed: false
    //   }
    // ])
    // console.log(todos);

    // setTodos(prevTodos => {
    //   // console.log(prevTodos);
    //   console.log("Set state callback #1");
    //   return [
    //     ...prevTodos,
    //     {id : crypto.randomUUID(),
    //           title: newItem,
    //           completed: false
    //     }
    //   ]
    // })

    // console.log("In between the hooks");

    setTodos(prevTodos => {
      // console.log(prevTodos);
      console.log("Set state callback #2");
      return [
        ...prevTodos,
        {id : crypto.randomUUID(),
              title: newItem,
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
    <form className="new-item-form" onSubmit={handleSubmit} action="">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" name="" id="item"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List (how original :)</h1>
    <ul className="list">
      {todos.length === 0 && "No Todos."}
      {todos.map (todo =>{
      return (
        <li>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={e => toggleTodo(todo.id, e.target.checked)}
            />
            {todo.title}
          </label>
          <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">
            Delete
          </button>
        </li>
      )})}
    </ul>
  </>
  )
}