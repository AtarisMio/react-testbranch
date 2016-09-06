/// <reference path="typings/globals/gulp/index.d.ts" />
/// <reference path="typings/globals/lodash/index.d.ts" />
/// <reference path="typings/globals/react/index.d.ts" />
/// <reference path="typings/globals/redux/index.d.ts" />
/// <reference path="typings/globals/webpack/index.d.ts" />
 
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import configureStore from './service/Redux';
import {HomePage} from './compontents/Homepage/HomePage.jsx';

const initialState = Immutable.fromJS([{
    user: {
        name: 'asudhiuashdn'
    }
}]);

var $$$ = (selector)=>{
    var results = document.querySelectorAll(selector);
    if(results.length===0)
        return null;
    if(results.length===1)
        return results[0];
    return results;
};
ReactDOM.render(
    <Provider store={configureStore(initialState)}>
        <HomePage />
    </Provider> , $$$('#content'));