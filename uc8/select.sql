SELECT * FROM areas;

SELECT * FROM areas WHERE nome like 'A%';

SELECT * FROM areas WHERE nome like 'Sa_de';

SELECT * FROM cursos where preco > 100;

select * from areas, cursos where cursos.area_id = areas.id;  

select * from areas, cursos;

select * from areas, cursos where cursos.area_id = areas.id;

select * from areas inner join cursos on (cursos.area_id = areas.id);

select * from areas left join cursos on (cursos.area_id = areas.id); 

select cursos.id from areas inner join cursos on (cursos.area_id = areas.id);

select areas.id from areas inner join cursos on (cursos.area_id = areas.id);

select cursos.id, cursos.nome, areas.id, areas.nome from areas inner join cursos on (cursos.area_id = areas.id);

select cursos.id, cursos.nome, areas.nome from areas inner join cursos on (cursos.area_id = areas.id);

select cursos.id, cursos.nome, areas.nome as 'Nome da Área' from areas inner join cursos on (cursos.area_id = areas.id);


select cursos.id as 'Código', cursos.nome as 'Curso', areas.nome as 'Área' from areas inner join cursos on (cursos.area_id = areas.id);

select cursos.id as 'Código', cursos.nome as 'Curso', areas.nome as 'Área', cursos.preco as 'Preço'  from areas inner join cursos on (cursos.area_id = areas.id);

select cursos.id as 'Código', cursos.nome as 'Curso', areas.nome as 'Área', cursos.preco as 'Preço'  from areas inner join cursos on (cursos.area_id = areas.id) where cursos.preco > 100;

select cursos.id as 'Código', cursos.nome as 'Curso', areas.nome as 'Área', cursos.preco as 'Preço'  from areas inner join cursos on (cursos.area_id = areas.id) where cursos.preco < 300;