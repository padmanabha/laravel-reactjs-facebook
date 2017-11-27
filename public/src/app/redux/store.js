import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import reducer from './reducers';

//const middleware = applyMiddleware(thunk,promise,createLogger());
const middleware = applyMiddleware(thunk,promise);
const store = createStore(reducer, middleware);

export default store;