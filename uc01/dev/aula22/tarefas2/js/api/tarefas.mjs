import { API_URL, API_DEFAULT_HEADER } from './index.mjs'

const Tarefas = {
    consultar(filtros = []) {
        const requestOptions = {
            method: "GET",
            headers: API_DEFAULT_HEADER
        };
        return fetch(`${API_URL}/tarefas?q=` + JSON.stringify(filtros), requestOptions)
            .then(response => response.json())
    },
    salvar(tarefa) {
        if (tarefa.id) {
            const requestOptions = {
                method: "PATCH",
                headers: API_DEFAULT_HEADER,
                body: JSON.stringify(tarefa)
            };

            return fetch(`${API_URL}/tarefas/${tarefa._id}`, requestOptions)
                .then(response => response.json());
        }
        else {
            const requestOptions = {
                method: "POST",
                headers: API_DEFAULT_HEADER,
                body: JSON.stringify(tarefa)
            };

            return fetch(`${API_URL}/tarefas`, requestOptions)
                .then(response => response.json());
        }

    }
}

export default Tarefas;