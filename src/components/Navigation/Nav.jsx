/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import Items from './Items';
import styles from './Nav.module.css';

class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			allLinks: props.Links,
			toggle: false
		};

		this.linkClicked = this.linkClicked.bind(this);
		this.Toggle = this.Toggle.bind(this);
	}

	linkClicked() {
		this.setState({ toggle: false });
	}

	Toggle() {
		this.setState((prevState) => ({ toggle: !prevState.toggle }));
	}

	render() {
		const { toggle, allLinks } = this.state;

		return (
			<div>
				<nav>
					<div className={styles.leftnav}>
						<div className={styles.Name}>
							<Link to="/">
								<h4>
									<strong>MARCEL SCHMAGER</strong>
								</h4>
							</Link>
						</div>
						<div
							className={cx(styles.burger, styles.burgerslip, toggle ? styles.open : 0)}
							onClick={this.Toggle}
							role="menuitem"
							tabIndex="0"
						>
							<div className={styles.burgerlines} />
						</div>
					</div>
					<Items allLinks={allLinks} Toggle={toggle} handleLinkChanged={this.linkClicked} />
				</nav>
			</div>
		);
	}
}

export default Nav;
