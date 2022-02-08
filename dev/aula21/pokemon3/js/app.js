const App = {
    data () {
        return {
            nome: '',
            ordenadoPor: 'U',
            pokemons: []
        }
    },
    computed: {
        pokemonsFiltrados: function () {
            var lista = this.pokemons;

            lista = lista.filter((pokemon) => {
                return pokemon.name.toUpperCase().indexOf(this.nome.toUpperCase()) >= 0;
            });

            lista = lista.sort((p1, p2) => {
                if (this.ordenadoPor == 'N') {
                    if (p1.name > p2.name)  return 1;
                    else if (p1.name < p2.name) return -1;
                    else return 0;
                }
                else {
                    if (p1.num > p2.num)  return 1;
                    else if (p1.num < p2.num) return -1;
                    else return 0;
                }
            });

            return lista;
        }
    },
    
    mounted () {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
        .then(response => response.json())
        .then(data => {
            this.pokemons = data.pokemon;
        });
    }
};

Vue.createApp(App).mount('#app');