/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Wrapper from '../components/Wrapper/Wrapper';
import Results from '../components/Results/Results';
import './Saved.css';

function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);
    
    const loadAPI = () => {
        API.getBooks()
            .then(res => {
                setSavedBooks(res.data);
            })
            .catch(err => console.log(err));      
    }

    useEffect(() => {
        loadAPI();    
    }, []);

    return(
        <>
        <h1 className="savedBooks">Saved Books!</h1>
        <Wrapper>
        {savedBooks.map((book) => {
                return (
                    <Results data={book} key={book._id} id={book._id} search={false} />
                )
            })}
        </Wrapper>
        </>
    );
}

export default Saved;