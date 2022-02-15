const App = {
    data () {
        return {
            carregandoFrutas: false,
            cores: [],
            frutas: [],
            fruta: {
                nome: '',
                cor: ''
            }
        }
    },
    methods: {
        salvar () {
            if (this.fruta.nome == '')
                alert('Nome não informado');
            else if (this.fruta.cor == '')
                alert('Cor não informada');
            else {
                if (!this.fruta._id) {
                    fetch("https://frutas-fd96.restdb.io/rest/frutas?apikey=620a8f5f34fd621565858549", {
                        method: "POST",
                        body: JSON.stringify(this.fruta),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(response => {
                        this.consultarFrutas();
                        this.fruta = {
                            nome: '',
                            cor: ''
                        };
                    });
                }
                else {
                    fetch(`https://frutas-fd96.restdb.io/rest/frutas/${this.fruta._id}?apikey=620a8f5f34fd621565858549`, {
                        method: "PATCH",
                        body: JSON.stringify(this.fruta),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(response => {
                        this.consultarFrutas();
                        this.fruta = {
                            nome: '',
                            cor: ''
                        };
                    });
                }
            }
        },
        consultarFrutas() {
            this.carregandoFrutas = true;
            fetch("https://frutas-fd96.restdb.io/rest/frutas?apikey=620a8f5f34fd621565858549&sort=nome")
                .then(response => response.json())
                .then(data => {
                    this.frutas = data;
                    this.carregandoFrutas = false;
                });
        },
        alterarFruta(fruta) {
            this.fruta = { ...fruta };
        },
        excluirFruta(fruta) {
            if (confirm('Deseja realmente excluir esta fruta?')) {
                fetch(`https://frutas-fd96.restdb.io/rest/frutas/${fruta._id}?apikey=620a8f5f34fd621565858549`, {
                    method: "DELETE"
                }).then(response => {
                    this.consultarFrutas();
                    this.fruta = {
                        nome: '',
                        cor: ''
                    };
                });
            }
        }
    },
    mounted() {
        this.consultarFrutas();
    }
};

Vue.createApp(App).mount('#app');