import { Button, View } from "react-native";

export default function LoginPage() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Button title="Entrar" onPress={() => login("a@a.com", "123")} />
            ou
            <Button title="Registrar" />
        </View>
    )
}