import React, {Fragment, useEffect, useState} from 'react';
import img_1 from '../assets/img_1.png';
import img_2 from '../assets/img_2.png';
import img_3 from '../assets/img_3.png';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Image
  } from 'react-native';
   
  import Slick from 'react-native-slick';
   
  var styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems:"center",
         height:164
    },
    slide1: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: "row"
    },
    slide2: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: "row"

    },
    slide3: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: "row"

    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',

    }
  })

  export default function SlickGallery(){

      return (
        <Slick style={styles.wrapper} showsButtons={true} height={165} showsPagination={false} >
          <View
            style={styles.slide1}
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={img_1}
            />
            <Image
              resizeMode="contain"
              style={styles.image}
              source={img_2}
            />
          </View>
          
          <View
            style={styles.slide2}
          >
         <Image
              resizeMode="contain"
              style={styles.image}
              source={img_3}
            />

            <Image
              resizeMode="contain"
              style={styles.image}
              source={img_1}
            />

            
          </View>
          <View
            style={styles.slide3}
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={img_2}
            />

            <Image
              resizeMode="contain"
              style={styles.image}
              source={img_3}
            />      

          </View>
        </Slick>
      )
  }
   