import { StyleSheet, Text, View } from "react-native";

export default function Resultado(props) {
    return (
        <View style={styles.resultContainer}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.texto}>Soma</Text>
                    <Text style={styles.textoDestaque}>{props.soma}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.texto}>Média</Text>
                    <Text style={styles.textoDestaque}>{props.media}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.texto}>Maior</Text>
                    <Text style={styles.textoDestaque}>{props.maior}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.texto}>Menor</Text>
                    <Text style={styles.textoDestaque}>{props.menor}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    resultContainer: {
        borderWidth: 1,
        padding: 10
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