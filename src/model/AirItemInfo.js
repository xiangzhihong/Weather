/**
 * Created by xiangzhihong on 2017/5/22.
 * 空气质量
 */
'use strict';
import {observable, computed} from 'mobx';

export default class AirItemInfo {
    @observable eng_name;
    @observable value;
    @observable chn_name;
    @observable unit;

    constructor(eng_name, value, chn_name, unit) {
        this.eng_name = eng_name;
        this.value = value;
        this.chn_name = chn_name;
        this.unit = unit;
    }
}
