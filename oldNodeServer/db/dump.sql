-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: claims
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

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
-- Table structure for table `claim`
--

DROP TABLE IF EXISTS `claim`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `claim` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `ieeeMembership` varchar(255) NOT NULL,
  `claimType` varchar(255) NOT NULL,
  `eventName` varchar(255) NOT NULL,
  `eventDate` date NOT NULL,
  `lessAdvanceExpense` int NOT NULL,
  `totalExpense` int NOT NULL,
  `status` enum('pending','approved','rejected') NOT NULL,
  `accountName` varchar(255) NOT NULL,
  `accountNumber` varchar(255) NOT NULL,
  `bankName` varchar(255) NOT NULL,
  `branchName` varchar(255) NOT NULL,
  `ifscCode` varchar(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `claim`
--

LOCK TABLES `claim` WRITE;
/*!40000 ALTER TABLE `claim` DISABLE KEYS */;
INSERT INTO `claim` VALUES (6,'res','123','rest@em.co','123','Expense Claim','asd','2021-01-01',100,400,'pending','res','987','boi','khamgaon','123'),(7,'res','123','rest@em.co','123','Expense Claim','asd','2021-01-01',100,400,'pending','res','987','boi','khamgaon','123'),(8,'res','123','rest@em.co','123','Expense Claim','asd','2021-01-01',100,400,'pending','res','987','boi','khamgaon','123');
/*!40000 ALTER TABLE `claim` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expense`
--

DROP TABLE IF EXISTS `expense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expense` (
  `id` int NOT NULL AUTO_INCREMENT,
  `claim_id` int NOT NULL,
  `item` varchar(255) NOT NULL,
  `amount` int NOT NULL,
  `doc_url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `claim_id` (`claim_id`),
  CONSTRAINT `expense_ibfk_1` FOREIGN KEY (`claim_id`) REFERENCES `claim` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expense`
--

LOCK TABLES `expense` WRITE;
/*!40000 ALTER TABLE `expense` DISABLE KEYS */;
INSERT INTO `expense` VALUES (1,6,'Travelling and Expenses',300,'https://www.google.com'),(2,6,'Food and Beverages',0,'https://www.google.com'),(3,6,'Lodging and Boarding',0,'https://www.google.com'),(4,6,'Printing Stationary & consumables',200,'https://www.google.com'),(5,6,'Miscellaneous',0,'https://www.google.com'),(6,6,'Anyother:',0,'https://www.google.com'),(7,7,'Travelling and Expenses',300,'https://www.google.com'),(8,7,'Food and Beverages',0,'https://www.google.com'),(9,7,'Lodging and Boarding',0,'https://www.google.com'),(10,7,'Printing Stationary & consumables',200,'https://www.google.com'),(11,7,'Miscellaneous',0,'https://www.google.com'),(12,7,'Anyother:',0,'https://www.google.com'),(13,8,'Travelling and Expenses',300,'https://www.google.com'),(14,8,'Food and Beverages',0,'https://www.google.com'),(15,8,'Lodging and Boarding',0,'https://www.google.com'),(16,8,'Printing Stationary & consumables',200,'https://www.google.com'),(17,8,'Miscellaneous',0,'https://www.google.com'),(18,8,'Anyother:',0,'https://www.google.com');
/*!40000 ALTER TABLE `expense` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-10 14:56:37
