import React, {Component} from 'react';
import './Input.css';

export default class Input extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="input-div">
				<label htmlFor={this.props.id}>{this.props.label}</label>
				<input 
					type={this.props.type}
					placeholder={this.props.placeholder}
					onChange={this.props.onChange}
					value={this.props.value}
					inputMode={this.props.inputmode}
					pattern={this.props.pattern}
				/>
			</div>
		);
	}
}