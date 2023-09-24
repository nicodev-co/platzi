import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <button className='CreateTodoButton' 
            onClick={
                (event) => {
                    
                    console.log('hola');
                    console.log(event);
                }

            }>Agregar</button>
    );
}

export { CreateTodoButton }