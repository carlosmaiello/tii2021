import { ScrollView, StyleSheet, Text, View } from "react-native";
import Form from "../components/Form";
import Lista from "../components/Lista";
import Titulo from "../components/Titulo";

export default function LancarNotasPage() {
    const notas = [
        {
            nome: "José",
            n1: 8,
            n2: 8,
            n3: 8,
            n4: 8,
            media: 8
        },
        {
            nome: "Maria",
            n1: 6,
            n2: 8,
            n3: 10,
            n4: 8,
            media: 8
        }
    ];
    const adicionar = (aluno) => { }
    return (
        <View style={styles.container}>
            <Titulo texto="Lançar Notas" />
            <Form onAdicionar={adicionar} />
            <ScrollView style={styles.listaContainer}>
                <Lista items={notas} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    listaContainer: {
        flex: 1,
        marginTop: 10
    }
})