import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Program1 from './Program1';

export class App extends Component {
  render() {
    return (
      <View>
        <Text> Program 1</Text>
        <Program1/>
      </View>
    )
  }
}

export default App
