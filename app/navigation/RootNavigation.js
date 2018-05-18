import React from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScreen from '../Index';
import Reminder from '../Reminder'

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
