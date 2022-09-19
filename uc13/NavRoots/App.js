import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Pagina from './src/components/Pagina';

export default function App() {
  const [sel, setSel] = React.useState("1");

  // var pagina;
  // if (sel == "1")
  //   pagina = <Pagina nome="Página 1" backgroundColor="red" />;
  // else if (sel == "2")
  //   pagina = <Pagina nome="Página 2" backgroundColor="yellow" />;

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Button title="Página 1" onPress={() => setSel("1")} />
        <Button title="Página 2" onPress={() => setSel("2")} />
      </View>
      {sel == "1" && (<Pagina nome="Página 1" backgroundColor="red" />)}
      {sel == "2" && (<Pagina nome="Página 2" backgroundColor="yellow" />)}
      <Pagina backgroundColor="blue" />
      {/* {pagina} */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
