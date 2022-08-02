import React, {useState} from 'react'
import '../todo.css'

function Todo({todo}) {

    const [done, setDone] = useState(false);

    function handleChange(){
        setDone(!done);
    }

  return (
    <div>
        <input className="checkbox-input" type="checkbox"  id="flexCheckDefault" name="priority" value={done} onChange= {handleChange}/>
        <text className={done && 'isDone'}>{todo.name}</text>
    </div>
  )
}

export default Todo