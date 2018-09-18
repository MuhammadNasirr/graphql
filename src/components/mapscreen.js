import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { ProfileNavBar } from '../components'


export default class mapscreen extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#4c4cff',
        },
        title: 'APP',
        headerTitleStyle: {
            color: '#24ea45',
            // stroke: '#fff',
            marginLeft: '40%'
        },
        headerLeft: null
    }
    constructor(props) {
        super(props);
        this.state = { text: 'Search', activeTab: 1 };
    }
    toggleActiveTab = (activeTab) => {
        this.setState({ activeTab })
    }
    render() {
        const { navigate } = this.props.navigation;
        const { activeTab } = this.state;
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 10, backgroundColor: '#d00d0d',height:40, width: '90%', borderRadius: 10,alignItems:'center', justifyContent: 'center', flexDirection: 'row' }}>
                   <Text style={{fontSize:16,fontWeight:'bold', color:'#fff'}}>GET LOCATION</Text>
                </View>
                <ScrollView style={{ width: '90%', height: '80%', borderRadius: 20, backgroundColor: 'white', marginVertical: 10 }}>

                </ScrollView>

                <ProfileNavBar
                    activeTab={activeTab}
                    navigate={navigate}
                    color='white'
                    homecolor='red'
                    toggleActiveTab={this.toggleActiveTab} />
                <View style={{ display: (activeTab === 1) ? 'flex' : 'none' }}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4c4cff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
