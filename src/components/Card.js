import React from 'react';


const Card = (props) => {

    return (
        <div className="bg-green tc dib br3 pa3 ma3 grow bw2 shadow-5">
            <img src={props.img} alt="robo" />
            <div>
                <h2>{props.name}</h2>
                <i>{props.email}</i>
            </div>
            
        </div>

    );

}
export default Card;