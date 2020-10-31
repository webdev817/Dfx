import React, { Component } from 'react'

class CircleSpinnerInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
  }

  onMinus = () => {    
    const { name, onChange } = this.props;
    if (this.state.value <= 0)
      return;
    this.setState({
      value: this.state.value - 1
    })
    onChange({ target: { name, value: "" + ( this.state.value - 1) } });
  }

  onPlus = () => {
    const { name, onChange } = this.props;
    if (this.state.value >= 9)
      return;    
    this.setState({
      value: this.state.value + 1
    })
    onChange({ target: { name, value: "" + (this.state.value + 1) } });
  }

  render() {
    return (
      <div className="circle-spinner-input">
        <button type="button" className="circle-spinner-input__minus" onClick={this.onMinus}>
          -
        </button>
        <div className="circle-spinner-input__text">{this.state.value}</div>
        <button type="button" className="circle-spinner-input__plus" onClick={this.onPlus}>
          +
        </button>
      </div>
    )
  }
}

export default CircleSpinnerInput