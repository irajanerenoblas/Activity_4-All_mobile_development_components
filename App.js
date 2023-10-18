import * as React from 'react-native';
import { PaperProvider, Text} from 'react-native-paper';
import { View, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

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
function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{headerStyle:{backgroundColor: '#5D12D2', }, headerTintColor: 'white'}} >
      <Drawer.Screen name="Mobile Components" component={Feed} />
      <Drawer.Screen name="About" component={Article} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </PaperProvider>

  );
}
