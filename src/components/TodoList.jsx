import { useState } from "react";
import Formulario from "./Formulario";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const [editingTodo, setEditingTodo] = useState(false);
  const [editingText, setEditingText] = useState("");

  const addTodo = (todo) => {
    setTodos((old) => [...old, todo]);
  };

  const deleteTodo = (id) => {
    console.log(id);
    setTodos((old) => old.filter((item) => item.id !== id)); //me traigo la lista que tengo y comparo que sea igual para qe me lo elimine
  };

  function editTodo(id) {
    const updateTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updateTodos);
    setEditingTodo(null);
    setEditingText("");
  }

  return (
    <>
      <Formulario addTodo={addTodo} />
      {todos.map((item) => (
        <Todo
          key={item.id}
          todo={item}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </>
  );
}

export default TodoList;
