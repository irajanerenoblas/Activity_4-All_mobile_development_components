import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from './App.js' 
import One from './screen/actInd.js';
import Two from './screen/badge.js';
import Three from './screen/banner.js';

    const screens = {
       Main:{
            screen: Main,
       },
       One:{
            screen: One,
       },
       Two:{
            screen: Two
       },
       Three:{
            screen:Three
       }
    }
const stackNav = createStackNavigator(screens);

export default createAppContainer(stackNav);