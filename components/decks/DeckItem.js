import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class DeckItem extends Component {
  navigateToDeckView = () => {
    const { title, count, navigation } = this.props
    navigation.navigate('DeckView', {
      title: title,
    })
  }
  render() {
    const { title, count } = this.props
    return (
      <View style={styles.deckView}>
        <TouchableOpacity onPress={this.navigateToDeckView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.count}>{count} cards</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  count: {
    color: 'dimgray',
    textAlign: 'center',
  },
})
