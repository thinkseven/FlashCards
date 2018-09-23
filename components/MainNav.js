import {
  createMaterialTopTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import AddDeck from './decks/AddDeck'
import ViewDecks from './decks/ViewDecks'
import DeckView from './decks/DeckView'
import AddCard from './cards/AddCard'
import ViewCard from './cards/ViewCard'
import Quiz from './cards/Quiz'

const DeckNav = createMaterialTopTabNavigator({
  ViewDecks: {
    screen: ViewDecks,
    navigationOptions: {
      title: 'DECKS',
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: 'NEW DECK',
    },
  },
})

const MainNav = createStackNavigator(
  {
    Home: {
      screen: DeckNav,
      navigationOptions: {
        header: null,
      },
    },
    DeckView: {
      screen: DeckView,
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        title: 'Add Card',
      },
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        title: 'Quiz',
      },
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
    },
  },
)

export default MainNav
