-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: ecomglass
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `detail`
--

DROP TABLE IF EXISTS `detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detail` (
  `detailId` int NOT NULL AUTO_INCREMENT,
  `glassId` int DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `rgb` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`detailId`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detail`
--

LOCK TABLES `detail` WRITE;
/*!40000 ALTER TABLE `detail` DISABLE KEYS */;
INSERT INTO `detail` VALUES (1,1,'Pink',5,'pink'),(2,1,'Gold',3,'rgb(255, 242, 0)'),(3,1,'Brown',2,'brown'),(4,2,'Navy',4,'rgb(14, 175, 239)'),(5,2,'Light Gun',4,'rgb(245, 249, 179)'),(6,2,'Dark Gun',6,'rgb(81, 81, 77)'),(7,3,'Brown Demi',1,'brown'),(8,4,'Dark Khaki',2,'rgb(81, 81, 77)'),(9,4,'Gold',2,'rgb(255, 242, 0)'),(10,5,'Blue',7,'blue'),(11,5,'Red',7,'red'),(12,6,'Clear Pink',3,'pink'),(13,6,'Purple',3,'purple');
/*!40000 ALTER TABLE `detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `glasses`
--

DROP TABLE IF EXISTS `glasses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `glasses` (
  `glassId` int NOT NULL AUTO_INCREMENT,
  `glassName` varchar(100) DEFAULT NULL,
  `glassPrice` int DEFAULT NULL,
  `materialId` int DEFAULT NULL,
  `styleId` int DEFAULT NULL,
  `glassSale` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`glassId`),
  KEY `fk_glasses_style` (`styleId`),
  KEY `fk_glasse_material` (`materialId`),
  CONSTRAINT `fk_glasse_material` FOREIGN KEY (`materialId`) REFERENCES `material` (`materialId`),
  CONSTRAINT `fk_glasses_style` FOREIGN KEY (`styleId`) REFERENCES `style` (`styleId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `glasses`
--

LOCK TABLES `glasses` WRITE;
/*!40000 ALTER TABLE `glasses` DISABLE KEYS */;
INSERT INTO `glasses` VALUES (1,'Graph Belle',2580000,2,2,0.10),(2,'K.moriyama',2000000,2,1,0.10),(3,'Niche',2980000,3,2,0.10),(4,'Malisa',1980000,2,3,0.10),(5,'Junni',1500000,1,1,0.10),(6,'Fuwaa Celuu',1300000,3,2,0.30);
/*!40000 ALTER TABLE `glasses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material`
--

DROP TABLE IF EXISTS `material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material` (
  `materialId` int NOT NULL AUTO_INCREMENT,
  `materialName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`materialId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
INSERT INTO `material` VALUES (1,'Acetate'),(2,'Kim loại'),(3,'Nhựa dẻo');
/*!40000 ALTER TABLE `material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `media` (
  `mediaId` int NOT NULL AUTO_INCREMENT,
  `glassId` int DEFAULT NULL,
  `img1` varchar(200) DEFAULT NULL,
  `img2` varchar(200) DEFAULT NULL,
  `img3` varchar(200) DEFAULT NULL,
  `img4` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`mediaId`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (1,1,'https://www.owndays.com/storage/products/c06387cc-6846-4e40-bb0f-f9db7ed4b0e1.webp','https://www.owndays.com/storage/products/5d53e078-ee1f-460e-ad92-93cfe24475fd.webp','https://www.owndays.com/storage/products/7649511a-031c-49eb-8867-8e69526874e2.webp','https://www.owndays.com/storage/products/53cfecd3-ea48-4905-bf60-385f7c2085bf.webp'),(2,2,'https://www.owndays.com/storage/products/82f4c39b-fe09-41d6-8150-45be1bb6d9e6.webp','https://www.owndays.com/storage/products/667ab79d-e328-43b4-a247-d2ee1c8a7314.webp','https://www.owndays.com/storage/products/e18926fe-4c34-4aed-8e9f-833bd34fbf0c.webp','https://www.owndays.com/storage/products/24a844ec-36bc-438b-8db3-c98094f4efda.webp'),(3,3,'https://www.owndays.com/storage/products/535dd3cf-2870-454f-861c-92ec93e7df73.webp','https://www.owndays.com/storage/products/eb813504-c5d7-4b39-9e5c-6873f9d8d378.webp','https://www.owndays.com/storage/products/d2e4eabf-6e60-4ee2-a362-7aef0a9920ac.webp','https://www.owndays.com/storage/products/3799b2bb-118d-4e23-ad98-7d5b5fabb0ea.webp'),(4,4,'https://www.owndays.com/storage/products/47b42c28-4541-466e-bbec-b9cea50b8ba9.webp','https://www.owndays.com/storage/products/1a186f17-5b7b-4f03-a2fa-d89206c51822.webp','https://www.owndays.com/storage/products/13bf5d0f-f9be-4160-a484-28da131ae9fd.webp','https://www.owndays.com/storage/products/561e78b5-8d92-4da0-8e77-774b0e7b834e.webp'),(5,5,'https://www.owndays.com/storage/products/dd3f2ff7-5559-4473-b834-48346eee35a3.webp','https://www.owndays.com/storage/products/b97d5ccc-26ad-480b-b1c1-e70429a92fef.webp','https://www.owndays.com/storage/products/b7cf2419-15fd-4fd1-ba9d-e65e0a0f2d0c.webp','https://www.owndays.com/storage/products/99c8b5f4-7bf1-48b6-b611-ab257ce5b3db.webp'),(6,6,'https://www.owndays.com/storage/products/0d6ac71e-d435-49e6-9596-ec33516534bf.webp','https://www.owndays.com/storage/products/1b6ff42a-cff1-461e-b85a-4762dfb64267.webp','https://www.owndays.com/storage/products/ceb8a8ef-e312-4025-a931-60d975913acd.webp','https://www.owndays.com/storage/products/31c3af32-a6ca-4369-8f59-21fe8c78ad73.webp');
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `orderId` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `detailId` int NOT NULL,
  `numberBuy` int DEFAULT NULL,
  `nameGlass` varchar(100) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `rgb` varchar(45) DEFAULT NULL,
  `orderDate` varchar(100) DEFAULT NULL,
  `order_cart_id` int DEFAULT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (99,43,9,1,'Malisa',1782000,'rgb(255, 242, 0)','T5 ngày 2/11/2023',57),(100,43,9,2,'Malisa',3564000,'rgb(255, 242, 0)','T5 ngày 2/11/2023',58),(101,43,10,2,'Junni',2700000,'blue','T5 ngày 2/11/2023',59),(102,43,12,2,'Fuwaa Celuu',1820000,'pink','T5 ngày 2/11/2023',59);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_cart`
--

DROP TABLE IF EXISTS `order_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_cart` (
  `order_cart_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  PRIMARY KEY (`order_cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_cart`
--

LOCK TABLES `order_cart` WRITE;
/*!40000 ALTER TABLE `order_cart` DISABLE KEYS */;
INSERT INTO `order_cart` VALUES (56,43,0),(57,43,0),(58,43,0),(59,43,0);
/*!40000 ALTER TABLE `order_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `style`
--

DROP TABLE IF EXISTS `style`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `style` (
  `styleId` int NOT NULL AUTO_INCREMENT,
  `styleName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`styleId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `style`
--

LOCK TABLES `style` WRITE;
/*!40000 ALTER TABLE `style` DISABLE KEYS */;
INSERT INTO `style` VALUES (1,'Hình vuông'),(2,'Mắt mèo'),(3,'Oval');
/*!40000 ALTER TABLE `style` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) DEFAULT NULL,
  `userEmail` varchar(50) DEFAULT NULL,
  `userPassword` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (42,'giangggz','Giang123@gmail.com','$2b$10$.HOQTFuIQYd/k34I60MthOnQbfwyZQOTh/LPnYWPyPAYb7Myo7Dii'),(43,'khoa','khoa123@gmail.com','$2b$10$n9BFBmQV3/FnGkmaDiP7i.4lekmblUE37ZuY9WV2pKdwq0NPkL30i');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ecomglass'
--
/*!50003 DROP PROCEDURE IF EXISTS `All_product` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `All_product`()
BEGIN
	SELECT g.glassName, g.glassPrice, g.glassSale , m.img1 FROM glasses as g
    INNER JOIN media as m ON g.glassId = m.glassId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `All_product_store` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `All_product_store`(
  IN `@keyStyle` INT,
  IN `@keyMaterial` INT
)
BEGIN
  IF `@keyStyle` IS NULL OR `@keyStyle` <= 0 THEN
    SET `@keyStyle` = 0;
  END IF;
  
  IF `@keyMaterial` IS NULL OR `@keyMaterial` <= 0 THEN
    SET `@keyMaterial` = 0;
  END IF;

  SELECT g.glassName, g.glassPrice, g.glassSale, g.glassId, m.img1
  FROM glasses AS g
  INNER JOIN media AS m ON g.glassId = m.glassId
  WHERE
    (`@keyStyle` = 0 OR g.styleId = `@keyStyle`)
    AND
    (`@keyMaterial` = 0 OR g.materialId = `@keyMaterial`);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `create_order` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `create_order`(
  IN `@detailId` INT,
  IN `@userId` INT,
  IN `@numberBuy` INT,
  IN `@nameGlass` varchar(100),
  IN `@price` INT,
  IN `@rgb` varchar(100),
  IN `@orderDate` varchar(100),
IN `@order_cart_id` INT
)
BEGIN
  INSERT INTO `ecomglass`.`order` (
    `userId`, `detailId`, `numberBuy`, `nameGlass`, `price`, `rgb`, `orderDate`, `order_cart_id`
  ) VALUES (
    `@userId`, `@detailId`, `@numberBuy`, `@nameGlass`, `@price`, `@rgb`, `@orderDate`,`@order_cart_id`
  );
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `detail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `detail`(IN `@keyId` INT)
BEGIN
  SELECT g.glassName , g.glassPrice, g.glassSale , d.color , d.quantity, m.materialName , d.detailId, g.glassId , d.rgb
  FROM glasses AS g
  INNER JOIN detail AS d ON g.glassId = d.glassId
  INNER JOIN material AS m ON m.materialId = g.materialId
  WHERE g.glassId = `@keyId`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `media_detail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `media_detail`(IN `@keyId` INT )
BEGIN
SELECT  g.glassId, m.img1 , m.img2 , m.img3, m.img4 FROM media as m 
INNER JOIN glasses as g ON m.glassId = g.glassId
WHERE g.glassId = `@keyId`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-02 13:59:03
