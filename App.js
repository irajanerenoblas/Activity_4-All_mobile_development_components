import React, {useState} from 'react';
import { PaperProvider, Button} from 'react-native-paper';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { styles } from './style/Styles.js';
import TouchSn from './screen/actInd.js';
import LottieView from 'lottie-react-native';
import * as Speech from 'expo-speech';
import Two from './screen/badge.js';
import Three from './screen/banner.js';






export default function App({ navigation }) {
  
  const speak = () => {
    Speech.speak(`Hi, Ira Jane Reboblas!`, {
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

  function Main() {
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

        <Button marginTop={20} icon="cards" mode="contained" buttonColor='#5D12D2' onPress={() => navigation.openDrawer()}>
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
