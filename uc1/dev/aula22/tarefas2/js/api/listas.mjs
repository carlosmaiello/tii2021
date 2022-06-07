import { API_URL, API_DEFAULT_HEADER } from './index.mjs'

const Listas = {
    consultar() {
        const requestOptions = {
            method: "GET",
            headers: API_DEFAULT_HEADER
        };
        return fetch(`${API_URL}/listas`, requestOptions)
        .then(response => response.json());
    },

}

export default Listas;