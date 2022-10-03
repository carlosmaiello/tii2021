import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import { AuthProvider } from './src/contexts/Auth';
import HomePage from './src/pages/HomePage';
import LoginPage from './src/pages/LoginPage';

export default function App() {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <Header />
        <HomePage />
        <Footer />
        <StatusBar style="auto" />
      </View>
      {/* <LoginPage /> */}
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
