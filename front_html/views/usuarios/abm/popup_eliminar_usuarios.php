		
		<!-- inicio popup eliminar usuario !-->
		<div class="container PopupEliminar">
			<!-- Modal -->
			<div class="modal fade" id="ModalEliminar" role="dialog">
				<!-- modal dialog !-->
				<div class="modal-dialog">	
					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title"><?php $this->language->translate('TITLE_ELIMINAR_USUARIO'); ?></h4>
						</div>
						<form method="POST" id="form_usuarios_abm_eliminar" name="form_usuarios_abm_eliminar" class="form-signin form">
							<div class="modal-body">
								<p class="marginTop30 centrado negrita"><?php $this->language->translate('LEYENDA_SEGURO'); ?></p>
								<div class="form-group">
									<div id="error_popup_eliminar"></div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-danger btn-sm" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> <?php $this->language->translate('BTN_CANCELAR'); ?> </button>
								<button type="button" class="btn btn-success btn-sm" name="btn_popup_eliminar" id="btn_popup_eliminar"><span class="glyphicon  glyphicon-ok"></span> <?php $this->language->translate('BTN_ACEPTAR'); ?> </button>
							</div>
						</form>
					</div>
					<!-- fin Modal content !-->
				</div>
				<!-- fin modal dialog !-->
			</div>
			<!-- fin Modal !-->
		</div>
		<!-- fin popup eliminar usuario !-->