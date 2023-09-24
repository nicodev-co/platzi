import './TodoCounter.css'

function TodoCounter({ total, completed }) {
    const title = total == completed
        ? 'Felicidades TODOS completados'
        : `Has completado ${completed} de ${total} TODOS`;

    return (
        <h1>
            {title}
        </h1>
    );
}

export { TodoCounter };