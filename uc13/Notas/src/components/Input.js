import { StyleSheet, TextInput, View } from "react-native";

export default function Input(props) {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
                value={props.value} onChangeText={props.onChangeText} placeholder={props.placeholder} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 5,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        width: "100%",
        padding: 10,
    }
})