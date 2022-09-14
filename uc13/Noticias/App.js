import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function PaginaTitulo(props) {
  return (
    <View style={{ backgroundColor: "gray", padding: 10, fontSize: 20 }}>
      <Text style={{color: "white"}}>{props.titulo}</Text>
    </View>
  );
}

function NoticiaLista(props) {
  return (
    <View>
      {props.noticias.map((n) => <NoticiaListaItem imagem={n.imagem} titulo={n.titulo} />)}
    </View>
  )
}

function NoticiaListaItem(props) {
  return (
    <View style={{flexDirection: "row"}}>
      <NoticiaImagem imagem={props.imagem} />
      <NoticiaTitulo titulo={props.titulo} />
    </View>
  )
}

function NoticiaImagem(props) {
  return <Image source={props.imagem} style={{ width:100, height: 100 }} />;
}

function NoticiaTitulo(props) {
  return <Text>{props.titulo}</Text>;
}

export default function App() {
  const [noticias, setNoticias] = React.useState([
    {
      imagem: require("./assets/android.png"),
      titulo:"Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
    },
    {
      imagem: require("./assets/icon.png"),
      titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
    },
    {
      imagem: require("./assets/android.png"),
      titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
    },
    {
      imagem: require("./assets/icon.png"),
      titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
    },
    {
      imagem: require("./assets/android.png"),
      titulo: "Android Pay? Google pode lançar sistema mobile de pagamentos em 2015"
    }
  ]);
  return (
    <View style={styles.container}>
      <PaginaTitulo titulo="Notícias" />
      <NoticiaLista noticias={noticias} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
