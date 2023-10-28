import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}) {
    return (
        <button className='icon-btn add-btn'
        onClick={() => {
            setOpenModal(state => !state);
        }}>
            <div className='add-icon'></div>
            <div className='btn-txt'>Add Todo</div>
        </button>
    );
}

export { CreateTodoButton }