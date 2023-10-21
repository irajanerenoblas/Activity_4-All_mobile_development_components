import * as React from 'react';
import { Text, Badge, Avatar } from 'react-native-paper';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../style/Styles.js'

const One = ({ navigation }) => (
  <View style={{gap: 20, justifyContent: 'center', alignItem: 'center', alignContent: 'center'}}>
    <Badge>3</Badge>
    <Avatar.Image size={90} source={require('../assets/img1.jpeg')} />
 </View>
);

export default One;