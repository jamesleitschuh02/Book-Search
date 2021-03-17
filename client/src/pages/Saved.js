import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Wrapper from '../components/Wrapper/Wrapper';
import Results from '../components/Results/Results';

function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);
    
    const loadAPI = () => {
        API.getBooks()
            .then(res => {
                console.log("RESULTS ARE " ,res.data);
                setSavedBooks(res.data);
            })
            .catch(err => console.log(err));      
    }

    useEffect(() => {
        loadAPI();
        console.log("OUR SAVED BOOKS ARE ", savedBooks);    
    }, []);

    return(
        <>
        <h1>Saved Books!</h1>
        {/* <Wrapper>
            <Test data={savedBooks} />
        </Wrapper> */}
        <Wrapper>
        {savedBooks.map((book) => {
                return (
                    <Results data={book} key={book.id} />
                )
            })}
        </Wrapper>
        </>
    );
}

export default Saved;