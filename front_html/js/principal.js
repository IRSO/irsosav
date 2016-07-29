var USUGLOBAL = 0;
var ACCION_USU_GLOBAL = 0;
var URL = "https://cors-anywhere.herokuapp.com/";
function enviarFormulario(formulario, verbo, controlador, error, btn, redireccion, mensaje, btnTexto){
	var datos = formulario.serialize();
	
	$.ajax({
		type : verbo,
		url  : URL+controlador,
		data : datos,
		beforeSend: function(){	
			btn.html('<span class="glyphicon glyphicon-transfer"></span> &nbsp; enviando ...');
			btn.attr("disabled", true);
			error.html('');
		},
		success :  function(response){
			try {
				var json = $.parseJSON(response);
			} catch(e) {
				errorFormulario(btn, btnTexto, error, mensaje);
			}
			
			if((isDefined(json)) && (json.status == 200)){
				btn.html('<img src="http://irsosavphp.olympos.com.ar/front/js/btn-ajax-loader.gif" width="20px" height="20px" /> &nbsp; Cargando ...');
				window.location = redireccion;
				
			}else if((isDefined(json)) && (json.status == 404)){
				errorFormulario(btn, btnTexto, error, mensaje);
			}else{
				errorFormulario(btn, btnTexto, error, mensaje);
			}
		}
	});
	
	return false;
}

function errorFormulario(btn, btnTexto, error, mensaje){
	btn.html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; '+btnTexto);
	btn.attr("disabled", false);
	error.html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+mensaje+'</div>');
}

function enviarFormularioPopup(formulario, verbo, controlador, btn, modalNombre, mensaje, btnTexto, mensajeAlert, tabla, clicks, callback){
	var datos = formulario.serialize();
	$.ajax({
		type : verbo,
		url  : URL+controlador,
		data : datos,
		beforeSend: function(){	
			btn.html('<span class="glyphicon glyphicon-transfer"></span> &nbsp; enviando ...');
			btn.attr("disabled", true);
		},
		success :  function(response){
			try {
				var json = $.parseJSON(response);
				} catch(e) {
				cerrarFormularioPopup(modalNombre, btn, btnTexto, mensaje, "alert alert-danger");
			}
			
			if((isDefined(json)) && (json.status == 200)){
				if(callback){
					callback(json.data, tabla);
				}
				cerrarFormularioPopup(modalNombre, btn, btnTexto, mensajeAlert, "alert alert-success");
			}else if((isDefined(json)) && (json.status == 404)){
				cerrarFormularioPopup(modalNombre, btn, btnTexto, mensaje, "alert alert-danger");
			}else{
				cerrarFormularioPopup(modalNombre, btn, btnTexto, mensaje, "alert alert-danger");
			}
			
			clicks();
		}
	});
	
	return false;
}

function cerrarFormularioPopup(modalNombre, btn, btnTexto, mensaje, claseAlert){
	modalNombre.modal('hide');
	btn.html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; '+btnTexto);
	btn.attr("disabled", false);
	mostrarMsj($('#mensaje'), claseAlert, mensaje);
	setTimeout(function(){ ocultarMsj($('#mensaje'));}, 5000);
}

function limpiarFormulario(formulario, divError){
	formulario[0].reset();
	formulario.validate().resetForm();
	formulario.removeClass("has-error");
	formulario.find("input, textarea, select").removeClass("error");
	divError.fadeOut(500);
	divError.html('');
}

function crearFiltro(){
	$.fn.extend({
		filterTable: function(){
			return this.each(function(){
				$(this).on('keyup', function(e){
					$('.filterTable_no_results').remove();
					var $this = $(this), 
					search = $this.val().toLowerCase(), 
					target = $this.attr('data-filters'), 
					$target = $(target), 
					$rows = $target.find('tbody tr');
					
					if(search == '') {
						$rows.show(); 
					} else {
						$rows.each(function(){
							var $this = $(this);
							$this.text().toLowerCase().indexOf(search) === -1 ? $this.hide() : $this.show();
						})
						if($target.find('tbody tr:visible').size() === 0) {
							var Colspan = $target.find('tr')[0].cells.length;
							var no_results = $('<tr class="filterTable_no_results"><td colspan='+Colspan+'>No se encontraron resultados</td></tr>')
							$target.find('tbody').append(no_results);
						}
					}
				});
			});
		}
	});
	
	$('.container').on('click', '.panel-heading span.filter', function(e){
		var $this = $(this), $panel = $this.parents('.panel');
		$panel.find('.panel-body').slideToggle();
		if($this.css('display') != 'none') {
			$panel.find('.panel-body input').focus();
		}
	});
	
	$('[data-action="filter"]').filterTable();
}

function cargarTabla(tabla, verbo, controlador, mensajeError, callbackRespuesta, callbackFiltro, clicks){	
	var Colspan = tabla.find('tr')[0].cells.length;
	$.ajax({
		type : verbo,
		url  : URL+controlador,
		beforeSend: function(){	
			tabla.find('tbody').html('<tr class="filterTable_no_results"><td colspan='+Colspan+'>Cargando .....</td></tr>');
		},
		success :  function(response){
			try {
				var json = $.parseJSON(response);
				} catch(e) {
				tabla.find('tbody').html('<tr class="filterTable_no_results"><td colspan='+Colspan+'>'+mensajeError+'</td></tr>');
				clicks();
			}
			
			if(!json){
				tabla.find('tbody').html('<tr class="filterTable_no_results"><td colspan='+Colspan+'>'+mensajeError+'</td></tr>');
				}else if(json.status == 200){
				callbackRespuesta(json.data, tabla);
				callbackFiltro();
				clicks();
				}else if(json.status == 404){
				tabla.find('tbody').html('<tr class="filterTable_no_results"><td colspan='+Colspan+'>'+mensajeError+'</td></tr>');
				}else{
				tabla.find('tbody').html('<tr class="filterTable_no_results"><td colspan='+Colspan+'>'+mensajeError+'</td></tr>');
			}
		}
	});
	
	return false;
}

function modalGenerico(popup, titulo, accionVal, tituloClase, usuario, modalNombre){
	popup.find(".modal-title").html(titulo);
	if(accionVal){
		ACCION_USU_GLOBAL = accionVal;
	}
	if(usuario){
		USUGLOBAL = usuario;
	}
	popup.find(".modal-header").removeClass("titulo-nuevo titulo-editar titulo-eliminar").addClass(tituloClase);

	modalNombre.modal({
		backdrop: 'static',
		keyboard: false
	})
}

function getCombo(combo, verbo, controlador){	
	$.ajax({
		type : verbo,
		url  : URL+controlador,
		beforeSend: function(){	
			combo.html('<option value="">Seleccione</option>');
		},
		success :  function(response){
			try {
				var json = $.parseJSON(response);
				} catch(e) {
				combo.html('error');
			}
			
			if(!json){
				combo.html('error');
				}else if(json.status == 200){
				$.each(json.data, function() {
					combo.append('<option value="'+this.ID+'">'+this.DESCRIPCION+'</option>')
				});
				}else if(json.status == 404){
				combo.html('error');
				}else{
				combo.html('error');
			}
		}
	});
	
	return false;
}

function evtAcciones(){
	$("#provincia_usuario_usu").change(function() {
		var provincia_seleccionada = $(this).val();
		getCombo($("#localidad_usuario_usu"), "GET", "http://irsosavphp.olympos.com.ar/localidades/consultarTodos/"+provincia_seleccionada);
		$("#localidad_usuario_usu").attr("disabled",false);
	});
}

function mostrarMsj(divMensaje, claseMensaje, contenidoMensaje){
	divMensaje.fadeIn(500, function(){		
		divMensaje.removeClass("alert-success, alert-danger").addClass(claseMensaje);
		divMensaje.html(contenidoMensaje);
	});
}

function ocultarMsj(divMensaje){
	divMensaje.fadeOut(500, function(){		
		divMensaje.removeClass("alert-success, alert-danger");
		divMensaje.html("");
	});
}

function isDefined(variable) {
    return (typeof(window[variable]) == "undefined")?true:false;
}