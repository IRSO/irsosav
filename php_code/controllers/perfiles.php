<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
		* Controlador Default "Login"
		* @author SAV
		* @package SlaveFramework
		* @subpackage Controller
		* @version 1.0
	*/
	class perfiles extends Controller {
		
		function __construct() {
			parent::__construct();
			$this->load->model('perfilesmodel');
		}
		
		public function getPerfiles($id_provincia) {        
			$response = array();
			$perfiles = $this->perfilesmodel->getPerfiles();
			if($perfiles){
				$response['status'] = ESTADO_OK;
				$response['data'] = $perfiles;
				} else {
				$response['status'] = ESTADO_NO_ENCONTRADO;
			}
			echo json_encode($response);
		}
	}										