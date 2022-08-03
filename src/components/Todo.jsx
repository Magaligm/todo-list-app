import React, { useState } from "react";
import "../todo.css";
import { FaTrash } from "react-icons/fa";

function Todo({ id, todo, deleteTodo }) {
  const [done, setDone] = useState(false);

  function handleChange() {
    setDone(!done);
  }

  return (
    <div className="container-activities">
      <input
        className="checkbox-input"
        type="checkbox"
        id="flexCheckDefault"
        name="priority"
        value={done}
        onChange={handleChange}
      />
      <text className={done && "isDone"}>{todo.name}</text>
      <div>
        <button className="btn-danger" onClick={() => deleteTodo(id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Todo;
