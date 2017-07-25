/**
 * Created by xiangzhihhong on 2017/5/24.
 * 未来一周天气情况
 */
'use strict';
import {observable, computed} from 'mobx';

export default class WeatherItemItem {
    @observable cityName;
    @observable tmp;
    @observable iconUrl;

    constructor(cityName, tmp, iconUrl) {
        this.cityName = cityName;
        this.tmp = tmp;
        this.iconUrl = iconUrl;
    }
}