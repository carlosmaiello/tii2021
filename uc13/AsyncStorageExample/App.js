import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Armazenando dados no Aparelho</Text>
      <View style={styles.box}>
        <Text>Valor armazenado:</Text>
        <Text style={styles.highlight}>Alguma coisa</Text>
      </View>
      <View style={styles.box}>
        <TextInput placeholder='Informe o valor:' style={styles.input}/>
        <TouchableOpacity>
            <Text style={styles.btn}>Gravar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  btn: {
    padding: 10,
    backgroundColor: "blue",
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 5
  },
  box: {
    marginBottom: 20,
    marginTop: 20,    
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 30
  },
  highlight: {
    fontSize: 40
  }
});
