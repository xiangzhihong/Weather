/**
 * Created by xiangzhihong on 2017/5/18.
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import dateUtil from '../util/DateUtil';
import Config from '../config/Index';

export default class HourlyItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        let data = this.props.itemData;
        let iconUrl=Config.iconApi+data.cond.code+'.png';
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{dateUtil.getHoursAndMinsByDate(data.date)}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Image style={styles.weatherIcon} source={{uri:iconUrl}}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{data.tmp}°C</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        height:100,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'transparent'
    },
    textContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    weatherIcon: {
        width: 30,
        height: 30,
        tintColor: "#ffffff"
    },
    text: {
        fontSize: 15,
        color: 'white',
    }
}