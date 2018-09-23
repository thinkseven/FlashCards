import React, { Component } from 'react'
import { View, Text } from 'react-native'
import DeckItem from './DeckItem'

export default class ViewDecks extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <DeckItem {...this.props} />
        <DeckItem {...this.props} />
        <DeckItem {...this.props} />
        <DeckItem {...this.props} />
        <DeckItem {...this.props} />
        <DeckItem {...this.props} />
        <DeckItem {...this.props} />
        <DeckItem {...this.props} />
        <DeckItem {...this.props} />
        <DeckItem {...this.props} />
      </View>
    )
  }
}
