import React from 'react';
import API from '../../utils/API';
import './Card.css';
import Button from '../Button/Button';
import placeholder from '../../assets/images/placeholder.png';

function Card(props) {

    const clickLink = event => {
        event.preventDefault();
        window.location.href = props.link;
    };

    let saveBook = event => {
        event.preventDefault();
        API.saveBook({
            title: props.title,
            author: props.author,
            synopsis: props.synopsis,
            image: props.picture,
            link: props.link                        
        })
            .then(console.log("Book saved!"))
            .catch(err => console.log(err));
    }
    
    return (
        <div className="card mb-3" styles="max-width: 540px;">
            <div className="row g-0">
                <div className="col-md-4">
                    {props.picture === "placeholder" ? <img className="bookImg" src={placeholder} alt="..." /> : <img className="bookImg" src={props.picture} alt="..." />}
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h5 className="card-title">{props.author}</h5>
                            <p className="card-text">{props.synopsis}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <Button buttonTxt="Save" function={saveBook}/>
                    <Button buttonTxt="View" function={clickLink} />
                </div>
            </div>
        </div>
    );
}

export default Card;