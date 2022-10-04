import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

function ListaItem(props) {
    return (
        <View style={styles.listaItem}>
            {props.valores.map((valor) => <Text style={{ flex: 1 }}>{valor}</Text>)}
            <View style={{ flex: 1 }}>
                {!props.title && (
                    <Button texto="X" onPress={() => props.onRemover(props.indice)} />
                )}
            </View>
        </View>
    )
}

export default function Lista(props) {
    return (
        <View style={styles.lista}>
            <ListaItem valores={['Aluno', 'N1', 'N2', 'N3', 'N4', 'Média']} title={true} />
            {props.items.map((item, i) => <ListaItem indice={i} valores={[item.nome, item.n1, item.n2, item.n3, item.n4, item.media]} onRemover={props.onRemover} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    lista: {

    },
    listaItem: {
        flexDirection: "row",
    }
})