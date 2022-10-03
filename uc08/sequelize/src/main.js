const { sequelize, Area, Aluno } = require('./models');

(async () => {
    await sequelize.sync({ force: true, logging: true });

    await Area.bulkCreate([
        { nome: 'Tecnologia da Informação' },
        { nome: 'Saúde' },
        { nome: 'Bem-estar' }
    ]);

    await Aluno.bulkCreate(
        [
            {
                nome: "Zezinho da Silva",
                endereco: {
                    logradouro: "Rua teste",
                    numero: "123",
                    bairro: "Centro",
                    cep: "12345-678",
                    cidade: "Bauru",
                    estado: "SP"
                }
            },
            { nome: "Mariazinha de Souza", },
            { nome: "Marcia Rezende", },
            { nome: "Felipe de Souza", },
        ],
        {
            include: [Aluno.Endereco]
        });

    /**
     * Consultando todos
     */
    const alunos = await Aluno.findAll();
    console.log("LISTA DE ALUNOS")
    alunos.forEach((aluno) => console.log(aluno.nome));

    /**
     * Consultando por chave primária
     */
    const aluno = await Aluno.findByPk(4);
    console.log("ALUNO")
    console.log(aluno.nome);

    /**
     * Removendo o aluno
     */
    await aluno.destroy();

    /**
     * Atualizando o email
     */
    const aluno1 = await Aluno.findByPk(1);
    aluno1.email = "zezinho@gmail.com";
    await aluno1.save();
})();


