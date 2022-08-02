import React from 'react';
import Todo from './Todo';

function TodosContainer({ list }) {
  return (
    <div>
      {list.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default TodosContainer;
