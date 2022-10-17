import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { NewsContext } from "../contexts/News";

export default function NewsDetailPage() {
    const route = useRoute();
    const { newsId } = route.params;

    const { news, getNews } = React.useContext(NewsContext);

    useEffect(() => {
        getNews(newsId);
    }, [newsId])


    if (!news) return <Text>Carregando ...</Text>;

    return (
        <View>
            <Image source={news.image} style={{width: "100%", height: 200}} />
            <Text>{news.title}</Text>
            <Text>{news.subject}</Text>
            <Text>{news.content}</Text>
        </View>
    )
}