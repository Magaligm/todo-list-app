import { useState } from "react";
import Formulario from "./Formulario";
import Todo from "./Todo";
import TodosContainer from "./TodosContainer";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((old) => [...old, todo]);
  };

  const deleteTodo = (id) => {
    console.log(id)
    setTodos((old) => old.filter((item) => item.id !== id)); //me traigo la lista que tengo y comparo que sea igual para qe me lo elimine
  };

  return (
    <>
      <Formulario addTodo={addTodo} />
      {todos.map((item) => (
        <Todo key={item.id} todo={item} deleteTodo={deleteTodo} />
      ))}
      {/* {todos.length > 0 && (
        <TodosContainer list={todos} deleteTodo={deleteTodo} />
      )} */}
    </>
  );
}

export default TodoList;
