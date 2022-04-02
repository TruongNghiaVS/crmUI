import { SET_UP, SET_DOWN } from './action.js'

const initalState = {
  number: 0
}

function numberReducer(state = initalState, action) {
  let newState = {...state};

  switch (action.type) {
    case SET_UP:
      newState = {
        number: action.payload + 1
      }
      return newState;
    case SET_DOWN:
      newState = {
        number: action.payload === 0 ? 0 : action.payload - 1
      }
      return newState;
    default:
      return state;
  }
}

export default numberReducer;