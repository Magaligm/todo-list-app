import { useState } from "react";
import Formulario from "./Formulario";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    console.log(todo);
    setTodo((old) => [...old, todo]);
  };

  return (
    <>
      <Formulario addTodo={addTodo} />
    </>
  );
}

export default App;
