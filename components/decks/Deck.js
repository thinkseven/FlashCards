import React, { Component } from 'react'
import { View, Text } from 'react-native'

export class Deck extends Component {
  render() {
    return (
      <View style={{ flex: 1, borderWidth: 2, borderColor: 'green' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          Deck
        </Text>
        <Text style={{ color: 'dimgray', textAlign: 'center' }}>3 cards</Text>
      </View>
    )
  }
}
