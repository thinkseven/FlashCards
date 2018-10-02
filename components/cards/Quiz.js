import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
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
            score: score + 1,
          }
        : {
            index: index + 1,
            score: score + 1,
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
            index: index + 1,
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

  goBack = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  restartQuiz = () => {
    this.setState({
      index: 0,
      score: 0,
      toggle: false,
      endQuiz: false,
    })
  }

  renderQuiz = () => {
    const { questions } = this.props
    const { index, toggle } = this.state
    const { question, answer } = questions[index]
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text>
            {index + 1} / {questions.length}
          </Text>
        </View>
        <View style={styles.quiz}>
          {!toggle && (
            <View>
              <Text style={{ textAlign: 'center', fontSize: 50 }}>
                {question}
              </Text>
              <TouchableOpacity onPress={this.toggle}>
                <Text style={{ textAlign: 'center', color: 'red' }}>
                  Answer
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {toggle && (
            <View>
              <Text style={{ textAlign: 'center', fontSize: 50 }}>
                {answer}
              </Text>
              <TouchableOpacity onPress={this.toggle}>
                <Text style={{ textAlign: 'center', color: 'red' }}>
                  Question
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View>
          <TouchableOpacity onPress={this.incrementCorrect}>
            <Text style={[styles.buttonCorrect]}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.decrementInCorrect}>
            <Text style={[styles.buttonIncorrect]}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  renderScore = () => {
    const { questions } = this.props
    const { score } = this.state
    const maxScore = questions.length
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.quiz}>
          <View style={styles.score}>
            <Text style={{ color: 'green', fontSize: 20 }}>Your Score</Text>
            <Text style={{ color: 'green', fontSize: 100, fontWeight: 'bold' }}>
              {Math.round((score / maxScore) * 100)}%
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={this.restartQuiz}>
              <Text
                style={[
                  styles.buttonCorrect,
                  {
                    color: 'white',
                    backgroundColor: 'black',
                  },
                ]}
              >
                Restart Quiz
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goBack}>
              <Text
                style={[
                  styles.buttonIncorrect,
                  {
                    color: 'white',
                    backgroundColor: 'black',
                  },
                ]}
              >
                Back to Deck
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  renderNoQuiz = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'green', fontSize: 20 }}>
          No card to begin quiz!!
        </Text>
      </View>
    )
  }

  render() {
    const { questions } = this.props
    const { endQuiz } = this.state
    return questions && questions.length > 0
      ? endQuiz
        ? this.renderScore()
        : this.renderQuiz()
      : this.renderNoQuiz()
  }
}

const mapStateToProps = (state, { navigation }) => {
  const title = navigation.getParam('title')
  return state[title]
}

const styles = StyleSheet.create({
  score: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    flex: 1,
    height: 10,
  },
  quiz: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },
  buttonCorrect: {
    margin: 10,
    borderRadius: 5,
    padding: 10,
    width: 200,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'green',
    overflow: 'hidden',
    alignSelf: 'center',
  },
  buttonIncorrect: {
    margin: 10,
    borderRadius: 5,
    padding: 10,
    width: 200,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'red',
    overflow: 'hidden',
    alignSelf: 'center',
  },
})

export default connect(mapStateToProps)(Quiz)
