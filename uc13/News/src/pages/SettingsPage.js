import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { globalStyles } from "../../App";

export default function SettingsPage() {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.container}>
            <Button title="Sair" onPress={() => navigation.push("Login")} />
        </View>
    )
}