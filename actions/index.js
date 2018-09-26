export const FETCH_DECKS = 'FETCH_DECKS'
export const NEW_DECK = 'NEW_DECK'
export const ADD_CARD = 'ADD_CARD'

export const FetchDecks = decks => ({
  type: FETCH_DECKS,
  decks,
})

export const AddDeck = title => ({
  type: NEW_DECK,
  title,
})

export const AddCard = (title, card) => ({
  type: ADD_CARD,
  title,
  card,
})
