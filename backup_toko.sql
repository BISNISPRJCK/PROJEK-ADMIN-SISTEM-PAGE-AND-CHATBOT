-- MySQL dump 10.13  Distrib 8.0.37, for Win64 (x86_64)
--
-- Host: localhost    Database: toko_db
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `table_pembelian`
--

DROP TABLE IF EXISTS `table_pembelian`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `table_pembelian` (
  `id` int NOT NULL AUTO_INCREMENT,
  `produk_id` int DEFAULT NULL,
  `jumlah` int NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'selesai',
  `tanggal` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `produk_id` (`produk_id`),
  CONSTRAINT `table_pembelian_ibfk_1` FOREIGN KEY (`produk_id`) REFERENCES `table_produk` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_pembelian`
--

LOCK TABLES `table_pembelian` WRITE;
/*!40000 ALTER TABLE `table_pembelian` DISABLE KEYS */;
INSERT INTO `table_pembelian` VALUES (2,4,3,42000.00,'batal','2025-08-01 21:25:07');
/*!40000 ALTER TABLE `table_pembelian` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table_produk`
--

DROP TABLE IF EXISTS `table_produk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `table_produk` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama_produk` varchar(255) NOT NULL,
  `harga` float NOT NULL,
  `foto_produk` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_produk`
--

LOCK TABLES `table_produk` WRITE;
/*!40000 ALTER TABLE `table_produk` DISABLE KEYS */;
INSERT INTO `table_produk` VALUES (1,'Sabun Mandi',5000,'sabun.jpg','2025-08-01 18:26:12','2025-08-01 18:26:12'),(2,'Shampho Botol',12000,'shampo.jpg','2025-08-01 18:26:12','2025-08-01 18:26:12'),(3,'Pasta Gigi',7000,'pasta.jpg','2025-08-01 18:26:12','2025-08-01 18:26:12'),(4,'Minyak Goreng 1 L',14000,'minyak.jpg','2025-08-01 18:26:12','2025-08-01 18:26:12'),(5,'Gula Pasir 1kg',13000,'gula.jpg','2025-08-01 18:26:12','2025-08-01 18:26:12'),(6,'Beras 5Kg',60000,'beras.jpg','2025-08-01 18:26:12','2025-08-01 18:26:12'),(7,'Teh Celup',9000,'teh.jpg','2025-08-01 18:26:12','2025-08-01 18:26:12'),(8,'Kopi Bubuk',11000,'kopi.jpg','2025-08-01 18:26:12','2025-08-01 18:26:12'),(9,'Mie Instan',3000,'mie.jpg','2025-08-01 18:26:12','2025-08-01 18:26:12'),(10,'Susu Kental',10000,'susu.jpg','2025-08-01 18:26:12','2025-08-01 18:26:12');
/*!40000 ALTER TABLE `table_produk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table_stockproduk`
--

DROP TABLE IF EXISTS `table_stockproduk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `table_stockproduk` (
  `id` int NOT NULL AUTO_INCREMENT,
  `produk_id` int NOT NULL,
  `jumlah` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `produk_id` (`produk_id`),
  CONSTRAINT `table_stockproduk_ibfk_1` FOREIGN KEY (`produk_id`) REFERENCES `table_produk` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_stockproduk`
--

LOCK TABLES `table_stockproduk` WRITE;
/*!40000 ALTER TABLE `table_stockproduk` DISABLE KEYS */;
INSERT INTO `table_stockproduk` VALUES (1,1,4,'2025-08-01 21:14:44','2025-08-01 22:15:50'),(2,4,6,'2025-08-01 21:25:07','2025-08-01 22:12:55'),(3,3,6,'2025-08-01 22:16:10','2025-08-01 22:16:17');
/*!40000 ALTER TABLE `table_stockproduk` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-02 12:28:53
