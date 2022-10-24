import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { globalStyles } from "../../App";
import { AuthContext } from "../contexts/Auth";

export default function SettingsPage() {
    const navigation = useNavigation();
    const {logout} = useContext(AuthContext);

    const sair = () => {
        logout();
    }
    return (
        <View style={globalStyles.container}>
            <Button title="Sair" onPress={sair} />
        </View>
    )
}