import { View } from "react-native";
import Button from "./Button";
import Input from "./Input";

export default function Form () {
    return (
        <View>
            <View>
                <Input placeholder="Nome" />
            </View>
            <View style={{flexDirection: "row"}}>
                <Input placeholder="N1" />
                <Input placeholder="N2" />
                <Input placeholder="N3" />
                <Input placeholder="N4" />
            </View>
            <Button texto="Adicionar" />
        </View>
    )
}