import React from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScreen from '../index';

const RootStack = StackNavigator({
	Overview: {
		// screen: HomeTabNav,
		headerTitle: 'overview',
		screen: HomeScreen,
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