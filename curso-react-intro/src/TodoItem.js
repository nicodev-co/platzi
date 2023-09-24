import './TodoItem.css'

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className={`icon ${props.completed ? 'icon-check--active' : ''}`}
                onClick={props.onCompleted}>V</span>
            <p className={`TodoItem__text ${props.completed ? 'TodoItem__text--completed' : ''}`}>{props.text}</p>
            <span className="TodoItem__icon-delete"
            onClick={props.onDelete}>X</span>
        </li>
    );
}

export { TodoItem }
