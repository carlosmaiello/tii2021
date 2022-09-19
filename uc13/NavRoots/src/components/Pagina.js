import { StyleSheet, Text, View } from 'react-native';

export default function Pagina(props) {
    return (
        <View style={[styles.container, { backgroundColor: props.backgroundColor }]}>
            {props.nome && (<Text>{props.nome}</Text>)}
            {!props.nome && (<Text>Sem nome</Text>)}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});