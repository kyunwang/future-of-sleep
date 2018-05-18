/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import styled from 'styled-components';

const StyledText = styled.Text`
	color: red;
`;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <StyledText>
          Welcome to React Native
        </StyledText>
        <StyledText>
          To get started, edit App
        </StyledText>
        <StyledText>
          {instructions}
        </StyledText>
      </View>
    );
  }
}
