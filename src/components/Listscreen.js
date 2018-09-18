import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { ProfileNavBar } from '../components';
import { Query } from 'react-apollo';
import listProduct from './../queries/listProduct';

export default class Listscreen extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#4c4cff',
        },
        headerLeft: null
    }
    constructor(props) {
        super(props);
        this.state = { text: '', activeTab: 1 };
    }
    toggleActiveTab = (activeTab) => {
        this.setState({ activeTab })
    }
    render() {
        const inputAccessoryViewID = "uniqueID";
        const { activeTab } = this.state;
        const { navigate } = this.props.navigation;
        
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 10, backgroundColor: '#fff', width: '90%', borderRadius: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{flexDirection:'row'}}>
                        <Icon
                            name='search'
                            containerStyle={{
                                marginLeft: '2%'
                            }} />
                        <TextInput
                            style={{
                                width:'80%'
                            }}
                            inputAccessoryViewID={inputAccessoryViewID}
                            onChangeText={text => this.setState({ text })}
                            placeholder='Search'
                            value={this.state.text}
                        />
                    </View>
                    <Icon
                        name='mic'
                        containerStyle={{
                            marginRight: '2%'
                        }} />

                </View>
                <ScrollView style={{ width: '90%', marginVertical: 10 }}>
                    <ScrollView style={{}}>
                        <View containerStyle={{ backgroundColor: 'white', }}>
                            <Query query={listProduct}>
                                {({ loading, error, data }) => {
                                    console.log(data)
                                    if (loading) return <Text>...loading</Text>;
                                    if (error) return <Text>{error.message}</Text>;

                                    {
                                       return data.getProducts.map((l, i) => (
                                            <TouchableOpacity onPress={() => navigate('ListDetail')}>

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

                                                    subtitleStyle={{ fontSize: 16, marginLeft: 15, height: 60 }}
                                                    avatarContainerStyle={{ width: 70, height: 70 }}
                                                    subtitleContainerStyle={{}}
                                                    avatarStyle={{ borderColor: '#c5c5c5', borderWidth: 2, width: 75, height: 75, borderRadius: 10, }}
                                                    avatar={source = { uri: l.image_url }}
                                                    subtitleNumberOfLines={3}
                                                    title={l.title}
                                                    subtitle={l.description}
                                                />
                                            </TouchableOpacity>
                                        ))
                                    }
                                }}
                            </Query>
                        </View>
                    </ScrollView>
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
