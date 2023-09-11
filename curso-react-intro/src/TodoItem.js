import './TodoItem.css'

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className={`icon ${props.completed ? 'icon-check--active' : ''}`}>V</span>
            <p className={`TodoItem__text ${props.completed ? 'TodoItem__text--completed' : ''}`}>{props.text}</p>
            <span className="TodoItem__icon-delete">X</span>
        </li>
    );
}

export { TodoItem }
