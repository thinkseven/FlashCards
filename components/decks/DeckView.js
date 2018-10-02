import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title')
    return {
      title: title,
    }
  }
  render() {
    const { title, count, navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.count}>{count} cards</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddCard', {
                title: title,
              })
            }}
          >
            <Text style={styles.buttonAdd}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Quiz', {
                title: title,
              })
            }}
          >
            <Text style={styles.buttonQuiz}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, { navigation }) => {
  const title = navigation.getParam('title')
  return {
    title: title,
    count: state[title].questions ? state[title].questions.length : 0,
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  count: {
    paddingTop: 20,
    fontSize: 20,
    color: 'dimgray',
    textAlign: 'center',
  },
  buttonAdd: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: 200,
    height: 40,
    textAlign: 'center',
  },
  buttonQuiz: {
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
  },
})

export default connect(mapStateToProps)(DeckView)
