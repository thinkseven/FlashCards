import {
  getDecks,
  saveDeckTitle,
  addCardToDeck,
  getDeck,
  removeDecks,
  initialDecks,
  initialDecks2,
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

// fresh setup
/*
export const InitializeDecks = () => {
  return dispatch => {
    removeDecks().then(() => {
      initialDecks().then(() => {
        getDecks().then(decks => {
          dispatch(FetchDecks(JSON.parse(decks)))
        })
      })
    })
  }
}
*/

export const InitializeDecks = () => {
  return dispatch => {
    initialDecks2().then(() => {
      getDecks().then(decks => {
        dispatch(FetchDecks(JSON.parse(decks)))
      })
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
