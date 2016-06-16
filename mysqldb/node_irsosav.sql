-- MySQL dump 10.14  Distrib 5.5.47-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: node_irsosav
-- ------------------------------------------------------
-- Server version	5.5.47-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ciudad`
--

DROP TABLE IF EXISTS `ciudad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ciudad` (
  `id_ciudad` int(11) NOT NULL,
  `id_provincia` int(11) NOT NULL,
  `id_pais` tinyint(4) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`id_ciudad`,`id_provincia`,`id_pais`),
  UNIQUE KEY `id_ciudad` (`id_ciudad`),
  UNIQUE KEY `id_provincia` (`id_provincia`),
  UNIQUE KEY `id_pais` (`id_pais`),
  CONSTRAINT `ciudad_ibfk_1` FOREIGN KEY (`id_pais`) REFERENCES `pais` (`id_pais`),
  CONSTRAINT `fk_prov_pais` FOREIGN KEY (`id_provincia`) REFERENCES `provincia` (`id_provincia`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudad`
--

LOCK TABLES `ciudad` WRITE;
/*!40000 ALTER TABLE `ciudad` DISABLE KEYS */;
INSERT INTO `ciudad` VALUES (1,1,1,'Capital federal'),(2,2,2,'Las Condes');
/*!40000 ALTER TABLE `ciudad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `documento` varchar(20) NOT NULL,
  `id_tipo_doc` smallint(6) NOT NULL,
  `id_empresa` int(11) NOT NULL,
  `id_ciudad` int(11) NOT NULL,
  `id_provincia` int(11) NOT NULL,
  `id_pais` tinyint(4) NOT NULL,
  `id_perfil` tinyint(4) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `domicilio` varchar(100) NOT NULL,
  `telefono` varchar(30) NOT NULL,
  `celular` varchar(40) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `genero` char(1) DEFAULT NULL,
  `clave` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`documento`,`id_tipo_doc`,`id_empresa`),
  UNIQUE KEY `documento` (`documento`),
  UNIQUE KEY `id_tipo_doc` (`id_tipo_doc`),
  UNIQUE KEY `id_empresa` (`id_empresa`),
  UNIQUE KEY `id_ciudad` (`id_ciudad`),
  UNIQUE KEY `id_provincia` (`id_provincia`),
  UNIQUE KEY `id_pais` (`id_pais`),
  UNIQUE KEY `id_perfil` (`id_perfil`),
  CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`id_ciudad`) REFERENCES `ciudad` (`id_ciudad`),
  CONSTRAINT `cliente_ibfk_2` FOREIGN KEY (`id_provincia`) REFERENCES `provincia` (`id_provincia`),
  CONSTRAINT `cliente_ibfk_3` FOREIGN KEY (`id_pais`) REFERENCES `pais` (`id_pais`),
  CONSTRAINT `fk_ciu_pro_pai_men_fec` FOREIGN KEY (`id_tipo_doc`) REFERENCES `tipo_doc` (`id_tipo_doc`),
  CONSTRAINT `fk_cli_perf` FOREIGN KEY (`id_perfil`) REFERENCES `perfiles` (`id_perfil`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES ('29938654',1,1,1,1,1,1,'Marcelo Ramirez','Pichincha 911','4837-1399','15-5634-6112','mramirez@village.com.ar','m','200820e3227815ed1756a6b531e7e0d2'),('50938654',2,2,2,2,2,2,'Amador Chavez','Nueva de Lyon 147','837-1399','15-634-6112','achavez@village.com.ar','m','845a350f830ac3a777a487c5a8474b6b');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cod_comida`
--

DROP TABLE IF EXISTS `cod_comida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cod_comida` (
  `id_cod_comida` tinyint(4) NOT NULL,
  `descripcion` varchar(10) NOT NULL,
  PRIMARY KEY (`id_cod_comida`),
  UNIQUE KEY `id_cod_comida` (`id_cod_comida`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cod_comida`
--

LOCK TABLES `cod_comida` WRITE;
/*!40000 ALTER TABLE `cod_comida` DISABLE KEYS */;
INSERT INTO `cod_comida` VALUES (1,'M1'),(2,'M2');
/*!40000 ALTER TABLE `cod_comida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cod_postre`
--

DROP TABLE IF EXISTS `cod_postre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cod_postre` (
  `id_cod_postre` tinyint(4) NOT NULL,
  `descripcion` varchar(10) NOT NULL,
  PRIMARY KEY (`id_cod_postre`),
  UNIQUE KEY `id_cod_postre` (`id_cod_postre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cod_postre`
--

LOCK TABLES `cod_postre` WRITE;
/*!40000 ALTER TABLE `cod_postre` DISABLE KEYS */;
INSERT INTO `cod_postre` VALUES (1,'P1'),(2,'P2');
/*!40000 ALTER TABLE `cod_postre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comida`
--

DROP TABLE IF EXISTS `comida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comida` (
  `id_comida` tinyint(4) NOT NULL,
  `id_cod_comida` tinyint(4) NOT NULL,
  `descripcion` varchar(160) NOT NULL,
  `calorias` float DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`id_comida`),
  UNIQUE KEY `id_comida` (`id_comida`),
  KEY `fk_cod_comida` (`id_cod_comida`),
  CONSTRAINT `fk_cod_comida` FOREIGN KEY (`id_cod_comida`) REFERENCES `cod_comida` (`id_cod_comida`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comida`
--

LOCK TABLES `comida` WRITE;
/*!40000 ALTER TABLE `comida` DISABLE KEYS */;
INSERT INTO `comida` VALUES (1,1,'Milanesa con papas fritas',432,'2016-05-08'),(2,2,'Pollo al horno con papas',256,'2016-05-08');
/*!40000 ALTER TABLE `comida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empresa` (
  `id_empresa` smallint(6) NOT NULL,
  `cuit` varchar(20) NOT NULL,
  `id_ciudad` int(11) NOT NULL,
  `id_provincia` int(11) NOT NULL,
  `id_pais` tinyint(4) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `domicilio` varchar(100) NOT NULL,
  `telefono` varchar(30) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_empresa`,`cuit`),
  UNIQUE KEY `id_empresa` (`id_empresa`),
  UNIQUE KEY `cuit` (`cuit`),
  UNIQUE KEY `id_ciudad` (`id_ciudad`),
  UNIQUE KEY `id_provincia` (`id_provincia`),
  UNIQUE KEY `id_pais` (`id_pais`),
  CONSTRAINT `empresa_ibfk_1` FOREIGN KEY (`id_provincia`) REFERENCES `provincia` (`id_provincia`),
  CONSTRAINT `empresa_ibfk_2` FOREIGN KEY (`id_pais`) REFERENCES `pais` (`id_pais`),
  CONSTRAINT `fk_ciudad_prov_pais` FOREIGN KEY (`id_ciudad`) REFERENCES `ciudad` (`id_ciudad`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'-15635877',1,1,1,'Village','Cerrito 312','4959-2389','info@village.com.ar'),(2,'-15987877',2,2,2,'Village Chile','Lyon 312','959-2389','info@village.cl');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login` (
  `id_usuario` int(11) NOT NULL,
  `id_perfil` tinyint(4) NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `clave` varchar(32) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`,`usuario`),
  UNIQUE KEY `id_usuario` (`id_usuario`),
  UNIQUE KEY `usuario` (`usuario`),
  KEY `fk_login_perf` (`id_perfil`),
  CONSTRAINT `fk_login_perf` FOREIGN KEY (`id_perfil`) REFERENCES `perfiles` (`id_perfil`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu` (
  `id_menu` smallint(6) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `id_proveedor` smallint(6) NOT NULL,
  `id_comida` tinyint(4) NOT NULL,
  `id_postre` tinyint(4) NOT NULL,
  `precio` float DEFAULT NULL,
  PRIMARY KEY (`id_menu`,`fecha`,`id_proveedor`),
  UNIQUE KEY `id_menu` (`id_menu`),
  UNIQUE KEY `id_proveedor` (`id_proveedor`),
  UNIQUE KEY `id_comida` (`id_comida`),
  UNIQUE KEY `id_postre` (`id_postre`),
  CONSTRAINT `fk_prov_comi_post` FOREIGN KEY (`id_proveedor`) REFERENCES `proveedor` (`id_proveedor`),
  CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`id_comida`) REFERENCES `comida` (`id_comida`),
  CONSTRAINT `menu_ibfk_2` FOREIGN KEY (`id_postre`) REFERENCES `postre` (`id_postre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'2016-05-08 00:00:00',1,1,1,20),(2,'2016-05-08 00:00:00',2,2,2,20);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pais`
--

DROP TABLE IF EXISTS `pais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pais` (
  `id_pais` tinyint(4) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`id_pais`),
  UNIQUE KEY `id_pais` (`id_pais`),
  UNIQUE KEY `descripcion` (`descripcion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pais`
--

LOCK TABLES `pais` WRITE;
/*!40000 ALTER TABLE `pais` DISABLE KEYS */;
INSERT INTO `pais` VALUES (1,'Argentina'),(2,'Chile');
/*!40000 ALTER TABLE `pais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedido` (
  `id_pedido` int(11) NOT NULL,
  `id_menu` smallint(6) NOT NULL,
  `documento` varchar(20) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  PRIMARY KEY (`id_pedido`),
  UNIQUE KEY `id_pedido` (`id_pedido`),
  UNIQUE KEY `id_menu` (`id_menu`),
  UNIQUE KEY `documento` (`documento`),
  CONSTRAINT `fk_men_doc` FOREIGN KEY (`id_menu`) REFERENCES `menu` (`id_menu`),
  CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`documento`) REFERENCES `cliente` (`documento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (1,1,'29938654','2016-05-08 00:00:00'),(2,2,'50938654','2016-05-08 00:00:00');
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfiles`
--

DROP TABLE IF EXISTS `perfiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perfiles` (
  `id_perfil` tinyint(4) NOT NULL,
  `descripcion` varchar(60) NOT NULL,
  `permiso` varchar(10) NOT NULL,
  PRIMARY KEY (`id_perfil`,`descripcion`),
  UNIQUE KEY `id_perfil` (`id_perfil`),
  UNIQUE KEY `descripcion` (`descripcion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfiles`
--

LOCK TABLES `perfiles` WRITE;
/*!40000 ALTER TABLE `perfiles` DISABLE KEYS */;
INSERT INTO `perfiles` VALUES (1,'Administrador','Full'),(2,'Usuario','write');
/*!40000 ALTER TABLE `perfiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postre`
--

DROP TABLE IF EXISTS `postre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `postre` (
  `id_postre` tinyint(4) NOT NULL,
  `id_cod_postre` tinyint(4) NOT NULL,
  `descripcion` varchar(160) NOT NULL,
  `calorias` float DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`id_postre`),
  UNIQUE KEY `id_postre` (`id_postre`),
  KEY `fk_cod_postre` (`id_cod_postre`),
  CONSTRAINT `fk_cod_postre` FOREIGN KEY (`id_cod_postre`) REFERENCES `cod_postre` (`id_cod_postre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postre`
--

LOCK TABLES `postre` WRITE;
/*!40000 ALTER TABLE `postre` DISABLE KEYS */;
INSERT INTO `postre` VALUES (1,1,'Flan casero',143,'2016-05-08'),(2,2,'Ensalada de frutas',150,'2016-05-08');
/*!40000 ALTER TABLE `postre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedor`
--

DROP TABLE IF EXISTS `proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proveedor` (
  `id_proveedor` smallint(6) NOT NULL,
  `cuit` varchar(20) NOT NULL,
  `id_ciudad` int(11) NOT NULL,
  `id_provincia` int(11) NOT NULL,
  `id_pais` tinyint(4) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `domicilio` varchar(100) NOT NULL,
  `telefono` varchar(30) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_proveedor`,`cuit`),
  UNIQUE KEY `id_proveedor` (`id_proveedor`),
  UNIQUE KEY `cuit` (`cuit`),
  UNIQUE KEY `id_ciudad` (`id_ciudad`),
  UNIQUE KEY `id_provincia` (`id_provincia`),
  UNIQUE KEY `id_pais` (`id_pais`),
  CONSTRAINT `fk_ciu_prov_pais` FOREIGN KEY (`id_ciudad`) REFERENCES `ciudad` (`id_ciudad`),
  CONSTRAINT `proveedor_ibfk_1` FOREIGN KEY (`id_provincia`) REFERENCES `provincia` (`id_provincia`),
  CONSTRAINT `proveedor_ibfk_2` FOREIGN KEY (`id_pais`) REFERENCES `pais` (`id_pais`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedor`
--

LOCK TABLES `proveedor` WRITE;
/*!40000 ALTER TABLE `proveedor` DISABLE KEYS */;
INSERT INTO `proveedor` VALUES (1,'-29635861',1,1,1,'MiVianda','Don bosco 2315','4238-2013','info@mivianda.com.ar'),(2,'-11203724',2,2,2,'Viandas Chile','Aruca 215','438-2013','info@viandaschile.cl');
/*!40000 ALTER TABLE `proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provincia`
--

DROP TABLE IF EXISTS `provincia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provincia` (
  `id_provincia` int(11) NOT NULL,
  `id_pais` tinyint(4) NOT NULL DEFAULT '0',
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`id_provincia`,`id_pais`),
  UNIQUE KEY `id_provincia` (`id_provincia`),
  KEY `fk_pais` (`id_pais`),
  CONSTRAINT `fk_pais` FOREIGN KEY (`id_pais`) REFERENCES `pais` (`id_pais`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincia`
--

LOCK TABLES `provincia` WRITE;
/*!40000 ALTER TABLE `provincia` DISABLE KEYS */;
INSERT INTO `provincia` VALUES (1,1,'Buenos Aires'),(2,2,'Santiago de Chile');
/*!40000 ALTER TABLE `provincia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_doc`
--

DROP TABLE IF EXISTS `tipo_doc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_doc` (
  `id_tipo_doc` smallint(6) NOT NULL,
  `descripcion` varchar(10) NOT NULL,
  PRIMARY KEY (`id_tipo_doc`),
  UNIQUE KEY `id_tipo_doc` (`id_tipo_doc`),
  UNIQUE KEY `descripcion` (`descripcion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_doc`
--

LOCK TABLES `tipo_doc` WRITE;
/*!40000 ALTER TABLE `tipo_doc` DISABLE KEYS */;
INSERT INTO `tipo_doc` VALUES (1,'DNI'),(2,'ID');
/*!40000 ALTER TABLE `tipo_doc` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-05-26 19:29:32
