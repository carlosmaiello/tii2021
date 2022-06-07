const Receita = require("./modelos/Receita");

var receita1 = new Receita();
receita1.nome = "BOLO DE BRIGADEIRO";
receita1.tempo = 55;
receita1.porcoes = 20;

receita1.addIngrediente("Ovos", "3 un");
receita1.addIngrediente("Óleo", "1 xícara");
receita1.addIngrediente("Farinha de trigo", "2 xícaras");
receita1.addIngrediente("Açúcar", "1 xícara");
receita1.addIngrediente("Nescau", "1 xícara");
receita1.addIngrediente("Fermento", "1 colher de sopa");

receita1.addIngrediente("manteiga sem sal", "3 colheres");
receita1.addIngrediente("leite condensado", "1 lata");
receita1.addIngrediente("nescau", "5 colheres");
receita1.addIngrediente("creme de leite", "1 lata");

receita1.addIngrediente("leite", "1 copo");
receita1.addIngrediente("chocolate", "2 colheres");
receita1.addIngrediente("Essência de rum", "(opcional)");

receita1.addPassoPreparo(1, "Bolo");
receita1.addPassoPreparo(1.1, "Bater os 3 primeiros ingredientes no liquidificador (reserve).");
receita1.addPassoPreparo(1.2, "Peneirar os demais ingredientes secos todos juntos, duas vezes, para ficar bem envolvidos.");
receita1.addPassoPreparo(1.3, "Coloque em uma vasilha os ingredientes já batidos do liquidificador");
receita1.addPassoPreparo(1.4, "sobre o líquido acrescente vagarosamente os ingredientes secos já peneirados");
receita1.addPassoPreparo(1.5, "todos juntos, mexendo suavemente.");
receita1.addPassoPreparo(1.6, "Assar em forma untada e enfarinhada.");
receita1.addPassoPreparo(2, "Recheio");
receita1.addPassoPreparo(2.1, "Misture tudo, (menos o creme de leite) e leve ao fogo, até o ponto de brigadeiro (o ponto de brigadeiro é quando desgrudar do fundo da panela).");
receita1.addPassoPreparo(2.2, "Quando tirar do fogo junte: 1 lata de creme de leite sem soro e misture bem.");
receita1.addPassoPreparo(3, "Calda");
receita1.addPassoPreparo(3.1, "Misture bem o leite com o chocolate.");
receita1.addPassoPreparo(4, "Montagem");
receita1.addPassoPreparo(4.1, "Corte o bolo ao meio, umedecer a massa com a calda e rechear.");
receita1.addPassoPreparo(4.2, "Coloque a outra metade da massa, umedecer a massa com o restante da calda."); 
receita1.addPassoPreparo(4.3, "Cobrir e decorar com granulado ou raspas de chocolate.");

receita1.exibir();


var receita2 = new Receita();



var receitas = [
    receita1,
    receita2
];