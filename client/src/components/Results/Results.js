import React from 'react';
import CardSearch from '../CardSearch/CardSearch';
import CardResults from '../CardResults/CardResults';

function Results(props) {
    if (props.search === true){
        return(
            <CardSearch 
                title={props.data.title}
                author={props.data.author}
                picture={props.data.picture}
                synopsis={props.data.synopsis}
                link={props.data.link}
            />
    );
    } else {
    return(
            <CardResults
                title={props.data.title}
                author={props.data.author}
                picture={props.data.image}
                synopsis={props.data.synopsis}
                link={props.data.link}
                id={props.id}
            />
    );
    }
}

export default Results;