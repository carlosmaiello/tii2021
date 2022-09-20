import { Button, StyleSheet, TextInput, View } from "react-native";

export default function Form(props) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} />
            <Button title="Mostrar" />
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