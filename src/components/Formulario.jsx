import "../formulario.css"
import { useState } from "react";
import Swal from 'sweetalert2'

function Formulario({addTodo}) {

    // const initialState = {   //valores por defecto que tiene el state
    //     name: "",
    //     // description: "",
    //     // condition: "pending",
    //     // priority: false
    //     id: ''
    // }
    const [todoName, setTodoName] = useState('');

    // const [todo, setTodo] = useState({})

    const handleSubmit = e =>{
        e.preventDefault()
        if(!todoName.trim()){        //esto iria con el useEffect (pero no recuerdo como, hay que cambiarlo)
            e.target[0].focus()
            Swal.fire({
                title: 'Error!',
                text: 'You have to put something',
                icon: 'error',
                confirmButtonText: 'Ok'
              });
              return;
        }
        // if(!description.trim()){        
        //     e.target[1].focus()
        //     Swal.fire({
        //         title: 'Error!',
        //         text: 'You have to put something',
        //         icon: 'error',
        //         confirmButtonText: 'Ok'
        //       });
        //       return;
        // }

        // Swal.fire({
        //     title: 'Great!',
        //     text: 'Added task',
        //     icon: 'success',
        //     confirmButtonText: 'Ok'
        //   });

         const todo = {name: todoName, id: Date.now()} // creo el todo con el nombre y id
        console.log(todo)
        
     
        addTodo(todo) //agrego el todo a la lista de todos 
        setTodoName(''); //reset teh todoName value
        
    }


    const handleChange = e => {    //aca voy ahacer la relacion del input con su valor
        // const {name, value, checked, type} = e.target
        

        setTodoName(e.target.value)
     
    }
 
 
    return (
     <>
        
        {/* <div className="container">
        <div className="formContainer">

        <h3>Agregar TODO</h3>
        <form className="formTodo" onSubmit={handleSubmit}>
            <input type="text"
            className="formInput"
            name="name"
            placeholder="Enter todo name"
            value={name}
            onChange= {handleChange}
            />
            <textarea 
            placeholder="Enter description"
            className="formInput"
            name="description"
            value={description}
            onChange= {handleChange}
            />
            <select name="condition" className="form-select formInput" value={condition} onChange= {handleChange} >
                <option value="Pendiente">Pending</option>
                <option value="Done">Done</option>
            </select>
            <div className="form-ckeckbox">
                <input className="checkbox-input" type="checkbox" checked="" id="flexCheckDefault" name="priority" value={priority} onChange= {handleChange}/>
                <label className="checkbox-label" htmlFor="flexCheckDefault">
                    Default checkbox
                </label>
            </div>
            <button type="submit" className="button">ADD</button>
        </form>
        </div>
        </div> */}


<div className="container">
        <div className="formContainer">

        <h3>Agregar TODO</h3>
        <form className="formTodo2" onSubmit={handleSubmit}>
            <input type="text"
            className="formInput"
            name="name"
            placeholder="Enter todo name"
            value={todoName}
            onChange= {handleChange}
            />
        
            <button type="submit" className="button"><span className="buttonText"> ADD </span></button>
        </form>
        </div>
        </div>
     </>
    );
  }
  
  export default Formulario