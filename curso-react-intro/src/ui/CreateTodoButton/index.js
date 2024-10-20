import './CreateTodoButton.css';

function CreateTodoButton({onClick}) {
    return (
        <button className='icon-btn add-btn'
        onClick={onClick}>
            <div className='add-icon'></div>
            <div className='btn-txt'>Add Todo</div>
        </button>
    );
}

export { CreateTodoButton }