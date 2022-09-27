import { StyleSheet, Text, View } from "react-native";

function ListaItem(props) {
    return (
        <View style={styles.listaItem}>
           {props.valores.map((valor) => <Text style={{flex: 1}}>{valor}</Text>)}
        </View>
    )
}

export default function Lista (props) {
    return (
        <View style={styles.lista}>
            <ListaItem valores={['Aluno', 'N1', 'N2', 'N3', 'N4', 'Média']} />
            {props.items.map((item) => <ListaItem valores={[item.nome, item.n1, item.n2, item.n3, item.n4, item.media]} />)}
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