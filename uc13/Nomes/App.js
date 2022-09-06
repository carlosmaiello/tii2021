import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TextInput } from 'react-native';

export default function App() {
  const [nome, setNome] = React.useState();
  const [nomes, setNomes] = React.useState(["José", "Felipe", "Marcos", "João", "Maria"]);

  const adicionarNome = () => {
    nomes.push(nome);
    setNome('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nomes</Text>

      <View style={styles.bloco}>
        <View style={{ flexDirection: "row" }}>
          <TextInput placeholder='Digite o nome' style={styles.input} value={nome} onChangeText={setNome} />
          <Button title="Adicionar" onPress={() => adicionarNome()} />
        </View>
        {nomes.map((n) => <Text style={{ fontSize: 20 }}>{n}</Text>)}
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
  bloco: {
    marginTop: 50,
    marginBotttom: 50
  }
});
