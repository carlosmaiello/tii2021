const { Tarefa, sequelize } = require("./models");

describe("Tarefas", () => {
    beforeAll(async () => {
        await sequelize.sync();
    })

    test("Inserir tarefas", async () => {
        const tarefa = await Tarefa.create({
            nome: "Comprar arroz",
            descricao: "Está mais barato no mercado Confiança (mentira!!!)",
            data: new Date(2022, 7, 15),
            concluida: true
        });

        // A tarefa não pode ser nula
        expect(tarefa).not.toBeNull();
        expect(tarefa.id).not.toBeNull();
        expect(tarefa.nome).toMatch(/arroz/);
        expect(tarefa.concluida).toBe(true);

        // O único campo obrigatório é o nome
        const tarefa2 = await Tarefa.create({
            nome: "Comprar feijão",
        });

        expect(tarefa2).not.toBeNull();
        expect(tarefa2.concluida).toBe(false);

        // Tem que gerar erro ao tentar incluir uma tarefa sem nome
        await expect(Tarefa.create()).rejects.toThrow();
    })

    test("Alterar tarefa", () => { })

    test("Excluir tarefa", () => { })

    test("Consultar tarefas", () => { })

    test("Consultar tarefas pendentes", () => { })
})