import { StyleSheet, Text, View } from "react-native";
import PageTitle from "./PageTitle";

export default function Header(props) {
    return (
        <View style={styles.container}>
            <PageTitle title={props.title} />
            <View>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        padding: 10
    }
})