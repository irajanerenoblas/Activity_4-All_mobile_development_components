import * as React from 'react';
import { Text, Avatar } from 'react-native-paper';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../style/Styles.js'

const One = ({ navigation }) => (
  <View style={{gap: 20, justifyContent: 'center', alignItem: 'center', alignContent: 'center'}}>
    <Text>Avatar Image</Text>
    <Avatar.Image size={90} source={require('../assets/img1.jpeg')} />

    <Text>Avatar Text</Text>
    <Avatar.Text size={90} label="IJ" />

    <Text>Avatar Icon</Text>
    <Avatar.Icon size={90} icon="account-circle" />
 </View>
);

export default One;