import React, {Fragment, useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, ActivityIndicator, Text } from 'react-native';
import { Container} from 'native-base';
import Card from '../components/Card';
import DatePickerFly from '../components/DataPicker';
import Slider from '../components/Slider';
import { connect } from 'react-redux';
import {getList, getDateList} from '../actions/listActions'



function DetailsScreen(props) {
    // console.log(props)
//   const [isloading, onLoaded] =useState(true)
//   const [routes, setRoutes] = useState([]);

  useEffect(() => {
    console.log('Effect');
   
    props.getList();
   
}, []);


    const { navigation } = props;
    return (

        <Container>
            <View style={{flexDirection: "row", justifyContent: "space-between", padding:10}}>
                <View >
                    <Text style={{fontWeight: "bold", fontSize:18}}>Вылеты &#10095;  SVO - JFK</Text>
                </View>
                <DatePickerFly {...props} />
            </View>
            <Container  style={{flex: 1}}>
                    <Slider/>
            </Container>
            <Container style={{flex: 3}}>

                <View style={{padding: 10}}>
                    <Text style={{fontWeight: "bold", fontSize:14}}>Добавлено в Избранное: 10 рейсов</Text>
                </View> 
          
                <ScrollView >
                    {(!props.loading) ? ((props.dataList.length)?
                                      
                    props.dataList.map((item, index) => <Card key={index}  {...item}/>):
                    <View style={{width: '100%', alignItems: "center", paddingTop:20}}>
                    <Text style={{fontSize: 16,fontWeight: "bold", color: '#1157A7'}}> 
                      {'На выбранную дату рейсов нет'}
                    </Text>
                  </View> 
                    ) : (
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
    getList: () => dispatch(getList()),
    getDateList: (data) => dispatch(getDateList(data))
  })

  export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);