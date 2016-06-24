<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
		* Controlador Default "Login"
		* @author SAV
		* @package SlaveFramework
		* @subpackage Controller
		* @version 1.0
	*/
	class provincias extends Controller {
		
		function __construct() {
			parent::__construct();
			$this->load->model('provinciasmodel');
		}
		
		public function getProvincias() {        
			$response = array();
			
			$provincias = $this->provinciasmodel->getProvincias();
			if($provincias){
				$response['status'] = ESTADO_OK;
				$response['data'] = $provincias;
				} else {
				$response['status'] = ESTADO_NO_ENCONTRADO;
			}
			echo json_encode($response);
		}
	}										