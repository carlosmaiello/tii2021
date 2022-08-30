import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView } from 'react-native';

export default function App() {
  const [base, setBase] = React.useState();
  const [altura, setAltura] = React.useState();
  const [resultado, setResultado] = React.useState();

  const calcular = () => {
    const r = (base * altura) / 2;
    setResultado(r);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.titulo}>Área do triângulo</Text>
        <View style={{ flexDirection: "row", marginTop: 40, marginBottom: 40 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.rotulo}>Base</Text>
            <TextInput style={styles.input} placeholder="Digite um valor" value={base} onChangeText={setBase} />
          </View>
          <Text style={{ fontSize: 30, textAlign: "center", padding: 20 }}>X</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.rotulo}>Altura</Text>
            <TextInput style={styles.input} placeholder="Digite um valor" value={altura} onChangeText={setAltura} />
          </View>
        </View>
        <Button title="Calcular" onPress={() => calcular()} />
        <View style={{ marginTop: 40 }}>
          <Text style={styles.subTitulo}>Resultado:</Text>
          <Text style={styles.resultado}>{resultado}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  titulo: {
    fontSize: 30,
  },
  rotulo: {
    fontSize: 20
  },
  input: {
    borderWidth: 1,
    padding: 10,
    flex: 1
  },
  subTitulo: {
    fontSize: 24
  },
  resultado: {
    fontSize: 40
  }
});
