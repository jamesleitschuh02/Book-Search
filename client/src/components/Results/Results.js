import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Card from '../Card/Card';

function Results(props) {
    return(
        <Wrapper>
            {props.data.map((index) => {
                
                let thumbnail;
                let buyLink;
                if (index.volumeInfo.imageLinks){
                    thumbnail = index.volumeInfo.imageLinks.thumbnail;
                } else {
                    thumbnail = "placeholder";
                };

                if (index.saleInfo.buyLink) {
                    buyLink = index.saleInfo.buyLink;
                } else {
                    buyLink = "https://google.com"
                }
                
                let clickLink = event => {
                    event.preventDefault();
                    console.log(buyLink);
                    window.location.href = buyLink;
                };

                return (
                    <Card 
                        title={index.volumeInfo.title}
                        author={index.volumeInfo.authors}
                        picture={thumbnail}
                        description={index.volumeInfo.description}
                        clickLink={clickLink}
                    />
                )
            })}
        </Wrapper>
    );
}

export default Results;