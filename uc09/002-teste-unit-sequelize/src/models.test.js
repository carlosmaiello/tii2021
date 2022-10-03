const { sequelize, Area } = require("./models")


beforeAll(async () => {
  await sequelize.sync({logging: false});
});


test("Inserindo uma área", async () => {
    const nome = "Tecnologia da Informação";
    Area.create({ nome });

    const qtde = await Area.count({ where: { nome } });

    expect(qtde).toBe(1);
})


test("Inserindo uma área sem nome", async () => {
    await expect(Area.create({})).rejects.toThrow();
})