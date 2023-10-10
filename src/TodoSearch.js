import React from 'react';
import './TodoSearch.css';

function TodoSearch({
    searchValue,
    setSearchValue,
}){
    
    return(
    <input 
        placeholder="what is your next To-Do?" 
        className='todo-search' 
        value ={searchValue}
        onChange={(event)=>{
            setSearchValue(event.target.value);
            }
        }
    />);
}
export {TodoSearch};