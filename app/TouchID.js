import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Button,
  TouchableHighlight,
  Text,
  AlertIOS
} from 'react-native';

import TouchID from 'react-native-touch-id'

class FingerPrint extends React.Component {
  _pressHandler() {
    TouchID.authenticate('to demo this react-native component')
      .then(success => {
        AlertIOS.alert('Authenticated Successfully');
      })
      .catch(error => {
        AlertIOS.alert('Authentication Failed');
      });
  }

  render() {
    return (
      <View>
        ...
        <TouchableHighlight onPress={this._pressHandler}>
          <Text>
            Authenticate with Touch ID
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
};

export default FingerPrint
