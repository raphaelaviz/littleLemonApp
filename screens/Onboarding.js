import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './Profile';


const Onboarding = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  useEffect(() => {
    // Read onboarding complete status from storage
    AsyncStorage.getItem('onboardingComplete').then(value => {
      if (value === 'true') {
        setOnboardingComplete(true);
      }
    });
  }, []);

  const handleNextPress = () => {
    if (isValid) {
      // Save onboarding complete status to storage
      AsyncStorage.setItem('onboardingComplete', 'true').then(() => {
        setOnboardingComplete(true);
      });
    }
  };

  if (onboardingComplete) {
    return <Profile />;
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../img/littleLemonHeader.png')}/>
        </View>
      <View style={styles.middle}>
        <Text style={styles.middleText}>Let us get to know you</Text>
        <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={(text) => {
              setFirstName(text);
              setIsValid(text.trim().length > 0 && email.trim().length > 0);
            }}
            placeholder="First Name"
        />
        <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setIsValid(text.trim().length > 0 && firstName.trim().length > 0);
            }}
            placeholder="Email"
            keyboardType="email-address"
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
            style={[styles.nextButton, !isValid && styles.disabledNextButton]}
            onPress={handleNextPress}
            disabled={!isValid}
        >
            <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flex: 1,
      backgroundColor: '#EDEFEE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 200,
      height: 50,
      alignSelf: 'center',
    },
    middle: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    middleText: {
      fontSize: 18,
      marginBottom: 10,
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    footer: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 20,
    },
    nextButton: {
      backgroundColor: '#495E57',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    disabledNextButton: {
      opacity: 0.5,
    },
    nextButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });



