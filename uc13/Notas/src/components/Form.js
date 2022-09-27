import React from "react";
import { View } from "react-native";
import Button from "./Button";
import Input from "./Input";

export default function Form(props) {
    const [nome, setNome] = React.useState();
    const [n1, setN1] = React.useState();
    const [n2, setN2] = React.useState();
    const [n3, setN3] = React.useState();
    const [n4, setN4] = React.useState();

    const limpar = () => {
        setNome('');
        setN1('');
        setN2('');
        setN3('');
        setN4('');
    }

    const adicionar = () => {
        let obj = {
            nome, n1, n2, n3, n4,
            media: (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4
        };
        props.onAdicionar(obj);

       limpar();
    }

    return (
        <View>
            <View>
                <Input placeholder="Nome" value={nome} onChangeText={setNome} />
            </View>
            <View style={{ flexDirection: "row" }}>
                <Input placeholder="N1" value={n1} onChangeText={setN1} />
                <Input placeholder="N2" value={n2} onChangeText={setN2} />
                <Input placeholder="N3" value={n3} onChangeText={setN3} />
                <Input placeholder="N4" value={n4} onChangeText={setN4} />
            </View>
            <Button texto="Adicionar" onPress={adicionar} />
        </View>
    )
}