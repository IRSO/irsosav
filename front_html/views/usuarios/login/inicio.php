<!DOCTYPE html>
<html>
	<head>
		<title><?php $this->language->translate('TITLE_LOGIN_USUARIOS'); ?></title>	
		<?php include ($this->HOST. "views/includes/header.php");?>
		<link type="text/css" href="<?php echo HOST;?>/css/usuarios/login_usuarios.css" rel="stylesheet">
		<script type="text/javascript" src="<?php echo HOST;?>/js/usuarios/login_usuarios.js"></script>
	</head>
	<body>
		<!-- inicio container Login Usuarios !-->
		<div class="container">
			<div id="content">
			<?php require_once("usuarios_formulario_login.php");?>
			</div>
		</div>
		<!-- fin container Login Usuarios !-->
		<?php include ($this->HOST. "views/includes/footer.php");?>
	</body>
</html>
