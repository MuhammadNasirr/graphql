

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { PrimaryStack } from './src/navigation'
// appsync work
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';

import appSyncConfig from './aws-exports';

const client = new AWSAppSyncClient({
  url: appSyncConfig.graphqlEndpoint,
  region: appSyncConfig.region,
  auth: {
    type: appSyncConfig.authType,
    apiKey: appSyncConfig.apiKey,
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Search' };
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Rehydrated>
          <PrimaryStack />
        </Rehydrated>
      </ApolloProvider>
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
