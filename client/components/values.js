import React from 'react'
import {connect} from 'react-redux'

const Values = props => {
  return (
    <div>
      {props.values.map((elem, idx) => (

          <p key={elem}>Value {idx}: {elem}</p>

      ))}
    </div>
  )
}

const mapState = state => ({
    values: state.values
})

export default connect(mapState)(Values)
