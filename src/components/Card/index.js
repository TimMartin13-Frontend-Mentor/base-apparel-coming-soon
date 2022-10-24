import React from 'react';
import card from './Card.module.css';

function Card() {
  return (
    <main className={card.wrapper}>
      <header>
        <img
          className={card.hero_image}
          alt='young lady'
          src={process.env.PUBLIC_URL + '/images/hero-mobile.jpg'}
        ></img>
      </header>
      {/* Hero image */}
      {/* content */}
    </main>
  );
}

export default Card;
