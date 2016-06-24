<?php
$server = "127.0.0.1";
$user = "root";
$pwd = "fravecheck";

try {
    $connection = new PDO("mysqli:host=$server;dbname=irsosav", $user, $pwd);
    // PDO can throw exceptions rather than Fatal errors, so let's change the error mode to exception
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    var_dump(PDO::getAvailableDrivers());
    ;$connection->prepare('
    ;SELECT * FROM usuarios
    ;');
     
    ;$connection->execute();
    ;var_dump($connection);
    echo "connection successful"; 
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
?>
