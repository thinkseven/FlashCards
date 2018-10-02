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
        [action.title]: {
          ...state[action.title],
          title: action.title,
        },
      }
    case ADD_CARD:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: [...(state[action.title].questions || []), action.card],
        },
      }
    default:
      return state
  }
}

export default decks
