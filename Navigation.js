import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import DetailsScreen from './screens/DetailsScreen';
import { createAppContainer } from 'react-navigation';
import LogOutButton from './components/LogOutButton';

const Stack = createStackNavigator({
    LoginList: {
        screen: LoginScreen,
        navigationOptions: (props) => {
            return {
                title: 'Login',
                headerRight: () => <LogOutButton {...props}/>
            };
        }
    },
    DetailsList: {
        screen: DetailsScreen,
        navigationOptions: (props) => {
            return {
                title: 'Fly',
                headerRight: () => <LogOutButton {...props}/>
            };
        }
    }
 },
 {
    initialRouteName: 'LoginList'
 });


  
 export default createAppContainer(Stack);
