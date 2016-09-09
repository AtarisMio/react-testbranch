import React, { Component, createElement, Children, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import styles from './css/index.css';


const HomePage_Header_unLogined = React.createClass({
    displayName : 'HomePage_Header_unLogined',
    render: ()=>{

    }
});

export class HomePage_Header_Logined extends Component{
    constructor(){
        super();
        this.displayName = 'HomePage_Header_Logined';
    }
    render(){
        console.log(styles);
        return (
            <header className={styles.header+' '+styles.logined_header} >
                <div className={styles.text_center}>
                    <div className={styles.leftIcon} ><img src={require('./img/icon_header.png')} alt="头像" /></div>
                    <p className={styles.rightText}>
                        <span className={styles.t1}>昨日收益</span>
                        <span className={styles.t2}>{this.props.user.totalAvgInterest}</span>
                    </p>
                </div>
            </header>
        )
    }
}