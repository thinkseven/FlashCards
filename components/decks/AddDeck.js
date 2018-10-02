import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native'
import { connect } from 'react-redux'
import { HandleAddDeck } from '../../actions'

class AddDeck extends Component {
  state = {
    title: '',
    invalid: false,
  }

  handleInput = text => {
    this.setState({
      title: text,
    })
  }

  submitDeck = () => {
    const { dispatch, navigation } = this.props
    const { title } = this.state
    if (title !== '') {
      dispatch(HandleAddDeck(this.state.title))
      this.setState({
        title: '',
        invalid: false,
      })
      navigation.goBack()
    } else {
      this.setState({
        invalid: true,
      })
    }
  }

  render() {
    const { invalid, title } = this.state
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={styles.label}>What is the title of your new deck?</Text>
        </View>
        <KeyboardAvoidingView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          behavior="padding"
          enabled
        >
          <TextInput
            style={styles.title}
            placeholder="Deck Title"
            onChangeText={this.handleInput}
            value={title}
          />
          {invalid &&
            title === '' && (
              <Text
                style={{
                  padding: 10,
                  color: 'red',
                }}
              >
                please enter the deck title
              </Text>
            )}
          <TouchableOpacity onPress={this.submitDeck}>
            <Text style={styles.buttonAdd}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 60,
    textAlign: 'center',
  },
  title: {
    margin: 20,
    height: 40,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonAdd: {
    margin: 20,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: 200,
    height: 40,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'black',
    overflow: 'hidden',
  },
})

export default connect()(AddDeck)
