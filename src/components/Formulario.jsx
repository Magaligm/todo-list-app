import "../formulario.css"
import { useState } from "react";
import Swal from 'sweetalert2'

function Formulario({addTodo}) {

    const initialState = {   //valores por defecto que tiene el state
        name: "",
        description: "",
        condition: "pending",
        priority: false
    }

    const [todo, setTodo] = useState(initialState)
    const {name, description, condition, priority} = todo //para no tener qe poner todo.name por ejemplo
    const handleSubmit = e =>{
        e.preventDefault()
        if(!name.trim()){        //esto iria con el useEffect (pero no recuerdo como, hay que cambiarlo)
            e.target[0].focus()
            Swal.fire({
                title: 'Error!',
                text: 'You have to put something',
                icon: 'error',
                confirmButtonText: 'Ok'
              });
              return;
        }
        if(!description.trim()){        
            e.target[1].focus()
            Swal.fire({
                title: 'Error!',
                text: 'You have to put something',
                icon: 'error',
                confirmButtonText: 'Ok'
              });
              return;
        }
        Swal.fire({
            title: 'Great!',
            text: 'Added task',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          addTodo({
             name: name,
             description: description,
             condition: condition === "pending" ? false : true,
             priority: priority,
             id: Date.now()

            }) //una vez que hago las validaciones lo envio aca
        console.log(todo)
        
    }


    const handleChange = e => {    //aca voy ahacer la relacion del input con su valor
        const {name, value, checked, type} = e.target
        
        setTodo((old) =>({    //aca voy a traer lo que ya tenia en los valores y voy a hacer el cambio, por eso el old
            ...old, 
            [name]: type === "ckeckbox" ? checked : value    //debo preguntar si el type es de tipo checkbox y ahi ver que tengo que devolver
        }))
    }
 
 
    return (
     <>
        <h3>Agregar TODO</h3>
        <form className="formTodo" onSubmit={handleSubmit}>
            <input type="text"
            className="form"
            name="name"
            placeholder="Enter todo name"
            value={name}
            onChange= {handleChange}
            />
            <textarea 
            placeholder="Enter description"
            name="description"
            value={description}
            onChange= {handleChange}
            />
            <select name="condition" className="form-select" value={condition} onChange= {handleChange} >
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
     </>
    );
  }
  
  export default Formulario