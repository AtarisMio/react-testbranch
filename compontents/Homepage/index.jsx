import React, { Component, createElement, Children, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import {HomePage_Header_Logined as Header} from './Header/index.jsx';



class __HomePage extends Component{
    constructor(){
        super();
        this.displayName = 'HomePage';
    }
    render(){
        return (<div><Header {...this.props} /> {this.props.user.name}</div>);
    }
}

export const HomePage = connect(
    (state)=>{return {user:state.get('user')}}
    )(__HomePage);

