import * as React from 'react';  
import { StyleSheet, View, Text } from 'react-native';
    
const Header = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.headerText}>Little Lemon</Text>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#EE9972',
      },
      headerText: {
        padding: 40,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
      },
    });


export default Header