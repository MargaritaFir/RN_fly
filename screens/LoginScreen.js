import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import clouds from '../assets/clouds.png';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/sessionActions'


function LoginScreen(props) {
    return (
        <View style={styles.container}>
          <ImageBackground source={clouds} style={styles.image}>
            <View style={{backgroundColor: "rgba(255, 255, 255, 0.6)", width: '100%', height: '100%', justifyContent: "center",alignItems: "center"}}>
              <View style={{backgroundColor: "white", width: 250, height: 300, justifyContent: "center",alignItems: "center"}} >
                <LoginForm {...props}/>
              </View>
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
  

  const mapStateToProps = state => ({
    errorMessage: state.session.errorMessage,
    user: state.session.user,
    dataList: state.list.dataList,
  })
  
  const mapDispatchToProps = dispatch => ({
    loginSuccess: (params) => dispatch(loginSuccess(params)),
  })

  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);