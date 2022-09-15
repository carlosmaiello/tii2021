import { TouchableHighlight, View } from "react-native";
import NoticiaImagem from "./NoticiaImagem";
import NoticiaTitulo from "./NoticiaTitulo";

export default function NoticiaListaItem(props) {
    return (
        <TouchableHighlight onPress={props.onPress}>
            <View style={{ flexDirection: "row", marginBottom: 10, borderBottomWidth: 1, borderColor: "#eee", paddingBottom: 10 }}>
                <View style={{ marginRight: 20 }}>
                    <NoticiaImagem imagem={props.imagem} />
                </View>
                <NoticiaTitulo titulo={props.titulo} />
            </View>
        </TouchableHighlight>
    )
}