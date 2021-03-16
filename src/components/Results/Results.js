import React from 'react';
import Wrapper from '../Wrapper/Wrapper';

    // const makeResultsArray = data => {
    //     let newArray = [];
    //     data.map((index) => {
    //         let obj = {
    //             title: index.volumeInfo.title,
    //             author: index.volumeInfo.authors,
    //             image: index.volumeInfo.imageLinks.thumbnail,
    //             description: index.volumeInfo.description,
    //             link: index.saleInfo.buyLink
    //         };
    //         return (
    //             console.log(obj)
    //         )
    //     });

    // };

function Results(props) {
    return(
        <Wrapper>
            {props.data.map((index) => {
                return (index.volumeInfo.imageLinks)
        })}
        </Wrapper>
    );
}

export default Results;