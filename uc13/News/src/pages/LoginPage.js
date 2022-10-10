import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, View } from "react-native";
import { globalStyles } from "../../App";
import { AuthContext } from "../contexts/Auth";

export default function LoginPage() {
    const navigation = useNavigation();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [erro, setErro] = React.useState(null);

    const { login } = React.useContext(AuthContext);

    const loginHandle = () => {
        try {
            setErro(null);
            login(email, password);
            navigation.navigate("Home");
        }
        catch (err) {
            // console.log(err.message);
            setErro(err.message);
        }
    }
    return (
        <View style={globalStyles.container}>
            <Text>Login</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail}/>
            <TextInput placeholder="Senha" value={password} onChangeText={setPassword} />
            {erro && (<Text>{erro}</Text>)}
            <Button title="Entrar" onPress={() => loginHandle()}/>
            <Button title="Registrar" onPress={() => navigation.navigate("Register")} />
        </View>
    )
}