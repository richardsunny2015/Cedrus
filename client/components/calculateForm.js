import React, {Component} from 'react'

export default class CalculateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calculation: '',
      firstNum: 0,
      secondNum: 0
    } //
  }

  render() {
    return (
      <div>
        <label htmlFor="firstNum">
          <small>First Number: </small>
        </label>
        <input name="firstNum" type="number" />
        <label htmlFor="secondNum">
          <small>Second Number: </small>
        </label>
        <input name="secondNum" type="number" />
      </div>
    )
  }
}
