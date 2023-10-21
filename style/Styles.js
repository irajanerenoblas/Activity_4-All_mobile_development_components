import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    box: {
      width: 170,
      height: 50,
      backgroundColor: 'white',
      margin: 10,
      borderWidth: 0.5,
      borderColor: '#5D12D2',
      borderRadius: 25,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      shadowOffset: {width: -2, height: 2},  
      shadowColor: 'gray',  
      shadowOpacity: 0.1,  
      elevation: 5,
      shadowRadius: 3, 
    },
    txxt: {
        color: '#ffffff',
    }
});