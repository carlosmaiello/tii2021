export interface Autor {
  id: Number;
  nome: String;
  sobrenome: String;
}

export interface Capitulo {
  numero: String;
  titulo: String;
  livro_id: Number;
}

export interface Livro {
  id: Number;
  autor_id: Number;
  nome: String;
  sinopse: String;
  ano: String;
  edicao: Number;
}

export interface Usuario {
  id: Number;
  nome: String;
  sobrenome: String;
  email: String;
  senha: String;
}
