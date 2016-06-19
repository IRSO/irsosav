#SHOW COLUMNS FROM comida;
 
#update comida set id_comida='1',id_cod_comida='1',descripcion='Milanesa con papas fritas',calorias='432',fecha='2016-05-08' where comida.id_comida='1';

use IRSOSAV_v1;

insert into cod_comida(descripcion) values ('M1');

insert into cod_postre(descripcion) values ('P1');

insert into provincia(descripcion) values ('Buenos Aires');

insert into ciudad(id_provincia,descripcion) values ('1','Capital federal');

insert into comida(id_cod_comida,descripcion,calorias,fecha) values ('1','Milanesa con papas fritas','432','2016-05-08');

insert into postre(id_cod_postre,descripcion,calorias,fecha) values ('1','Flan casero','143','2016-05-08');

insert into proveedor(cuit,id_ciudad,id_provincia,descripcion,domicilio,telefono,email) values ('20-29635880-1','1','1','MiVianda',
'Don bosco 2315','4238-2013','info@mivianda.com.ar');

insert into menu(fecha,id_proveedor,id_comida,id_postre,precio) values ('2016-05-08','1','1','1','20');

insert into perfiles(descripcion,permiso) values ('Administrador','Full');

insert into tipo_doc(descripcion) values ('DNI');

insert into empleado(documento,id_tipo_doc,id_ciudad,id_provincia,id_perfil,descripcion,domicilio,telefono,mail,clave) 
values ('29938654','1','1','1','1','Marcelo Ramirez','Pichincha 911','4837-1399','mramirez@village.com.ar',md5('qwe123'));

insert into pedido(id_menu,documento,fecha) values ('1','29938654','2016-05-08');

insert into cod_comida(descripcion) values ('M2');

insert into cod_postre(descripcion) values ('P2');

insert into provincia(descripcion) values ('Santiago de Chile');

insert into ciudad(id_provincia,descripcion) values ('2','Las Condes');

insert into comida(id_cod_comida,descripcion,calorias,fecha) values ('2','Pollo al horno con papas','256','2016-05-08');

insert into postre(id_cod_postre,descripcion,calorias,fecha) values ('2','Ensalada de frutas','150','2016-05-08');

insert into proveedor(cuit,id_ciudad,id_provincia,descripcion,domicilio,telefono,email) values ('20-11203743-1','2','2','Viandas Chile',
'Aruca 215','438-2013','info@viandaschile.cl');

insert into menu(fecha,id_proveedor,id_comida,id_postre,precio) values ('2016-05-08','2','2','2','20');

insert into perfiles(descripcion,permiso) values ('Usuario','write');

insert into tipo_doc(descripcion) values ('ID');

insert into empleado(documento,id_tipo_doc,id_ciudad,id_provincia,id_perfil,descripcion,domicilio,telefono,mail,clave) 
values ('50938654','2','2','2','2','Amador Chavez','Nueva de Lyon 147','837-1399','achavez@village.com.ar',md5('abc098'));

insert into pedido(id_menu,documento,fecha) values ('2','50938654','2016-05-08');

#delete from pedido where documento='50938654';
#delete from empleado where documento='50938654';
