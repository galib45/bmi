import React, { Component } from 'react';
import Input from './components/Input/Input';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import './App.css';

export default class App extends Component {
  
  state = {
    weight: '',
    height: '',
    bmi: ''
  };

  onWeightChange = (event) => {
    this.setState({bmi: ''});
    this.setState({weight: event.target.value});
  };

  onHeightChange = (event) => {
    this.setState({bmi: ''});
    this.setState({height: event.target.value});
  };

  onClick = () => {
    if(this.state.weight.search(/^[0-9][0-9]*(\.[0-9][0-9]*)?$/) != -1) {
      if(this.state.height.search(/^[0-9][0-9]*-[0-9][0-9]*$/) != -1) {
        let weight = parseFloat(this.state.weight);
        let feet = parseInt(this.state.height.split('-')[0]);
        let inches = parseInt(this.state.height.split('-')[1]);
        let height = (feet*12 + inches)*2.54/100;
        let BMI = weight / (height*height);
        this.setState({bmi: BMI.toFixed(2)});
      } else {
        alert('Invalid Height!');
      }
    } else {
      alert('Invalid Weight!');
    }
  };

  render() {
    let bmiview = <p></p>;
    if(this.state.bmi != '') {
      bmiview = <h2 className="bmi">Your BMI is {this.state.bmi}</h2>;
    }
    return (
      <div className="container">
        <Header title="BMI Calculator" subtitle="Measure your BMI today!" />
        {bmiview}
        <Input 
          label="Weight (kg)" 
          placeholder="Your weight in kilograms"
          inputmode="numeric"
          pattern="[0-9][0-9]*(\.[0-9][0-9]*)?"
          value={this.state.weight}
          onChange={this.onWeightChange}
        />
        <Input 
          label="Height (ft-in)" 
          placeholder="Example: 5ft 6in => 5-6"
          inputmode="numeric"
          pattern="[0-9][0-9]*-[0-9][0-9]*"
          value={this.state.height}
          onChange={this.onHeightChange}
        />
        <Button text="Calculate" onClick={this.onClick}/>
      </div>
    );
  }
}