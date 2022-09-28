import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Topo from './src/components/Topo';

export const Contexto = React.createContext();

export default function App() {
  const [usuario, setUsuario] = React.useState({
    id: 1,
    nome: "José",
    email: "jose@gmail.com"
  });

  const [logado, setLogado] = React.useState(true);

  const [tema, setTema] = React.useState("claro");

  const globalStyles = StyleSheet.create({
    container: {
      backgroundColor: tema == "claro" ? "#fff" : "#000"
    },
    text: {
      color: tema == "claro" ? "#000" : "#fff"
    }
  });

  return (
    <Contexto.Provider value={{ usuario, logado, tema, setTema, globalStyles }}>
      <Topo />
      <View style={[styles.container, globalStyles.container]}>
        <Text style={globalStyles.text}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </Contexto.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
