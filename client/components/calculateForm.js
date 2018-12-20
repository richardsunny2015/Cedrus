import React, {Component} from 'react'
import {connect} from 'react-redux'
import {calculateValue} from '../store'

const calculations = ['add', 'subtract', 'divide', 'multiply']
const symbols = ['+', '-', '/', '*']

class CalculateForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstNum: 0,
      secondNum: 0
    } //
  }
  changeNumberHandler = firstOrSecond => evt => {
    // Return a function that would change state based on firstOrSecond
    this.setState({[firstOrSecond]: Number(evt.target.value)})
  }
//   clickHandler = evt => {
//     this.setState({calculation: evt.target.value})
//   }

  render() {
    const {firstNum, secondNum} = this.state
    // create evt handler based on firstNum and secondNum
    const clickHandler = this.props.clickHandler([firstNum, secondNum])
    return (
      <div>
        <label htmlFor="firstNum">
          <small>First Number: </small>
        </label>
        <input
          name="firstNum"
          type="number"
          value={this.state.firstNum}
          onChange={this.changeNumberHandler('firstNum')} // create evt handler based on firstNum and secondNum
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
        {/*Map over operations to create buttons*/}
        {calculations.map((elem, idx) => (
          <button
            key={symbols[idx]}
            type="button"
            value={elem}
            onClick={clickHandler}
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
