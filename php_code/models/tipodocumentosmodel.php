<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
		* modelo "UsuarioModel"
		* @author SAV
		* @package SlaveFramework
		* @subpackage Model
		* @version 1.0
	*/
	class Tipodocumentosmodel extends Model {
		
		function __construct() {
			parent::__construct();
		}
		
		public function getTipoDocumentos() {        
			$caracteres = $this->database->query("SET CHARACTER SET utf8");
			$get_usuarios = $this->database->query("SELECT ".CAMPO_ID_DOC_TIPO." AS ID, ".CAMPO_DESCRIPCION." FROM ".TABLA_DOC_TIPO." ORDER BY ".CAMPO_ID_DOC_TIPO." ASC");
			$resultado = $this->database->loadObjectList();
			return $resultado;
		}
	}		