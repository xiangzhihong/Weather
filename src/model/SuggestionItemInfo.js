/**
 * Created by xiangzhihhong on 2017/5/22.
 * 生活建议指数
 */
'use strict';
import {observable, computed} from 'mobx';
export default class SuggestionItemInfo{

    @observable type;
    @observable brf;
    @observable txt;


    constructor(type, brf, txt) {
        this.type = type;
        this.brf = brf;
        this.txt = txt;
    }

}