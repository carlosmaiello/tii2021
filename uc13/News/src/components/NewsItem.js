import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function NewsItem({ news, onPress }) {
    return (
        <TouchableHighlight style={styles.container} onPress={onPress}>
            <>
                <Image source={news.image} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{news.title}</Text>
                    <Text style={styles.subject}>{news.subject}</Text>
                </View>
            </>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 5,
    },
    image: {
        width: 150,
        height: 100
    },
    textContainer: {
        padding: 10
    },
    title: {
        fontSize: 24,
    },
    subject: {
        fontSize: 20,
    }
});