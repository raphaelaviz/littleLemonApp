import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../img/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEFEE',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Splash;
