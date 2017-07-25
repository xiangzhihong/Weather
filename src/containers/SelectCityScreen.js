/**
 * Created by xiangzhihong on 2017/5/18.
 */

'use strict';
import React, {Component, PropTypes} from 'react'
import SelectCity from '../ui/SelectCity'

export default class SelectCityScreen extends Component {

    static navigationOptions = {
        title: '选择城市',
        headerStyle: {
            backgroundColor: '#e75404'
        },
        headerTintColor: 'white'
    }

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <SelectCity/>
        )
    }
}

