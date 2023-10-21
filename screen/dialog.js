import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <PaperProvider>
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
        <Button onPress={showDialog} buttonColor='#5D12D2' textColor='white' width={150}>Show Dialog</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

export default MyComponent;