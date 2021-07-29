import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
