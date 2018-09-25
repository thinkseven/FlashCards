import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import MainNav from './components/MainNav'
import { createStore } from 'redux'
import decks from './reducers'
import { FetchDecks, AddDeck, AddCard } from './actions'

const store = createStore(
  decks /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const sample_decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
}

store.dispatch(FetchDecks(sample_decks))

store.dispatch(
  AddDeck({
    Redux: {
      title: 'Redux',
    },
  }),
)

store.dispatch(
  AddCard({
    title: 'Redux',
    question: {
      question: 'What is Redux',
      answer: 'Redux is all state management in predictable manner',
    },
  }),
)

store.dispatch(
  AddCard({
    title: 'Redux',
    question: {
      question: 'What is Redux thunk',
      answer: 'this is middleware to asynchronous',
    },
  }),
)

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.statusbar}>
          <StatusBar translucent barStyle="light-content" />
        </View>
        <MainNav />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusbar: {
    backgroundColor: 'green',
    height: Constants.statusBarHeight,
  },
})
