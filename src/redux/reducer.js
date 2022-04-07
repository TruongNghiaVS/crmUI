import { combineReducers } from 'redux';
import urlDetailReducer from './followUp/reducer';

let reducers = combineReducers({
	urlDetailReducer: urlDetailReducer
})

const rootReducer = (state, action) => {
	return reducers(state, action);
}

export default rootReducer;