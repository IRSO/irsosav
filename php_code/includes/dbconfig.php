<?php defined('DACCESS') or die ('Acceso restringido!');
/**
 * Class configuration for the database.
 * @author David Unay Santisteban <slavepens@gmail.com>
 * @package SlaveFramework
 * @version 1.0
 */
class DefaultDB {
    public $driver = 'mysql';
    public $dbhost = 'localhost';
    public $dbuser = 'irsosav';
    public $dbpass = 'motor970';
    public $dbname = 'irsosav';
    public $prefix = '';
}

/**
 * Custom connection class, you can create as many as you want
 * each one for a diferent database connection.
 */
class Custom {
    public $driver = 'mysql';
    public $dbhost = 'localhost';
    public $dbuser = 'root';
    public $dbpass = '';
    public $dbname = 'sav';
    public $prefix = '';
}
