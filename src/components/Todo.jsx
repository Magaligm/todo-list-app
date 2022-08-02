import React, { useState } from "react";
import "../todo.css";
import { FaTrash } from "react-icons/fa";

function Todo({ todo }) {
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
        <button className="btn-danger">
          <text className="buttonTextDelete">
            <FaTrash />
          </text>
        </button>
      </div>
    </div>
  );
}

export default Todo;
