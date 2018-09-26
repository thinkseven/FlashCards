import {
  getDecks,
  saveDeckTitle,
  addCardToDeck,
  getDeck,
} from '../utils/database'

export const FETCH_DECKS = 'FETCH_DECKS'
export const NEW_DECK = 'NEW_DECK'
export const ADD_CARD = 'ADD_CARD'

const FetchDecks = decks => ({
  type: FETCH_DECKS,
  decks,
})

const AddDeck = title => ({
  type: NEW_DECK,
  title,
})

const AddCard = (title, card) => ({
  type: ADD_CARD,
  title,
  card,
})

export const InitializeDecks = () => {
  return dispatch => {
    getDecks().then(decks => {
      dispatch(FetchDecks(JSON.parse(decks)))
    })
  }
}

export const HandleAddDeck = title => {
  return dispatch => {
    saveDeckTitle(title).then(result => {
      dispatch(AddDeck(title))
    })
  }
}

export const HandleAddCard = (title, card) => {
  return dispatch => {
    addCardToDeck(title, card).then(result => {
      dispatch(AddCard(title, card))
    })
  }
}
