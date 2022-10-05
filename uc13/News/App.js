import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SettingsPage from './src/pages/SettingsPage';
import LoginPage from './src/pages/LoginPage';
import NewsDetailPage from './src/pages/NewsDetailPage';
import NewsPage from './src/pages/NewsPage';
import RegisterPage from './src/pages/RegisterPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={NewsPage} />
      <Tab.Screen name="Settings" component={SettingsPage} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="NewsDetail" component={NewsDetailPage} />
          <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
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
