import { View } from "react-native";
import Logo from "./Logo";
import Nav from "./Nav";
import UserInfo from "./UserInfo";

export default function Header() {
    return (
        <View style={{flexDirection: "row", borderColor: "blue", borderWidth: 1, justifyContent: "space-between"}}>
            <Logo />
            <Nav />
            <UserInfo />
        </View>
    )
}