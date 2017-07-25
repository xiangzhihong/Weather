/**
 * Created by xiangzhihong on 2017/5/18.
 * 天气页面主页
 */
'use strict';
import React, {Component} from 'react'
import {StyleSheet, View, Image,ScrollView, RefreshControl} from 'react-native';
import Header from '../components/HeaderContent'
import DailyForecast from '../components/DailyForecast'
import {observer} from 'mobx-react/native'
import weatherStore from '../stores/WeatherStore'
import stateStore from '../stores/StateStore'
import HourlyForecast from '../components/HourlyForecast'
import ApiConfig from '../config/Index'
import Divider from '../components/Divider'
import AirCondition from '../components/AirCondition'
import LifeSuggestion from '../components/LifeSuggestion'

@observer
export default class WeatherIndex extends Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this._refreshWeatherData();
        stateStore.loadLocalCityData();
    }

    _refreshWeatherData = () => {
        weatherStore.requestWeatherByName(weatherStore.currentCityName);
    }

    _handleScrollEvent = (event) => {
        let offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY > 250) {
            stateStore.scrollToEnd = true
        } else {
            stateStore.scrollToEnd = false
        }
    }


    render() {
        if (__ANDORID__) {
            return this._renderAndroid();
        } else {
            return this._renderIOS();
        }
    }

    //渲染Android
    _renderAndroid = () => {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: ApiConfig.backgroundWallpaper}}
                       resizeMethod={'scale'} blurRadius={25}>

                    <ScrollView style={styles.container}
                                scrollEventThrottle={200}
                                onScroll={(e) => this._handleScrollEvent(e)}
                                showsVerticalScrollIndicator={false}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={weatherStore.loading}
                                        onRefresh={this._refreshWeatherData}
                                        tintColor={'white'}
                                        titleColor={'white'}
                                        title={weatherStore.loading ? "刷新中..." : '下拉刷新'}/>}>
                        <Header navigation={this.props.navigation}/>
                        <Divider/>
                        <HourlyForecast/>
                        <Divider/>
                        <DailyForecast/>
                        <AirCondition/>
                        <LifeSuggestion/>
                    </ScrollView>
                </Image>
            </View>

        )
    }

    //渲染IOS
    _renderIOS = () => {
        return (
            <View style={styles.container}>
                <Image style={styles.container} source={{url: ApiConfig.backgroundWallpaper}}
                       resizeMethod={'scale'} blurRadius={25}>
                    <ScrollView style={styles.container}
                                scrollEventThrottle={200}
                                onScroll={(e) => this._handleScrollEvent(e)}
                                showsVerticalScrollIndicator={false}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={weatherStore.loading}
                                        onRefresh={this._refreshWeatherData}
                                        tintColor={'white'}
                                        titleColor={'white'}
                                        title={weatherStore.loading ? "刷新中..." : '下拉刷新'}/>}>
                        <Header navigation={this.props.navigation}/>
                        <Divider/>
                        <HourlyForecast/>
                        <Divider/>
                        <DailyForecast/>
                        <AirCondition/>
                        <LifeSuggestion/>
                    </ScrollView>
                </Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    addImage: {
        height: 45,
        width: 45,
    },
    text: {
        fontSize: 18,
        color: '#999999',
        marginTop: 20,
        textAlign: 'center'
    }
});
