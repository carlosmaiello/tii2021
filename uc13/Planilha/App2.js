import { StyleSheet, Text, View, StatusBar, ScrollView, TextInput, TouchableHighlight, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput placeholder="Valor" style={styles.input} />
        <Button title="Adicionar" />
      </View>
      <ScrollView style={styles.listaContainer}>
        <Text style={styles.itemLista}>1</Text>
        <Text style={styles.itemLista}>1</Text>
        <Text style={styles.itemLista}>1</Text>
        <Text style={styles.itemLista}>1</Text>
      </ScrollView>
      <View style={styles.resultContainer}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.texto}>Soma</Text>
            <Text style={styles.textoDestaque}>60</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.texto}>Média</Text>
            <Text style={styles.textoDestaque}>20</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.texto}>Máximo</Text>
            <Text style={styles.textoDestaque}>20</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.texto}>Mínimo</Text>
            <Text style={styles.textoDestaque}>20</Text>
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
