import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/Onboarding';
import Splash from './screens/Splash';
import Profile from './screens/Profile';


const Stack = createNativeStackNavigator();

const App = () => {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadOnboardingFlag() {
      try {
        const value = await AsyncStorage.getItem('isOnboardingComplete');
        if (value !== null) {
          setIsOnboardingComplete(value === 'true');
        }
      } catch (e) {
        // error reading value
      }
      setIsLoading(false);
    }
    loadOnboardingFlag();
  }, []);

  const handleOnboardingComplete = () => {
    setIsOnboardingComplete(true);
    AsyncStorage.setItem('isOnboardingComplete', 'true');
  };

  return (
    <NavigationContainer>
      {isOnboardingComplete ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
        
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
            initialParams={{ handleOnboardingComplete }}
          />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

