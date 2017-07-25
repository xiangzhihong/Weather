/**
 * Created by xiangzhihong on 2017/5/13.
 */
'use strict';
import React, {Component} from 'react'
import { View, Text,TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react/native'
import weatherStore from '../stores/WeatherStore';
import SelectCity from '../ui/SelectCity';

@observer
export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let weatherData = weatherStore.getCurrentCityWeather();

        if (weatherData === null) {
            return this.renderLoading();
        } else {
            return this.renderHeader(weatherData);
        }
    }

    renderLoading = () => {
        return (
            <View style={styles.container}>
                <View style={styles.headerCenter}>
                    <Text style={styles.tempText}>0</Text>
                    <Text style={styles.condText}>Loading</Text>
                </View>
                <View style={styles.headerBottom}>
                    <Text style={styles.subText}>Loading</Text>
                    <Text style={styles.subText}>Loading</Text>
                </View>
            </View>
        )
    }

    renderHeader = (weatherData) => {
        var navigation = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.headerCenter} >
                    <TouchableOpacity style={styles.city} >
                    <Text style={styles.cityText} onPress={()=>navigation.navigate('CityScreen')}>+ 上海市</Text>
                    </TouchableOpacity>

                    <Text style={styles.tempText}>{weatherData.now.tmp+'°C'}</Text>
                    <Text style={styles.condText}>{weatherData.now.cond.txt}</Text>
                </View>
                <View style={styles.headerBottom}>
                    <Text style={styles.subText}>空气质量:{weatherData.aqi.city.qlty}</Text>
                    <Text style={styles.subText}>风力:{weatherData.now.wind.dir} {weatherData.now.wind.sc}级</Text>
                </View>
            </View>
        );

    }
}

const styles = {
    container: {
        height: 250
    },

    headerCenter: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    city:{
        flex: 1,
        marginTop:30,
        backgroundColor:'transparent',
    },
    cityText:{
        fontSize:32,
        color:'white',
        backgroundColor:'transparent',
        textAlign:'center',
    },
    tempText:{
        fontSize:80,
        color:'white',
        backgroundColor:'transparent',
        textAlign:'center',
    },

    condText:{
        fontSize:20,
        color:'white',
        backgroundColor:'transparent'
    },

    subText:{
        fontSize:15,
        color:'white',
        backgroundColor:'transparent'
    }


}