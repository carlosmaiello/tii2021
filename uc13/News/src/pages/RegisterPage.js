import { Text, View } from "react-native";
import { globalStyles } from "../../App";


export default function RegisterPage() {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.container}>
            <Text>Login</Text>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Senha" />
            <Button title="Cadastrar" onPress={() => navigation.navigate("Home")} />
            <Button title="Entrar" onPress={() => navigation.navigate("Login")} />
        </View>
    )
}