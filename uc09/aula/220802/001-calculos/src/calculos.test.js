const { areaTriangulo } = require("./calculos");

describe("Área do Triângulo", () => {
    test("Base 10 Altura 2", () => {
        const area = areaTriangulo(10, 2);
        expect(area).toBe(10);
    })

    test("Base 2 Altura 10", () => {
        const area = areaTriangulo(2, 10);
        expect(area).toBe(10);
    })

    test("Base 10 Altura 0", () => {
        const area = areaTriangulo(10, 0);
        expect(area).toBe(0);
    })

    test("Base 0 Altura 10", () => {
        const area = areaTriangulo(0, 10);
        expect(area).toBe(0);
    })

    test("Base -10 Altura -2", () => {
        const area = areaTriangulo(-10, -2);
        expect(area).toBe(0);
    })
})