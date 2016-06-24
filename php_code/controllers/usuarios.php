<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
		* Controlador Default "Login"
		* @author SAV
		* @package SlaveFramework
		* @subpackage Controller
		* @version 1.0
	*/
	class Usuarios extends Controller {
		
		function __construct() {
			parent::__construct();
			$this->load->model('usuariomodel');
		}
		
		public function inicio() {      
			$data['titulo'] = 'Login Usuarios';
			$this->load->view('usuarios/login/inicio',$data);
		}
		
		public function mostrar() {      
			$data['titulo'] = 'ABM Usuarios';
			$this->load->view('usuarios/abm/inicio',$data);
		}
		
		public function verificar() {        
			$response = array();
			
			$usuario_login = $this->input->post("usuario_login_usu");
			$clave_login = $this->input->post("clave_login_usu");
			
			$usuario = $this->usuariomodel->getUsuarioLogin($usuario_login, $clave_login);
			if($usuario){
				$response['status'] = ESTADO_OK;
				$response['data'] = $usuario;
				} else {
				$response['status'] = ESTADO_NO_ENCONTRADO;
			}
			echo json_encode($response);
		}
		
		public function getUsuarios() {        
			$response = array();
			
			$usuarios = $this->usuariomodel->getUsuarios();
			if($usuarios){
				$response['status'] = ESTADO_OK;
				$response['data'] = $usuarios;
				} else {
				$response['status'] = ESTADO_NO_ENCONTRADO;
			}
			echo json_encode($response);
		}
		
		public function getUsuario($id) {        
			$response = array();
			
			$usuario = $this->usuariomodel->getUsuario($id);
			if($usuario){
				$response['status'] = ESTADO_OK;
				$response['data'] = $usuario;
				} else {
				$response['status'] = ESTADO_NO_ENCONTRADO;
			}
			echo json_encode($response);
		}
		
		public function registrar() {        
			$response = array();	
			
			$usuario = $this->input->post("usuario_usu");
			$descripcion = $this->input->post("descripcion_usuario_usu");
			$clave = $this->input->post("clave_usuario_usu");
			$telefono = $this->input->post("telefono_usuario_usu");
			$tipodoc = $this->input->post("tipodoc_usuario_usu");
			$ndoc = $this->input->post("nrodocu_usuario_usu");
			$localidad = $this->input->post("localidad_usuario_usu");
			$provincia = $this->input->post("provincia_usuario_usu");
			$perfil= $this->input->post("perfil_usuario_usu");
			$estado = $this->input->post("estado_usuario_usu");
			
			
			$usuario_registar = $this->usuariomodel->registrarUsuario($usuario, $descripcion, $clave, $telefono, $tipodoc, $ndoc, $localidad, $provincia, $perfil, $estado);
			if($usuario_registar){
				$response['status'] = ESTADO_OK;
				$response['data'] = $usuario_registar;
				} else {
				$response['status'] = ESTADO_NO_ENCONTRADO;
			}
			echo json_encode($response);
		}
		
		public function actualizar($id_usuario) {        
			$response = array();	
			
			parse_str(file_get_contents("php://input"),$put);
			
			$usuario = $put['usuario_usu'];
			$descripcion = $put['descripcion_usuario_usu'];
			$clave = $put['clave_usuario_usu'];
			$telefono = $put['telefono_usuario_usu'];
			$tipodoc = $put['tipodoc_usuario_usu'];
			$ndoc = $put['nrodocu_usuario_usu'];
			$localidad = $put['localidad_usuario_usu'];
			$provincia = $put['provincia_usuario_usu'];
			$perfil= $put['perfil_usuario_usu'];
			$estado = $put['estado_usuario_usu'];
			
			
			$usuario_actualizar = $this->usuariomodel->actualizarUsuario($id_usuario, $usuario, $descripcion, $clave, $telefono, $tipodoc, $ndoc, $localidad, $provincia, $perfil, $estado);
			if($usuario_actualizar){
				$response['status'] = ESTADO_OK;
				$response['data'] = $usuario_actualizar;
				} else {
				$response['status'] = ESTADO_NO_ENCONTRADO;
			}
			echo json_encode($response);
		}
		
		public function eliminar($id) {        
			$response = array();
			
			$usuario = $this->usuariomodel->eliminarUsuario($id);
			if($usuario){
				$response['status'] = ESTADO_OK;
				$response['data'] = $usuario;
				} else {
				$response['status'] = ESTADO_NO_ENCONTRADO;
			}
			echo json_encode($response);
		}
		
		public function getEstadoUsuarios() {        
			$response = array();
			
			$estado_usuarios = $this->usuariomodel->getEstadoUsuarios();
			if($estado_usuarios){
				$response['status'] = ESTADO_OK;
				$response['data'] = $estado_usuarios;
				} else {
				$response['status'] = ESTADO_NO_ENCONTRADO;
			}
			echo json_encode($response);
		}
	}										