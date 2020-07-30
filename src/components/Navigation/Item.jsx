import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import styles from './Nav.module.css';

const Item = ({ name, link }) => {
  return (
    <li>
      <Button>
        <Link to={link} className={cx(styles.link)}>
          {name}
        </Link>
      </Button>
    </li>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Item;
