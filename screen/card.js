import * as React from 'react';
import { Text, Button, Avatar, Card } from 'react-native-paper';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const One = () => (
  <View style={{justifyContent:'center', alignContent: 'center', flex: 1, alignItems: 'center'}}>
    <Card style={{width: 300}}>
      <Card.Title title="Card Component" subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
      <Card.Cover source={require('../assets/lake.jpg')} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
 </View>
);

export default One;