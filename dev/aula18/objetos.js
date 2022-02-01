
var casa = {
    sala: {
        moveis: [],
        eletronicos: [],
        paredes: [
            {
                cor: "cinza"
            },
            {
                cor: "branco"
            },
            {
                cor: "branco"
            },
            {
                cor: "branco"
            }
        ]
    },
    cozinha: {},
    banheiro: {},
    quarto1: {},
    quarto2: {},
    quintal: {},
    garagem: {},
};



var aluno = {
    nome: "Carlos",
    rg: "123123123",
    cpf: "123123123",
    nascimento: "12/12/1212",
    turma: {
        horario: {
            inicio: "13:30",
            termino: "17:30"
        },
        curso: {
            nome: "Técnico em Informática para Internet"
        },
        ucs: [
            {
                num: 1,
                competencia: "Nome da competência",
                professores: []
            },
            {
                num: 2,
                competencia: "Nome da competência 2",
                professores: []
            }            
        ]            
    }
};

console.log("Horário de início:", aluno.turma.horario.inicio);

// Função construtura
function Carro(ma, mo, an) {
    this.marca = ma;
    this.modelo = mo;
    this.ano = an;
    this.cor = "Branco";
    this.ligado = false;
    this.motor = {
        ligado: false
    }

    this.ligar = function () {
        this.ligado = true;
    }
    this.desligar = function () {
        if (this.motor.ligado)
            this.motor.ligado = false;

        this.ligado = false;        
    }
    this.partida = function () {
        if (this.ligado)
            this.motor.ligado = true;
        else
            console.log("Carro desligado");
    }
}

var c1 = new Carro("Fiat", "Uno", 2002);
var c2 = new Carro("Hyundai", "HB20", 2017);
var c3 = new Carro("Ford", "Ecosport", 2019);

c1.cor = "Preto";

function Dono(nome, carro) {
    this.nome = nome;
    this.carros = [carro];
}

var d1 = new Dono("Carlos", c1);

console.log(c1);
c1.ligar();
c1.partida();
console.log(c1);


var p = {
    nome: "Zézinho",
    ida: 10,

    set idade(i) {
        if (i < 10) {
            console.log("Idade inválida");
        }
        else {
            this.ida = i;
        }
    },
    get idade() {
        return this.ida;
    }
}

p.idade = 12;
console.log(p.idade);

