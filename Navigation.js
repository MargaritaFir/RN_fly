import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import DetailsScreen from './screens/DetailsScreen';

import { createAppContainer } from 'react-navigation';
import LogOutButton from './components/LogOutButton'

const Stack = createStackNavigator({
    LoginList: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Home'
            
        }
    },
    DetailsList: {
        screen: DetailsScreen,
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Fly',
                headerRight: () => <LogOutButton/>
            };
        }
    }
 },
 {
    initialRouteName: 'LoginList'
 });
  
 export default createAppContainer(Stack);
