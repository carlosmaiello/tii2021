import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Form from "../components/Form";
import Header from "../components/Header";
import List from "../components/List";
import Result from "../components/Result";

export default function DivisivelPage() {
    const [lista, setLista] = React.useState([]);

    function mostrar(numero) {
        let valores = [];

        for (let c=1; c <= numero; c++) {
            let resto = numero % c;
            if (resto == 0) {
                valores.push(c);
            }
        }

        setLista(valores);
    }
    return (
        <View style={styles.container}>
            <Header title="Divisível por ...">
                <Form onMostrar={mostrar}/>
            </Header>
            <View style={{flex: 1}}>
                <List items={lista} />
            </View>
            <Result>
                <Text style={styles.result}>Total: <Text>{lista.length}</Text> números</Text>
            </Result>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    result: {
        fontSize: 16,
        fontWeight: "bold"
    }
});