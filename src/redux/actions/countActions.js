import { ActionTypes } from "../constants"

const incrementCounter = () => {
  return (dispatch) => {
    dispatch({type:ActionTypes.INCREMENT,payload:{}});
  }
}

const decrementCounter = () => {
  return (dispatch) => {
    dispatch({type:ActionTypes.DECREMENT,payload:{}});
  }
}

export {incrementCounter, decrementCounter};