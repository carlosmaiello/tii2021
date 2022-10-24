import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-web";
import { globalStyles } from "../../App";
import { NewsContext } from "../contexts/News";

export default function NewsDetailPage() {
    const route = useRoute();
    const navigation = useNavigation();
    const { newsId } = route.params;

    const { news, getNews } = React.useContext(NewsContext);

    useEffect(() => {
        getNews(newsId);
    }, [newsId])


    if (!news) return <Text>Carregando ...</Text>;

    return (
        <View style={globalStyles.modalContainer}>
            <View style={globalStyles.modalContent}>
            <TouchableHighlight onPress={() => { navigation.goBack() }} style={{marginBottom: 20}}>
                <Text>Fechar</Text>
            </TouchableHighlight>
                <Image source={news.image} style={{ width: "100%", height: 200 }} />
                <Text>{news.title}</Text>
                <Text>{news.subject}</Text>
                <Text>{news.content}</Text>
            </View>
        </View>
    )
}