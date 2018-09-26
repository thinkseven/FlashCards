import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import MainNav from './components/MainNav'
import { createStore, compose } from 'redux'
import decks from './reducers'
import middleware from './middleware'
import { InitializeDecks, HandleAddDeck, HandleAddCard } from './actions'
import { getDecks } from './utils/database'

// const store = createStore(
//   decks /* preloadedState, */,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// )

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  middleware,
  // other store enhancers if any
)
const store = createStore(decks, enhancer)

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
