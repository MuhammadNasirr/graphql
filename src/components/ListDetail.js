import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
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
        const { activeTab } = this.state;

        return (
            <View style={styles.container}>
                <View style={{ width: '90%', height: '80%', borderRadius: 20, backgroundColor: 'white', marginVertical: 10 }}>
                    <View style={{ backgroundColor: '#000066',justifyContent:'space-between', alignItems: 'center', height: 40, borderTopRightRadius: 20, borderTopLeftRadius: 20, flexDirection: 'row' }}>
                        <View style={{flexDirection:'row',alignItems: 'center'}}>
                            <Icon name='chevron-left' size={30} color='#fff' />
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Back</Text>
                        </View>
                        <Icon containerStyle={{marginRight:5}} name='star' size={30} color='#fff' />
                    </View>
                    <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>Hair, Skin & Nails Formula</Text>

                </View>

                <ProfileNavBar
                    activeTab={activeTab}
                    navigate={navigate}
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
