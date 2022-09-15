import { Text, View } from "react-native";
import NoticiaTitulo from "../components/NoticiaTitulo";
import styles from "../styles";

export default function NoticiaPage({route, navigation}) {
    const { noticia, id } = route.params;

    if (!noticia) {
        // consultar id
        return <Text>Notícia não encontrada</Text>;
    }
    return (
        <View style={styles.container}>
            <NoticiaTitulo titulo={noticia.titulo} />
        </View>
    );
}

