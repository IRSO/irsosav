create database IRSOSAV_v1;

use IRSOSAV_v1;

create table cod_comida(id_cod_comida tinyint not null unique auto_increment, descripcion varchar(10) not null,
constraint pk_cod_comida primary key(id_cod_comida));

create table cod_postre(id_cod_postre tinyint not null unique auto_increment, descripcion varchar(10) not null,
constraint pk_cod_postre primary key(id_cod_postre));

create table comida(id_comida tinyint not null unique auto_increment, descripcion varchar(160) not null, calorias float, fecha date, id_cod_comida tinyint not null,
constraint pk_comida primary key(id_comida),
constraint fk_cod_comida foreign key comida(id_cod_comida) references cod_comida(id_cod_comida));

create table postre(id_postre tinyint not null unique auto_increment, descripcion varchar(160) not null, calorias float, fecha date, id_cod_postre tinyint not null,
constraint pk_postre primary key(id_postre),
constraint fk_cod_postre foreign key postre(id_cod_postre) references cod_postre(id_cod_postre));

create table tipo_doc(id_tipo_doc smallint not null unique auto_increment, descripcion varchar(10) not null unique,
constraint pk_tipo_doc primary key(id_tipo_doc));

create table perfiles(id_perfil tinyint not null unique auto_increment, descripcion varchar(60) not null unique, permiso varchar(10) not null,
constraint pk_perfiles primary key(id_perfil,descripcion));

create table provincia(id_provincia int not null unique auto_increment, descripcion varchar(100) not null,
constraint pk_provincia primary key(id_provincia));

create table ciudad(id_ciudad int not null unique auto_increment, descripcion varchar(100) not null, id_provincia int not null unique,
constraint pk_ciudad primary key(id_ciudad,id_provincia),
constraint fk_prov foreign key ciudad(id_provincia) references provincia(id_provincia));

create table proveedor(id_proveedor smallint not null unique auto_increment, cuit varchar(20) not null unique, 
id_ciudad int not null unique, id_provincia int not null unique, descripcion varchar(100) not null,domicilio varchar(100) not null, 
telefono varchar(30) not null, email varchar(100),
constraint pk_proveedor primary key(id_proveedor,cuit),
constraint fk_ciu_prov foreign key proveedor(id_ciudad) references ciudad(id_ciudad),
foreign key proveedor(id_provincia) references provincia(id_provincia));

create table empleado(documento varchar(20) not null unique, id_tipo_doc smallint not null unique, id_ciudad int not null unique, 
id_provincia int not null unique, id_perfil tinyint not null unique, descripcion varchar(100) not null, domicilio varchar(100) not null, 
telefono varchar(40) not null, mail varchar(255), clave varchar(32),
constraint pk_empleado primary key(documento,id_tipo_doc),
constraint fk_ciu_pro_men_fec foreign key empleado(id_tipo_doc) references tipo_doc(id_tipo_doc),
foreign key empleado(id_ciudad) references ciudad(id_ciudad),
foreign key empleado(id_provincia) references provincia(id_provincia),
constraint fk_emp_perf foreign key empleado(id_perfil) references perfiles(id_perfil));

create table menu(id_menu smallint not null unique auto_increment, fecha datetime, id_proveedor smallint not null unique, id_comida tinyint not null unique,
id_postre tinyint not null unique, precio float,
constraint pk_menu primary key(id_menu,fecha,id_proveedor),
constraint fk_prov_comi_post foreign key menu(id_proveedor) references proveedor(id_proveedor),
foreign key menu(id_comida) references comida(id_comida),
foreign key menu(id_postre) references postre(id_postre));

create table pedido(id_pedido int not null unique auto_increment, id_menu smallint not null unique, documento varchar(20) not null unique, fecha datetime,
constraint pk_pedido primary key(id_pedido),
constraint fk_men_doc foreign key pedido(id_menu) references menu(id_menu),
foreign key pedido(documento) references empleado(documento));

create table login(usuario varchar(20) not null unique, id_perfil tinyint not null, clave varchar(32), email varchar(255),
constraint pk_login primary key (usuario),
constraint fk_log_perf foreign key login(id_perfil) references perfiles(id_perfil));

create user 'irsosav'@'%1' identified by 'motor970';

grant all on IRSOSAV_v1.* to 'irsosav'@'%1';

