import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      Designed and Developed by
      <Button
        href="http://marcel-schmager.com/"
        target="noopener"
        className={styles.btntext}
      >
        Marcel Schmager
      </Button>
    </footer>
  );
};

export default Footer;
