import React, { useState } from "react";
import "../todo.css";
import { FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";


// function Todo({ id, todo, deleteTodo }) {
    function Todo({ todo, deleteTodo }) {
  const [done, setDone] = useState(false);

  function handleChange() {
    setDone(!done);
  }

  return (
    <div className="container">

    <div className="container-activities">
        <div>
      <input
        className="checkbox-input"
        type="checkbox"
        id="flexCheckDefault"
        name="priority"
        value={done}
        onChange={handleChange}
      />
      <span className={done? "isDone": ""}>{todo.name}</span>
      </div>
        <button className="btn-danger" onClick={() => deleteTodo(todo.id)}>
      
          <FaTrash    color="#cc4f4ffc" size={15}/>
     
        </button>
    </div>
    </div>
  );
}

export default Todo;
