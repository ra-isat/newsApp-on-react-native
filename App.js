import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { gStyle } from './styles/style';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import MainStack from './navigation';

const fonts = () => Font.loadAsync({
  'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf'),
})

export default function App() {
  const [font, setFont] = useState(false)

  if(font) {
    return (
      <MainStack/>
    )
  } else {
    return <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={(error) => console.warn(error)} />
  } 
  
  
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#232323',
  }
});
