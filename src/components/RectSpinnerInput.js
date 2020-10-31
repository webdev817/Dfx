import React, { Component } from 'react'

class RectSpinnerInput extends Component {
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
    if (this.state.value >= 3)
      return;    
    this.setState({
      value: this.state.value + 1
    })
    onChange({ target: { name, value: "" + (this.state.value + 1) } });
  }

  render() {
    const { value, name, placeholder, onChange } = this.props;
    return (
      <div className="rect-spinner-input">
        <button type="button" className="rect-spinner-input__minus" onClick={this.onMinus}>
          -
        </button>
        <input
            name = {name}
            type = "text"
            placeholder = {placeholder}
            value = {this.state.value + " " + placeholder}
            onChange = {onChange}
            disabled
          />          
        <button type="button" className="rect-spinner-input__plus" onClick={this.onPlus}>
          +
        </button>
      </div>
    )
  }
}

export default RectSpinnerInput