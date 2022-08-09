import React, { useState } from "react";
import "../todo.css";
import { FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaPen } from "react-icons/fa";

function Todo({ todo, deleteTodo, todos, setTodos }) {
  const [done, setDone] = useState(false);

  const [editingTodo, setEditingTodo] = useState(false);
  const [editingText, setEditingText] = useState("");

  function handleChange() {
    setDone(!done);
  }

  function editTodo(id) {
    const updateTodos = [...todos].map((todo) => {
      console.log(todo);
      if (todo.id === id) {
        todo.name = editingText;
      }
      return todo;
    });
    setTodos(updateTodos);
    setEditingTodo(null);
    setEditingText("");
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
          <span className={done ? "isDone" : ""}>{todo.name}</span>

          {editingTodo === todo.id ? (
            <input
              type="text"
              onChange={(e) => setEditingText(e.target.value)}
              value={editingText}
            />
          ) : null}
        </div>
        <div className="buttons">
          <button className="btn-danger" onClick={() => deleteTodo(todo.id)}>
            <FaTrash color="#cc4f4ffc" size={15} />
          </button>

          {editingTodo === todo.id ? (
            <button onClick={() => editTodo(todo.id)}>EDIT</button>
          ) : (
            <button className="edit" onClick={() => setEditingTodo(todo.id)}>
              <FaPen color="#FFC23C" size={15} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
