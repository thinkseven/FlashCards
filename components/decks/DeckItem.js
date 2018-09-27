import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class DeckItem extends Component {
  navigateToDeckView = () => {
    const { title, navigation } = this.props
    navigation.navigate('DeckView', {
      title: title,
    })
  }
  render() {
    const { title, count } = this.props
    return (
      <View style={{ flex: 1, borderWidth: 2, borderColor: 'green' }}>
        <TouchableOpacity onPress={this.navigateToDeckView}>
          <Text
            style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
          >
            {title}
          </Text>
          <Text style={{ color: 'dimgray', textAlign: 'center' }}>
            {count} cards
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
