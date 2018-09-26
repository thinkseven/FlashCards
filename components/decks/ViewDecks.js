import React, { Component } from 'react'
import { View, Text } from 'react-native'
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
      <View style={{ flex: 1 }}>
        {decks.map(deck => {
          return (
            <DeckItem
              title={deck.title}
              count={deck.count}
              navigation={navigation}
            />
          )
        })}
      </View>
    )
  }
}

const mapStateToProps = state => {
  const decks = Object.keys(state).filter(key => {
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
