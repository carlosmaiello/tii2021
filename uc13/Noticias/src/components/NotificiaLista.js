import { ScrollView } from "react-native";
import NoticiaListaItem from "./NoticiaListaItem";

export default function NoticiaLista(props) {
    return (
        <ScrollView style={{ padding: 10, flex: 1 }}>
            {props.noticias.map((n) => <NoticiaListaItem imagem={n.imagem} titulo={n.titulo} onPress={() => props.onSelect(n)} />)}
        </ScrollView>
    )
}