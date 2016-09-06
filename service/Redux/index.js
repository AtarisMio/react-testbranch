import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

export default function configureStore(initalState){
    const store = createStore(rootReducer, initalState, applyMiddleware(thunk));
    return store;
}