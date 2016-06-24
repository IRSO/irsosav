<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
		* Controlador Default "Login"
		* @author SAV
		* @package SlaveFramework
		* @subpackage Controller
		* @version 1.0
	*/
	class localidades extends Controller {
		
		function __construct() {
			parent::__construct();
			$this->load->model('localidadesmodel');
		}
		
		public function getLocalidades($id_provincia) {        
			$response = array();
			$localidades = $this->localidadesmodel->getLocalidades($id_provincia);
			if($localidades){
				$response['status'] = ESTADO_OK;
				$response['data'] = $localidades;
				} else {
				$response['status'] = ESTADO_NO_ENCONTRADO;
			}
			echo json_encode($response);
		}
	}										