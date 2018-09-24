import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Card extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Card Component!!</Text>
      </View>
    )
  }
}
