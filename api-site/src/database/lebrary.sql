create database lebrary;
use lebrary;

CREATE TABLE usuario (
	idUsuario int primary key auto_increment,
	nomeUsuario varchar(50),
	email varchar(50),
	senha varchar(50)
);

create table autor (
	idAutor int primary key auto_increment,
    nomeAutor varchar(50)
);

create table livros (
	idLivro int primary key auto_increment,
    nomeLivro varchar(45),
    genero varchar(45),
    editora varchar(45),
    fkAutor int,
    constraint fk_autor foreign key (fkAutor) references autor(id)
);

create table seguir (
	fkUsuario int,
    constraint fk_usu foreign key (fkUsuario) references usuario(id),
    fkAutor int,
    constraint fk_aut foreign key (fkAutor) references autor(id),
    dataSeguir datetime default current_timestamp,
    primary key (fkUsuario, fkAutor, dataSeguir),
    curtida int
);

create table curtida (
	fkUsuario int,
    constraint fk_usuario foreign key (fkUsuario) references usuario(id),
    fkLivro int,
    constraint fk_liv foreign key (fkLivro) references livros(id),
    dataSeguir datetime default current_timestamp,
    primary key (fkUsuario, fkLivro, dataSeguir),
    curtida int
);

create table aviso (
	id int primary key auto_increment,
	titulo varchar(100),
    descricao varchar(150),
	fk_usuario int,
	foreign key (fk_usuario) references usuario(id)
);

insert into autor values
	(null, 'Rick Riordan'),
    (null, 'Nicholas Sparks'),
    (null, 'J. K. Rowling'),
    (null, 'J.R.R. Tolkien'),
    (null, 'Jojo Moyes');
    
insert into livros values 
	(null, 'Ladrão de Raios', 'Fantasia', 'Intrínseca', 1),
    (null, 'Mar de Monstros', 'Fantasia', 'Intrínseca', 1),
    (null, 'A Maldição do Titã', 'Fantasia', 'Intrínseca', 1),
    (null, 'A Batalha do Labirinto', 'Fantasia', 'Intrínseca', 1),
    (null, 'O Último Olimpiano', 'Fantasia', 'Intrínseca', 1);
    
insert into livros values 
	(null, 'A Última Música', 'Romance', 'Novo Conceito', 2, 'http://www.descortinandohorizontes.com/wp-content/uploads/2015/01/a-ultimamusica.jpg'),
    (null, 'Diário de Uma Paixão', 'Romance', 'Novo Conceito', 2, 'https://images-na.ssl-images-amazon.com/images/I/71aS13e+OYL.jpg'),
    (null, 'A Escolha', 'Romance', 'Novo Conceito', 2, 'https://images-na.ssl-images-amazon.com/images/I/71Tn+WdqilL.jpg'),
    (null, 'Querido John', 'Romance', 'Novo Conceito', 2, 'https://5934488p.ha.azioncdn.net/capas-livros/9788563219213-nicholas-sparks-querido-john-466633138.jpg'),
    (null, 'O Milagre', 'Romance', 'Arqueiro', 2, 'http://4.bp.blogspot.com/-v6snMB0w5yo/VRWS1KmUv4I/AAAAAAAANro/jboXJzR3VUc/s1600/CA-EkIgWUAA1ewC.jpg');

select * from autor;
select * from livros;
select * from usuario;
select * from seguir;
select * from curtida;

select livros.capas as capas,
	livros.nomeLivro as livros,
		count(curtida.curtida) as likes,
			autor.nomeAutor as autor
				from curtida
					inner join livros
						on fkLivro = idLivro
							inner join autor
								on fkAutor = idAutor
									group by idLivro
										order by likes desc;