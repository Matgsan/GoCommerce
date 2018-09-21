import { StackNavigator, TabNavigator } from 'react-navigation';
import { colors } from 'styles';

import Main from './pages/main';
import Detail from './pages/detail';
import Cart from './pages/cart';

const StackConfig = {
  navigationOptions: {
    headerBackTitle: null,
    headerStyle: {
      height: 54,
      borderBottomWidth: 0,
      backgroundColor: colors.white
    },
    headerTitleStyle: {
      color: colors.primary,
      fontSize: 16,
      fontWeight: 'bold'
    },
    headerTintColor: colors.gray
  }
};
const TabConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: colors.primary,
    inactiveTintColor: colors.gray,
    showLabel: false,
    style: {
      backgroundColor: colors.white
    }
  }
};

const buildStack = StackNavigator(
  {
    Main,
    Detail
  },
  StackConfig
);
const buildTabs = TabNavigator(
  {
    Main: buildStack,
    Cart
  },
  TabConfig
);
export default buildTabs;
