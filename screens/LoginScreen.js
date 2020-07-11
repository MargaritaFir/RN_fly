import React from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import {Thumbnail} from 'native-base';
import fav from '../assets/favicon.png'




function LoginScreen(props) {

    const image = "https://img1.fonwall.ru/o/en/eagle-black-beak-front-view.jpeg?route=mid&h=750";


    const { navigation } = props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('DetailsList')}
        />
        <Image 
        style={{ width: 50, height: 50}} 
        source={fav} ></Image>
      </View>
    );
  }


  export default LoginScreen;