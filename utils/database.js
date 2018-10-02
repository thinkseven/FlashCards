import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'FlashCards:DECKS'

const initialData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
}

export const removeDecks = () => {
  return AsyncStorage.removeItem(DECKS_STORAGE_KEY, () => {
    console.log('removed decks')
  })
}

export const initialDecks = () => {
  // set this initial data
  return AsyncStorage.setItem(
    DECKS_STORAGE_KEY,
    JSON.stringify(initialData),
    () => {
      console.log('set initial deck')
    },
  )
}

export const initialDecks2 = () => {
  // set this initial data
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify(initialData),
    () => {
      console.log('merged initial decks with any existing decks')
    },
  )
}

export const getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}

export const getDeck = id => {
  return AsyncStorage.getItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [id]: id,
    }),
  )
}

export const saveDeckTitle = title => {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title: title,
      },
    }),
  )
}

export const addCardToDeck = (title, card) => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results)
    data[title] = {
      ...data[title],
      questions: [...(data[title].questions || []), card],
    }
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
  })
}
