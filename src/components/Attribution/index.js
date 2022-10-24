import React from 'react';
import attributionStyles from './Attribution.module.css';

const Attribution = () => {
  return (
    <h4 className={attributionStyles.attribution}>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href='https://www.frontendmentor.io/profile/TimMartin13'
        target='_blank'
        rel='noreferrer'
      >
        Tim Martin
      </a>
      .
    </h4>
  );
};

export default Attribution;
