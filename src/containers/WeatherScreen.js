/**
 * Created by xiangzhihong on 2017/5/18.
 */

'use strict';
import React, {Component} from 'react'
import WeatherIndex from '../ui/WeatherIndex'

export default class WeatherScreen extends Component {

    static navigationOptions = {
        title: null,
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <WeatherIndex navigation={this.props.navigation}/>
        )
    }
}

