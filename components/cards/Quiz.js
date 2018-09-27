import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {
  state = {
    index: 0,
    score: 0,
    toggle: false,
    endQuiz: false,
  }

  incrementCorrect = () => {
    this.setState(({ score, index }) => {
      const { questions } = this.props
      const maxIndex = questions.length - 1
      const maxScore = questions.length
      return index == maxIndex
        ? {
            endQuiz: true,
          }
        : {
            index: index < maxIndex ? index + 1 : index,
            score: score >= 0 && score < maxScore ? score + 1 : score,
          }
    })
  }

  decrementInCorrect = () => {
    this.setState(({ score, index }) => {
      const { questions } = this.props
      const maxIndex = questions.length - 1
      const maxScore = questions.length
      return index == maxIndex
        ? {
            endQuiz: true,
          }
        : {
            index: index < maxIndex ? index + 1 : index,
            score: score > 0 && score < maxScore ? score - 1 : score,
          }
    })
  }

  toggle = () => {
    this.setState(({ toggle }) => {
      return {
        toggle: !toggle,
      }
    })
  }

  render() {
    const { questions } = this.props
    const { index, score, toggle, endQuiz } = this.state
    const { question, answer } = questions[index]
    return endQuiz ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{Math.round((score / questions.length) * 100)}%</Text>
      </View>
    ) : (
      <View style={{ flex: 1 }}>
        <Text>
          {index + 1} / {questions.length}
        </Text>
        {!toggle && (
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{question}</Text>
            </View>
            <TouchableOpacity onPress={this.toggle}>
              <Text>Answer</Text>
            </TouchableOpacity>
          </View>
        )}
        {toggle && (
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{answer}</Text>
            </View>
            <TouchableOpacity onPress={this.toggle}>
              <Text>Question</Text>
            </TouchableOpacity>
          </View>
        )}
        <View>
          <TouchableOpacity onPress={this.incrementCorrect}>
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.decrementInCorrect}>
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, { navigation }) => {
  const title = navigation.getParam('title')
  return state[title]
}

export default connect(mapStateToProps)(Quiz)
