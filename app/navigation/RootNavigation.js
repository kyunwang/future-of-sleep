import React from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScreen from '../Index';
import Reminder from '../Reminder'
import Timer from '../Timer'

const RootStack = StackNavigator({
	Overview: {
		// screen: HomeTabNav,
		headerTitle: 'overview',
		screen: HomeScreen,
	},
	Reminder: {
		// screen: HomeTabNav,
		headerTitle: 'reminder',
		screen: Reminder,
	},
	Timer: {
		// screen: HomeTabNav,
		headerTitle: 'countdown',
		screen: Timer,
	},
}, {
	initialRouteName: 'Overview',
	// navigationOptions: ({ navigation }) => {
	// 	const { params } = navigation.state;
	// 	return {
	// 		headerTitle: params ? params.title : '',
	// 	};
	// },
	headerMode: 'none', // Turn off the default header
});

function RootNavigation() {
	return <RootStack />;
}

export default RootNavigation;
