const prompt = require('prompt-sync')();
const menus = require('./menus');
const mysql = require('mysql-await');

(async () => {

    const conexao = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "escola"
    });

    conexao.connect();

    let opt = "";

    do {
        opt = menus.cursos();

        if (opt == "1") {
            const res = await conexao.awaitQuery("SELECT id, nome, area_id FROM cursos");
            console.log();

            // Título da tabela
            console.log("#".padEnd(5, ' '), "Nome".padEnd(50, ' '), "Área".padEnd(20, ' '));
            console.log("".padEnd(60, '-'));
            // Conteúdo da tabela
            res.forEach(curso => {
                console.log(
                    `${curso.id}`.padEnd(5, ' '),
                    curso.nome.padEnd(50, ' '),
                    `${curso.area_id}`.padEnd(20, ' ')
                );
            });

            console.log();
        }
        else if (opt == "2") {
            const nome = prompt("Digite o nome do curso: ");
            const area_id = prompt("Digite o número da área: ");

            const sn = prompt("Confirma a inclusão deste curso? (s/n) ");

            if (sn == "s" || sn == "S") {
                const res = await conexao.awaitQuery("insert into cursos (nome, area_id) values (?, ?)", [nome, area_id]);
                console.log(res);
            }
        }
        else if (opt == "3") {
            /**
             * 1. Solicitar o número do curso que deseja alterar
             * 2. Exibir os dados do curso selecionado
             * 3. Solicitar a alteração dos campos do curso
             * 4. Confirmar se deseja alterar
             * 5. Alterar os dados
             */

            /*
            // Exemplo de SQL Injection
            nome = `X"; DELETE * FROM cursos; --`;
            const res1 = conexao.awaitQuery(`update cursos set nome="${nome}", area_id="${area_id}" where id=${id}`);
            // update cursos set nome="X"; DELETE * FROM cursos; --", area_id="1" where id=1
            */

            console.log();
            const id = prompt("Número curso que deseja alterar: ");
            const res = await conexao.awaitQuery("select nome, area_id from cursos where id = ?", [id]);

            const curso = res[0];

            if (curso) {
                console.log("Digite os dados que deseja alterar:");
                const nome = prompt(`nome (${curso.nome}): `, curso.nome);
                const area_id = prompt(`area_id (${curso.area_id}): `, curso.area_id);

                const sn = prompt("Confirma a alteração deste curso? (s/n) ");
                if (sn == "s" || sn == "S") {
                    const res = await conexao.awaitQuery("update cursos set nome=?, area_id=? where id=?", [nome, area_id, id]);
                    console.log(res);
                }
            }
            else {
                console.log("Curso não encontrado!");
            }
        }
        else if (opt == "4") {
            console.log();
            const id = prompt("Digite o número do curso que deseja excluir: ");
            const res = await conexao.awaitQuery("select nome from cursos where id = ?", [id]);
            if (!res[0]) {
                console.log("Curso não encontrado!");
            }
            else {
                const sn = prompt(`Deseja realmente excluir o curso "${res[0].nome}"? (s/n) `);
                if (sn == "s" || sn == "S") {
                    const res = await conexao.awaitQuery("delete from cursos where id = ?", [id]);
                    console.log(res);
                }
            }

        }

    } while (!(opt == "s" || opt == "S"));

    conexao.end();

})();
