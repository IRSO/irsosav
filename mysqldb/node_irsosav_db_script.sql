create database node_irsosav;

use node_irsosav;

create table tipo_doc(id_tipo_doc smallint not null unique, descripcion varchar(10) not null unique,
constraint pk_tipo_doc primary key(id_tipo_doc));

create table perfiles(id_perfil tinyint not null unique, descripcion varchar(60) not null unique, permiso varchar(10) not null,
constraint pk_perfiles primary key(id_perfil,descripcion));

create table proveedor(id_proveedor smallint not null unique, cuit varchar(20) not null unique, 
descripcion varchar(100) not null,domicilio varchar(100) not null, ciudad varchar(100) not null, provincia varchar(100) not null, 
telefono varchar(30) not null, email varchar(100),
constraint pk_proveedor primary key(id_proveedor,cuit));

create table empleado(documento varchar(20) not null unique, id_tipo_doc smallint not null, id_perfil tinyint not null unique, descripcion varchar(100) not null, 
domicilio varchar(100) not null, ciudad varchar(100) not null, provincia varchar(100) not null, telefono varchar(40) not null, mail varchar(255), clave varchar(32),
constraint pk_empleado primary key(documento,id_tipo_doc),
constraint fk_ciu_pro_men_fec foreign key empleado(id_tipo_doc) references tipo_doc(id_tipo_doc),
constraint fk_emp_perf foreign key empleado(id_perfil) references perfiles(id_perfil));

create table menu(id_menu smallint not null unique, fecha datetime, id_proveedor smallint not null, 
comida varchar(255) not null, postre varchar(255) not null, precio float,
constraint pk_menu primary key(id_menu,fecha,id_proveedor),
constraint fk_menu_prove foreign key menu(id_proveedor) references proveedor(id_proveedor));

create table login(usuario varchar(32) not null unique, id_perfil tinyint not null, clave varchar(32), email varchar(255),
constraint pk_login primary key (usuario),
constraint fk_log_perf foreign key login(id_perfil) references perfiles(id_perfil));

create table sesion(usuario varchar(32) not null unique, token varchar(64) not null, fecha datetime, 
constraint pk_sesion primary key (usuario));

grant all on node_irsosav.* to 'irsosav'@'%1' identified by 'motor970'

