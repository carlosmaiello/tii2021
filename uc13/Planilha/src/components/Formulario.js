import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function Formulario(props) {
    const [valor, setValor] = React.useState();
    return (
        <View style={styles.formContainer}>
            <TextInput placeholder="Valor" style={styles.input} value={valor} onChangeText={setValor} />
            <Button title="Adicionar" onPress={() => props.onAdicionar(valor)} />
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: "row",
        padding: 10
    },
    input: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        fontSize: 20
    },
});