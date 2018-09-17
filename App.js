/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { text: 'Search' };
  }
  render() {
    const inputAccessoryViewID = "uniqueID";
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
        <View style={{ marginTop: 15, backgroundColor: '#fff', width: '90%', borderRadius: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
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
                  <TouchableOpacity>

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
                        fontSize:18
                      }}

                      subtitleStyle={{fontSize:16,  marginLeft: 15,height:50 }}
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
