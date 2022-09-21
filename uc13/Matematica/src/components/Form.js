import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function Form(props) {
    const [numero, setNumero] = React.useState();
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={numero} onChangeText={setNumero} />
            <Button title="Mostrar" onPress={() => props.onMostrar(Number(numero))}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    input: {
        borderWidth: 1,
        fontSize: 20
    }
});