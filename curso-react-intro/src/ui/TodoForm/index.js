import React from "react";
import "./TodoForm.css";
import { useNavigate } from "react-router-dom";

function TodoForm(props) {
    const navigate = useNavigate();
    const [ newTodoValue, setNewTodoValue ] = React.useState(props.defaultText || '');

    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newTodoValue);
        navigate('/');
       
    }

    const onCancel = () => {
        navigate('/');
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>{props.label}</h2>
            <textarea placeholder="Cortar cebolla para el almuerzo"
            value={newTodoValue}
            onChange={onChange} />
            <div className="TodoForm-buttomContainer">
                <button onClick={onCancel} type="" className="TodoForm-buttom TodoForm-buttom--cancel">Cancelar</button>
                <button type="submit" className="TodoForm-buttom TodoForm-buttom--add">{props.submitText}</button>
            </div>
        </form>

    );
}

export { TodoForm };