import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';


export default class ProfileNavBar extends Component {

    render() {
        const { toggleActiveTab, activeTab,navigate,color } = this.props;
        // const { navigate } = this.props.navigation;
        return (
            <View style={(activeTab === 1) ? styles.active : styles.tabName} style={[styles.wrapper, { marginBottom: 0.5 }]}>
                <Icon
                    name='home'
                    size={30}
                    color='#fff'
                    onPress={() => toggleActiveTab(1)}
                    style={(activeTab === 1) ? styles.active : styles.tabName} />
                <Icon
                    name='search'
                    color={color}
                    size={30}
                    onPress={() => navigate('Listscreen')}
                    style={(activeTab === 2) ? styles.active : styles.tabName} />
                <Icon
                    name='user-circle'
                    color='#fff'
                    size={30}
                    type='font-awesome'
                    onPress={() => toggleActiveTab(1)}
                    style={(activeTab === 3) ? styles.active : styles.tabName} />

            </View>
        )
    }
}

const styles = new StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around',
        // paddingLeft:20,
        // borderTopWidth: 1.5,
        // borderBottomWidth: 1.5,
        // borderColor: '#e7e7e7',
        backgroundColor: '#4c4cff',
        paddingVertical: 15,

    },
    tabName: {
        color: '#c5c5c5'
    },
    active: {
        // borderBottomWidth :1,
        // borderBottomColor: '#4bb9ce',
        color: 'red'
    }
})