/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Root from './src/Root'

global.__APP__=true;
global.__ANDORID__=true;
global.__IOS__=false;

AppRegistry.registerComponent('Weather', () => Root);


