import { StatusBar } from 'expo';
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Caixa = ({ texto }) => {
  return (
    <View style={styles.caixa}>
      <Text style={styles.caixaTexto}>{texto}</Text>
    </View>
  )
}

export default function App() {
  return (
    <SafeAreaView>

      <View style={styles.container}>
        <View>
          <ScrollView style={{ flexDirection: "row" }} horizontal>
            <Caixa texto="Caixa 1" />
            <Caixa texto="Caixa 2" />
            <Caixa texto="Caixa 3" />
            <Caixa texto="Caixa 4" />
            <Caixa texto="Caixa 5" />
            <Caixa texto="Caixa 6" />
            <Caixa texto="Caixa 7" />
            <Caixa texto="Caixa 8" />
          </ScrollView>
        </View>
      </View >
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  caixa: {
    margin: 5,
    padding: 20,
    width: 100,
    height: 100,
    backgroundColor: '#000'
  },
  caixaTexto: {
    color: "#fff",
    textAlign: "center"
  }
});
