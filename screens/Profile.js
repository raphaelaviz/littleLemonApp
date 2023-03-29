import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { CheckBox } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from '../screens/Onboarding';


const Profile = ({ route, navigation }) => {
  const [checked1, setchecked1] = useState(false);
  const [checked2, setchecked2] = useState(false);
  const [checked3, setchecked3] = useState(false);
  const [checked4, setchecked4] = useState(false);

  const handleLogout = async () => {
    try {
      // Clear all data from disk
      await AsyncStorage.clear();
      navigation.goBack();
      // Navigate to Onboarding screen
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>◅</Text>
        </TouchableOpacity>
        <Image style={styles.logo} source={require('../img/littleLemonHeader.png')} />
      </View>
      <ScrollView>
      <View style={styles.formContainer}>
        <Text style={styles.personalInfoText}>Personal Information</Text>
        <Text style={styles.labelText}>First Name</Text>
        <TextInput style={styles.input} placeholder='First Name'></TextInput>
        <Text style={styles.labelText}>Last Name</Text>
        <TextInput style={styles.input} placeholder='Last Name'></TextInput>
        <Text style={styles.labelText}>Email</Text>
        <TextInput style={styles.input} placeholder='Email'></TextInput>
        <Text style={styles.labelText}>Phone Number</Text>
        <TextInput style={styles.input} placeholder='Phone Number'></TextInput>
        <Text style={styles.emailNotificationText}>Email Notifications</Text>
    
      <CheckBox 
      checkedColor='#495E57'
      size={20}
      title="Order statuses"
      checked={checked1}
      onPress={() => setchecked1 (!checked1)}
      containerStyle={{ marginLeft: -5, marginBottom: -10 }}
      />
      <CheckBox 
      checkedColor='#495E57'
      size={20}
      title="Password changes"
      checked={checked2}
      onPress={() => setchecked2 (!checked2)}
      containerStyle={{ marginLeft: -5, marginBottom: -10 }}
      />
      <CheckBox 
      checkedColor='#495E57'
      size={20}
      title="Special offers"
      checked={checked3}
      onPress={() => setchecked3 (!checked3)}
      containerStyle={{ marginLeft: -5, marginBottom: -10 }}
      
      />
      <CheckBox 
      checkedColor='#495E57'
      size={20}
      title="Newsletter"
      checked={checked4}
      onPress={() => setchecked4 (!checked4)}
      containerStyle={{ marginLeft: -5, marginBottom: -10 }}
      />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log out</Text>
      </TouchableOpacity>  
      </View>
      <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.buttonDiscard}>
        <Text style={styles.discardButtonText}>Discard changes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSave}>
        <Text style={styles.saveButtonText}>Save changes</Text>
      </TouchableOpacity>
      </View>
      </ScrollView> 
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEFEE',
    height: '15%',
    paddingHorizontal: 20,
  },
  backButton: {
    backgroundColor: '#495E57',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 50,
    top: 10,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  logo: {
    width: 200,
    height: 50,
    left: 50,
    top: 10,
  },
  formContainer: {
    flex: 1,
    padding: 20,
  },
  formRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  personalInfoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emailNotificationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 7,
  },
  labelText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 7,
    marginBottom: 6,
    color: '#495E57'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 3,
  },
  logoutButton: {
    backgroundColor: '#F4CE14',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingHorizontal: 20,
  },
  buttonDiscard: {
    backgroundColor: 'white',
    borderColor: '#455a64',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    marginRight: 10,
  },
  discardButtonText: {
    color: '#455a64',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonSave: {
    backgroundColor: '#495E57',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  saveButtonText: {
    color: '#EDEFEE',
    textAlign: 'center',
    fontWeight: 'bold',
  }
  
});
