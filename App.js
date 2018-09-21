import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { AddDeck } from './components/decks/AddDeck'
import { ViewDecks } from './components/decks/ViewDecks'
import { AddCard } from './components/cards/AddCard'
import { ViewCard } from './components/cards/ViewCard'
import { Quiz } from './components/cards/Quiz'

function FlashCardsStatusBar() {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar translucent barStyle="light-content" />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlashCardsStatusBar />
        <View
          style={{
            flex: 1,
          }}>
          <Quiz />
        </View>
      </View>
    )
  }
}
