import React from 'react';
import card from './Card.module.css';

function Card() {
  return (
    <main className={card.wrapper}>
      <header>
        <img
          className={card.logo}
          src={process.env.PUBLIC_URL + '/images/logo.svg'}
          alt='Company logo'
        />
      </header>
      <picture className={card.hero_image}>
        <source
          media='(min-width: 376px)'
          srcSet={process.env.PUBLIC_URL + '/images/hero-desktop.jpg'}
        />
        <img
          src={process.env.PUBLIC_URL + '/images/hero-mobile.jpg'}
          alt='a female model, in an orange shirt, posing in front of a plant'
        />
      </picture>
      <div className={card.typography}>
        <h1 className={card.headline}>
          <span className={`${card.mainColor} ${card.weightThin}`}>We're</span>{' '}
          coming soon
        </h1>
        <p className={`${card.mainColor} ${card.copy}`}>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form>
          <input placeholder='Email Address'></input>
          <button>
            <img
              src={process.env.PUBLIC_URL + '/images/icon-arrow.svg'}
              alt='caret pointing right'
            ></img>
          </button>
        </form>
      </div>
    </main>
  );
}

export default Card;
