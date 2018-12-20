import React, {Component} from 'react'

const calculations = ['add', 'subtract', 'divide', 'multiply']

export default class CalculateForm extends Component {
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
    console.log(evt.target.value)
    this.setState({[firstOrSecond]: evt.target.value})
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

      </div>
    )
  }
}
