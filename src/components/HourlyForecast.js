/**
 * Created by xiangzhihong on 2017/5/13.
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, ListView} from 'react-native';
import HourlyItem from './HourlyItem';
import {observer} from 'mobx-react/native'
import weatherStore from '../stores/WeatherStore';

@observer
export default class HourlyForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _renderListView = () => {
        return (
            <ListView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                dataSource={weatherStore.hourlyDataSource}
                renderRow={this._renderItemView}>
            </ListView>
        )
    }

    _renderItemView = (item) => {
        return (
            <HourlyItem itemData={item}/>
        )
    }

    render() {
        return this._renderListView();
    }

}
