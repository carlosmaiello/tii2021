import React from "react";
import { View } from "react-native";
import NoticiaLista from "../components/NotificiaLista";
import { noticiasData } from "../data";
import styles from "../styles";

export default function NoticiasPage({navigation}) {
    const [noticias, setNoticias] = React.useState(noticiasData);

    return (
        <View style={styles.container}>
            <NoticiaLista noticias={noticias} onSelect={(noticia) => navigation.navigate("Noticia", { noticia })}/>
        </View>
    )
}