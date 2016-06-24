<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
		* modelo "UsuarioModel"
		* @author Irsosav
		* @package SlaveFramework
		* @subpackage Model
		* @version 1.0
	*/
	class Usuariomodel extends Model {
		
		function __construct() {
			parent::__construct();
		}
		
		public function getUsuarioLogin($usuario, $clave) {
			$caracteres = $this->database->query("SET CHARACTER SET utf8");
			$get_usuarios = $this->database->query("SELECT * FROM ".TABLA_USUARIO." WHERE ".CAMPO_USUARIO." =:usuario AND ".CAMPO_CLAVE."=:clave", array('usuario' => $usuario, 'clave' => $clave));
			$resultado = $this->database->loadObject();
			return $resultado;
		}
		
		public function getUsuarios() {
			$caracteres = $this->database->query("SET CHARACTER SET utf8");
			$get_usuarios = $this->database->query("SELECT usu.".CAMPO_ID_USUARIO.", usu.".CAMPO_USUARIO.", usu.".CAMPO_TELEFONO.", doc_tipo.".CAMPO_DESCRIPCION." AS TIPO_DOC, usu.".CAMPO_NRO_DOC.", prov.".CAMPO_DESCRIPCION." AS PROVINCIA, loc.".CAMPO_DESCRIPCION." AS LOCALIDAD, uc.".CAMPO_DESCRIPCION." AS CARGO, usu.".CAMPO_ID_USU_ESTADO." AS ESTADO FROM ".TABLA_USUARIO." AS usu INNER JOIN ".TABLA_USU_ESTADO." AS estado ON usu.".CAMPO_ID_USU_ESTADO." = estado.".CAMPO_ID_USU_ESTADO." INNER JOIN ".TABLA_DOC_TIPO." AS doc_tipo ON usu.".CAMPO_ID_DOC_TIPO." = doc_tipo.".CAMPO_ID_DOC_TIPO." INNER JOIN ".TABLA_USU_CARGO." AS uc ON usu.".CAMPO_ID_USU_CARGO." = uc.".CAMPO_ID_USU_CARGO." INNER JOIN ".TABLA_LOCALIDAD." AS loc ON usu.".CAMPO_ID_LOC." = loc.".CAMPO_ID_LOC." INNER JOIN ".TABLA_PROVINCIA." AS prov ON usu.".CAMPO_ID_PROV." = prov.".CAMPO_ID_PROV." ORDER BY usu.".CAMPO_ID_USUARIO." ASC");
			$resultado = $this->database->loadObjectList();
			return $resultado;
		}
		
		public function getUsuario($id) {        
			$caracteres = $this->database->query("SET CHARACTER SET utf8");
			$get_usuario = $this->database->query("SELECT usu.".CAMPO_ID_USUARIO.", usu.".CAMPO_USUARIO.", usu.".CAMPO_CLAVE.", usu.".CAMPO_DESCRIPCION.", usu.".CAMPO_TELEFONO.", doc_tipo.".CAMPO_DESCRIPCION." AS TIPO_DOC, doc_tipo.".CAMPO_ID_DOC_TIPO." AS ID_DOC_TIPO, usu.".CAMPO_NRO_DOC.", prov.".CAMPO_ID_PROV." AS ID_PROVINCIA, prov.".CAMPO_DESCRIPCION." AS PROVINCIA, loc.".CAMPO_ID_LOC." AS ID_LOCALIDAD, loc.".CAMPO_DESCRIPCION." AS LOCALIDAD, uc.".CAMPO_ID_USU_CARGO." AS ID_CARGO, uc.".CAMPO_DESCRIPCION." AS CARGO, usu.".CAMPO_ID_USU_ESTADO." AS ID_ESTADO, usu.".CAMPO_ID_USU_ESTADO." AS ESTADO FROM ".TABLA_USUARIO." AS usu INNER JOIN ".TABLA_USU_ESTADO." AS estado ON usu.".CAMPO_ID_USU_ESTADO." = estado.".CAMPO_ID_USU_ESTADO." INNER JOIN ".TABLA_DOC_TIPO." AS doc_tipo ON usu.".CAMPO_ID_DOC_TIPO." = doc_tipo.".CAMPO_ID_DOC_TIPO." INNER JOIN ".TABLA_USU_CARGO." AS uc ON usu.".CAMPO_ID_USU_CARGO." = uc.".CAMPO_ID_USU_CARGO." INNER JOIN ".TABLA_LOCALIDAD." AS loc ON usu.".CAMPO_ID_LOC." = loc.".CAMPO_ID_LOC." INNER JOIN ".TABLA_PROVINCIA." AS prov ON usu.".CAMPO_ID_PROV." = prov.".CAMPO_ID_PROV." WHERE ".CAMPO_ID_USUARIO." =:id", array('id' => $id));
			$resultado = $this->database->loadObject();
			return $resultado;
		}
		
		public function registrarUsuario($usuario, $descripcion, $clave, $telefono, $tipodoc, $ndoc, $localidad, $provincia, $perfil, $estado) {        
			$caracteres = $this->database->query("SET CHARACTER SET utf8");
			$start_transaction = $this->database->startTransaction();
			$registrar_usuarios = $this->database->query("INSERT INTO ".TABLA_USUARIO." (".CAMPO_USUARIO.",".CAMPO_DESCRIPCION.",".CAMPO_CLAVE.",".CAMPO_TELEFONO.",".CAMPO_ID_DOC_TIPO.",".CAMPO_NRO_DOC.",".CAMPO_ID_LOC.",".CAMPO_ID_PROV.",".CAMPO_ID_USU_CARGO.",".CAMPO_ID_USU_ESTADO.") VALUES (:usuario, :descripcion, :clave, :telefono, :tipodoc, :ndoc, :localidad, :provincia, :perfil, :estado)", array('usuario' => $usuario, 'descripcion' => $descripcion, 'clave' => $clave, 'telefono' => $telefono, 'tipodoc' => $tipodoc, 'ndoc' => $ndoc, 'localidad' => $localidad, 'provincia' => $provincia, 'perfil' => $perfil, 'estado' => $estado));
			$last_id = $this->database->getLastId();
			$end_transaction = $this->database->endTransaction();
			$resultado_ok = $this->database->getAffectedRows();
			
			
			if(($resultado_ok) && ($last_id)){
				$usuario = $this->getUsuario($last_id);
				return $usuario;
			}else{
				return false;
			}
		}
		
		public function actualizarUsuario($idusuario, $usuario, $descripcion, $clave, $telefono, $tipodoc, $ndoc, $localidad, $provincia, $perfil, $estado) {        
			$caracteres = $this->database->query("SET CHARACTER SET utf8");
			$start_transaction = $this->database->startTransaction();
			$actualizar_usuarios = $this->database->query("UPDATE ".TABLA_USUARIO." set ".CAMPO_USUARIO." = '".$usuario."', ".CAMPO_DESCRIPCION." = '".$descripcion."', ".CAMPO_CLAVE." = '".$clave."', ".CAMPO_TELEFONO." = '".$telefono."', ".CAMPO_ID_DOC_TIPO." = '".$tipodoc."', ".CAMPO_NRO_DOC." = '".$ndoc."', ".CAMPO_ID_LOC." = '".$localidad."', ".CAMPO_ID_PROV." = '".$provincia."', ".CAMPO_ID_USU_CARGO." = '".$perfil."', ".CAMPO_ID_USU_ESTADO." = '".$estado."' WHERE ".CAMPO_ID_USUARIO." = '".$idusuario."'");
			$end_transaction = $this->database->endTransaction();
			$resultado_ok = $this->database->getAffectedRows();		
			
			if($resultado_ok){
				$usuario = $this->getUsuarios();
				return $usuario;
			}else{
				return false;
			}
		}
		
		public function eliminarUsuario($id) { 
			$start_transaction = $this->database->startTransaction();
			$eliminar_usuarios = $this->database->query("DELETE FROM ".TABLA_USUARIO." WHERE ".CAMPO_ID_USUARIO." =:id", array('id' => $id));
			$end_transaction = $this->database->endTransaction();
			$resultado_ok = $this->database->getAffectedRows();
			if($resultado_ok){
				$usuario = $this->getUsuarios();
				return $usuario;
			}else{
				return false;
			}
		}
		
		public function getEstadoUsuarios() {    
			$caracteres = $this->database->query("SET CHARACTER SET utf8");
			$get_usuarios = $this->database->query("SELECT ".CAMPO_ID_USU_ESTADO." AS ID, ".CAMPO_DESCRIPCION." FROM ".TABLA_USU_ESTADO." ORDER BY ".CAMPO_ID_USU_ESTADO." ASC");
			$resultado = $this->database->loadObjectList();
			return $resultado;
		}
		
	}		