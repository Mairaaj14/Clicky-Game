import React from 'react';
import "./CharacterCard.css";

function CharacterCard(props) {
    return (
        <div>
            <div>
               <img alt={props.name} 
               src={props.image}
               onClick={() => props.shuffleCards(props.id)}
               className="click-img"
               />
            </div>
        </div>
    );
}




export default CharacterCard;