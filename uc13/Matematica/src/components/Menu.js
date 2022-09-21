import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function MenuItem(props) {
    return (
        <TouchableOpacity onPress={() => props.onPress(props.name)}>
            <View style={styles.item}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default function Menu(props) {
    return (
        <View style={styles.menu}>
            {props.items.map((item) => <MenuItem title={item.title} name={item.name} onPress={props.onSelect} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: "row",
        borderWidth: 1,
        backgroundColor: "#ddd",
        borderColor: "#b1b1b1"
    },
    item: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 1,
        borderColor: "#b1b1b1"
    }
})