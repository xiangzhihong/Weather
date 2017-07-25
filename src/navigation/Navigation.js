import {StackNavigator} from 'react-navigation'

import WeatherScreen from '../containers/WeatherScreen'
import CityScreen from '../containers/SelectCityScreen';

const Navigation = StackNavigator({
    WeatherScreen: {screen: WeatherScreen},
    CityScreen: {screen: CityScreen},

});

export default Navigation
