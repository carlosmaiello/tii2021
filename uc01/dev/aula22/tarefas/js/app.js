const API_KEY = "6203f0391b941c73ff397a12";
const API_URL = "https://tarefas-e2de.restdb.io/rest/";
const API_DEFAULT_HEADER = {
    "Content-Type": "application/json",
    "x-apikey": API_KEY
};

const App = {
    data() {
        return {
            listas: [],
            listaSelecionada: null,
            tarefas: [],
            tarefaSelecionada: null
        }
    },
    methods: {
        salvar() {
            let tarefa = {
                ...this.tarefaSelecionada,
                lista_id: this.listaSelecionada.id
            };



            if (tarefa.id) {
                const requestOptions = {
                    method: "PATCH",
                    headers: API_DEFAULT_HEADER,
                    body: JSON.stringify(tarefa)
                };

                fetch(`${API_URL}/tarefas/${tarefa._id}`, requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        this.consultarTarefas();

                        this.novaTarefa();
                    });
            }
            else {
                const requestOptions = {
                    method: "POST",
                    headers: API_DEFAULT_HEADER,
                    body: JSON.stringify(tarefa)
                };

                fetch(`${API_URL}/tarefas`, requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        this.consultarTarefas();

                        this.novaTarefa();
                    });

            }
        },
        consultarTarefas() {
            this.tarefas = [];

            const requestOptions = {
                method: "GET",
                headers: API_DEFAULT_HEADER
            };
            fetch(`${API_URL}/tarefas?q=` + JSON.stringify({ "lista_id": this.listaSelecionada.id }), requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.tarefas = data
                });
        },
        consultarListas() {
            const requestOptions = {
                method: "GET",
                headers: API_DEFAULT_HEADER
            };
            fetch(`${API_URL}/listas`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.listas = data
                });
        },
        selecionarLista(lista) {
            this.listaSelecionada = lista;
            this.consultarTarefas();
        },
        novaTarefa() {
            this.tarefaSelecionada = {
                titulo: '',
                concluida: false
            }
        },
        alterarTarefa(tarefa) {
            this.tarefaSelecionada = tarefa;
        }

    },
    mounted() {
        this.novaTarefa();
        this.consultarListas();
    }
};

Vue.createApp(App).mount('#app');