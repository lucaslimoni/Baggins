import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import Main from './pages/main';
import Main2 from './pages/main2';

export default createBottomTabNavigator(
  {
    Home: Main,
    About: Main2
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
    },
  },
);
