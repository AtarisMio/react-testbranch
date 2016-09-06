import React, { Component, createElement, Children, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import {HomePage_Header_Logined as Header} from './Header/Header.jsx';



const __HomePage = React.createClass({
    render: function(){
        return (<div><Header /> {this.props.state}</div>);
    }
});

export const HomePage = connect(function MapStateToProps(state){
    return {
        state:state.get('0').get('user')
    }
})(__HomePage);

