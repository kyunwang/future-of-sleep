/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Button
} from 'react-native';

import FingerPrint from './TouchID'
import styled from 'styled-components';

const StyledText = styled.Text`
	color: black;
`;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Reminder extends Component<Props> {
  render() {
    return (
      <View>
        <StyledText>
        Make sure your device is plugged in to your charger.
        Do not close the app.
        </StyledText>
        <StyledText>
          make sure you are lying down or reclined in a chair
        </StyledText>
        <FingerPrint navigation={this.props.navigation}/>
      </View>
    );
  }
}
