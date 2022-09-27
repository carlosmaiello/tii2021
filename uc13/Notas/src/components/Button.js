import { StyleSheet, Text, TouchableHighlight } from "react-native";

export default function Button(props) {
    return (
        <TouchableHighlight style={styles.button} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.texto}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        padding: 5,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#999",
        borderColor: "#bbb",
        alignItems: "center"
        
    },
    buttonText: {
        flex: 1,
        color: "white"
    }
})