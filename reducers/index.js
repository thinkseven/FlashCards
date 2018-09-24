import { FETCH_DECKS, NEW_DECK, ADD_CARD } from '../actions'

function decks = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case NEW_DECK:
      return {
        ...state,
        ...action.deck,
      }
    case ADD_CARD:
      return {
        ...state,
        ...action.card,
      }
    default:
      return state
}

export default decks
