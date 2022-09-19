import { ScrollView, StyleSheet, Text } from "react-native";

export default function Lista(props) {
    return (
        <ScrollView style={styles.listaContainer}>
            {props.lista.map((v) => <Text style={styles.itemLista}>{v}</Text>)}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    listaContainer: {
        flex: 1,
        padding: 10
    },
   
    itemLista: {
        fontSize: 20
    }, 
});