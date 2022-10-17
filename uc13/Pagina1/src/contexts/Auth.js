import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext();


export const AuthProvider = ({ children }) => {

    const [user, setUser] = React.useState(null);

    const login = async (email, password) => {
        if (email == "a@a.com" && password == "123") {
            const user = {
                email: "a@a.com",
                name: "Joselito"
            };
            setUser(user);
            try {
                await AsyncStorage.setItem('user', JSON.stringify(user));
            }
            catch (err) {
                console.log(err);
            }
        }
        else
            setUser(null);
    }

    const logout = async () => {
        setUser(null);
        try {
            await AsyncStorage.setItem('user', null);
        }
        catch (err) {
            console.log(err);
        }
    }

    const carregar = async () => {
        try {
            const v = await AsyncStorage.getItem('user');
            setUser(v != null ? JSON.parse(v) : null);
        }
        catch (err) {
            setUser(null);
            console.log(err);
        }
    }

    // Quando monta o componente
    useEffect(() => {
        carregar();
        console.log("MONTAR");

        return () => {
            // Aqui executa quando desmonta
            console.log("DESMONTAR");
        }
    }, []);

    // Quando atualiza o componente
    useEffect(() => {
        console.log("ATUALIZAR");
    });

    useEffect(() => {
        console.log("USUÁRIO ATUALIZADO");
    }, [user]);



    const authorized = user != null;

    return (
        <AuthContext.Provider value={{ user, authorized, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}