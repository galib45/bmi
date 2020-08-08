import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="header-div">
				<h1>{this.props.title}</h1>
				<p>{this.props.subtitle}</p>
			</div>
		);
	}
}