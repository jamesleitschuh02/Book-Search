import React from 'react';


function SearchBar(props) {
    return (
        <>
        <form className="example" />
            <input type="text" placeholder="Search.." name="search" onChange={props.handleInputChange} />
            <button type="submit" onClick={props.searchBook}>Search</button>      
        </>
    );
}

export default SearchBar;