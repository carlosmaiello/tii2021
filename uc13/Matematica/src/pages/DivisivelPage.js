import { StyleSheet, Text, View } from "react-native";
import Form from "../components/Form";
import Header from "../components/Header";
import List from "../components/List";
import Result from "../components/Result";

export default function DivisivelPage() {
    return (
        <View style={styles.container}>
            <Header title="Divisível por ..." content={<Form />} />
            <View style={{flex: 1}}>
                <List items={[1, 2, 5, 10, 20, 30]} />
            </View>
            <Result content={<Text style={styles.result}>Total: 4 números</Text>} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    result: {
        fontSize: 16,
        fontWeight: "bold"
    }
});