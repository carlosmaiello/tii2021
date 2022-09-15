import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import NoticiasPage from './src/pages/NoticiasPage';
import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';
import NoticiaPage from './src/pages/NoticiaPage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Noticia" component={NoticiaPage} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
