import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen24143995Navigator from '../features/BlankScreen24143995/navigator';
import UserProfile143961Navigator from '../features/UserProfile143961/navigator';
import Tutorial143960Navigator from '../features/Tutorial143960/navigator';
import NotificationList143932Navigator from '../features/NotificationList143932/navigator';
import Settings143931Navigator from '../features/Settings143931/navigator';
import Settings143923Navigator from '../features/Settings143923/navigator';
import UserProfile143921Navigator from '../features/UserProfile143921/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen24143995: { screen: BlankScreen24143995Navigator },
UserProfile143961: { screen: UserProfile143961Navigator },
Tutorial143960: { screen: Tutorial143960Navigator },
NotificationList143932: { screen: NotificationList143932Navigator },
Settings143931: { screen: Settings143931Navigator },
Settings143923: { screen: Settings143923Navigator },
UserProfile143921: { screen: UserProfile143921Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
