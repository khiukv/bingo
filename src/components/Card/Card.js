import React from 'react';
import './Card.scss';

const Card = (props) => {

  const cls = ['Card'];

  if(props.active) {
    cls.push('active');
  }

  if(props.winner) {
    cls.push('victory');
  }
  
  return (
    <div className={cls.join(' ')} >
      <img 
        src={props.image} 
        alt={props.alt}
        onClick={props.cardClickHandler}
      />
    </div>
  );
}

export default Card;