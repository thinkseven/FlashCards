import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class AddDeck extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>AddDeck Component!!</Text>
      </View>
    )
  }
}

export default connect()(AddDeck)
