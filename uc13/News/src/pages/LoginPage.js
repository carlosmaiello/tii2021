import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, View } from "react-native";
import { globalStyles } from "../../App";

export default function LoginPage() {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.container}>
            <Text>Login</Text>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Senha" />
            <Button title="Entrar" onPress={() => navigation.navigate("Home")}/>
            <Button title="Registrar" onPress={() => navigation.navigate("Register")} />
        </View>
    )
}