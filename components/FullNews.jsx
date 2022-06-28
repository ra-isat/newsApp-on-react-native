import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { gStyle } from '../styles/style';

export default function FullNews({ route, navigation }) {


    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}> {route.params.title} </Text>
        <Text style={{textAlign: 'center'}} > {route.params.description} </Text>
        <Text style={styles.full}> {route.params.full} </Text>
        <Image 
            style={{
                height: 200,
                width: '100%',
                marginTop: 20,
            }}
            source={{
                uri: route.params.img,
            }}
        />  
        <Button title='On Main' onPress={() => navigation.navigate('Main')}/>
      </View>
    )    
}

const styles = StyleSheet.create({
    full: {
        fontSize: 14,
        color: '#000'
    }
})