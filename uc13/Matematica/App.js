import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DivisivelPage from './src/pages/DivisivelPage';

export default function App() {
  return (
    <View style={styles.container}>
      <DivisivelPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
