/* eslint-disable react/prop-types */
import React from 'react';
import Item from './Item';
import styles from './Nav.module.css';

const Items = ({ allLinks, Toggle, handleLinkChanged }) => {
	return (
		<ul className={Toggle ? styles.linksburger : styles.links}>
			{allLinks.map((link) => {
				return <Item key={link.name} name={link.name} link={link.link} handleLinkChanged={handleLinkChanged} />;
			})}
		</ul>
	);
};

export default Items;
