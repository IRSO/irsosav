<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
		* modelo "UsuarioModel"
		* @author SAV
		* @package SlaveFramework
		* @subpackage Model
		* @version 1.0
	*/
	class Localidadesmodel extends Model {
		
		function __construct() {
			parent::__construct();
		}
		
		public function getLocalidades($id_provincia) {
			$caracteres = $this->database->query("SET CHARACTER SET utf8");
			$get_localidades = $this->database->query("SELECT ".CAMPO_ID_LOC." AS ID, ".CAMPO_DESCRIPCION." FROM ".TABLA_LOCALIDAD." WHERE ".CAMPO_ID_PROV." =:id ORDER BY ".CAMPO_ID_LOC." ASC", array('id' => $id_provincia));
			$resultado = $this->database->loadObjectList();
			return $resultado;
		}
	}		