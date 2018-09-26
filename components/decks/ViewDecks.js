import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import DeckItem from './DeckItem'

class ViewDecks extends Component {
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

export default connect()(ViewDecks)
