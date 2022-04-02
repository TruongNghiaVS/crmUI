import { combineReducers } from 'redux'
import numberReducer from './Demo/reducer'

let reducers = combineReducers({
	numberReducer: numberReducer
})

const rootReducer = (state, action) => {
	return reducers(state, action);
}

export default rootReducer;