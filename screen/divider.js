import * as React from 'react';
import { View } from 'react-native';
import { Divider, Text } from 'react-native-paper';

const MyComponent = () => (
  <View>
    <Text style={{fontSize: 30}}>Lemon</Text>
    <Divider />
    <Text style={{fontSize: 30}}>Mango</Text>
    <Divider />
    <Text style={{fontSize: 30}}>Apple</Text>
    <Divider />
    <Text style={{fontSize: 30}}>Orange</Text>
    <Divider />
    <Text style={{fontSize: 30}}>Pineapple</Text>
    <Divider />
    <Text style={{fontSize: 30}}>Grapes</Text>
    <Divider />
  </View>
);

export default MyComponent;