import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Card from './Card'

export default class Quiz extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Quiz Component!!</Text>
        <Text>1/2</Text>
        <Card />
      </View>
    )
  }
}
