import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from './App' 
import One from './screen/actInd';

    const screens = {
       Main:{
            screen: Main,
       },
       One:{
            screen: One,
       }
    }
const stackNav = createStackNavigator(screens);

export default createAppContainer(stackNav);