import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { HandleAddCard } from '../../actions'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  handleQuestionInput = text => {
    this.setState({
      question: text,
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
    dispatch(
      HandleAddCard(title, {
        question,
        answer,
      }),
    )
    this.setState({
      question: '',
      answer: '',
    })
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder="Deck Title"
          onChangeText={this.handleQuestionInput}
          value={this.state.question}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Deck Title"
          onChangeText={this.handleAnswerInput}
          value={this.state.answer}
        />
        <TouchableOpacity onPress={this.submitCard}>
          <View>
            <Text>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddCard)
