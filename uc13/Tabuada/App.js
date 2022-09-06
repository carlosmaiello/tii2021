import React from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar } from 'react-native';

export default function App() {
  const [mult, setMult] = React.useState(10);
  const multiplicador = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tabuada</Text>
      <TextInput style={styles.input} value={mult} onChangeText={setMult} />

      <View>
        {multiplicador.map((v) => (
          <View style={styles.linha}>
            <Text style={styles.linhaText}>{mult}</Text>
            <Text style={styles.linhaText}>X</Text>
            <Text style={styles.linhaText}>{v}</Text>
            <Text style={styles.linhaText}>=</Text>
            <Text style={styles.linhaText}>{mult * v}</Text>
          </View>
        ))}
      </View>

      <View style={styles.bloco}>
        {multiplicador}
      </View>
      <View style={styles.bloco}>
        {multiplicador.map((v) => <View>{mult + " X " + v + " = " + (mult * v)}</View>)}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  titulo: {
    fontSize: 50,
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  linhaText: {
    fontSize: 20
  },
  bloco: {
    marginTop: 50,
    marginBotttom: 50
  }
});
