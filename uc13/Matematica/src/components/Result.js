import { StyleSheet, Text, View } from "react-native";

export default function Result(props) {
    return (
        <View style={styles.container}>
            {props.content}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        padding: 10
    }
})