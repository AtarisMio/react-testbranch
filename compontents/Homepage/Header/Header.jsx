import React, { Component, createElement, Children, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';

const HomePage_Header_unLogined = React.createClass({
    displayName : 'HomePage_Header_unLogined',
    render: ()=>{

    }
});

export const HomePage_Header_Logined = React.createClass({
    displayName : 'HomePage_Header_Logined',
    
    render: ()=>{
        return (
            <header>
                <div>
                    <div><img src={require('./img/icon_header.png')} alt="头像" /></div>
                    <p>
                        <span>昨日收益</span>
                        <span>this.state.user.totalAvgInterest</span>
                    </p>
                </div>
            </header>
        )
    }
});