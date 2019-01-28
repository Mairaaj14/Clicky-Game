import React from 'react';
import "./index.css";

function CharacterCard(props) {
    return (
        <div>
            <div>
               <img alt={props.name} 
               src={props.image}
               onClick={() => props.shuffleCards(props.id)}
               className="click-item"
               />
            </div>
        </div>
    );
}




export default CharacterCard;