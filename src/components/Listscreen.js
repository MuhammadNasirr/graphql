import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { ProfileNavBar } from '../components'


export default class Listscreen extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#4c4cff',
        },
    }
    constructor(props) {
        super(props);
        this.state = { text: 'Search', activeTab: 1 };
    }
    toggleActiveTab = (activeTab) => {
        this.setState({ activeTab })
    }
    render() {
        const inputAccessoryViewID = "uniqueID";
        const { activeTab } = this.state;
        const { navigate } = this.props.navigation;
        const list = [
            {
                name: 'Hair, Skin & Nails Formula',
                avatar_url: 'https://cache.pakistantoday.com.pk/5c6NgsBa.jpeg',
                subtitle: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit'
            },
            {
                name: 'Hair, Skin & Nails Formula',
                avatar_url: 'https://cache.pakistantoday.com.pk/5c6NgsBa.jpeg',
                subtitle: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit'
            },
            {
                name: 'Hair, Skin & Nails Formula',
                avatar_url: 'https://cache.pakistantoday.com.pk/5c6NgsBa.jpeg',
                subtitle: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit'
            },
            {
                name: 'Hair, Skin & Nails Formula',
                avatar_url: 'https://cache.pakistantoday.com.pk/5c6NgsBa.jpeg',
                subtitle: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit'
            },
            {
                name: 'Hair, Skin & Nails Formula',
                avatar_url: 'https://cache.pakistantoday.com.pk/5c6NgsBa.jpeg',
                subtitle: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit'
            },
            {
                name: 'Hair, Skin & Nails Formula',
                avatar_url: 'https://cache.pakistantoday.com.pk/5c6NgsBa.jpeg',
                subtitle: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit'
            },
        ]
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 10, backgroundColor: '#fff', width: '90%', borderRadius: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Icon
                        name='search'
                        containerStyle={{
                            marginLeft: '2%'
                        }} />
                    <TextInput
                        style={{
                            marginLeft: '-60%'
                        }}
                        inputAccessoryViewID={inputAccessoryViewID}
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                    />
                    <Icon
                        name='mic'
                        containerStyle={{
                            marginRight: '2%'
                        }} />

                </View>
                <ScrollView style={{ width: '90%', marginVertical: 10 }}>
                    <ScrollView style={{}}>
                        <View containerStyle={{ backgroundColor: 'white', }}>
                            {
                                list.map((l, i) => (
                                    <TouchableOpacity  onPress={() => navigate('ListDetail')}>

                                        <ListItem
                                            // onPress={() => navigate('MCHProjectScreen')}
                                            containerStyle={{
                                                borderBottomColor: 'transparent',
                                                marginBottom: 10,
                                                height: 100,
                                                backgroundColor: '#fff', borderRadius: 10,
                                            }}
                                            key={i}
                                            hideChevron
                                            titleStyle={{
                                                marginLeft: 15,
                                                // marginTop:-30,
                                                fontWeight: 'bold',
                                                fontSize: 18
                                            }}

                                            subtitleStyle={{ fontSize: 16, marginLeft: 15, height: 50 }}
                                            avatarContainerStyle={{ width: 70, height: 70 }}
                                            subtitleContainerStyle={{}}
                                            avatarStyle={{ borderColor: '#c5c5c5', borderWidth: 2, width: 75, height: 75, borderRadius: 10, }}
                                            avatar={source = { uri: l.avatar_url }}
                                            subtitleNumberOfLines={3}
                                            title={l.name}
                                            subtitle={l.subtitle}
                                        />
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </ScrollView>
                </ScrollView>

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