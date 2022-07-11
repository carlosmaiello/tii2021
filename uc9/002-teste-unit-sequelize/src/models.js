const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("sqlite::memory:");

const Area = sequelize.define('area', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

const Aluno = sequelize.define("aluno", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100)
    },
    ra: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    telefone: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    senha: {
        type: DataTypes.STRING(40),
        allowNull: true
    },
    rg: {
        type: DataTypes.STRING(14),
        allowNull: true
    },
    cpf: {
        type: DataTypes.STRING(14),
        allowNull: true
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

const Curso = sequelize.define("curso", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100)
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ementa: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0
    }
});

const Turma = sequelize.define("turma", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    inicio: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },
    fim: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
});

const Endereco = sequelize.define("endereco", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    logradouro: {
        type: DataTypes.STRING(100)
    },
    numero: {
        type: DataTypes.STRING(10)
    },
    complemento: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    bairro: {
        type: DataTypes.STRING(50)
    },
    cep: {
        type: DataTypes.STRING(7)
    },
    cidade: {
        type: DataTypes.STRING(100)
    },
    estado: {
        type: DataTypes.STRING(2)
    }
});

const TurmaAluno = sequelize.define("turmaAluno", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    num: {
        type: DataTypes.INTEGER
    }
});

Area.Cursos = Area.hasMany(Curso);
Curso.Area = Curso.belongsTo(Area);

Curso.Turmas = Curso.hasMany(Turma);
Turma.Curso = Turma.belongsTo(Curso);

Aluno.Endereco = Aluno.belongsTo(Endereco);
Endereco.Aluno = Endereco.hasOne(Aluno);

Turma.belongsToMany(Aluno, { through: TurmaAluno });
Aluno.belongsToMany(Turma, { through: TurmaAluno });

module.exports = { sequelize, Area, Aluno, Curso, Turma, Endereco }