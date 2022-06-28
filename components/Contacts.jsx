import { Text, View, Button } from 'react-native';
import { gStyle } from '../styles/style';

export default function Contacts({navigation}) {

  const loadScene = () => {
    navigation.goBack()
  }

    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Contacts</Text>
        <Button title='Go back' onPress={loadScene}/>
      </View>
    )    
}