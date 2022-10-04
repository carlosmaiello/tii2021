import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NotasProvider } from './src/contexts/Notas';
import LancarNotasPage from './src/pages/LancarNotasPage';

export default function App() {

  return (
    <NotasProvider>
      <View style={styles.container}>
        <LancarNotasPage />
        <StatusBar style="auto" />
      </View>
    </NotasProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
