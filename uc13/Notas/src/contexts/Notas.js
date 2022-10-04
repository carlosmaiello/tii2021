import React from 'react';

export const NotasContext = React.createContext();

export const NotasProvider = ({children}) => {

    const [notas, setNotas] = React.useState([]);

    const adicionar = (nota) => {
        setNotas([...notas, nota]);
    }

    const remover = (indice) => {
        notas.splice(indice, 1);
        setNotas([...notas]);
    }

    return (
        <NotasContext.Provider value={{ notas, adicionar, remover }}>
            {children}
        </NotasContext.Provider>
    )

}