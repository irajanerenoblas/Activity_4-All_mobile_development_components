import React, {useState} from 'react';
import { PaperProvider} from 'react-native-paper';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { styles } from './style/Styles.js';

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
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


export default function App({ navigation }) {

  function Boxx() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.navigate('One')}>
          <View style={styles.box}>
            <Text styles={{color: 'white'}}>ActivityIndicator</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }

  function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{headerStyle:{backgroundColor: '#5D12D2', }, headerTintColor: 'white'}} >
      <Drawer.Screen name="Mobile Components" component={Boxx} />
      <Drawer.Screen name="About" component={Article} />
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
