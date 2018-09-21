import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AddDeck } from './components/decks/AddDeck'
import { ViewDecks } from './components/decks/ViewDecks'
import { AddCard } from './components/cards/AddCard'
import { ViewCard } from './components/cards/ViewCard'
import { Quiz } from './components/cards/Quiz'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Quiz />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
