import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Review from './screens/review';
import About from './screens/about';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer';
const getFonts=()=>{Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

};









export default function App() {
  const [fontsLoaded,setFontsLoaded]=useState(false);
  if(fontsLoaded){
    return(
      <Navigator/>
    )
  }else{
   return(
    <AppLoading
    startAsync={getFonts}
    onFinish={()=>setFontsLoaded(true)}
    onError={console.warn}
    />
   )
  }
}
