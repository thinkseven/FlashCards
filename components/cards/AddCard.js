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
import { HandleAddCard } from '../../actions'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
    invalid: false,
  }

  handleQuestionInput = text => {
    this.setState({
      question: text,
      invalidQuestion: false,
    })
  }

  handleAnswerInput = text => {
    this.setState({
      answer: text,
    })
  }

  submitCard = () => {
    const { dispatch, navigation } = this.props
    const title = navigation.getParam('title')
    const { question, answer } = this.state
    if (question !== '' && answer !== '') {
      dispatch(
        HandleAddCard(title, {
          question,
          answer,
        }),
      )
      this.setState({
        question: '',
        answer: '',
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
    const { invalid, question, answer } = this.state
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, alignItems: 'stretch' }}
        behavior="padding"
        enabled
      >
        <TextInput
          style={styles.question}
          placeholder="Write a question"
          onChangeText={this.handleQuestionInput}
          value={question}
        />
        {invalid &&
          question === '' && (
            <Text
              style={{
                padding: 5,
                color: 'red',
              }}
            >
              please enter a question
            </Text>
          )}
        <TextInput
          style={styles.answer}
          placeholder="Write a answer"
          onChangeText={this.handleAnswerInput}
          value={answer}
        />
        {invalid &&
          answer === '' && (
            <Text
              style={{
                padding: 5,
                color: 'red',
              }}
            >
              please enter a answer
            </Text>
          )}
        <TouchableOpacity onPress={this.submitCard}>
          <Text style={styles.buttonAdd}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  question: {
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  answer: {
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonAdd: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: 200,
    height: 40,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'black',
    overflow: 'hidden',
    alignSelf: 'center',
  },
})

export default connect()(AddCard)
