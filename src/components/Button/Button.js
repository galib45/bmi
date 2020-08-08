import React, {Component} from 'react';
import './Button.css';

export default class Input extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button className="button" onClick={this.props.onClick}>
				{this.props.text}
			</button>
		);
	}
}