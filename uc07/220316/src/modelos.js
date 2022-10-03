class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.endereco = null;
    }

    setEndereco(logradouro, numero, cep, bairro, cidade, estado) {
        this.endereco = new Endereco(logradouro, numero, cep, bairro, cidade, estado);
    }
}

class BandaEstilo {
    constructor (nome) {
        this.nome = nome;
        this.bandas = [];
    }
}

class Banda {
    constructor (estilo, nome) {
        this.estilo = estilo;
        this.nome = nome;
        this.desc = '';
        this.foto = '';

        this.eventos = [];
        this.endereco = null;
        this.usuario = null;

        if (!this.estilo.bandas.includes(this))
            this.estilo.bandas.push(this);
    }

    addEvento(evento) {
        if (!this.eventos.includes(evento)) {
            this.eventos.push(evento);
            evento.addBanda(this);
        }
    }

    setEndereco(logradouro, numero, cep, bairro, cidade, estado) {
        this.endereco = new Endereco(logradouro, numero, cep, bairro, cidade, estado);
    }
}

class EventoTipo {
    constructor (nome) {
        this.nome = nome;
    }
}

class Evento {
    constructor(tipo, nome) {
        this.tipo = tipo;
        this.nome = nome;
        this.desc = '';
        this.data = null;
        this.local = '';
        this.whatsapp = '';
        this.telefone = '';
        this.site = '';
        this.bandas = [];
        this.endereco = null;
        this.usuario = null;
    }

    addBanda(banda) {
        if (!this.bandas.includes(banda)) {
            this.bandas.push(banda);
            banda.addEvento(this);
        }
    }

    setEndereco(logradouro, numero, cep, bairro, cidade, estado) {
        this.endereco = new Endereco(logradouro, numero, cep, bairro, cidade, estado);
    }
}


class Endereco {
    constructor (logradouro, numero, cep, bairro, cidade, estado) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = '';
        this.cep = cep;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.lat = 0;
        this.lng = 0;
    }
}



module.exports = {
    Usuario,
    BandaEstilo,
    Banda,
    EventoTipo,
    Evento,
    Endereco
}


