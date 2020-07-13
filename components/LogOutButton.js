import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity  } from 'react-native';

import IconLogout from './IconLogout';
import { connect } from 'react-redux'
import { logOut } from '../actions/sessionActions';



function LogOutButton(props) {


function counting(){
    props.logOut();
    props.navigation.navigate('LoginList');    
}

if(props.isAuth){

    return (
        <TouchableOpacity style={styles.icon_contaiter} onPress={() => counting()}>
            <Text style={{paddingRight: 10, color: '#1157A7', fontWeight:'bold'}}>Выйти</Text>
            <IconLogout />

        </TouchableOpacity>
  );
} else {
    return <View style={styles.icon_contaiter}></View>
}




}


const styles = StyleSheet.create({
    icon_contaiter: {
        flexDirection: "row",
        padding:10
        
    }
});

const mapStateToProps = state => ({
    isAuth: state.session.isAuth,
  })


const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut())
  })

export default connect(mapStateToProps, mapDispatchToProps)(LogOutButton);