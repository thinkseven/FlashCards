import { FETCH_DECKS, NEW_DECK, ADD_CARD } from '../actions'

const decks = (state = {}, action) => {
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
        [action.card.title]: {
          ...state[action.card.title],
          questions: [
            ...(state[action.card.title].questions || []),
            action.card.question,
          ],
        },
      }
    default:
      return state
  }
}

export default decks
