/**
 * Created by xiangzhihong on 2017/5/19.
 */
'use strict';
import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {StyleSheet, View} from 'react-native';

@observer
export default class Divider extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let dividerHeight = this.props.dividerHeight;
        if (dividerHeight===null)
            dividerHeight=1;
        return (
            <View style={[styles.container,{height:dividerHeight}]}>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'rgba(100,100,100,0.1)'
    },


}