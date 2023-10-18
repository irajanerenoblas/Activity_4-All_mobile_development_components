import * as React from 'react-native';
import { IconButton, MD3Colors, PaperProvider, Text } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
      <IconButton
      icon="camera"
      iconColor={MD3Colors.error50}
      size={20}
      onPress={() => console.log('Pressed')}
      />
    </PaperProvider>
  );
}
