$('document').ready(function() {
	validarFormularioLoginUsuario($("#form_login_usu"));
	evtAccionesLoginUsuarios();
});

function validarFormularioLoginUsuario(formulario){
	validator = formulario.validate({
		rules:{
			usuario_login_usu:{
				required: true,
			},
			clave_login_usu:{
				required: true,
			},
		},
		submitHandler: function(form){
			return true;
		},
		errorPlacement: function(){
			return false;  
		}
	});
}

function EnviarFormularioLoginUsu(){
	enviarFormulario($("#form_login_usu"), "POST", URL+"http://irsosavphp.olympos.com.ar/usuarios/verificar", $("#error"), $("#ingresar_login_usu"), "http://irsosavphp.olympos.com.ar/front/usuarios/mostrar", "Error de Usuario o Clave", "Ingresar");
}

function evtAccionesLoginUsuarios(){
	$("#ingresar_login_usu").unbind('click').click(function(event){
		var validado = $("#form_login_usu").valid();
		if (validado){
			EnviarFormularioLoginUsu();
		}
	});
}