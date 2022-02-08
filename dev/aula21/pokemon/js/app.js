const App = {
    data () {
        return {
            nome: '',
            pokemons: [],
            pokemonsFiltrados: []
        }
    },
    methods: {
        filtrar () {
            this.pokemonsFiltrados = [];
            this.pokemons.forEach(pokemon => {
                if (pokemon.name.toUpperCase().indexOf(this.nome.toUpperCase()) >= 0)
                    this.pokemonsFiltrados.push(pokemon);
            });
        }
    },
    watch: {
        nome: function (novoValor, valorAnterior) {
            this.filtrar();
        }
    },
    mounted () {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
        .then(response => response.json())
        .then(data => {
            this.pokemons = data.pokemon;
            this.filtrar();
        });
    }
};

Vue.createApp(App).mount('#app');