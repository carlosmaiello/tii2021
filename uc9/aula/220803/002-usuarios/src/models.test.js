const { sequelize, Usuario } = require('./models');

describe("Usuários", () => {
    /**
     * Usuário:
     * - nome (obrigatório)
     * - email (obrigatório)
     * - senha (obrigatório)
     * 
     * Casos de teste:
     * 1) Inserir com sucesso com todos os dados informados
     * 2) Nome deve ser informado 
     * 3) E-mail deve ser informado
     * 4) E-mail deve ser válido
     * 5) E-mail não pode ser duplicado
     * 7) Senha deve ser informada
     * 8) Senha não pode ter espaço em branco
     */

    beforeAll(async () => {
        await sequelize.sync({ logging: false });
    });

    beforeEach(async () => {
        await Usuario.truncate();
    });

    test("Usuário com todos os dados válidos", async () => {
        const usuario = await Usuario.create({
            nome: "Zézinho da Silva",
            email: "jose@gmail.com",
            senha: "123"
        });

        expect(usuario.id).toBeGreaterThan(0);

        const usuario2 = await Usuario.findOne({
            where: {
                email: 'jose@gmail.com'
            }
        });

        expect(usuario2).not.toBeNull();
        expect(usuario2.id).toBeGreaterThan(0);
    });

    test("Usuário sem nome", async () => {
        await expect(Usuario.create({
            email: "jose@gmail.com",
            senha: "123"
        })).rejects.toThrow();

        await expect(Usuario.create({
            nome: '',
            email: "jose@gmail.com",
            senha: "123"
        })).rejects.toThrow();

        await expect(Usuario.create({
            nome: '   ',
            email: "jose@gmail.com",
            senha: "123"
        })).rejects.toThrow();
    });

    test("Usuário sem email", async () => {
        await expect(Usuario.create({
            nome: "Zézinho da Silva",
            senha: "123"
        })).rejects.toThrow();

        await expect(Usuario.create({
            nome: "Zézinho da Silva",
            email: '',
            senha: "123"
        })).rejects.toThrow();

         await expect(Usuario.create({
            nome: "Zézinho da Silva",
            email: '   ',
            senha: "123"
        })).rejects.toThrow();
    });

    test("Email inválido", async () => {
        await expect(Usuario.create({
            nome: "Zézinho da Silva",
            email: 'aaa.com',
            senha: "123"
        })).rejects.toThrow();

        await expect(Usuario.create({
            nome: "Zézinho da Silva",
            email: '@aaa.com',
            senha: "123"
        })).rejects.toThrow();


        await expect(Usuario.create({
            nome: "Zézinho da Silva",
            email: '@aaa com',
            senha: "123"
        })).rejects.toThrow();

        await expect(Usuario.create({
            nome: "Zézinho da Silva",
            email: 'aa aaa.com',
            senha: "123"
        })).rejects.toThrow();
    });

    test("Usuário sem senha", async () => {
        await expect(Usuario.create({
            nome: "Zézinho da Silva",
            email: "jose@gmail.com",
        })).rejects.toThrow();

        await expect(Usuario.create({
            nome: "Zézinho da Silva",
            email: "jose@gmail.com",
            senha: '',
        })).rejects.toThrow();

        await expect(Usuario.create({
            nome: "Zézinho da Silva",
            email: "jose@gmail.com",
            senha: '  ',
        })).rejects.toThrow();

        await expect(Usuario.create({
            nome: "Zézinho da Silva",
            email: "jose@gmail.com",
            senha: 'a b',
        })).rejects.toThrow();
    });
});