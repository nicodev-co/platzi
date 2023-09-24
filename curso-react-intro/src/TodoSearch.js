import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');
    console.log(`buscando ${searchValue}`);
    return (
        <input placeholder="Cortar cebolla" className='TodoSearch' 
        value={searchValue}
        onChange={
            (event) => {
               setSearchValue(event.target.value);
            }

        } />
    );
}

export { TodoSearch };