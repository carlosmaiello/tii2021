import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import NewsItem from "../components/NewsItem";
import { NewsContext } from "../contexts/News";

export default function NewsPage() {
    const { newsList, listNews } = React.useContext(NewsContext);
    const navigation = useNavigation();

    useEffect(() => {
        listNews();
    }, []);

    return (
        <View>
            {newsList.map(news => (<NewsItem news={news} onPress={() => {
                navigation.navigate("NewsDetail", {
                    newsId: news.id
                })
            }}/>))}
        </View>
    )
}