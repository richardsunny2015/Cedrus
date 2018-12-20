import axios from 'axios'

// ACTION TYPES

const ADD_VALUE = 'ADD_VALUE'

// INITIAL STATE

const defaultState = []

// ACTION CREATORS

const addValue = value => ({type: ADD_VALUE, value})

// THUNK CREATORS

export const calculateValue = (calculation, numbers) => async dispatch => {
  try {
    const res = await axios.post('/arithmetic', {calculation, numbers})
    dispatch(addValue(res.data))
  } catch (err) {
    console.error(err)
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_VALUE:
      return [...state, action.value]
    default:
      return state
  }
}
