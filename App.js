import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { MainNav } from './components/MainNav'

function FlashCardsStatusBar() {
  return (
    <View
      style={{ backgroundColor: 'green', height: Constants.statusBarHeight }}
    >
      <StatusBar translucent barStyle="light-content" />
    </View>
  )
}

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlashCardsStatusBar />
        <MainNav />
      </View>
    )
  }
}
