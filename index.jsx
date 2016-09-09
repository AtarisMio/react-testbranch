/// <reference path="typings/globals/gulp/index.d.ts" />
/// <reference path="typings/globals/lodash/index.d.ts" />
/// <reference path="typings/globals/react/index.d.ts" />
/// <reference path="typings/globals/redux/index.d.ts" />
/// <reference path="typings/globals/webpack/index.d.ts" />
 
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import {Map as immutable_Map} from 'immutable';
import configureStore from './common/script/service/Redux';
import {HomePage} from './compontents/Homepage/index.jsx';

const initialState = immutable_Map({
    user: {
        name: 'asudhiuashdn',
        totalAvgInterest: 2.35
    }
});

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