const App = {
    data () {
        return {
            pokemons: []
        }
    },
    mounted () {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
        .then(response => response.json())
        .then(data => {
            this.pokemons = data.pokemon
        });
    }
};

Vue.createApp(App).mount('#app');