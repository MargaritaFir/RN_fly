import React from 'react';
import {StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import plane from '../assets/plane.png'
import PlaneSVG from '../components/PlaneSVG';
import HeartSVG from '../components/HeartSVG';
import {changeFormatDate} from '../shared/sharedFunctions'

function Card(props) {
    console.log('props',props)
    const minPrice=props.MinPrice;
    const dataFly = changeFormatDate(props.OutboundLeg.DepartureDate.split('T')[0]);

    // Время вылета не нашла, только дату, поэтому время добавила из QuoteDateTime, как поняла - это дата изменения стоимости билета.
    let boundTime = props.QuoteDateTime.split('T')[1].split(':');
    boundTime = `${boundTime[0]}:${boundTime[1]}`
    return (

          <List>
            <ListItem avatar>
              <Left>
                  <View style={styles.icon_container}>
                  <PlaneSVG/>
                </View>
                
              </Left>
              <Body  >
                <Text style={styles.body_header}>Moscow (SVO) <Text note> &#10230; </Text> New York (JFK)</Text>
                <Text note>{dataFly} - {boundTime}</Text>
                <Text note>Аэрофлот</Text>
              </Body>
              <Right>
                <HeartSVG/>
                <Text note style={styles.container_price}> <Text note style={{fontSize: 10}}>Price: </Text>{minPrice} &#8381;</Text>
                
                
              </Right>
            </ListItem>
          </List>
    )
  }

  const styles = StyleSheet.create({
    icon_container: {
        backgroundColor: "rgba(0, 119, 255, 0.05)",
        width: 55,
        height: 55,
        borderRadius:50,
        borderBottomColor: null,
        justifyContent:"center",
        alignItems:"center"
    },
    body_header:{
      fontSize:  14,
    },
    container_price: {
        position: "absolute",
        bottom: 5,
        width: 100,
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'


    }
  })



export default Card;