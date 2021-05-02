import React, {useState} from 'react';
import {TouchableOpacity, Image, View, StyleSheet} from 'react-native';

export default function Gambar() {
  const [gambar1, gambar2] = useState([
    gambar1 = require('./pic/up.png'),
    gambar2 = require('./pic/down.png'),
  ]);
    

  return (
    <View>
      <TouchableOpacity >
  
      <Image source={gambar1}></Image>
      <Image source={gambar2}></Image> 
        
      </TouchableOpacity>
    </View>
  );
}
