import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return 'Still deciding';
			case false:
				return 'logged out'
			default:
				return 'Logged In!!!'
		}
	}
	render() {
		console.log(this.props);
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="left brand-logo">
						Survey Maker
					</a>
					<ul className="right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(Header);