import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'

const middleWare = [thunk];
const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools
    (applyMiddleware(...middleWare)));

export default store;    