/**
 * Created by xiangzhihong on 2017/5/18
 * 导航栏
 */
'use strict';

import React, {
    Component,
    PropTypes
} from 'react'
import {
    StyleSheet,
    View,
    Animated,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native'
import px2dp from '../util/Utils'

export default class NavBar extends Component {

    static propTypes = {
        title: PropTypes.string,
        leftIcon: PropTypes.string,
        rightIcon: PropTypes.string,
        leftPress: PropTypes.func,
        rightPress: PropTypes.func,
        style: PropTypes.object
    }

    renderBtn(pos) {
        let render = (obj) => {
            const {name, onPress} = obj
            if (Platform.OS === 'android') {
                return (
                    <TouchableNativeFeedback onPress={onPress} >
                        <Image source={require('../images/back_white.png')} style={styles.btn}  color="#fff"/>
                    </TouchableNativeFeedback>
                )
            } else {
                return (
                    <TouchableOpacity onPress={onPress} >
                        <Image source={require('../images/back_white.png')} style={styles.btn} color="#fff"/>
                    </TouchableOpacity>
                )
            }
        }
        if (pos == "left") {
            if (this.props.leftIcon) {
                return render({
                    name: this.props.leftIcon,
                    onPress: this.props.leftPress
                })
            } else {
                return (<View style={styles.btn}/>)
            }
        } else if (pos == "right") {
            if (this.props.rightIcon) {
                return render({
                    name: this.props.rightIcon,
                    onPress: this.props.rightPress
                })
            } else {
                return (<View style={styles.btn}/>)
            }
        }
    }

    render() {
        return (
            <View style={[styles.topbar, this.props.style]}>
                {this.renderBtn("left")}
                <Animated.Text numberOfLines={1}
                               style={[styles.title, this.props.titleStyle]}>{this.props.title}</Animated.Text>
                {this.renderBtn("right")}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topbar: {
        height: Platform.OS === 'ios' ? 62 : 42,
        backgroundColor: "#e75404",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        paddingHorizontal: px2dp(10)
    },
    btn: {
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: px2dp(16),
        marginLeft: px2dp(5),
    }
});
