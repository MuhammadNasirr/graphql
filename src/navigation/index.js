import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Listscreen,ProfileNavBar,ListDetail,mapscreen } from '../components'

export const PrimaryStack = StackNavigator({
    mapscreen: { screen: mapscreen },
    Listscreen: { screen: Listscreen },
    ProfileNavBar: { screen: ProfileNavBar },
    ListDetail: { screen: ListDetail },
    // initialRouteName: 'mapscreen',
});