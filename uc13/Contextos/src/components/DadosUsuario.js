import { useContext } from "react";
import { Text, View } from "react-native";
import { Contexto } from "../../App";

export default function DadosUsuario() {
    const {usuario} = useContext(Contexto);
    return (
        <View>
            <Text>Nome: {usuario.nome}</Text>
            <Text>Email: {usuario.email}</Text>
        </View>
    )
}
