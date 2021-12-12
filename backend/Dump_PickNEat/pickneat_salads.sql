-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pickneat
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `salads`
--

DROP TABLE IF EXISTS `salads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salads` (
  `id` varchar(30) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` int NOT NULL,
  `description` varchar(300) NOT NULL,
  `image` varchar(300) NOT NULL,
  `allergens` varchar(300) DEFAULT NULL,
  `categories_id` varchar(30) NOT NULL,
  PRIMARY KEY (`id`,`categories_id`),
  UNIQUE KEY `idsalads_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salads`
--

LOCK TABLES `salads` WRITE;
/*!40000 ALTER TABLE `salads` DISABLE KEYS */;
INSERT INTO `salads` VALUES ('cvfd8f7g8g8rghtn896nt3214hjyfr','Greeny Cracky',6,'A tasty mix of salads, coral and spelt lentils, marinated tomatoes, Mozzarella balls, breaded chicken and a delicious shallot and herb duo!','https://images.unsplash.com/photo-1547496502-affa22d38842?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=584&q=80','eggs, mustard, milk, gluten','5'),('hytrh985475jyt5d5fgeb8854dghtr','The variety',7,'A tasty mix of salads, Neapolitan-style penne, marinated tomatoes, Grana Padano cheese, breaded chicken, and a delicious shallot and herb duo!','https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80','eggs, mustard, milk, gluten','5'),('nhyg85462rgth8470hyteg85214hyt','Spring mood',6,'A tasty mix of salads, Neapolitan-style penne, marinated tomatoes, Grana Padano cheese, breaded chicken, and a delicious shallot and herb duo!','https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80','eggs, mustard, milk, gluten','5'),('q8sdfr8547hygf869yhj754jytfr80','Big green',5,'A tasty mix of salads, coral and spelt lentils, marinated tomatoes, Mozzarella balls, breaded chicken and a delicious shallot and herb duo!','https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHNhbGFkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60','eggs, mustard, milk, gluten','5');
/*!40000 ALTER TABLE `salads` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-12 12:09:53
