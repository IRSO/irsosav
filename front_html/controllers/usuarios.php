<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
		* Controlador Default "Login"
		* @author SAV
		* @package SlaveFramework
		* @subpackage Controller
		* @version 1.0
	*/
	class Usuarios extends Controller {
		
		function __construct() {
			parent::__construct();
		}
		
		public function inicio() {      
			$data['titulo'] = 'Login Usuarios';
			$this->load->view('usuarios/login/inicio',$data);
		}
		
		public function mostrar() {      
			$data['titulo'] = 'ABM Usuarios';
			$this->load->view('usuarios/abm/inicio',$data);
		}
	}										