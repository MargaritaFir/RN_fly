import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import DetailsScreen from './screens/DetailsScreen';
import LogOutButton from './components/LogOutButton'

const Stack = createStackNavigator();


function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">        
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} options={({ navigation, route }) => ({
                headerRight: props => <LogOutButton {...props} />,
                headerTitle: null,
          })}  />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Navigation;