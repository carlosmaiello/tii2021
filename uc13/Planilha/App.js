import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TextInput, TouchableHighlight, Button } from 'react-native';

export default function App() {
  const [valor, setValor] = React.useState();
  const [lista, setLista] = React.useState([]);
  const [soma, setSoma] = React.useState();
  const [media, setMedia] = React.useState();
  const [maior, setMaior] = React.useState();
  const [menor, setMenor] = React.useState();
  const [qtde, setQtde] = React.useState(0);

  const adicionar = () => {
    const numero = +valor;
    const q = qtde + 1;
    setQtde(q);

    setLista([...lista, numero]);
    setValor('');

    let s;
    if (soma == undefined)
      s = numero;
    else
      s = soma + numero;

    setSoma(s);
    setMedia(s / q);

    if (maior == undefined || numero > maior)
      setMaior(numero);

    if (menor == undefined || numero < menor)
      setMenor(numero);


  };

  return (
    <View style={styles.container}>
      <View style={ styles.formContainer }>
        <TextInput placeholder="Valor" style={styles.input} value={valor} onChangeText={setValor} />
        <Button title="Adicionar" onPress={() => adicionar()}/>
      </View>
      <ScrollView style={ styles.listaContainer }>
        {lista.map((v) => <Text style={styles.itemLista}>{v}</Text>)}
      </ScrollView>
      <View style={ styles.resultContainer }>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.texto}>Soma</Text>
            <Text style={styles.textoDestaque}>{soma}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.texto}>Média</Text>
            <Text style={styles.textoDestaque}>{media}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.texto}>Maior</Text>
            <Text style={styles.textoDestaque}>{maior}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.texto}>Menor</Text>
            <Text style={styles.textoDestaque}>{menor}</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    flexDirection: "row",
    padding: 10
  },
  listaContainer: {
    flex: 1,
    padding: 10
  },
  resultContainer: {
    borderWidth: 1,
    padding: 10
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    fontSize: 20
  },
  itemLista: {
    fontSize: 20
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flex: 1
  },
  texto: {
    fontSize: 20
  },
  textoDestaque: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
