import { StyleSheet, Text, View } from "react-native";

export default function Titulo (props) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{props.texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center"
    },
    texto: {
        fontSize: 20
    }
})