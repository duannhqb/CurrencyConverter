import { StatusBar, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../screens//Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: 'Options',
        headerTitleStyle: {
          width: Dimensions.get('window').width - 90,
        },
      },
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        headerTitle: 'Themes',
        headerTitleStyle: {
          width: Dimensions.get('window').width - 90,
        },
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

const CurrencyListStack = StackNavigator(
  {
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
        headerTitleStyle: {
          fontSize: 18,
          width: Dimensions.get('window').width - 90,
        },
      }),
    },
  },
  {
    headerMode: 'screen',
  },
);

export default StackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none',
  },
);
