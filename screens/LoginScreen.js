import React from 'react';
import {Button, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
import {Thumbnail} from 'native-base';
import clouds from '../assets/clouds.png';




function LoginScreen(props) {

    const image = "https://img1.fonwall.ru/o/en/eagle-black-beak-front-view.jpeg?route=mid&h=750";


    const { navigation } = props;
    return (
      <View style={styles.container}>
        <ImageBackground source={clouds} style={styles.image}>
        <View style={{backgroundColor: "rgba(255, 255, 255, 0.6)", width: '100%', height: '100%', justifyContent: "center",alignItems: "center",}}>

          <Form style={{height:100, width:200, backgroundColor: 'white'}}>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>

          </Form>

          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('DetailsList')}
        />
        </View>

        </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center",

    },
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    }
  });
  

  export default LoginScreen;