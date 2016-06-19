#SHOW COLUMNS FROM comida;
 
#update comida set id_comida='1',id_cod_comida='1',descripcion='Milanesa con papas fritas',calorias='432',fecha='2016-05-08' where comida.id_comida='1';

use node_irsosav;

insert into proveedor(id_proveedor,cuit,descripcion,domicilio,ciudad,provincia,telefono,email) values ('1','20-29635880-1','MiVianda',
'Don bosco 2315','Capital Federal','Buenos Aires','4238-2013','info@mivianda.com.ar');

insert into menu(id_menu,fecha,id_proveedor,comida,postre,precio) values ('1','2016-05-08','1','Pollo al horno con pure mixto','Gelatina','20');

insert into menu(id_menu,fecha,id_proveedor,comida,postre,precio) values ('3','2016-05-08','1','Ensalada mixta','crepe de frutas','20');

insert into perfiles(id_perfil,descripcion,permiso) values ('1','Administrador','Full');

insert into tipo_doc(id_tipo_doc,descripcion) values ('1','DNI');

insert into empleado(documento,id_tipo_doc,id_perfil,descripcion,domicilio,ciudad,provincia,telefono,mail,clave) 
values ('29938654','1','1','Marcelo Ramirez','Pichincha 911','Capital Federal','Buenos Aires','4837-1399','mramirez@village.com.ar',md5('1234'));

insert into proveedor(id_proveedor,cuit,descripcion,domicilio,ciudad,provincia,telefono,email) values ('2','20-11203743-1','Viandas Chile',
'Aruca 215','Las Condes','Santiago de Chile','438-2013','info@viandaschile.cl');

insert into menu(id_menu,fecha,id_proveedor,comida,postre,precio) values ('2','2016-05-08','2','Minanesa con papas fitas','flan mixto','20');

insert into perfiles(id_perfil,descripcion,permiso) values ('2','Usuario','write');

insert into tipo_doc(id_tipo_doc,descripcion) values ('2','ID');

insert into empleado(documento,id_tipo_doc,id_perfil,descripcion,domicilio,ciudad,provincia,telefono,mail,clave) 
values ('50938654','2','2','Amador Chavez','Nueva de Lyon 147','Los Leones','Santiago de Chile','837-1399','achavez@village.com.ar',md5('abc098'));


#delete from pedido where documento='50938654';
#delete from empleado where documento='50938654';
