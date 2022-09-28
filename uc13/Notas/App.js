import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import LancarNotasPage from './src/pages/LancarNotasPage';

export const AppContext = React.createContext();

export default function App() {

  const [notas, setNotas] = React.useState([]);
  const adicionarNota = (nota) => {
    setNotas([...notas, nota]);
  }

  return (
    <AppContext.Provider value={{ notas, adicionarNota }}>
      <View style={styles.container}>
        <LancarNotasPage />
        <StatusBar style="auto" />
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
