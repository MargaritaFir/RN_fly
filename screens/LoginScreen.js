import React from 'react';
import {StyleSheet, View, ImageBackground, Text} from 'react-native';
import clouds from '../assets/clouds.png';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux'
import { loginSuccess, logOut } from '../actions/sessionActions';
import { Button} from 'native-base';



function LoginScreen(props) {
    return (
        <View style={styles.container}>
          <ImageBackground source={clouds} style={styles.image}>
            <View style={{backgroundColor: "rgba(255, 255, 255, 0.6)", width: '100%', height: '100%', justifyContent: "center",alignItems: "center"}}>
            {(!props.isAuth)?(<View style={{backgroundColor: "white", width: 250, height: 300, justifyContent: "center",alignItems: "center"}} >
              <LoginForm {...props}/>
            </View>): 
            <View style={{width: '100%', alignItems: "center"}}>
              <Text style={{fontSize: 20,fontWeight: "bold", color: '#1157A7', paddingBottom: 10}}> 
                {`Вы уже вошли`}
              </Text>
              <Button 
                    width={80}
                    alignItems='center'
                    justifyContent='center'
                    backgroundColor={'#00C3FF'}
                    borderRadius={5}
                    height={40}
                    width={200}
                    boxShadow='0px 0px 2px rgba(0, 0, 0, 0.15)'
                    onPress={() => props.navigation.navigate('DetailsList')}   
                >
                    <Text style={{ color:'white', fontSize:16}}>Выбрать билет</Text>
                </Button>

            </View> }
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
    isAuth: state.session.isAuth,
  })
  
  const mapDispatchToProps = dispatch => ({
    loginSuccess: (params) => dispatch(loginSuccess(params)),
    logOut: () => dispatch(logOut())
  })

  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);