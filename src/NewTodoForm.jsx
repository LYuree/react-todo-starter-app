import { useState } from "react";

export default function NewTodoForm({onSubmit}){
    let [newItem, setNewItem] = useState("sdfsdf");

    function handleSubmit(e){
        e.preventDefault();    
        if (newItem === "") return;
        else onSubmit(newItem);
        setNewItem("");
      }

    return(<form className="new-item-form" onSubmit={handleSubmit} action="">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" name="" id="item"
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
      />
    </div>
    <button className="btn">Add</button>
  </form>)
}