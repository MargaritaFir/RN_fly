import React from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';


function DetailsScreen(props) {

    const { navigation } = props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }


  export default DetailsScreen;