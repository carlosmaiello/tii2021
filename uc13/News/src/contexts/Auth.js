import React from 'react';

export const AuthContext = React.createContext();


export const AuthProvider = ({ children }) => {

    const [user, setUser] = React.useState(null);

    const login = (email, password) => {
        if (email == "a@a.com" && password == "123") {
            setUser({
                email: "a@a.com",
                name: "Joselito",
                role: "user"
            })
        }
        else if (email == "e@e.com" && password == "123") {
            setUser({
                email: "e@e.com",
                name: "Editor",
                role: "editor"
            })
        }
        else {
            setUser(null);
            throw new Error("Usuário ou senha inválidos!");
        }
    }

    const logout = () => {
        setUser(null);
    }

    const authorized = user != null;

    return (
        <AuthContext.Provider value={{ user, authorized, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}