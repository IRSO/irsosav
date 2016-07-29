
		<!-- inicio popup crear/editar usuario !-->
		<div class="container PopupCrearEditar">
			<!-- Modal -->
			<div class="modal fade" id="ModalCrearEditar" role="dialog">
				<!-- modal dialog !-->
				<div class="modal-dialog">	
					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title"></h4>
						</div>

						<form method="POST" id="form_usuarios_abm_re" name="form_usuarios_abm_re" class="form-signin form">
							<div class="modal-body">
								<div class="col-md-12">
									<div class="col-md-6">
										<label class="label label-primary lbl-abm full-widt marginTop20"><?php $this->language->translate('LBL_C_USUARIO_US'); ?></label>
										<input type="text" name="usuario_usu" id="usuario_usu" value="" maxlength="100" value="" class="form-control" placeholder="<?php $this->language->translate('PLACEHOLDER_C_USUARIO_US'); ?>" />
										
										<label class="label label-default lbl-abm full-widt marginTop20"><?php $this->language->translate('LBL_C_DESCRIPCION_USUARIO_US'); ?></label>
										<input type="text" name="descripcion_usuario_usu" id="descripcion_usuario_usu" value="" maxlength="100" class="form-control" placeholder="<?php $this->language->translate('PLACEHOLDER_C_DESCRIPCION_USUARIO_US'); ?>" />
										
										<label class="label label-default lbl-abm full-widt marginTop20"><?php $this->language->translate('LBL_C_CLAVE_USUARIO_US'); ?></label>
										<input type="text" name="clave_usuario_usu" id="clave_usuario_usu" value="" maxlength="100" class="form-control" placeholder="<?php $this->language->translate('PLACEHOLDER_C_CLAVE_USUARIO_US'); ?>" />			
										
										<label class="label label-default lbl-abm full-widt marginTop20"><?php $this->language->translate('LBL_C_TELEFONO_USUARIO_US'); ?></label>
										<input type="text" name="telefono_usuario_usu" id="telefono_usuario_usu" value="" maxlength="100" class="form-control" placeholder="<?php $this->language->translate('PLACEHOLDER_C_TELEFONO_USUARIO_US'); ?>" />				
										
										<label class="label label-default lbl-abm full-widt marginTop20"><?php $this->language->translate('LBL_C_TIPODOC_USUARIO_US'); ?></label>
										<select name="tipodoc_usuario_usu" id="tipodoc_usuario_usu" class="form-control" />
										</select>	
									</div>
									<div class="col-md-6">
										<label class="label label-default lbl-abm full-widt marginTop20 "><?php $this->language->translate('LBL_C_NRODOC_USUARIO_US'); ?></label>
										<input type="text" name="nrodocu_usuario_usu" id="nrodocu_usuario_usu" value="" maxlength="8" class="form-control" placeholder="<?php $this->language->translate('PLACEHOLDER_C_NRODOC_USUARIO_US'); ?>" />										
										
										<label class="label label-default lbl-abm full-widt marginTop20"><?php $this->language->translate('LBL_C_PROVINCIA_US'); ?></label>
										<select name="provincia_usuario_usu" id="provincia_usuario_usu" class="form-control" />
										</select>
										
										<label class="label label-default lbl-abm full-widt marginTop20 "><?php $this->language->translate('LBL_C_LOCALIDAD_US'); ?></label>
										<select name="localidad_usuario_usu" id="localidad_usuario_usu" class="form-control" disabled="disabled" />
										</select>
										
										<label class="label label-default lbl-abm full-widt marginTop20"><?php $this->language->translate('LBL_C_PERFIL_USUARIO_US'); ?></label>
										<select name="perfil_usuario_usu" id="perfil_usuario_usu" class="form-control" />
										</select>				
										
										<label class="label label-default lbl-abm full-widt marginTop20"><?php $this->language->translate('LBL_C_ESTADO_USUARIO_US'); ?></label>
										<select name="estado_usuario_usu" id="estado_usuario_usu" class="form-control" />
										</select>	
									</div>
								</div>
							</div>
							<div class="modal-footer">								
								<div id="error_popup_crear_editar" class="alert alert-danger"> 
									<span class="glyphicon glyphicon-info-sign"></span> &nbsp; Error al cargar datos
								</div>
			
								<button type="button" class="btn btn-danger btn-sm marginTop20" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> <?php $this->language->translate('BTN_CANCELAR'); ?> </button>
								<button type="button" class="btn btn-success btn-sm marginTop20" name="btn_popup_crear_editar" id="btn_popup_crear_editar"><span class="glyphicon  glyphicon-ok"></span> <?php $this->language->translate('BTN_GUARDAR'); ?> </button>
							</div>
						</form>
					</div>
				<!-- fin Modal content !-->
				</div>
			<!-- fin modal dialog !-->
			</div>
		<!-- fin Modal !-->
		</div>
		<!-- fin popup crear/editar usuario !-->
