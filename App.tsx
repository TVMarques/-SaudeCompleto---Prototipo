import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
   
      <NavigationContainer>
         <AppNavigator />
      </NavigationContainer>
    
  );
}

