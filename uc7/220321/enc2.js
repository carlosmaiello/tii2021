class Pessoa {
    #nome
    #sobrenome
    #documento

    get nome() {
        return "Sr. " + this.#nome
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
        this.#documento = valor.replace(/[.-]/g, '')
    }
}

var obj = new Pessoa();
obj.nome = "Carlos"
obj.sobrenome = "Maiello"
obj.documento = "123.123.123-1"

console.log(obj.nome);
console.log(obj.documento);