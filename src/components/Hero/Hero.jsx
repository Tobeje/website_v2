import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.css';
import Guy from './Guy';

const Hero = ({ Text }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.herotext}>{Text}</div>
      <div className={styles.pcguy}>
        <Guy />
      </div>
    </div>
  );
};

Hero.propTypes = {
  Text: PropTypes.string.isRequired,
};

export default Hero;
