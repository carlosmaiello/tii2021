import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../components/Header";
import Result from "../components/Result";

export default function MmcPage() {
    const [n1, setN1] = React.useState("12");
    const [n2, setN2] = React.useState("45");

    const primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    const [divisiveis, setDivisiveis] = React.useState([]);
    const [resultado, setResultado] = React.useState();

    const calcular = () => {
        let auxN1 = Number(n1);
        let auxN2 = Number(n2);
        let auxPrimo = 0;
        let auxDivisiveis = [];
        let auxResultado = 1;

        while (!(auxN1 == 1 && auxN2 == 1)) {

            let dividiu = false;

            if (auxN1 % primos[auxPrimo] == 0) {
                auxN1 = auxN1 / primos[auxPrimo];
                dividiu = true;
            }

            if (auxN2 % primos[auxPrimo] == 0) {
                auxN2 /= primos[auxPrimo];
                dividiu = true;
            }

            if (dividiu) {
                auxDivisiveis.push(primos[auxPrimo]);
            } else {
                auxPrimo++;
            }

            console.log("N1=", auxN1, "N2=", auxN2, "divisiveis=", auxDivisiveis);
        }

        for (let i=0; i < auxDivisiveis.length; i++) {
            auxResultado *= auxDivisiveis[i];
        }

        setResultado(auxResultado);

    }

    return (
        <View style={styles.container}>
            <Header title="MMC">
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="Número 1" value={n1} onChangeText={setN1} />
                    <TextInput style={styles.input} placeholder="Número 2" value={n2} onChangeText={setN2} />

                    <Button style={styles.button} title="Calcular" onPress={calcular} />
                </View>
            </Header>

            <Result>
                <Text style={styles.result}>{resultado}</Text>
            </Result>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    form: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    input: {
        flex: 1,
        borderWidth: 1,
        padding: 10
    },
    button: {
        margin: 10,
        flex: 1,
    },

    result: {
        fontSize: 30
    }

});