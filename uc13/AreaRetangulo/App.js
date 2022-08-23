import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [base, setBase] = React.useState(20);
  const [altura, setAltura] = React.useState(30);
  const [resultado, setResultado] = React.useState(600);

  const calcular = () => {
    var res = base * altura;
    setResultado(res);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Área do Retângulo</Text>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>Base:</Text>
        <TextInput style={styles.input} value={base} 
        onChangeText={setBase} />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>Altura:</Text>
        <TextInput style={styles.input} value={altura} 
        onChangeText={setAltura} />
      </View>
      <Button title="Calcular" style={styles.botao} 
      onPress={() => calcular()} />
      <View style={styles.resultadoView}>
        <Text style={styles.resultadoLabel}>Resultado:</Text>
        <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    padding: 10
  },
  titulo: {
    fontSize: 30    
  },
  inputView: {
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10
  },
  inputLabel: {
    fontSize: 20
  },
  input: {
    borderWidth: 1,
    fontSize: 20
  },
  botao: {
    fontSize: 20,
  },
  resultadoView: {
    marginTop: 30
  },
  resultadoLabel: {
    fontSize: 20
  },
  resultado: {
    fontSize: 40
  }

});
