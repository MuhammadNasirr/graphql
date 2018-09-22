import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { ProfileNavBar } from '../components'


export default class ListDetail extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#4c4cff',
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
        const data = this.props.navigation.state.params
        const { activeTab } = this.state;
        console.log(data)
        return (
            <View style={styles.container}>
                <ScrollView style={{ width: '90%', height: '80%', borderRadius: 20, backgroundColor: 'white', marginVertical: 10 }}>
                    <View style={{ backgroundColor: '#000066', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 40, borderTopRightRadius: 20, borderTopLeftRadius: 20, flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon onPress={() => navigate('Listscreen')} name='chevron-left' size={30} color='#fff' />
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Back</Text>
                        </View>
                        <Icon containerStyle={{ marginRight: 5 }} name='star' size={30} color='#fff' />
                    </View>
                    <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{data.l.title}</Text>
                    <View style={{ height: 1, width: '100%', marginTop: 5, backgroundColor: '#000' }} />
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            style={{ marginVertical: 10, width: 100, height: 100, alignItems: 'center' }}
                            source={{ uri: data.l.image_url }}
                        />
                    </View>
                    <View style={{ height: 1, width: '100%', marginTop: 5, backgroundColor: '#c5c5c5' }} />
                    <View>
                        <Text style={{ color: '#000', marginLeft: 10, fontSize: 18, fontWeight: 'bold' }}>Description:</Text>
                        <Text style={{ color: '#b2b2bd', marginLeft: 10, fontSize: 16, fontWeight: 'normal' }}>{data.l.description}</Text>
                    </View>
                    <View style={{ height: 1, width: '100%', marginTop: 5, backgroundColor: '#c5c5c5' }} />
                    <Text style={{ color: '#000', marginLeft: 10, fontSize: 18, fontWeight: 'bold' }}>Location:</Text>
                    <View style={{ height: 1, width: '100%', marginTop: 5, backgroundColor: '#c5c5c5' }} />
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Image
                            style={{marginLeft: 10, marginVertical: 2,borderRadius:10,borderColor:'#c5c5c5',borderWidth:1, width: 40, height: 40 }}
                            source={{ uri: 'https://cache.pakistantoday.com.pk/5c6NgsBa.jpeg' }}
                        />
                        <Text style={{ color: '#b2b2bd', marginLeft: 10, fontSize: 16, fontWeight: 'normal' }}>0.1 miles</Text>
                        <Text style={{ color: '#000', marginRight: 10, fontSize: 16, fontWeight: 'normal' }}>$ 11.99</Text>
                    </View>
                    <View style={{ height: 1, width: '100%', marginTop: 5, backgroundColor: '#c5c5c5' }} />
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Image
                            style={{marginLeft: 10, marginVertical: 2,borderRadius:10,borderColor:'#c5c5c5',borderWidth:1, width: 40, height: 40 }}
                            source={{ uri: 'https://cache.pakistantoday.com.pk/5c6NgsBa.jpeg' }}
                        />
                        <Text style={{ color: '#b2b2bd', marginLeft: 10, fontSize: 16, fontWeight: 'normal' }}>0.2 miles</Text>
                        <Text style={{ color: '#000', marginRight: 10, fontSize: 16, fontWeight: 'normal' }}>$ 11.99</Text>
                    </View>
                    <View style={{ height: 1, width: '100%', marginTop: 5, backgroundColor: '#c5c5c5' }} />
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Image
                            style={{marginLeft: 10, marginVertical: 2,borderRadius:10,borderColor:'#c5c5c5',borderWidth:1, width: 40, height: 40 }}
                            source={{ uri: 'https://cache.pakistantoday.com.pk/5c6NgsBa.jpeg' }}
                        />
                        <Text style={{ color: '#b2b2bd', marginLeft: 10, fontSize: 16, fontWeight: 'normal' }}>0.4 miles</Text>
                        <Text style={{ color: '#000', marginRight: 10, fontSize: 16, fontWeight: 'normal' }}>$ 11.99</Text>
                    </View>
                    <View style={{ height: 1, width: '100%', marginTop: 5, backgroundColor: '#c5c5c5' }} />
                </ScrollView>

                <ProfileNavBar
                    activeTab={activeTab}
                    navigate={navigate}
                    color='red'
                    homecolor='#fff'
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
