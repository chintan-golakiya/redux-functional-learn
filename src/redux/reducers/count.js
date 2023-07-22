import { ActionTypes } from "../constants";

const initState = {
  count : 0
};

export const countReducer= (state = initState, {type,payload}) => {
  switch(type) {
    case ActionTypes.INCREMENT:
      return {...state, count:state.count+1};

    case ActionTypes.DECREMENT:
      return {...state, count:state.count-1};
    
    default:
      return state;
  }
}