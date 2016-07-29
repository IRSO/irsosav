<?php defined('DACCESS') or die ('Acceso restringido!');
	/**
 * Definition of system paths.
 * @author David Unay Santisteban <slavepens@gmail.com>
 * @package SlaveFramework
 * @version 1.0
 */

define('DS', DIRECTORY_SEPARATOR);
define('ROOT', dirname(dirname(__FILE__)));
define('HOST', "/front");

/* main system paths */
define ('LIBRARIES_PATH', ROOT.DS.'libraries'.DS);
define ('INCLUDE_PATH', ROOT.DS.'includes'.DS);
define ('SYSTEM_PATH', ROOT.DS.'system'.DS);
define ('CTRLS_PATH', ROOT.DS.'controllers'.DS);
define ('MODLS_PATH', ROOT.DS.'models'.DS);
define ('VIEWS_PATH', ROOT.DS.'views'.DS);
define ('LANG_PATH', ROOT.DS.'languages'.DS);

/* Codigo Estados */
define ('ESTADO_OK', 200);
define ('ESTADO_CREADO', 201);
define ('ESTADO_ACEPTADO', 202);
define ('ESTADO_SOLICITUD_INCORRECTA', 400);
define ('ESTADO_NO_AUTORIZADO', 401);
define ('ESTADO_PROHIBIDO', 403);
define ('ESTADO_NO_ENCONTRADO', 404);
define ('ESTADO_SERVIDOR_ERROR_INTERNO', 500);
define ('ESTADO_NO_IMPLEMENTADO', 501);
define ('ESTADO_PUERTA_ENLACE_INCORRECTA', 502);
define ('ESTADO_NO_DISPONIBLE', 503);
