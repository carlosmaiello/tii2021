import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [peso, setPeso] = React.useState();
  const [altura, setAltura] = React.useState();
  const [imc, setImc] = React.useState();
  const [msg, setMsg] = React.useState();
  const [cor, setCor] = React.useState("white");

  const calcular = () => {
    const res = peso / (altura * altura);
    setImc(res.toFixed(2));

    if (res < 18.5) {
      setMsg("Abaixo do peso");
      setCor("red");
    } else if (res < 25) {
      setMsg("Peso normal");
      setCor("green");
    } else if (res < 30) {
      setMsg("Sobrepeso");
      setCor("yellow");
    } else if (res < 35) {
      setMsg("Obesidade I");
      setCor("orange");
    } else if (res < 40) {
      setMsg("Obesidade II");
      setCor("purple");
    } else {
      setMsg("Obesidade III");
      setCor("red");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>
      <View style={{ flexDirection: "row" }}>

        <View style={styles.containerInput}>
          <Text>Peso</Text>
          <TextInput style={styles.input} placeholder="Digite o valor" value={peso} onChangeText={setPeso} />
        </View>

        <View style={[styles.containerInput, { marginLeft: 10 }]}>
          <Text>Altura</Text>
          <TextInput style={styles.input} placeholder="Digite o valor" value={altura} onChangeText={setAltura} />
        </View>

      </View>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Button title="Calcular" onPress={() => calcular()} />
      </View>

      <View>
        <Text style={styles.titleResult}>Resultado:</Text>
        <Text style={styles.textResult}>{imc}</Text>
        <Text style={[styles.textResult, { backgroundColor: cor, padding: 5}]}>{msg}</Text>
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20
  },
  containerInput: {
    flex: 1
  },
  input: {
    borderWidth: 1,
    padding: 10
  },
  titleResult: {
    fontSize: 20
  },
  textResult: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
    textAlign: "center"
  }
});
