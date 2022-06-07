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
        },
        consultarFrutas() {
            this.carregandoFrutas = true;
            fetch("https://frutas-fd96.restdb.io/rest/frutas?apikey=620a8f5f34fd621565858549")
                .then(response => response.json())
                .then(data => {
                    this.frutas = data;
                    this.carregandoFrutas = false;
                });
        }
    },
    mounted() {
        this.consultarFrutas();
    }
};

Vue.createApp(App).mount('#app');