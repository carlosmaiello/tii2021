const app = require('./app');
const { sequelize } = require('./models');


sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log("Servidor iniciado na porta 3000");
    });
});