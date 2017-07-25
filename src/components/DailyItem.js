/**
 * Created by xiangzhihong on 2017/5/13.
 * 天气预报列表Item
 */
'use strict';
import React, {Component} from 'react'
import {observer} from 'mobx-react'
import { View, Text, Image} from 'react-native';
import dateUtil from '../util/DateUtil';
import Config from '../config/Index';

@observer
export default class DailyItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let data = this.props.itemData;
        let iconUrl = Config.iconApi + data.cond.code_d + '.png';
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={[styles.text,{marginLeft:15}]}>{dateUtil.getMonthAndDayByDate(data.date)}</Text>
                    <Text style={[styles.text,{marginLeft:5}]}>{dateUtil.getWeekdayByDate(data.date)}</Text>
                </View>
                <View style={[styles.textContainer,{justifyContent:'center'}]}>
                    <Image style={styles.weatherIcon} source={{uri:iconUrl}}/>
                    <Text style={[styles.text,{alignSelf:'center',marginLeft:5}]}>{data.cond.txt_d}</Text>
                </View>
                <View style={[styles.textContainer,{justifyContent:'flex-end'}]}>
                    <Text style={[styles.text,{marginRight:15}]}>{data.tmp.min}~{data.tmp.max}°C</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },


    textContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        flexDirection: 'row'
    },

    text: {
        fontSize: 15,
        color: 'white',
    },
    weatherIcon: {
        width: 30,
        height: 30,
        tintColor: "#ffffff"
    }


}