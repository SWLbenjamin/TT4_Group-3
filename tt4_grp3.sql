-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 25, 2022 at 10:07 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tt4_grp3`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `CustomerId` int(11) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(50) NOT NULL,
  `customer_phone` varchar(50) DEFAULT NULL,
  `customer_address` varchar(50) NOT NULL,
  `balance` decimal(38,2) NOT NULL,
  PRIMARY KEY (`CustomerId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`CustomerId`, `customer_name`, `customer_phone`, `customer_address`, `balance`) VALUES
(1, 'Farrah Dobbie', '3688961901', '49862 Kingsford Junction', '69687.54'),
(2, 'Malcolm Orbell', '8867727382', '385 Lawn Terrace', '55592.51'),
(3, 'Filippa Bucknill', '6677805329', '1898 Michigan Road', '53826.01'),
(4, 'Dido Vanezis', '2887691797', '57689 Myrtle Park', '30581.83'),
(5, 'Annelise Aspland', '2096293966', '3922 Cherokee Place', '87026.91'),
(6, 'Herminia Newby', '8111478402', '19 Chive Center', '5414.47'),
(7, 'Lind Hanley', '7504959822', '7534 Village Green Center', '25921.26'),
(8, 'Mimi Gilhooley', '6594140488', '16033 Pond Avenue', '62834.94'),
(9, 'Ileana Parkes', '1281389203', '095 Warner Hill', '76939.31'),
(10, 'Larissa Yeldham', '2812360584', '220 Shopko Parkway', '15790.59'),
(11, 'newUser', '8392013', 'adddd', '0.00');

-- --------------------------------------------------------

--
-- Table structure for table `customerloan`
--

DROP TABLE IF EXISTS `customerloan`;
CREATE TABLE IF NOT EXISTS `customerloan` (
  `CustomerLoanId` int(11) NOT NULL AUTO_INCREMENT,
  `CustomerId` int(11) NOT NULL,
  `LoanId` int(11) NOT NULL,
  PRIMARY KEY (`CustomerLoanId`),
  KEY `CustomerLoan_FK1` (`CustomerId`),
  KEY `CustomerLoan_FK2` (`LoanId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customerloan`
--

INSERT INTO `customerloan` (`CustomerLoanId`, `CustomerId`, `LoanId`) VALUES
(1, 7, 6),
(2, 8, 8),
(3, 8, 7),
(4, 8, 1),
(5, 8, 10),
(6, 7, 9),
(7, 5, 3),
(8, 2, 2),
(9, 4, 4),
(10, 4, 5),
(11, 1, 13),
(17, 1, 29),
(18, 1, 30);

-- --------------------------------------------------------

--
-- Table structure for table `loan`
--

DROP TABLE IF EXISTS `loan`;
CREATE TABLE IF NOT EXISTS `loan` (
  `LoanId` int(11) NOT NULL AUTO_INCREMENT,
  `loan_amount` decimal(38,2) NOT NULL,
  PRIMARY KEY (`LoanId`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `loan`
--

INSERT INTO `loan` (`LoanId`, `loan_amount`) VALUES
(1, '135532.99'),
(2, '34367.53'),
(3, '45086.74'),
(4, '140123.37'),
(5, '57800.21'),
(6, '13165.14'),
(7, '82062.24'),
(8, '12416.32'),
(9, '17250.83'),
(10, '46431.85'),
(13, '12345.00'),
(14, '4000.00'),
(15, '4000.00'),
(16, '4000.00'),
(17, '4000.00'),
(18, '4000.00'),
(19, '4000.00'),
(20, '3917.00'),
(21, '4000.00'),
(22, '4000.00'),
(23, '4000.00'),
(24, '4000.00'),
(25, '4000.00'),
(26, '4000.00'),
(27, '4000.00'),
(28, '4000.00'),
(29, '4000.00'),
(30, '4000.00');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
CREATE TABLE IF NOT EXISTS `payment` (
  `PaymentId` int(11) NOT NULL AUTO_INCREMENT,
  `LoanId` int(11) NOT NULL,
  `payment_date` date NOT NULL,
  `payment_amount` decimal(38,2) NOT NULL,
  PRIMARY KEY (`PaymentId`),
  KEY `CustomerLoan_FK` (`LoanId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`PaymentId`, `LoanId`, `payment_date`, `payment_amount`) VALUES
(1, 1, '2022-02-20', '35532.99'),
(2, 6, '2022-03-19', '7818.63'),
(3, 4, '2022-01-12', '74562.54'),
(4, 4, '2022-03-21', '51364.06'),
(5, 3, '2022-01-17', '16363.67'),
(6, 1, '2022-01-03', '26544.58'),
(7, 1, '2022-02-27', '30534.71'),
(8, 9, '2022-02-27', '17250.83'),
(9, 2, '2022-02-19', '34367.53'),
(10, 7, '2022-02-08', '31003.82'),
(11, 20, '2022-03-25', '20.00'),
(12, 20, '2022-03-25', '1.00'),
(13, 20, '2022-03-25', '1.00');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(240) NOT NULL,
  `password` varchar(240) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'fDobbie', '$2b$09$X7Pa/dNNoMaH4E/sw1y6O.A7/o4AACNkxIRFUGdwFFgl..4DKgSFS'),
(2, 'mOrbell', '$2b$09$pbr9wO6wFSWb7.NSTLoROeMhe9dC/xVuXT54cpfTW8OhMTBgylQfK'),
(3, 'fBucknill', '$2b$09$sGOZSH4bVDh20HsNzvB51e13.924ZD8vnOAcQSB34N6zNMKsL8Go.'),
(4, 'dVanezis', '$2b$09$05ruNbTZfkKkpIuZ0XhB8u52eoA3wKSQhN8ZPUcqTjCBTFOqB.YTa'),
(5, 'aAspland', '$2b$09$MTj5Nvg4oZW.VRl711H6z.Mp3LGWjKDUXI8rs/RqgmvrSQt2wQ1Py'),
(6, 'hNewby', '$2b$09$/JcXSlKcaEFPqePSaQoUS.z.zRN6iv9rFBrjxBTq.O3UIAeZk14fO'),
(7, 'lHanley', '$2b$09$K2rQhcXzcFKmBET4cHUTFOuh.GlvD/zpzFl.i4LPFdm/YTu072GxK'),
(8, 'mGilhooley', '$2b$09$VM5A2lBgno3hLk8BKrBljupWMU1CegPENpYILdguuwIlAVYer8liq'),
(9, 'iParkes', '$2b$09$lipb8QKUlojFlmtXMMKJkubz7cA/90Zmx7tiwErrfZg.5zUvMJ0Kq'),
(10, 'lYeldham', '$2b$09$WY.TiOrf3lKUKRl48iDq.Ou2cKHsTtzjwFhin/VMQLTWWEeRNbNMO'),
(11, 'newuser', '$2b$09$DIAz.rluq4.O46b168bNi.7JeIVbxUtbZES3M.4NzOICBvpJMGuVu'),
(12, 'newuser', '$2b$09$cR8pdztsOYAaUYYCVsCR5.R9iP7nDQ/PJGKyR.2zLuMN46T7dLCp6'),
(13, 'newuser', '$2b$09$3emfhKma0rxcc4gZUOk87u6f7FvShxxXvZeMahr5ClfI.5MjRAWZC');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customerloan`
--
ALTER TABLE `customerloan`
  ADD CONSTRAINT `CustomerLoan_FK1` FOREIGN KEY (`CustomerId`) REFERENCES `customer` (`CustomerId`),
  ADD CONSTRAINT `CustomerLoan_FK2` FOREIGN KEY (`LoanId`) REFERENCES `loan` (`LoanId`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `CustomerLoan_FK` FOREIGN KEY (`LoanId`) REFERENCES `loan` (`LoanId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
