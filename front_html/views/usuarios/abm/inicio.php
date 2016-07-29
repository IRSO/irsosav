<!DOCTYPE html>
<html>
	<head>
		<title><?php $this->language->translate('TITLE_MOSTRAR_USUARIOS'); ?></title>
		<?php include ($this->HOST. "views/includes/header.php");?>
		<script type="text/javascript" src="<?php echo HOST;?>/js/usuarios/abm_usuarios.js"></script>
	</head>
	<body>
		<!-- inicio container Mostrar Usuarios !-->
		<div class="container marginTop30">
			<div class="col-md-12">
			<?php require_once("tabla_abm_usuarios.php");?>
			</div>
		</div>
		<!-- fin container Mostrar Usuarios !-->
		<?php require_once("popup_crear_editar_usuarios.php");?>
		<?php require_once("popup_eliminar_usuarios.php");?>

		<?php include ($this->HOST. "views/includes/footer.php");?>
	</body>
</html>
