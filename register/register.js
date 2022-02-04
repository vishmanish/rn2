import React, { useEffect, useState } from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    StyleSheet ,
    Alert,
    Dimensions,
    Image,ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as EmailValidator from "email-validator";


// API Call syntax---
const loadData = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "username": data.username,
    "password": data.password,
    "email": data.email,
    "phone": data.mobile,
    "usertype": "customer"
    });

    let url = `https://-------/----/signup`;
    setLoader(true);
    fetch(url, {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    })
      .then((response) => response.json())
      .then((data) => {
        setLoader(false);
        console.log(data);
        
        if(data.new_user == "" || data.new_user == null){
            console.log(data.msg),
                Alert.alert(
                            'Sign Up',
                            data.msg,
                            [
                            { text: 'OK'},
                            ],
                            {
                            cancelable: false
                            }
                        );
        }else{
            AsyncStorage.setItem('user',JSON.stringify(data));  
        props.navigation.navigate("OtpScreen",{phone:data.mobile})
        }
      })
      .catch((error) => {
        setLoader(false);
      });
  };

const register = () => {

    const [data, setData] = useState({
        firstName: '',
        lastName : '',
        email:'',
        dateOfBirth : '',
        phoneNumber:'',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidPhone:true,
        isValidEmail: true,
        isValidPassword: true,
    });
  return (
   
  );
};

export default register;

const styles = StyleSheet.create({});
