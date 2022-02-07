
# Sistema de Supermercado

1) O cliente entrega o produto para a atendente que aproxima o código de barras do produto ao leitor.
2) O sistema pergunta se será informado o CPF.
3) A atendente registra que o Sim para informar CPF;
4) A atendente solicita que o cliente informe o CPF no teclado;
5) Se deseja participar do clube;
6) o sistema insere o produto na NF;
7) registrar mais produtos?
8) Se sim:
    9) A atendente le o código de barras de mais um produto;
    10) O sistema insere o produto na NF;
    11) volta para o 7;
12) Se não:
    13) Seleciona forma de pagamento;

Objetos:
- Cliente
    - cpf
    - clube
    - id
    - nome
    - email
    - telefone
    - endereco
- Produto
    - Código de Barras
    - nome
    - preco
    - setor
    - estoque
- Atendente
- NotaFiscal
    - produtos: []
    - formaDePgto: []

