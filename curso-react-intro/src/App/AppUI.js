import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <>
            <div className="card">

                <TodoCounter />
                <TodoSearch />

                <TodoList>
                    {loading && <TodosLoading />}
                    {error && <TodosError />}
                    {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                    {searchedTodos.map(todo => (
                        <TodoItem key={todo.text} text={todo.text}
                            completed={todo.completed}
                            onCompleted={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}

                </TodoList>

                <CreateTodoButton />

                {openModal && (

                    <Modal>
                        Funcionalidad de agregar TODOS
                    </Modal>
                )}
            </div>
        </>

    );
}

export { AppUI }