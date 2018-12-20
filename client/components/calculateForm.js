import React, {Component} from 'react'
import {connect} from 'react-redux'
import {calculateValue} from '../store'

const calculations = ['add', 'subtract', 'divide', 'multiply']
const symbols = ['+', '-', '/', '*']

class CalculateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calculation: '',
      firstNum: 0,
      secondNum: 0
    } //
  }
  changeNumberHandler = firstOrSecond => evt => {
    // Return a function that would change state based on firstOrSecond
    this.setState({[firstOrSecond]: evt.target.value})
  }
  clickHandler = evt => {
    this.setState({calculation: evt.target.value})
  }

  render() {
    return (
      <div>
        <label htmlFor="firstNum">
          <small>First Number: </small>
        </label>
        <input
          name="firstNum"
          type="number"
          value={this.state.firstNum}
          onChange={this.changeNumberHandler('firstNum')}
        />
        <label htmlFor="secondNum">
          <small>Second Number: </small>
        </label>
        <input
          name="secondNum"
          type="number"
          value={this.state.secondNum}
          onChange={this.changeNumberHandler('secondNum')}
        />
        <br />
        {calculations.map((elem, idx) => (
          <button
            key={symbols[idx]}
            type="button"
            value={elem}
            onClick={this.clickHandler}
          >
            {symbols[idx]}
          </button>
        ))}
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
    clickHandler: numbers => evt => {
        dispatch(calculateValue(evt.target.value, numbers))
    }
})

export default connect(null, mapDispatch)(CalculateForm)
