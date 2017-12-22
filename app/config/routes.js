import { StatusBar, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../screens//Home';
import CurrencyList from '../screens/CurrencyList';

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
        headerTitleStyle: {
          fontSize: 18,
          justifyContent: 'space-between',
          width: Dimensions.get('window').width - 90,
        },
      }),
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);
