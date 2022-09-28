import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AppContext } from "../../App";
import Form from "../components/Form";
import Lista from "../components/Lista";
import Titulo from "../components/Titulo";

export default function LancarNotasPage() {

    const { notas, adicionarNota } = React.useContext(AppContext);

    return (
        <View style={styles.container}>
            <Titulo texto="Lançar Notas" />
            <Form onAdicionar={adicionarNota} />
            <ScrollView style={styles.listaContainer}>
                <Lista items={notas} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    listaContainer: {
        flex: 1,
        marginTop: 10
    }
})