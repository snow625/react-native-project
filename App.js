import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import React, {useState} from 'react';

import { useFonts } from 'expo-font';

import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from "./Screens/RegistrationScreen"


export default function App() {
  const [state, setState] = useState('login')

  const changePage=(pageName)=>{
    setState(pageName);
  }

  const [loaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
   <>
    {state === 'login' && <LoginScreen onPressProp={changePage}/>}
    {state === 'register' && <RegistrationScreen onPressProp={changePage}/>}
    <StatusBar style="auto" />
   </>

  );
}

const styles = StyleSheet.create({});
