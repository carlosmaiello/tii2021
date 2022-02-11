import tarefas from "./tarefas.mjs"
import listas from "./listas.mjs"

export const API_KEY = "6203f0391b941c73ff397a12";
export const API_URL = "https://tarefas-e2de.restdb.io/rest/";
export const API_DEFAULT_HEADER = {
    "Content-Type": "application/json",
    "x-apikey": API_KEY
};

const Api = {
    tarefas,
    listas
}

export default Api;