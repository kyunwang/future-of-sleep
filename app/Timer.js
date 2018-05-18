import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Button,
  TouchableHighlight,
  Text,
  AlertIOS,
  Vibration
} from 'react-native';

import CountDown from 'react-native-countdown-component';

type Props = {};
export default class Timer extends Component<Props> {

  render() {
    const DURATION = 10000
    const PATTERN = [1000, 2000, 3000]

    return (
      <View>
      <CountDown
        until={3}
        onFinish={() => Vibration.vibrate(PATTERN)}
        onPress={() => alert('hello')}
        size={20}
      />
      </View>
    );
  }
}
