/**
 * Created by xiangzhihong on 2017/5/10.
 */

'use strict';
import React, {Component} from 'react'
import {observer} from 'mobx-react/native'
import {ListView} from 'react-native';
import weatherStore from '../stores/WeatherStore';
import DailyItem from './DailyItem';

@observer
export default class DailyForecast extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _renderListView = () => {
        return (
            <ListView style={styles.container} dataSource={weatherStore.dailyDataSource}
                        renderRow={this._renderItemView}>
            </ListView>
        )
    }

    _renderItemView=(item)=>{
        return(
            <DailyItem itemData={item}/>
        )
    }

    render() {
        return this._renderListView();
    }
}

const styles = {
    container: {
        flex: 1
    }
}