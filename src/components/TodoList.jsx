import { useState } from "react";
import Formulario from "./Formulario";
import TodosContainer from "./TodosContainer";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((old) => [...old, todo]);
  };

  return (
    <>
      <Formulario addTodo={addTodo} />
      {todo.length > 0 && <TodosContainer list={todo} />}
    </>
  );
}

export default App;
