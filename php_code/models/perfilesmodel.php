<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
		* modelo "UsuarioModel"
		* @author SAV
		* @package SlaveFramework
		* @subpackage Model
		* @version 1.0
	*/
	class Perfilesmodel extends Model {
		
		function __construct() {
			parent::__construct();
		}
		
		public function getPerfiles() {
			$caracteres = $this->database->query("SET CHARACTER SET utf8");
			$get_perfiles = $this->database->query("SELECT ".CAMPO_ID_USU_CARGO." AS ID, ".CAMPO_DESCRIPCION." FROM ".TABLA_USU_CARGO." ORDER BY ".CAMPO_ID_USU_CARGO." ASC");
			$resultado = $this->database->loadObjectList();
			return $resultado;
		}
	}		