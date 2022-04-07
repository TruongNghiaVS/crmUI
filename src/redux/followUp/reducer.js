import { SET_URL_DETAIL } from './action.js';

const initalState = {
    urlDetail: ""
};

function urlDetailReducer(state = initalState, action) {
    let newState = {...state};
    
    switch (action.type) {
      case SET_URL_DETAIL:
        newState = {
          urlDetail: action.payload
        }
        return newState;
      default:
        return state;
    }
}
  
export default urlDetailReducer;