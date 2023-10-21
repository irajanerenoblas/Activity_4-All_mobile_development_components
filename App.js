import React, {useState} from 'react';
import { PaperProvider, Button} from 'react-native-paper';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { styles } from './style/Styles.js';
import TouchSn from './screen/avatar.js';
import LottieView from 'lottie-react-native';
import * as Speech from 'expo-speech';
import Two from './screen/badge.js';
import Three from './screen/banner.js';
import Four from './screen/card.js';
import Five from './screen/chip.js';
import six from './screen/datatable.js';
import seven from './screen/dialog.js';
import eight from './screen/divider.js';
import nine from './screen/fab.js';
import ten from './screen/helper.js';
import eleven from './screen/list.js';
import twelve from './screen/menu.js';
import thirteen from './screen/modal.js';
import fourteen from './screen/progress.js';
import fifthteen from './screen/radio.js';
import sixteen from './screen/search.js';
import seventeen from './screen/segmentbtn.js';
import eighteen from './screen/snckbar.js';
import nineteen from './screen/tooltip.js';
import twenty from './screen/touchable.js';




export default function App() {
  
  const speak = () => {
    Speech.speak(`Hi, Welcome to Mobile Components`, {
      language: "tl-PH",
    });
  };

  const speak1 = () => {
    Speech.speak(`Here's the list of Mobile Components.`, {
      language: "tl-PH",
    });
  };

  speak();
    
function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchSn/>
    </View>
  );
}
const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            borderBottomWidth: 0.5,
            backgroundColor: '#ffff',
            marginBottom: 20,
          }}
        >
          <View>
            <Text style={{fontSize: 20,fontWeight: 'bold', color: '#5D12D2'}}>Ira Jane L. Renoblas</Text>
            <Text style={{fontSize: 13}}>irajanerenoblas067@gmail.com</Text>
          </View>
          <Image alt='Ira Jane Profile'
            source={
              require('./assets/img1.jpeg')
            }
            style={{ width: 70, height: 70, borderRadius: 35 }}
          />

        </View>
        
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

  function Main({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#5D12D2'}}>Welcome to Mobile Components</Text>

        <LottieView
        speed={0.5}
        autoPlay
        style={{
            width: 300,
            height: 300,
        }}
        source={require("./assets/typedod.json")}
        />
        
        <Text style={{fontSize: 18}}>Activity 4: All Mobile Components</Text>

        <Button marginTop={20} icon="cards" mode="contained" buttonColor='#5D12D2' onPress={() => navigation.openDrawer()} onPressIn={() => speak1()}>
        Get Started
        </Button>
      </View>
    );
  }

  function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{headerStyle:{backgroundColor: '#5D12D2', }, headerTintColor: 'white'}} >
      <Drawer.Screen name="Mobile Components" component={Main} />
      <Drawer.Screen name="Avatar" component={Article} />
      <Drawer.Screen name="Badge" component={Two} />
      <Drawer.Screen name="Banner" component={Three} />
      <Drawer.Screen name="Card" component={Four} />
      <Drawer.Screen name="Chip" component={Five} />
      <Drawer.Screen name="Data Table" component={six} />
      <Drawer.Screen name="Dialog" component={seven} />
      <Drawer.Screen name="Divider" component={eight} />
      <Drawer.Screen name="Fab" component={nine} />
      <Drawer.Screen name="Helper Text" component={ten} />
      <Drawer.Screen name="List" component={eleven} />
      <Drawer.Screen name="Menu" component={twelve} />
      <Drawer.Screen name="Modal" component={thirteen} />
      <Drawer.Screen name="Progress" component={fourteen} />
      <Drawer.Screen name="Radio Button" component={fifthteen} />
      <Drawer.Screen name="Search" component={sixteen} />
      <Drawer.Screen name="Segmented Button" component={seventeen} />
      <Drawer.Screen name="Snack Bar" component={eighteen} />
      <Drawer.Screen name="Tooltip" component={nineteen} />
      <Drawer.Screen name="Touchable Ripple" component={twenty} />
    </Drawer.Navigator>
  );
}
  return (
    <PaperProvider>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </PaperProvider>

  );
}
