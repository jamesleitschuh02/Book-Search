import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Wrapper from '../components/Wrapper/Wrapper';
import SearchBar from '../components/SearchBar/SearchBar';
import Results from '../components/Results/Results';

function Search() {
    const [search, setSearch] = useState("");
    const [bookResults, setBookResults] = useState([]);

    const searchBook = event => {
        event.preventDefault();

        API.BookSearch(search)
            .then(res => {
                setBookResults(res.data.items);
            });
    };

    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        console.log("OUR NEW BOOK RESULTS ARE ", bookResults);
    },[bookResults]);

    return (
        <Wrapper>
            <SearchBar
                handleInputChange={handleInputChange}
                searchBook={searchBook}    
            />
            <Results data={bookResults}/>
        </Wrapper>
    );
}

export default Search;