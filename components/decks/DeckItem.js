import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class DeckItem extends Component {
  navigateToDeckView = () => {
    const { navigation } = this.props
    navigation.navigate('DeckView', {
      /* pass deck id or other details*/
    })
  }
  render() {
    return (
      <View style={{ flex: 1, borderWidth: 2, borderColor: 'green' }}>
        <TouchableOpacity onPress={this.navigateToDeckView}>
          <Text
            style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
          >
            Deck
          </Text>
          <Text style={{ color: 'dimgray', textAlign: 'center' }}>3 cards</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
