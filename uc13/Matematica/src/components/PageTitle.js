import { StyleSheet, Text, View } from "react-native";

export default function PageTitle(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20
    },
    text: {
        fontSize: 30
    }
});