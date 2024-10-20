import { TodoIcon } from '../TodoIcon';
import './TodoItem.css'

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <TodoIcon color={props.completed ? 'green' : 'gray'} type='check' onClick={props.onCompleted} />

            <p className={`TodoItem__text ${props.completed ? 'TodoItem__text--completed' : ''}`}>{props.text}</p>
            
            <TodoIcon color='gray' type='edit' onClick={props.onEdit} />
            <TodoIcon color='gray' type='delete' onClick={props.onDelete} />
        </li>
    );
}

export { TodoItem }
