const request = require('supertest');
const app = require('./app');
const { sequelize, Usuario } = require('./models');

describe("Rota Usuários", () => {

    beforeAll(async () => {
        await sequelize.sync();

        await Usuario.create({
            nome: "José da Silva",
            email: "jose@gmail.com",
            senha: "123"
        });

        await Usuario.create({
            nome: "Maria da Silva",
            email: "maria@gmail.com",
            senha: "123"
        });
    });

    test("GET /usuarios", (done) => {
        request(app)
            .get('/usuarios')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    test("POST /usuarios", (done) => {
        request(app)
            .post('/usuarios')
            .send({
                nome: "Suzana da Silva",
                email: "suzana@gmail.com",
                senha: "123"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    test("POST /usuarios - usuário duplicado", (done) => {
        request(app)
            .post('/usuarios')
            .send({
                nome: "Suzana da Silva",
                email: "suzana@gmail.com",
                senha: "123"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });

    test("POST /usuarios - usuário sem nome", (done) => {
        request(app)
            .post('/usuarios')
            .send({
                email: "suzana@gmail.com",
                senha: "123"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});