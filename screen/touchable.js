import * as React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

const MyComponent = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <TouchableRipple style={{height: 800, justifyContent: 'center', width: 400, alignItems: 'center'}}
      onPress={() => console.log('Pressed')}
      rippleColor="rgba(0, 0, 0, .32)"
    >
      <Text>Press anywhere</Text>
    </TouchableRipple>
  </View>

);

export default MyComponent;