import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export class DeckView extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Deck Details View</Text>
        <Text>With more options</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddCard')
          }}
        >
          <View>
            <Text>Add Card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Quiz')
          }}
        >
          <View>
            <Text>Quiz</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
