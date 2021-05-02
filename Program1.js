import React, { Component } from 'react'
import { Text, View, Image ,StyleSheet } from 'react-native'
import Gambar from './Gambar';

export class Program1 extends Component {
  
  
render() {
  
  var pic = [];
     for (let j = 1; j <= 20; j++) {
       pic.push(<Gambar></Gambar>);
     }

    

  return (
      <View>
        
        <View >{pic}</View> 
      
     </View>
   );
 }
 }


export default Program1
