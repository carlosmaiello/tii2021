const imc = require('./imc');

describe('Testando cálculo do IMC', () => {
    test('Calcular o imc', () => {
        const result = imc(70, 1.74);
        expect(result).toEqual(23.12);

        expect(imc(80, 1.74)).toEqual(26.42);
    })

    test('Informar a altura zero', () => {
        const result = imc(70, 0);
        expect(result).toEqual(0);
    })

    test('Informar o peso zero', () => {
        const result = imc(0, 1.74);
        expect(result).toEqual(0);
    })
})
