import { Text, View } from "react-native";

export default function PaginaTitulo(props) {
    return (
        <View style={{ backgroundColor: "gray", padding: 10, fontSize: 20 }}>
            <Text style={{ color: "white" }}>{props.titulo}</Text>
        </View>
    );
}