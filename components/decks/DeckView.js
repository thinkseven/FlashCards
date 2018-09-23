import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    // change title dynamically
    return {
      title: '',
    }
  }
  render() {
    const { navigation } = this.props
    // get params navigation.getParam('')
    // get deck id or other details
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Deck Details View</Text>
        <Text>With more options</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddCard', {
              /* pass data to add card*/
            })
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
            <Text>Start Quiz</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
