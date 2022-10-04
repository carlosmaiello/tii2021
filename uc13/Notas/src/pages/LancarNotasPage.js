import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Form from "../components/Form";
import Lista from "../components/Lista";
import Titulo from "../components/Titulo";
import { NotasContext } from "../contexts/Notas";

export default function LancarNotasPage() {

    const { notas, adicionar, remover } = React.useContext(NotasContext);

    return (
        <View style={styles.container}>
            <Titulo texto="Lançar Notas" />
            <Form onAdicionar={adicionar} />
            <ScrollView style={styles.listaContainer}>
                <Lista items={notas} onRemover={remover} />
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