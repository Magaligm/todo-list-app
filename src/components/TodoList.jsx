import { useState } from "react";
import Formulario from "./Formulario";
import TodosContainer from "./TodosContainer";

function App() {
  const [todos, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((old) => [...old, todo]);
  };

  return (
    <>
      <Formulario addTodo={addTodo} />
      {todos.length > 0 && <TodosContainer list={todos} />}
    </>
  );
}

export default App;
