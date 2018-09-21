import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Deck } from './Deck'

export class ViewDecks extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
        <Deck />
      </View>
    )
  }
}
