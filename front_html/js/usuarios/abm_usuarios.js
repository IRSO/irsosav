$('document').ready(function() {
	cargarTabla($("#tabla_abm_usuarios"), "GET", "http://irsosavphp.olympos.com.ar/usuarios/consultarTodos", "Error al Cargar los datos ....", UsuarioConsultarTodos, crearFiltro, clicks);
	cargarCombos();
	validarFormulario($("#form_usuarios_abm_re"));
	evtAcciones();
	evtAccionesUsuarios();
	clicks();
});

function EnviarFormularioRegistrar(){
	enviarFormularioPopup($("#form_usuarios_abm_re"), "POST", "http://irsosavphp.olympos.com.ar/usuarios/registrar", $("#btn_popup_crear_editar"), $("#ModalCrearEditar"), "No se pudo registrar el Usuario", "Guardar", "Usuario Registrado con exito !!!", $("#tabla_abm_usuarios"), clicks, UsuarioRefrescarTabla);
}

function EnviarFormularioEditar(idUsuario){
	enviarFormularioPopup($("#form_usuarios_abm_re"), "PUT", "http://irsosavphp.olympos.com.ar/usuarios/actualizar/"+idUsuario, $("#btn_popup_crear_editar"), $("#ModalCrearEditar"), "No se pudo editar el Usuario", "Guardar", "Usuario Actualizado con exito !!!", $("#tabla_abm_usuarios"), clicks, UsuarioConsultarTodos);
}

function EnviarFormularioEliminar(idUsuario){
	enviarFormularioPopup($("#form_usuarios_abm_eliminar"), "DELETE", "http://irsosavphp.olympos.com.ar/usuarios/eliminar/"+idUsuario, $("#btn_popup_eliminar"), $("#ModalEliminar"), "No se pudo eliminar el Usuario", "Aceptar", "Usuario Eliminado con exito !!!", $("#tabla_abm_usuarios"), clicks, UsuarioConsultarTodos);
}

function validarFormulario(formulario){
	validator = formulario.validate({
		rules:{
			usuario_usu:{
				required: true,
			},
			descripcion_usuario_usu:{
				required: true,
			},
			clave_usuario_usu:{
				required: true,
			},
			telefono_usuario_usu:{
				required: true,
			},
			tipodoc_usuario_usu:{
				required: true,
			},
			nrodocu_usuario_usu:{
				required: true,
			},
			localidad_usuario_usu:{
				required: true,
			},
			provincia_usuario_usu:{
				required: true,
			},
			perfil_usuario_usu:{
				required: true,
			},
			estado_usuario_usu:{
				required: true,
			}
		},
		submitHandler: function(formulario){
			return true;
		},
		errorPlacement: function(){
            return false;
        }
	});
}

function UsuarioConsultarTodos(json, tabla){
	var tbody;
	$.each(json, function() {
		tbody +='<tr>';
		tbody +='<td data-label="#"><input type="hidden" class="id_usuario" value="'+this.ID_USUARIO+'" />'+this.ID_USUARIO+'</td>';
		tbody +='<td data-label="Usuario">'+this.USUARIO+'</td>';
		tbody +='<td data-label="Tel&eacute;fono">'+this.TELEFONO+'</td>';
		tbody +='<td data-label="Tipo Documento">'+this.TIPO_DOC+'</td>';
		tbody +='<td data-label="Nro Documento">'+this.NRO_DOCUMENTO+'</td>';
		tbody +='<td data-label="Provincia">'+this.PROVINCIA+'</td>';
		tbody +='<td data-label="Localidad">'+this.LOCALIDAD+'</td>';
		tbody +='<td data-label="Perfil">'+this.CARGO+'</td>';
		if(this.ESTADO == '1'){
		tbody +='<td data-label="Estado"><span class="label label label-success">&nbsp;</span></td>';
		}else if(this.ESTADO == '2'){
		tbody +='<td data-label="Estado"><span class="label label label-danger">&nbsp;</span></td>';
		}
		tbody +='<td data-label=""><button class="btn btn-info btn-sm btn-editar"><span class="glyphicon glyphicon-pencil"></span></button><button class="btn btn-danger btn-sm btn-eliminar marginLeft10"><span class="glyphicon glyphicon-remove"></span></button></td>';
		tbody +='</tr>';
	});
	tabla.find('tbody').html(tbody);
}

function UsuarioRefrescarTabla(json, tabla){
	var tbody;
	tbody +='<tr>';
	tbody +='<td data-label="#"><input type="hidden" class="id_usuario" value="'+json.ID_USUARIO+'" />'+json.ID_USUARIO+'</td>';
	tbody +='<td data-label="Usuario">'+json.USUARIO+'</td>';
	tbody +='<td data-label="Tel&eacute;fono">'+json.TELEFONO+'</td>';
	tbody +='<td data-label="Tipo Documento">'+json.TIPO_DOC+'</td>';
	tbody +='<td data-label="Nro Documento">'+json.NRO_DOCUMENTO+'</td>';
	tbody +='<td data-label="Provincia">'+json.PROVINCIA+'</td>';
	tbody +='<td data-label="Localidad">'+json.LOCALIDAD+'</td>';
	tbody +='<td data-label="Perfil">'+json.CARGO+'</td>';
	if(json.ESTADO == '1'){
	tbody +='<td data-label="Estado"><span class="label label label-success">&nbsp;</span></td>';
	}else if(json.ESTADO == '2'){
	tbody +='<td data-label="Estado"><span class="label label label-danger">&nbsp;</span></td>';
	}
	tbody +='<td data-label=""><button class="btn btn-info btn-sm btn-editar"><span class="glyphicon glyphicon-pencil"></span></button><button class="btn btn-danger btn-sm btn-eliminar marginLeft10"><span class="glyphicon glyphicon-remove"></span></button></td>';
	tbody +='</tr>';
	tabla.find('tbody').append(tbody);
}

function clicks(){
	$(".contenedor_tabla_abm_usuarios .btn-nuevo").unbind('click').click(function(event){
		modalGenerico($(".PopupCrearEditar"), "Crear Usuario", "crear", "titulo-nuevo", null, $("#ModalCrearEditar"));
	});
	$(".contenedor_tabla_abm_usuarios .btn-editar").unbind('click').click(function(event){
		var row = $(this).closest('tr');
		var idUsuario = row.find('.id_usuario').val();
		cargarDatosUsuario("GET", "http://irsosavphp.olympos.com.ar/usuarios/consultar/"+idUsuario+"", idUsuario);		
	});
	$(".contenedor_tabla_abm_usuarios .btn-eliminar").unbind('click').click(function(event){
		$(this).closest('tr').addClass("treditado");
		var row = $(this).closest('tr');
		var idUsuario = row.find('.id_usuario').val();
		modalGenerico($(".PopupEliminar"), "Eliminar Usuario", "eliminar", "titulo-eliminar", idUsuario, $("#ModalEliminar"));
	});
	
	$("#ModalCrearEditar").off('hidden.bs.modal').on("hidden.bs.modal", function () {
		limpiarFormulario($("#form_usuarios_abm_re"), $("#error_popup_crear_editar"));
		$("#tabla_abm_usuarios").find('tbody .treditado').removeClass("treditado").removeAttr("class");
		$("#localidad_usuario_usu").html("");
		$("#localidad_usuario_usu").attr("disabled",true);
	});
	
	$("#ModalEliminar").off('hidden.bs.modal').on("hidden.bs.modal", function () {
		limpiarFormulario($("#form_usuarios_abm_eliminar"), $("#error_popup_eliminar"));
		$("#tabla_abm_usuarios").find('tbody .treditado').removeClass("treditado").removeAttr("class");
	});
}

function cargarCombos(){
	getCombo($("#tipodoc_usuario_usu"), "GET", "http://irsosavphp.olympos.com.ar/tipodocumentos/consultarTodos");
	getCombo($("#estado_usuario_usu"), "GET", "http://irsosavphp.olympos.com.ar/usuarios/consultarEstados");
	getCombo($("#provincia_usuario_usu"), "GET", "http://irsosavphp.olympos.com.ar/provincias/consultarTodos");
	getCombo($("#perfil_usuario_usu"), "GET", "http://irsosavphp.olympos.com.ar/perfiles/consultarTodos");
}

function evtAccionesUsuarios(){	
	$("#btn_popup_eliminar").unbind('click').click(function(event){
		var idUsuario = USUGLOBAL;
		EnviarFormularioEliminar(idUsuario);
	});
	
	$("#btn_popup_crear_editar").unbind('click').click(function(event){
		var idUsuario = USUGLOBAL;
		var validado = $("#form_usuarios_abm_re").valid();

		if (validado && ACCION_USU_GLOBAL == 'crear'){
			EnviarFormularioRegistrar();
		}else if (validado && ACCION_USU_GLOBAL == 'editar'){
			EnviarFormularioEditar(idUsuario);
		}
	});
}

function cargarDatosUsuario(verbo, controlador, idUsuario){	
	$.ajax({
		type : verbo,
		url  : URL+controlador,
		beforeSend: function(){	
			$("#error_popup_crear_editar").modal('show');
		},
		success :  function(response){
			$("#error_popup_crear_editar").modal('hide');
			try {
				var json = $.parseJSON(response);
				} catch(e) {
				$("#error_popup_crear_editar").modal('show');
			}
			
			if(!json){
				$("#error_popup_crear_editar").modal('show');
				}else if(json.status == 200){
				getCombo($("#localidad_usuario_usu"), "GET", "http://irsosavphp.olympos.com.ar/localidades/consultarTodos/"+json.data.ID_PROVINCIA);
				$("#localidad_usuario_usu").attr("disabled",false);
				$("#usuario_usu").val(json.data.USUARIO);
				$("#descripcion_usuario_usu").val(json.data.DESCRIPCION);
				$("#clave_usuario_usu").val(json.data.CLAVE);
				$("#telefono_usuario_usu").val(json.data.TELEFONO);
				$("#tipodoc_usuario_usu").val(json.data.ID_DOC_TIPO);
				$("#nrodocu_usuario_usu").val(json.data.NRO_DOCUMENTO);
				$("#provincia_usuario_usu").val(json.data.ID_PROVINCIA);
				setTimeout(function(){$("#localidad_usuario_usu").val(json.data.ID_LOCALIDAD);}, 300);
				$("#perfil_usuario_usu").val(json.data.ID_CARGO);
				$("#estado_usuario_usu").val(json.data.ESTADO);

				$(this).closest('tr').addClass("treditado");
				modalGenerico($(".PopupCrearEditar"), "Editar Usuario", "editar", "titulo-editar", idUsuario, $("#ModalCrearEditar"));				
				}else if(json.status == 404){
				$("#error_popup_crear_editar").modal('show');
				}else{
				$("#error_popup_crear_editar").modal('show');
			}
		}
	});
	
	return false;
}