
class Pessoa {
    /**
     * Os atributos devem ser privados e só podem ser modificados 
     * por métodos da própria classe.
     * 
     * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes
     * 
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
     */
    #nome; 
    #sobrenome;
    #documento;
    
    constructor(nome, sobrenome, documento) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#documento = documento;
    }

    get nomeCompleto() {
        return this.#nome + ' ' + this.#sobrenome;
    }

    saudacao () {
        console.log(`Olá ${this.nomeCompleto}`);
    }

    get nome() {
        return this.#nome
    }

    set nome(valor) {
        this.#nome = valor
    }

    get sobrenome() {
        return this.#sobrenome
    }

    set sobrenome(valor) {
        this.#sobrenome = valor
    }

    get documento() {
        return this.#documento
    }

    set documento(valor) {
        this.#documento = valor
    }
}

var pessoa = new Pessoa("Carlos", "Maiello", "123.456.789-0");
pessoa.saudacao();
pessoa.nome = 'José';
pessoa.saudacao();

console.log(pessoa.nomeCompleto);




class Pedido {
    #produtos = [];
    #totalBruto = 0;
    #desconto = 0;

    constructor() {}

    set desconto(valor) {
        if (valor > 10)
            throw new Error('Valor de desconto acima do limite');
        this.#desconto = valor;
    }

    get desconto() {
        return this.#desconto;
    }

    get total() {
        let valorDesconto = this.#totalBruto * (this.#desconto / 100);
        return this.#totalBruto - valorDesconto;
    }

    addProduto(nome, qtde, valor) {
        this.#produtos.push({
            nome,
            qtde,
            valor,
            total: () => this.valor * this.qtde
        });

        this.#totalBruto += qtde * valor;
    }
}


let pedido = new Pedido();
pedido.addProduto("Need for Speed", 1, 200);
pedido.addProduto("The Sims 4", 1, 220);
pedido.addProduto("Fifa 2022", 1, 300);
pedido.desconto = 10;
console.log(pedido.total);
