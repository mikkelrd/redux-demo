import { createStore } from 'redux';
import { swapiReducer } from '../reducers/swapi';

export default createStore(swapiReducer);
