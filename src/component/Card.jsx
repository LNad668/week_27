import style from './Card.module.css';
import React from 'react'

const {card, namestyl, cardButton, cardSelected}= style;

function Card({name, price, speed, selected}) {
    
    return (
        <div className={selected ? card : cardSelected} >
            <div className={namestyl}>{name}</div>
            <div className='price'>{price}</div>
            <div className='speed'>{speed}</div>
            
            <div className='info'>Обьем трафика не ограничен</div> 
            <button className={cardButton}>купить!</button>
            
        </div>
    );
}

export default Card;