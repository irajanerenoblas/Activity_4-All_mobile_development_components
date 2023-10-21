import * as React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

const MyComponent = () => {
  const [text, setText] = React.useState('');

   const onChangeText = text => setText(text);

  const hasErrors = () => {
    return !text.includes('@');
  };

 return (
    <View>
      <TextInput label="Email" value={text} onChangeText={onChangeText} />
      <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText>
    </View>
  );
};

export default MyComponent;