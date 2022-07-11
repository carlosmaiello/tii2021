const { aplicarDesconto } = require("./index.js");


describe("Cálculo de desconto", () => {
    beforeEach(() => {
        console.log("ANTES DE CADA TESTE");
    })

    afterEach(() => {
        console.log("DEPOIS DE CADA TESTE");
    })
    beforeAll(() => {
        console.log("ANTES DE TODOS TESTE");
    })

    afterAll(() => {
        console.log("DEPOIS DE TODOS TESTE");
    })
    test("Desconto de $10 em $100", () => {
        expect(aplicarDesconto(100, 10)).toBe(90);
    })

    test("Desconto maior do que o valor", () => {
        expect(aplicarDesconto(100, 110)).toBe(0);
    })

})
