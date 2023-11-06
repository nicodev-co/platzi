import React from "react";
import "./TodoForm.css";

function TodoForm({ addTodo, setOpenModal }) {

    const [ newTodoValue, setNewTodoValue ] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Cortar cebolla para el almuerzo"
            value={newTodoValue}
            onChange={onChange} />
            <div className="TodoForm-buttomContainer">
                <button onClick={onCancel} type="" className="TodoForm-buttom TodoForm-buttom--cancel">Cancelar</button>
                <button type="submit" className="TodoForm-buttom TodoForm-buttom--add">Agregar</button>
            </div>
        </form>

    );
}

export { TodoForm };