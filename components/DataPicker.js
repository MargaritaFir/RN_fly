import React, { Component, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {StyleSheet, View, Text, Button , TouchableOpacity} from 'react-native';
import DataIconSVG from '../components/DataIconSVG';
import {changeFormatDate} from '../shared/sharedFunctions';



export default function DatePickerFly(props){
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    const dataSplit = JSON.parse(JSON.stringify(currentDate)).split('T')[0];
    props.getDateList(dataSplit);

  };
  const showMode = () => {
    setShow(true);
  };


  const splitDate = () => {
    const newDate = JSON.parse(JSON.stringify(date)).split('T')[0];
    return changeFormatDate(newDate)


  }

  return (
    <View style={{ alignItems: "flex-end"}}>
      <TouchableOpacity onPress={showMode} style={{flexDirection:'row'}}>
        <Text style={{fontWeight: "bold", fontSize: 18, color:'#1157A7'}}>{splitDate(date)}</Text>
        <View style={{paddingLeft: 5}}>
          <DataIconSVG />
        </View>     
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          timeZoneOffsetInMinutes={0}
          mode='date'
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};