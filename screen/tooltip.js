import * as React from 'react';
import { IconButton, Tooltip } from 'react-native-paper';
import { View, Text} from 'react-native';

const MyComponent = () => (
  <View style={{justifyContent: 'center', flex: 1, alignContent: 'center', alignItems: 'center'}}>
    <Text>Long Press the Icon</Text>
    <Tooltip title="Selected Camera">
      <IconButton icon="camera" selected size={50} onPress={() => {}} />
    </Tooltip>
  </View>

);

export default MyComponent;