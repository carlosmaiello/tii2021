import React from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../contexts/Auth";

export default function UserInfo() {
    const { user, authorized, login, logout } = React.useContext(AuthContext);
    return (
        <View>
            {authorized && (
                <View>
                    <Text>Olá {user.name}!</Text>
                    <Button title="Sair" onPress={() => logout()}/>
                </View>
            )}
            {!authorized && (
                <View style={{ flexDirection: "row" }}>
                    <Button title="Entrar" onPress={() => login("a@a.com", "123")} />
                    ou
                    <Button title="Registrar" />
                </View>
            )}
        </View>
    )
}