import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Listscreen,ProfileNavBar,ListDetail } from '../components'

export const PrimaryStack = StackNavigator({
    Listscreen: { screen: Listscreen },
    ProfileNavBar: { screen: ProfileNavBar },
    ListDetail: { screen: ListDetail },
    initialRouteName: 'ListDetail',
});