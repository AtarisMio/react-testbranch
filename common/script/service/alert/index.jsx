import {Component} from 'react';
import { Overlay } from '../Overlay/index.jsx';
import styles from './css/index.css';


@Overlay
class Alert extends Component{
    constructor(){
        super();
        this.displayName = 'Alert';
    }
    render(){
        return (
            <div className={styles.modal} >
                <div>
                    <div className={styles.title}>昨日收益说明</div>
                    <div className={styles.content}>
                        <p>计算方式: 您目前持有产品平均到每天的收益与昨日获得的奖励等收益之和。</p>
                        <p>注:  该收益为预估收益</p>
                    </div>
                    <div className={styles.buttons}>
                        <a>知道了</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default Alert