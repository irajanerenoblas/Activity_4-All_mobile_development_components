import * as React from 'react';
import { Text, Badge, Avatar } from 'react-native-paper';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const One = () => (
  <View style={{justifyContent:'center', alignContent: 'center', flex: 1, alignItems: 'center'}}>
    <View>
   
        
        <View style={{}}>
          <Image alt='Ira Jane Profile'
            source={
              require('../assets/img1.jpeg')
            }
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </View>
           <View style={{position: 'absolute', top: 5, right: 10}}>
          <Badge style={{alignSelf:'center'}}>3</Badge>
        </View>
    </View>

 </View>
);

export default One;