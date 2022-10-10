import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { AuthContext, AuthProvider } from './src/contexts/Auth';
import AppRoutes from './src/AppRoutes';


export default function App() {

  return (
    <AuthProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
      <StatusBar style="auto" />
    </AuthProvider>
  );
}

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
