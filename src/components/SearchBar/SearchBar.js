import React from 'react';


function SearchBar() {
    return (
        <>
        <form className="example" />
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">Search<i class="fa fa-search"></i></button>      
        </>
    );
}

export default SearchBar;