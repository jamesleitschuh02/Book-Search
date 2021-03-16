import React from 'react';
import './Card.css';
import Button from '../Button/Button';
import placeholder from '../../assets/images/placeholder.png';

function Card(props) {
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
                            <p className="card-text">{props.description}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <Button buttonTxt="Save" />
                    <Button buttonTxt="View" clickLink={props.clickLink} />
                </div>
            </div>
        </div>
    );
}

export default Card;