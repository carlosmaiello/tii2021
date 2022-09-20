import { StyleSheet, Text, View } from "react-native"

function ListItem(props) {
return (
    <Text style={styles.text}>{props.item}</Text>
)
}

export default function List(props) {
    return (
        <View style={styles.container}>
            {props.items.map((item) => <ListItem item={item} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    text: {
        fontSize: 16,
        padding: 20,
        borderWidth: 1,
        margin: 10,
        flex: 1
    }
});