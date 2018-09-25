import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'FlashCards:DECKS'

export getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}

export getDeck = id => {
  return AsyncStorage.getItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [id]: id,
    }),
  )
}

export saveDeckTitle = title => {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title: title
      },
    }),
  )
}

export addCardToDeck = (title, card) => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results)
    data[title] = {
      ...data[title],
      questions: [
            ...(...data[title].questions || []),
            card,
      ],
    }
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
  })
}