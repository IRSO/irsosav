<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
		* Controlador Default "Login"
		* @author SAV
		* @package SlaveFramework
		* @subpackage Controller
		* @version 1.0
	*/
	class tipodocumentos extends Controller {
		
		function __construct() {
			parent::__construct();
			$this->load->model('tipodocumentosmodel');
		}
		
		public function getTipoDocumentos() {        
			$response = array();
			
			$tipodocs = $this->tipodocumentosmodel->getTipoDocumentos();
			if($tipodocs){
				$response['status'] = ESTADO_OK;
				$response['data'] = $tipodocs;
				} else {
				$response['status'] = ESTADO_NO_ENCONTRADO;
			}
			echo json_encode($response);
		}
	}										