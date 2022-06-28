import React, {useState} from 'react';

import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main({ navigation }) {

  const [news, setNews] = useState([
    {title: 'News 1', description: 'News 1 desc', full: 'News 1 full', id: '1', img: 'https://goldapple.ru/media/catalog/product/cache/d19ff61fc2489b2762000db60825d3b7/3/6/3614273604925_1_tyx7f9onndqmbjhl.jpg'},
    {title: 'News 2', description: 'News 2 desc', full: 'News 2 full', id: '2', img: 'https://goldapple.ru/media/catalog/product/cache/d19ff61fc2489b2762000db60825d3b7/3/6/3614272629370_1_ogzfxifmexeby5ex.jpg'},
    {title: 'News 3', description: 'News 3 desc', full: 'News 3 full', id: '3', img: 'https://goldapple.ru/media/catalog/product/cache/d19ff61fc2489b2762000db60825d3b7/3/3/3365440787919_1_ody4r3lhoavscnld.jpg'},
  ])


    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Main Page</Text>
        <FlatList data={news} renderItem={({item}) => (
          <TouchableOpacity style={styles.item} key={item.id} onPress={() => navigation.navigate('FullNews', item) }>
            <Text style={styles.title}> {item.title}</Text>
            <Text style={styles.anons}> {item.description} </Text>
            <Image 
              style={{
                height: 200,
                width: '100%',
              }} 
              source={{
                uri: item.img
              }}
              />
          </TouchableOpacity>
        )} />
      </View>
    )    
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',

  },
  anons: {
    fontFamily: 'roboto-thin',
    fontSize: 16,
    textAlign: 'center',
    color: '2c2c2c'
  },
  item: {
    marginBottom: 20,
  }
})