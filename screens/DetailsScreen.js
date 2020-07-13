import React, {Fragment, useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, ActivityIndicator, Text } from 'react-native';
import { Container} from 'native-base';
import Card from '../components/Card';
import DatePickerFly from '../components/DataPicker';
import axios from 'axios';
import Slider from '../components/Slider';
import { connect } from 'react-redux';
import {getList} from '../actions/listActions'




const CURRENCY = 'RUB';
const COUNTRY ='RU';
const ORIGIN_PLACE ='SVO';
const DESTINATION_PLACE = 'JFK';
const outBoundDate= '2020-08-01';

function DetailsScreen(props) {
    // console.log(props)
//   const [isloading, onLoaded] =useState(true)
//   const [routes, setRoutes] = useState([]);

  useEffect(() => {
    console.log('Effect');
    props.getList();

    // function getCollection(){
    //     const API = "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
    //     const KEY = '967ea4cb99mshe3f35d13e38b90cp1519c4jsnc0fd1c9e0c89'    
    //     // const URL = `https://${API}/apiservices/browseroutes/v1.0/RU/RUB/en-US/SVO-sky/JFK-sky/2020-08-01`;
    //     const URL = `https://${API}/apiservices/browseroutes/v1.0/${COUNTRY}/${CURRENCY}/en-US/${ORIGIN_PLACE}-sky/${DESTINATION_PLACE}-sky/${outBoundDate}`;
    //     const headers = {
    //         "content-type":"application/octet-stream",
    //         "x-rapidapi-host":API,
    //         "x-rapidapi-key":KEY,
    //         "useQueryString":true
    //         }           

    //     const params = {
    //         "inboundpartialdate":"2020-08-01",
    //         "mode": 'no-cors'
    //         }

    //     const config = {
    //         method: 'get',
    //         url: URL,
    //         headers: headers,
    //         params: params
    //     }

    //     axios(config)
    //         .then(response => {
                
    //             const dataList = response.data;
    //             let dataOut = dataList.Quotes[0].QuoteDateTime.split('T');
    //             // let dataFrom = changeFormatDate(dataOut[0])
    //             let timeOut = dataOut[1].split(':');
    //             timeOut = `${timeOut[0]}:${timeOut[1]}`
    //             // console.log(dataList);
    //             setRoutes(dataList);
    //             onLoaded(false);
    //         })
    //         .catch((err) => console.error('Ошибка получения', err))
        
    //         }
   
}, []);


    const { navigation } = props;
    return (

        <Container>
            <View style={{flexDirection: "row", justifyContent: "space-between", padding:10}}>
                <View >
                    <Text style={{fontWeight: "bold", fontSize:18}}>Вылеты &#10095;  SVO - JFK</Text>
                </View>
                <DatePickerFly />
            </View>
            <Container  style={{flex: 1}}>
                    <Slider/>
            </Container>
            <Container style={{flex: 3}}>
                <View style={{padding: 10}}>
                   <Text style={{fontWeight: "bold", fontSize:14}}>Добавлено в Избранное: 10 рейсов</Text>
                </View>
           
                <ScrollView >
                    {(!props.loading) ? props.dataList.Quotes.map((item, index) => <Card key={index}  {...item}/>) : (
                        <View style={styles.loaderContainer}>
                            <ActivityIndicator size="small" style={styles.loader} />
                        </View>
                    )}
                </ScrollView>
            </Container> 
        </Container>
       
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

 const mapStateToProps = state => ({
    errorMessage: state.session.errorMessage,
    user: state.session.user,
    dataList: state.list.dataList,
    loading: state.list.loading
  })
  
  const mapDispatchToProps = dispatch => ({
    getList: () => dispatch(getList())
  })

  export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);