import { Image } from "react-native";

export default function NoticiaImagem(props) {
    return <Image source={props.imagem} style={{ width: 100, height: 100 }} />;
}