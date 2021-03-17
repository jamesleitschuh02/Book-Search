import React from 'react';
import Card from '../Card/Card';

function Results(props) {
    return(
            <Card 
                title={props.data.title}
                author={props.data.author}
                picture={props.data.picture}
                synopsis={props.data.synopsis}
                link={props.data.link}
            />
    );
}

export default Results;