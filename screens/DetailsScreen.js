import React, {Fragment, useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import LogOutButton from '../components/LogOutButton'

const CURRENCY = 'RUB';
const COUNTRY ='RU';
const ORIGIN_PLACE ='SVO';
const DESTINATION_PLACE = 'JFK';
const outBoundDate= '2020-08-01';

function DetailsScreen(props) {

  const [isloading, onLoaded] =useState(true)
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    console.log('Effect')
    function getCollection(){
        const API = "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        const KEY = '967ea4cb99mshe3f35d13e38b90cp1519c4jsnc0fd1c9e0c89'    
        // const URL = `https://${API}/apiservices/browseroutes/v1.0/RU/RUB/en-US/SVO-sky/JFK-sky/2020-08-01`;
        const URL = `https://${API}/apiservices/browseroutes/v1.0/${COUNTRY}/${CURRENCY}/en-US/${ORIGIN_PLACE}-sky/${DESTINATION_PLACE}-sky/${outBoundDate}`;
        const headers = {
            "content-type":"application/octet-stream",
            "x-rapidapi-host":API,
            "x-rapidapi-key":KEY,
            "useQueryString":true
            }           

        const params = {
            "inboundpartialdate":"2020-08-01",
            "mode": 'no-cors'
            }

        const config = {
            method: 'get',
            url: URL,
            headers: headers,
            params: params
        }

        axios(config)
            .then(response => {
                
                    const dataList = response.data;
                    let dataOut = dataList.Quotes[0].QuoteDateTime.split('T');
                    // let dataFrom = changeFormatDate(dataOut[0])
                    let timeOut = dataOut[1].split(':');
                    timeOut = `${timeOut[0]}:${timeOut[1]}`
                    console.log('data', timeOut);
                    console.log(dataList);
                    setRoutes(dataList);
                    onLoaded(false);

            })
            .catch((err) => console.error('Ошибка получения', err))
        
            }
   
    getCollection();
}, []);


    const { navigation } = props;
    return (

        <Fragment>
            <View>
                <LogOutButton/>
            </View>

            <ScrollView>
          {(!isloading) ? routes.Quotes.map((item, index) => <View key={index} style={{height:30, width:100, backgroundColor:'#ff7438'}}>
          <Text>{item.MinPrice}</Text> 
          </View>) : (
          <View style={styles.loaderContainer}>
              <ActivityIndicator size="small" style={styles.loader} />
          </View>
  )}

        </ScrollView>
        </Fragment>

       
    );
  }


  const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    loaderContainer: {
        flex: 1
    }
 })

  export default DetailsScreen;