import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import DetailsScreen from './screens/DetailsScreen';

import { createAppContainer } from 'react-navigation';

const Stack = createStackNavigator({
    LoginList: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Login'
        }
    },
    DetailsList: {
        screen: DetailsScreen,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Fly'
            };
        }
    }
 },
 {
    initialRouteName: 'LoginList'
 });
  
 export default createAppContainer(Stack);
