import { createStore, combineReducers } from 'redux';
import CharacteresReducer from './reducers/CharacteresReducer';
import ComicsReducer from './reducers/ComicsReducer';

export default createStore(
	combineReducers({
		CharacteresReducer,
		ComicsReducer
	}),
	{}
);