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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(30) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `age` int NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `refreshToken` varchar(255) DEFAULT NULL,
  `roles_id` varchar(30) NOT NULL,
  PRIMARY KEY (`roles_id`,`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('2d522918353f3946e02a0866719a50','Admin','Admin','admin@pickandeat.com',100,'$argon2id$v=19$m=65536,t=5,p=1$Oh23AijOZdczNPjRAtblzg$9YBhUU2jlCRqtjcXwgIqQg7B9qe5l0P8of1e//KXCYo','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJkNTIyOTE4MzUzZjM5NDZlMDJhMDg2NjcxOWE1MCIsImVtYWlsIjoiYWRtaW5AcGlja2FuZGVhdC5jb20iLCJpYXQiOjE2MzkzMDQ2NDYsImV4cCI6MTYzOTM5MTA0Nn0.YTe82MRf-yatAqY8ri8T2QXy52aYbT77oPsZ33q4bkc','1'),('1d793aa3481e1966f5770b021ddcdf','Julie','Garcia','julie@hotmail.fr',28,'$argon2id$v=19$m=65536,t=5,p=1$58LQtLxB5q+Hp0g/d3YdHA$Ywco0Ay/Hi/ORabvtkq16Qg6HWYlSxdoGwe0X5IaYt4',NULL,'2'),('aa5a0575cf277f9e4125df51289e38','Thomas','Garcia','thomas@hotmail.fr',26,'$argon2id$v=19$m=65536,t=5,p=1$pmA6vHMf/+I5cNbQZehHnw$rjqPxKZE30VwcuPxyREwNpbpzSORGgtUeR99FenBbhw',NULL,'2'),('e70c1e9fdefc4e34099baf19e8e4ae','Manon','Garcia','manon@hotmail.fr',52,'$argon2id$v=19$m=65536,t=5,p=1$tmp/7IArKNxqXN0Z/ocxQA$7E7AUjIKqB0lkZMVr/oE3+akoEQljJZfOPtvwkKojck',NULL,'2');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
