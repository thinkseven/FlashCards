import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    // change title dynamically
    return {
      title: navigation.getParam('title'),
    }
  }
  render() {
    const { navigation } = this.props
    const title = navigation.getParam('title')
    const count = navigation.getParam('count')
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{title}</Text>
        <Text>{count} cards</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddCard', {
              title: title,
            })
          }}
        >
          <View>
            <Text>Add Card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Quiz', {
              title: title,
            })
          }}
        >
          <View>
            <Text>Start Quiz</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
