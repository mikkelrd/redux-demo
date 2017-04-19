import store from '../stores/swapi'
import Http from 'axios';

export const ActionTypes = {
	LOADING: 'LOADING',
	LOADED: 'LOADED',
	UPDATE_DATA: 'UPLOADED_DATA'
};


export function setLoadingState () {
	store.dispatch({type: ActionTypes.LOADING});
}

export function setLoadedState () {
	store.dispatch({type: ActionTypes.LOADED});
}

function updateData (data) {
	store.dispatch({
		type: ActionTypes.UPDATE_DATA,
		data
	});
}

export function getList (endpoint) {
	Http.get('https://swapi.co/api/' + endpoint)
		.then(response => updateData({list: response.data.results}));
}

export function getDetail (endpoint, id) {
	Http.get('https://swapi.co/api/' + endpoint + '/' + id)
		.then(response => updateData({detail: response.data}));
}
