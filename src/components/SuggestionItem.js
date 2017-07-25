/**
 * Created by xiangzhihong on 2017/5/22.
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {observer} from 'mobx-react/native'
import weatherStore from '../stores/WeatherStore';

@observer
export default class SuggestionItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        let itemIndex=this.props.index;
        if (weatherStore.loading) {
            return this._renderLoading();
        } else {
            return this._renderContent(weatherStore.lifeList[itemIndex]);
        }
    }

    _renderLoading = () => {
        return (
            <View style={styles.container}>
                <ActivityIndicator/>
            </View>
        )
    }

    _renderContent = (item) => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{item.type}:{item.brf}</Text>
                <Text style={[styles.text,styles.textBottom]}>{item.txt}</Text>
                <View style={styles.divider}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'transparent',
    },
    text: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        color:'white',
        fontSize:15
    },
    textBottom:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        color:'rgb(230,230,230)',
        fontSize:13
    },
    divider: {
        backgroundColor: 'rgba(100,100,100,0.2)',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        height: 1
    }
});