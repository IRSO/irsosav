<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
		* Definition of the url access. 
		* @author David Unay Santisteban <slavepens@gmail.com>
		* @package SlaveFramework
		* @version 1.0
	*/
        header("Accept: application/json");
        header("Contet-Type: application/json");
        header('access-control-allow-header: *');
        header('access-control-allow-origin: *');
	/* rutas por defectp */
	$this->get('default_controller', 'usuarios/login');
	$this->get('default_404', 'notfound');
	$this->get('default_offline', 'offline');
	$this->get('offline', 'offline');
	
	/* rutas de la aplicacion */
	
	/* usuarios */
	$this->get('usuarios/login', 'usuarios/inicio');
	$this->post('usuarios/verificar', 'usuarios/verificar');
	$this->get('usuarios/mostrar', 'usuarios/mostrar');
	$this->get('usuarios/consultarTodos', 'usuarios/getUsuarios');
	$this->get('usuarios/consultar/(:int)', 'usuarios/getUsuario/$1');
	$this->post('usuarios/registrar', 'usuarios/registrar');
	$this->put('usuarios/actualizar/(:int)', 'usuarios/actualizar/$1');
	$this->delete('usuarios/eliminar/(:int)', 'usuarios/eliminar/$1');
        
      /* provincia */
	$this->get('provincias/consultarTodos', 'provincias/getProvincias');
        
	/* localidad */
	$this->get('localidades/consultarTodos/(:int)', 'localidades/getLocalidades/$1');    
        
        /* tipo documento*/
	$this->get('tipodocumentos/consultarTodos', 'tipodocumentos/getTipoDocumentos');

	/* perfil */
	$this->get('perfiles/consultarTodos', 'perfiles/getPerfiles');

	/* estado */
	$this->get('usuarios/consultarEstados', 'usuarios/getEstadoUsuarios');
        
        /* cargo */
	$this->get('usuarios/consultarCargos', 'usuarios/getCargoUsuarios');
