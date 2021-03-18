import React from 'react';
import './SearchBar.css';


function SearchBar(props) {
    return (
        <>
        <form className="example" />
            <input type="text" placeholder="Search.." name="search" onChange={props.handleInputChange} />
            <br></br>
            <button classname="searchBtn" type="submit" onClick={props.searchBook}>Search</button>      
        </>
    );
}

export default SearchBar;