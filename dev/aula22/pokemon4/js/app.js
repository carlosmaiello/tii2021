const App = {
    data () {
        return {
            nome: '',
            ordenadoPor: 'U',
            tipo: '',
            pokemons: [],
            types: []
        }
    },
    computed: {
        pokemonsFiltrados: function () {
            var lista = this.pokemons;

            lista = lista.filter((pokemon) => {
                return pokemon.name.english.toUpperCase().indexOf(this.nome.toUpperCase()) >= 0;
            });

            if (this.tipo != '') {
                lista = lista.filter((pokemon) => {
                    return pokemon.type.includes(this.tipo);
                });
            }

            lista = lista.sort((p1, p2) => {
                if (this.ordenadoPor == 'N') {
                    if (p1.name.english > p2.name.english)  return 1;
                    else if (p1.name.english < p2.name.english) return -1;
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
        fetch("https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json")
        .then(response => response.json())
        .then(data => {
            this.pokemons = data;
        });

        fetch("https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/types.json")
        .then(response => response.json())
        .then(data => {
            this.types = data;
        });
    }
};

Vue.createApp(App).mount('#app');