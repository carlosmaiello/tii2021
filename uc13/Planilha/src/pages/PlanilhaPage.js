import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TextInput, TouchableHighlight, Button } from 'react-native';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Resultado from '../components/Resultado';


export default function PlanilhaPage() {
    const [lista, setLista] = React.useState([]);
    const [soma, setSoma] = React.useState();
    const [media, setMedia] = React.useState();
    const [maior, setMaior] = React.useState();
    const [menor, setMenor] = React.useState();
    const [qtde, setQtde] = React.useState(0);

    const adicionar = (valor) => {
        const numero = +valor;
        const q = qtde + 1;
        setQtde(q);

        setLista([...lista, numero]);

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
            <Formulario onAdicionar={(valor) => adicionar(valor)} />
            <Lista lista={lista} />
            <Resultado soma={soma} media={media} maior={maior} menor={menor} />
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