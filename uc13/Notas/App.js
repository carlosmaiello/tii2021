import { StyleSheet, View, StatusBar } from 'react-native';
import LancarNotasPage from './src/pages/LancarNotasPage';

export default function App() {
  return (
    <View style={styles.container}>
      <LancarNotasPage />
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
