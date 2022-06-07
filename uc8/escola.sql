-- Sair do banco de dados escola
use mysql;

SET character_set_client = 'utf8';

-- Apagar e criar o banco de dados escola
drop database if exists escola;
create database escola character set utf8 collate utf8_general_ci;

-- Utilizar o banco de dados
use escola;

-- Criando as tabelas do banco de dados
create table areas (
    id int not null auto_increment primary key,
    nome varchar(50)
);

create table cursos (
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    descricao text,
    ementa text,
    area_id int not null,
    preco decimal(5,2)
);

create table turmas (
    id int not null auto_increment primary key,
    inicio date not null,
    fim date,
    curso_id int not null
);

create table alunos (
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    ra char(10),
    telefone varchar(15),
    email varchar(255),
    senha varchar(40),
    rg char(14),
    cpf char(14),
    ativo boolean default 1
);

create table turma_alunos (
    id int not null auto_increment primary key,
    aluno_id int not null,
    turma_id int not null
);

create table enderecos (
    id int not null auto_increment primary key,
    aluno_id int not null,
    logradouro varchar(100) not null,
    numero varchar(10) not null,
    complemento varchar(30),
    bairro varchar(50) not null,
    cep char(9) not null,
    cidade varchar(100) not null default 'Bauru',
    estado char(2) not null default 'SP'
);

-- Relacionamentos
alter table cursos
add constraint cursos_areas_fk foreign key (area_id) references areas(id);

alter table turmas
add constraint turmas_cursos_fk foreign key (curso_id) references cursos(id);

alter table turma_alunos
add constraint turma_alunos_turmas_fk foreign key (turma_id) references turmas(id);

alter table turma_alunos
add constraint turma_alunos_alunos_fk foreign key (aluno_id) references alunos(id);

alter table enderecos
add constraint enderecos_alunos_fk foreign key (aluno_id) references alunos(id);


/* 
 * Incluindo dados 
 */
-- Areas
insert into areas (id, nome)
values 
    (1, 'Tecnologia da Informação'), 
    (2, 'Saúde'),
    (3, 'Gestão e Negócios');

insert into cursos (id, nome, area_id) 
values 
    (1, 'Técnico em Informática', 1),
    (2, 'Técnico em Informática para Internet', 1),
    (3, 'Técnico em Farmácia', 2),
    (4, 'Técnico em Enfermagem', 2),
    (5, 'Técnico em Administração', 3),
    (6, 'Teste', 3),
    (7, 'Teste 2', 3);


update cursos 
set nome = 'Técnico em Massoterapia', area_id = 2
where id = 6;

delete from cursos where id = 7;



insert into turmas (id, inicio, curso_id)
values
    (1, '2022-06-01 19:00:00', 1),
    (2, '2022-06-01 13:30:00', 2);

insert into alunos (id, nome, telefone, email, rg, cpf)
values
    (1, 'Carlos Maiello', '(14) 99700-8719', 'carlosmaiello@gmail.com', '12.345.678-90', '123.123.123-123'),
    (2, 'Ana Carolina Luiz dos Santos', '(14)991844360','anacarolinaluiz486@gmail.com',
'457660090','38429257861'),
    (3, 'Matsu Shimote', '(14) 99623-0706', 'matsushimote0@gmail.com', '12.345.678-90', '123.123.123-123'),
    (4, 'Felipe Soares', '(14) 997302504', 'fe.soares@outlook.com.br', '123.456.789-10', '123.456.789-1'),
    (5, 'Lyan Morales', '(14) 996982353', 'drlyanmorales@gmail.com', '12 345 678-9', '123.456.789.01'),
    (6, 'Lucas de Melo Trentin', '(14) 99843-4381', 'lucas.mtrentin@hotmail.com', '12.345.678-9', '123.456.789-00'),
    (7, 'Victor Augusto de Almeida Silva', '996771741', 'victoraugustoas41@gmail.com', '12.345.678.10', '321.321.321.321'),
    (8, 'Bryan ', '(14) 997673508', 'bryandeduartina@hotmail.com', '21.444.333-44', '654.654');


insert into enderecos (id, aluno_id, logradouro, numero, complemento, bairro, cep, cidade, estado)
values
    (1, 1, 'Rua José Fernandes', '2-50', 'AP 61', 'Vila Samaritana', '17014-505', 'Bauru', 'SP'),
    (2, 2, 'Rua Francisco do Rego Carranca', '4-90', null, 'Jd Vânia Maria', '17063-490', 'Bauru', 'SP'),
    (3, 3, 'Av. Orlando Ranieri', '10-110', null, 'Jardim Marambá', '17047-001', 'Bauru', 'SP'),
    (4, 4, 'Alameda das hortênsias', '9-56', null, 'Pq Vista Alegre', '17020510','Bauru', 'SP'),
    (5, 5, 'Rua Machado de Assis', '46', 'Quadra 3', 'Estoril I', '17.014.040', 'Bauru', 'Sp'),
    (6, 6, 'Rua ruas', '123', null, 'Bairro Bonito', '12345-678', 'Bauru', 'SP'),
    (7, 7, 'Rua Major fonseca osorio','543', 'casa', 'Antartica', '17013-140', 'Bauru', 'Sp'),
    (8, 8, '-', '234', 'fundo', 'Aldo fanhani', '23.555.666', 'Duartina', 'SP');


insert into turma_alunos (turma_id, aluno_id)
values
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 4),
    (2, 5),
    (2, 6),
    (2, 7);


