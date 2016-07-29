<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
		* Definition of the url access. 
		* @author David Unay Santisteban <slavepens@gmail.com>
		* @package SlaveFramework
		* @version 1.0
	*/
	
	/* rutas por defecto */
	$this->get('default_controller', 'usuarios/login');
	$this->get('default_404', 'notfound');
	$this->get('default_offline', 'offline');
	$this->get('offline', 'offline');
	
	/* rutas de la aplicacion */
	
	/* usuarios */
	$this->get('usuarios/login', 'usuarios/inicio');
	$this->get('usuarios/mostrar', 'usuarios/mostrar');
	
	/* proveedores */
	$this->get('proveedores/mostrar', 'proveedores/mostrar');