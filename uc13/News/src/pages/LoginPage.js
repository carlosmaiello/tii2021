import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, View } from "react-native";
import { globalStyles } from "../../App";
import { AuthContext } from "../contexts/Auth";

export default function LoginPage() {
    const navigation = useNavigation();

    const [email, setEmail] = React.useState("a@a.com");
    const [password, setPassword] = React.useState("123");

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
            <TextInput style={globalStyles.input} placeholder="Email" value={email} onChangeText={setEmail}/>
            <TextInput style={globalStyles.input} placeholder="Senha" value={password} onChangeText={setPassword} />
            {erro && (<Text>{erro}</Text>)}
            <Button style={globalStyles.button} title="Entrar" onPress={() => loginHandle()}/>
            <Button style={globalStyles.button} title="Registrar" onPress={() => navigation.navigate("Register")} />
        </View>
    )
}