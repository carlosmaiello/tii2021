import { View } from "react-native";
import Banner from "../components/Banner";

export default function HomePage() {
    return (
        <View style={{ flex: 1, borderColor: "blue", borderWidth: 1 }}>
            <Banner />
        </View>
    )
}