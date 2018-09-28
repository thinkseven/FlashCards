import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import DeckItem from './DeckItem'
import { InitializeDecks } from '../../actions/'

class ViewDecks extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(InitializeDecks())
  }

  render() {
    const { decks, navigation } = this.props
    return (
      <ScrollView>
        {decks.map(deck => {
          return (
            <DeckItem
              key={deck.title}
              title={deck.title}
              count={deck.count}
              navigation={navigation}
            />
          )
        })}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  const decks = Object.keys(state).map(key => {
    const { title, questions } = state[key]
    const count = questions ? questions.length : 0
    return {
      title,
      count,
    }
  })
  return {
    decks,
  }
}

export default connect(mapStateToProps)(ViewDecks)
