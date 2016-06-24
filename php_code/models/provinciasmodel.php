<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
		* modelo "UsuarioModel"
		* @author SAV
		* @package SlaveFramework
		* @subpackage Model
		* @version 1.0
	*/
	class Provinciasmodel extends Model {
		
		function __construct() {
			parent::__construct();
		}
		
		public function getProvincias() {
			$caracteres = $this->database->query("SET CHARACTER SET utf8");
			$get_provincias = $this->database->query("SELECT ".CAMPO_ID_PROV." AS ID, ".CAMPO_DESCRIPCION." FROM ".TABLA_PROVINCIA." ORDER BY ".CAMPO_ID_PROV." ASC");
			$resultado = $this->database->loadObjectList();
			return $resultado;
		}
	}		