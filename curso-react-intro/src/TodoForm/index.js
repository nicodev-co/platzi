import React from "react";
import "./TodoForm.css";
function TodoForm() {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Cortar cebolla para el almuerzo" />
            <div className="TodoForm-buttomContainer">
                <button type="" className="TodoForm-buttom TodoForm-buttom--cancel">Cancelar</button>
                <button type="submit" className="TodoForm-buttom TodoForm-buttom--add">Agregar</button>
            </div>
        </form>

    );
}

export { TodoForm };