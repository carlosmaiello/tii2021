
class Receita {
    #nome = ''
    #ingredientes = []
    #preparo = []
    #tempo = 0
    #porcoes = 0

    set nome(valor) {
        this.#nome = valor
    }

    get nome() {
        return this.#nome
    }

    set tempo(valor) {
        if (valor < 1) {
            throw new Error("Tempo inválido");
        }
        this.#tempo = valor
    }

    get tempo() {
        return this.#tempo
    }

    set porcoes(valor) {
        if (valor <= 0) {
            throw new Error("Quantidade de porções inválida");
        }
        this.#porcoes = valor
    }

    get porcoes() {
        return this.#porcoes
    }

    addIngrediente(nome, qtde) {
        this.#ingredientes.push({
            nome,
            qtde
        })
    }

    addPassoPreparo(num, passo) {
        this.#preparo.push({
            num,
            passo
        })
    }

    #imprimeLinha() {
        console.log("".padEnd(50, "-"));
    }

    exibir() {
        this.#imprimeLinha();
        console.log("RECEITA:", this.#nome);
        this.#imprimeLinha();
        console.log("Tempo de Preparo: ", this.#tempo, " minutos");
        console.log("Porções: ", this.#porcoes);
        this.#imprimeLinha();
        console.log("Ingredientes")
        this.#imprimeLinha();
        this.#ingredientes.forEach((ingrediente) => {
            console.log(ingrediente.nome.padEnd(30, ' '), ingrediente.qtde)
        });

        this.#imprimeLinha();
        console.log("Modo de Preparo")
        this.#imprimeLinha();
        this.#preparo.forEach((preparo) => {
            console.log(preparo.num.toString().padStart(5, ' '), preparo.passo)
        });

    }
}


module.exports = Receita