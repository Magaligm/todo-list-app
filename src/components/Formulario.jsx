function Formulario() {
    return (
     <>
        <h3>Agregar TODO</h3>
        <form>
            <input type="text"
            className="form"
            name="name"
            placeholder="Enter todo name"
            />
            <textarea 
            placeholder="Enter description"
            name="description"
            />
            <select name="estado" className="form-select">
                <option value="Pendiente">Pending</option>
                <option value="Done">Done</option>
            </select>
            <div className="form-ckeckbox">
                <input className="checkbox-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="checkbox-label" htmlFor="flexCheckDefault">
                    Default checkbox
                </label>
            </div>
            <button type="submit" className="button">Add</button>
        </form>
     </>
    );
  }
  
  export default Formulario