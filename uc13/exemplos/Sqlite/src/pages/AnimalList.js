import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import Animal from "../models/Animal";

export default function AnimalList() {
    const [animals, setAnimals] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        try {
            Animal.findBy().then(data => {
                console.log('list', data)
                setAnimals(data);
            })
        }
        catch (err) {
            console.log(err);
            setError(err.message)
        }
        return () => { }
    }, []);

    const adicionar = async () => {
        try {
            const x = await Animal.create({
                name: 'Bob',
                color: 'Brown',
                age: 2
            })
            console.log(x)
        }
        catch (err) {
            console.log(err);
            setError(err.message)
        }
    }

    return (
        <View>
            <Text>Lista de Animais</Text>
            {animals.map((animal) => (
                <View>
                    <Text>{animal.name}</Text>

                </View>
            ))}
            {error}
            <Button title="Adicionar" onPress={adicionar} />
        </View>
    )
}