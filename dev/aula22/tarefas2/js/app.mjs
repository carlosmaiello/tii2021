import Api from './api/index.mjs'

const App = {
    data() {
        return {
            listas: [],
            listaSelecionada: null,
            tarefas: [],
            tarefaSelecionada: null,
            modal: {
                titulo: "",
            }
        }
    },
    methods: {
        salvar() {
            let tarefa = {
                ...this.tarefaSelecionada,
                lista_id: this.listaSelecionada.id
            };

            Api.tarefas.salvar(tarefa).then(data => {
                this.consultarTarefas();
                this.tarefaSelecionada = null;
            });
            
        },
        consultarTarefas() {
            this.tarefas = [];
            if (this.listaSelecionada) {
                Api.tarefas.consultar({ "lista_id": this.listaSelecionada.id }).then(data => {
                    this.tarefas = data
                });
            }
        },
        consultarListas() {
            Api.listas.consultar().then(data => {
                this.listas = data
                if (this.listas.length > 0) {
                    this.selecionarLista(this.listas[0]);
                }
            });
        },
        selecionarLista(lista) {
            this.listaSelecionada = lista;
            this.consultarTarefas();
        },
        novaTarefa() {
            this.modal.titulo = "Nova tarefa"
            this.tarefaSelecionada = {
                titulo: '',
                concluida: false
            }
        },
        alterarTarefa(tarefa) {
            this.modal.titulo = "Alterar tarefa"
            this.tarefaSelecionada = {...tarefa};
        }        
    },
    mounted() {
        this.consultarListas();
    }
};

Vue.createApp(App).mount('#app');