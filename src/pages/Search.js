import React from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import SearchBar from '../components/SearchBar/SearchBar';
import Results from '../components/Results/Results';

function Search() {
    return (
        <Wrapper>
            <SearchBar />
            <Results />
        </Wrapper>
    );
}

export default Search;