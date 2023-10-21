import * as React from 'react';
import { ProgressBar, MD3Colors, Text, PaperProvider } from 'react-native-paper';
import { View } from 'react-native';

const MyComponent = () => (
  <PaperProvider>
  <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center', flex: 1, gap: 10}}>
    <Text style={{fontSize: 30, fontWeight: 'bold', marginRight: 200}}>Progress</Text>
    <ProgressBar progress={0.5} style={{height: 10, width: 300}} color={MD3Colors.error50} />
  </View>
  
  </PaperProvider>
  
);

export default MyComponent;