import {ActionTypes} from '../actions/swapi';

const initialState = {
	loading: false,
	list: [],
	detail: {},
};

export function swapiReducer (state = initialState, action) {
	switch (action.type) {
		case ActionTypes.LOADING:
			return {...state, loading: true};
		case ActionTypes.LOADED:
			return {...state, loading: false};
		case ActionTypes.UPDATE_DATA:
			return {...state, ...action.data};
		default:
			return state
	}
}
