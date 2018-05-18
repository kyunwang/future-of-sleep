/**
 * @flow
 */

import React, { Component } from "react";
import { Platform, View, Picker } from "react-native";

import styled from "styled-components";

const hoursArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const minutesArray = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

const TimePickerCon = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TimePicker = styled.Picker`
	width: 100;
`;

const StyledText = styled.Text`
  color: #000;
`;

const HeaderText = styled.Text`
  font-size: 24;
`;

const SelectItemCon = styled.View`
  flex-direction: row;
`;

const CtaButton = styled.Button``;

type Props = {};

export default class App extends Component<Props> {
	state = {
		selectedHours: 0,
		selectedMinutes: 0,
	}

  render() {
    return (
      <View>
        <HeaderText>Set Timer</HeaderText>


        <TimePickerCon>
          <TimePicker
			 	selectedValue={this.state.selectedHours}
				  onValueChange={value => this.setState({selectedHours: value})}
			 >
            { hoursArray.map(item => <Picker.Item label={`${item}`} value={`${item}`} />) }
          </TimePicker>
          <StyledText>H</StyledText>

          <TimePicker
			 	selectedValue={this.state.selectedMinutes}
				 onValueChange={value => this.setState({selectedMinutes: value})}
			 >
			 	{ minutesArray.map(item => <Picker.Item label={`${item}`} value={`${item}`} />) }
          </TimePicker>
          <StyledText>M</StyledText>
        </TimePickerCon>

          <StyledText>{this.state.selectedHours}</StyledText>
          <StyledText>{this.state.selectedMinutes}</StyledText>

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

        <CtaButton
          title="Start"
          onPress={() => this.props.navigation.navigate("Reminder")}
        />
      </View>
    );
  }
}
