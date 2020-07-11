import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity  } from 'react-native';

import IconLogout from './IconLogout';



function LogOutButton() {

const [count, getCount] = useState(0);

function counting(){
    getCount(count+1);
    console.log(count)
}

    return (

        <TouchableOpacity style={styles.icon_contaiter} onPress={() => counting()}>
            <Text style={{paddingRight: 10}}>Выйти</Text>
            <IconLogout />

        </TouchableOpacity>



  );
}


const styles = StyleSheet.create({
    icon_contaiter: {
        flexDirection: "row"
        
    }
})



export default LogOutButton;