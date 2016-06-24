<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
		* Controlador Default "Login"
		* @author SAV
		* @package SlaveFramework
		* @subpackage Controller
		* @version 1.0
	*/
	class Tipodocumento extends Controller {
		
		function __construct() {
			parent::__construct();
			$this->load->model('tipodocumentomodel');
		}
		
		
		public function getTipoDocumentos() {        
			$response = array();
			
			$tipodocumento = $this->tipodocumentomodel->getTipoDocumentos();
			if($tipodocumento){
				$response['status'] = ESTADO_OK;
				$response['data'] = $tipodocumento;
				} else {
				$response['status'] = ESTADO_NO_ENCONTRADO;
			}
			echo json_encode($response);
		}
		
				
	}										