import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import MainNav from './components/MainNav'

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
