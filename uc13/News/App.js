import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { AuthContext, AuthProvider } from './src/contexts/Auth';
import AppRoutes from './src/AppRoutes';
import { NewsProvider } from './src/contexts/News';


export default function App() {

  return (
    <AuthProvider>
      <NewsProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
        <StatusBar style="auto" />
      </NewsProvider>
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

  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    width: "80%"
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
  }
});
