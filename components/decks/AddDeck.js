import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { HandleAddDeck } from '../../actions'

class AddDeck extends Component {
  state = {
    title: '',
  }

  handleInput = text => {
    this.setState({
      title: text,
    })
  }

  submitDeck = () => {
    const { dispatch } = this.props
    dispatch(HandleAddDeck(this.state.title))
    this.setState({
      title: '',
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Deck Title"
          onChangeText={this.handleInput}
          value={this.state.title}
        />
        <TouchableOpacity onPress={this.submitDeck}>
          <View>
            <Text>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddDeck)
