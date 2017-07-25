/**
 * Created by nickming on 2017/5/10.
 */
'use strict';
import React, {Component} from 'react'
import {observer} from 'mobx-react/native'
import {View, Text} from 'react-native';
import SuggestionItem from './SuggestionItem';

@observer
export default class LifeSuggestion extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>今日生活指数</Text>
                <SuggestionItem index={0}/>
                <SuggestionItem index={1}/>
                <SuggestionItem index={2}/>
                <SuggestionItem index={3}/>
                <SuggestionItem index={4}/>
                <SuggestionItem index={5}/>
                <SuggestionItem index={6}/>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor:'transparent',
        marginTop:20
    },
    text: {
        fontSize: 15,
        color: 'white',
        marginLeft:10,
        marginBottom:10,
        flex: 1,
        backgroundColor: 'transparent'
    },

}