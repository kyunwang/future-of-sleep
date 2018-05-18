/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  View
} from 'react-native';

import styled from 'styled-components';

const StyledText = styled.Text`
	color: red;
`;

const HeaderText = styled.Text`
	font-size: 24;
`;

const SelectItemCon = styled.View`
	flex-direction: row;
`;

const CtaButton = styled.Button`

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
        <HeaderText>Set Timer</HeaderText>

		  <SelectItemCon>
				<StyledText>Alarm sound</StyledText>
				<StyledText>Ambient Sound</StyledText>
		  </SelectItemCon>
		  <SelectItemCon>
				<StyledText>Volume</StyledText>
				<StyledText>Volume slider</StyledText>
		  </SelectItemCon>
		  <SelectItemCon>
				<StyledText>Vibration</StyledText>
				<StyledText>Relax</StyledText>
		  </SelectItemCon>


        <CtaButton title="Start"/>
      </View>
    );
  }
}
