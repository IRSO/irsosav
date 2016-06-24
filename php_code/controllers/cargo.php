<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
		* Controlador Default "Login"
		* @author SAV
		* @package SlaveFramework
		* @subpackage Controller
		* @version 1.0
	*/
	class Localidades extends Controller {
		
		function __construct() {
			parent::__construct();
			$this->load->model('localidadmodel');
		}
		
		
		public function getLocalidades() {        
			$response = array();
			
			$localidades = $this->localidadmodel->getLocalidades();
			if($localidades){
				$response['status'] = ESTADO_OK;
				$response['data'] = $localidades;
				} else {
				$response['status'] = ESTADO_NO_ENCONTRADO;
			}
			echo json_encode($response);
		}
		
		public function getLocalidad($id) {        
			$response = array();
			
			$localidad = $this->localidadmodel->getLocalidad($id);
			if($localidad){
				$response['status'] = ESTADO_OK;
				$response['data'] = $localidad;
				} else {
				$response['status'] = ESTADO_NO_ENCONTRADO;
			}
			echo json_encode($response);
		}
		
		
	}										