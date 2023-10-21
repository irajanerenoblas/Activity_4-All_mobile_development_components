import * as React from 'react';
import { Chip } from 'react-native-paper';
import { View, Text } from 'react-native';



const One = () => (
  <View style={{justifyContent:'center', alignContent: 'center', flex: 1, alignItems: 'center'}}>
    <Chip icon="information" onPress={() => console.log("Pressed")}>Example Chip</Chip>
  </View>
);

export default One;