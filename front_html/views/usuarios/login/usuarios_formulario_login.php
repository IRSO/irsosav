	
					<form method="POST" id="form_login_usu" name="form_login_usu" class="form-signin form">
					<h2 class="form-signin-heading"><?php $this->language->translate('FORM_LOGIN_USUARIOS'); ?></h2>
					<label class="label label-default lbl-login marginTop30 full-widt"><?php $this->language->translate('LBL_C_USUARIO_US'); ?></label>
					<input type="text" name="usuario_login_usu" id="usuario_login_usu" value="" maxlength="100" class="form-control" placeholder="<?php $this->language->translate('PLACEHOLDER_C_USUARIO_US'); ?>" autofocus />
					<label class="label label-default lbl-login marginTop30 full-widt"><?php $this->language->translate('LBL_C_CLAVE_USUARIO_US'); ?></label>
					<input type="password" name="clave_login_usu" id="clave_login_usu" value="" maxlength="100" class="form-control" placeholder="<?php $this->language->translate('PLACEHOLDER_C_CLAVE_USUARIO_US'); ?>" />				
					<div class="form-group">
						<button type="button" class="btn btn-default btn-lg btn-primary btn-block" name="ingresar_login_usu" id="ingresar_login_usu"><span class="glyphicon glyphicon-log-in"></span><span>&nbsp; <?php $this->language->translate('BTN_INGRESAR'); ?></span></button>
						<br/>
						<div id="error"></div>
					</div>
				</form>

