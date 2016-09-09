import { Component } from 'react';
import Styles from './css/index.css';

export const Overlay = ()=>
    Target =>
        class OverlayDecorator extends Component{
            constructor(){
                super();
                this.displayName = 'Overlay';
            }
            render(){
                return (
                    <div className={Styles.overlay}>
                        <Target />
                    </div>
                )
            }
        }