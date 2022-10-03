
import { useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Animal from './src/models/Animal';
import AnimalList from './src/pages/AnimalList';

export default function App() {
  useEffect(() => {
    Animal.createTable();
    return () => {}
  }, [])
  return (
    <View style={styles.container}>
      <AnimalList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
