import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { Contexto } from "../../App";
import DadosUsuario from "./DadosUsuario";

export default function Topo() {
    const { setTema, globalStyles } = useContext(Contexto);
    return (
        <View style={[{ flexDirection: "row", justifyContent: "space-between" }, globalStyles.container]}>
            <Text style={globalStyles.text}>Logo</Text>
            <View style={{ flexDirection: "row" }}>
                <Button title="C" onPress={() => setTema("claro")} />
                <Button title="E" onPress={() => setTema("escuro")} />
            </View>
            <DadosUsuario />
        </View>
    )
}