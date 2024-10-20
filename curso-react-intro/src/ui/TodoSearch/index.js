import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {
    const navigate = useNavigate();

    const onSearchValueChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        if (value) {
            navigate(`/search/${value}`);
        } else {
            navigate('/');
        }
    };
    return (
        <input placeholder="Cortar cebolla" className='TodoSearch'
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={!!loading} />
    );
}

export { TodoSearch };