import {
  createMaterialTopTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import { AddDeck } from './decks/AddDeck'
import { ViewDecks } from './decks/ViewDecks'
import { DeckView } from './decks/DeckView'
import { AddCard } from './cards/AddCard'
import { ViewCard } from './cards/ViewCard'
import { Quiz } from './cards/Quiz'

const DeckNav = createMaterialTopTabNavigator({
  ViewDecks: {
    screen: ViewDecks,
  },
  AddDeck: {
    screen: AddDeck,
  },
})

const MainNav = createStackNavigator({
  Home: {
    screen: DeckNav,
    navigationOptions: {
      header: null,
    },
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
      title: 'Deck View',
    },
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
      title: 'Add Card',
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
      title: 'Quiz',
    },
  },
})

export { MainNav }
