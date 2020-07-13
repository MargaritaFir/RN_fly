import React, { useState, useRef } from "react";
import { StyleSheet, Text, View} from "react-native";
import { Container, Form, Input, Label, Item, Header, Button} from 'native-base';

// нет стилей для состояний кнопки active, hover
// знаю, что нужно разнести всё на компоненты. Например сделать собственный блок для инпутов;
// Вынести всё в стили StyleSheet

function ErrorField({nameError}){

    return (
        <View style={{ paddingTop:4, position: "absolute", bottom:0}}>
            <Text style={{color: '#EB1717', fontSize: 10,}}>{nameError}</Text>
        </View>
    )
}

const LoginForm = (props) => {

const { navigation } = props;
const [isValidLogin, onValidLogin] = useState(false);
const [isValidPassword, onValidPassword] = useState(false);
const [userLogin, updateLogin] = useState('');
const [userPassword, updatePassword] = useState('');


let loginRef= useRef();
let passwordRef = useRef()

function doValidLogin(e){
    e.preventDefault();
    const loginValueNew = e.nativeEvent.text;
    const regExp = '(?=^.{6,}$)';

    if(loginValueNew.match(regExp)){
        onValidLogin(true);
        updateLogin(loginValueNew)
    } else{
        onValidLogin(false)
    }

}

function doValidPassword(e){
    e.preventDefault();
    const passwordValueNew = e.nativeEvent.text;
    const regExp= '(?=^.{8,}$)'

    if(passwordValueNew.match(regExp)){
        onValidPassword(true);
        updatePassword(passwordValueNew)
    } else{
        onValidPassword(false)
    }

}

function logInUser(){
    if(isValidPassword && isValidLogin){
        const params={
            userName: userLogin,
            password: userPassword
        };
        props.loginSuccess(params);
        navigation.navigate('DetailsList')
    }
}


const errorLogin = (isValidLogin)?'black': '#EB1717';
const errorPassword = (isValidPassword)?'black': '#EB1717';


  return (
    <View style={styles.container}>
        <Form style={{borderColor: 'black', borderWidth: 0,  width: 300, paddingTop: 30}}>
            <View style={styles.header_form}>
                <Text style={{fontWeight: "bold", fontSize: 20}}>Simple Flight Check</Text>
            </View>
           <View  style={styles.field_container}>
                <Label>Логин: </Label>
                <View style={[styles.input_container, {borderColor:errorLogin }]}>
                    <Input ref={loginRef} onTextInput={doValidLogin} />
                </View> 
                <View style={{position:'relative', height: 15}}>
                    {(!isValidLogin) ?<ErrorField nameError={'Длина меньше 6 символов'}/> : null }
                </View>         
            </View>

            <View  style={styles.field_container}>
                <Label>Пароль: </Label>
                <View style={[styles.input_container, {borderColor: errorPassword}]}>
                    <Input ref={passwordRef} onTextInput={doValidPassword}/>
                </View> 
                <View style={{position:'relative', height: 15}}>
                    {(!isValidPassword) ? <ErrorField nameError={'Длина меньше 8 символов'}/> : null }
                </View>           
            </View>

            <View  style={{ padding:10,paddingRight:20, width: '100%', alignItems: "flex-end"}}>
                <Button 
                    width={80}
                    alignItems='center'
                    justifyContent='center'
                    backgroundColor={'#00C3FF'}
                    borderRadius={5}
                    height={30}
                    boxShadow='0px 0px 2px rgba(0, 0, 0, 0.15)'
                    onPress={logInUser}   
                >
                    <Text style={{ color:'white', fontSize:16}}>Войти</Text>
                </Button>
            </View>
        </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius:10,
  },
  field_container: {
    paddingTop:10, 
    paddingLeft: 20, 
    paddingRight:20, 
    position:'relative'
  },
  input_container: {
    borderWidth: 1, 
    height: 30, 
    width: '100%', 
    borderRadius: 5
  },
  header_form: {
    justifyContent: 'center', 
    alignItems: "center",  
    height: 30,
    width: '100%', 
    paddingBottom:10
  }
});


  

  

export default LoginForm;