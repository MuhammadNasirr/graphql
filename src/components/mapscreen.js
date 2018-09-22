import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { ProfileNavBar } from '../components'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default class mapscreen extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#4c4cff',
        },
        title: 'APP',
        headerTitleStyle: {
            color: '#24ea45',
            fontSize: 30,
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
                <View style={{ marginTop: 10, backgroundColor: '#d00d0d', height: 40, width: '90%', borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>GET LOCATION</Text>
                </View>
                <View style={{
                    flex: 1,
                    overflow: 'hidden',
                    alignSelf: 'center',
                    backgroundColor: 'white',
                    height: '80%',
                    width: '90%',
                    borderRadius: 10,
                    // borderWidth:5,
                    // borderColor:'#fff',
                    shadowOpacity: 0.4,
                    elevation: 1.5,
                    marginTop: 5,
                    marginBottom: 5,
                    shadowRadius: 1,
                    shadowOffset: { height: 2, width: 0 }
                }}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{
                            height: '100%',
                            width: '100%',
                            shadowOffset: { width: 16.4, height: 1.6 }
                        }}
                        ref="map"
                        showsCompass
                        mapType="standard"
                        zoomEnabled={true}
                        pitchEnabled={true}
                        showsBuildings={true}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    ></MapView>
                </View>

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
        // overflow: 'hidden',
        // justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4c4cff',
    },
    // container: { ... StyleSheet.absoluteFillObject },
    map: { ...StyleSheet.absoluteFillObject },
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
