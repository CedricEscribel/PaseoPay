-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2025 at 07:29 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `paseopay`
--

-- --------------------------------------------------------

--
-- Table structure for table `amortization`
--

CREATE TABLE `amortization` (
  `Amortization` int(11) NOT NULL,
  `Amortization_ID` varchar(155) NOT NULL,
  `Principal` varchar(64) NOT NULL,
  `Remaining_Balance` varchar(64) NOT NULL,
  `Start_Date` date NOT NULL,
  `Monthly_Payment` varchar(64) NOT NULL,
  `Interest_Rate` varchar(64) NOT NULL,
  `Homeowner_ID` int(126) NOT NULL,
  `Payment_Date` date NOT NULL,
  `Payment_Method` varchar(155) NOT NULL,
  `Due_Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `announcement`
--

CREATE TABLE `announcement` (
  `Announcement` int(11) NOT NULL,
  `Title` varchar(155) NOT NULL,
  `Category` varchar(256) NOT NULL,
  `Content` longtext NOT NULL,
  `Priority` varchar(128) NOT NULL,
  `Target_Audience` varchar(128) NOT NULL,
  `Created_Date` date NOT NULL,
  `Publish_Date` date NOT NULL,
  `Expiry_Date` date NOT NULL,
  `Admin_ID` varchar(64) NOT NULL,
  `Status` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `garbage_collection`
--

CREATE TABLE `garbage_collection` (
  `Payment_History` int(155) NOT NULL,
  `Payment_ID` varchar(155) NOT NULL,
  `Homeowner_ID` varchar(256) NOT NULL,
  `Amount` int(15) NOT NULL,
  `Due` date NOT NULL,
  `Payment_Date` date NOT NULL,
  `Payment_Method` varchar(155) NOT NULL,
  `Status` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `homeowner`
--

CREATE TABLE `homeowner` (
  `Homeowner` int(155) NOT NULL,
  `Homeowner_ID` varchar(155) NOT NULL,
  `First` varchar(155) NOT NULL,
  `Middle` varchar(155) NOT NULL,
  `Last` varchar(155) NOT NULL,
  `Email` varchar(155) NOT NULL,
  `Password` varchar(155) NOT NULL,
  `Phone_Number` int(155) NOT NULL,
  `Block` varchar(155) NOT NULL,
  `Lot` varchar(155) NOT NULL,
  `Phase` varchar(155) NOT NULL,
  `Profile_Picture` varchar(155) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `Payment_History` int(155) NOT NULL,
  `Payment_ID` varchar(155) NOT NULL,
  `Homeowner_ID` varchar(256) NOT NULL,
  `Amount` int(15) NOT NULL,
  `Due` date NOT NULL,
  `Payment_Date` date NOT NULL,
  `Payment_Method` varchar(155) NOT NULL,
  `Status` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `amortization`
--
ALTER TABLE `amortization`
  ADD PRIMARY KEY (`Amortization`);

--
-- Indexes for table `announcement`
--
ALTER TABLE `announcement`
  ADD PRIMARY KEY (`Announcement`);

--
-- Indexes for table `garbage_collection`
--
ALTER TABLE `garbage_collection`
  ADD PRIMARY KEY (`Payment_History`);

--
-- Indexes for table `homeowner`
--
ALTER TABLE `homeowner`
  ADD PRIMARY KEY (`Homeowner`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`Payment_History`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `amortization`
--
ALTER TABLE `amortization`
  MODIFY `Amortization` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `announcement`
--
ALTER TABLE `announcement`
  MODIFY `Announcement` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `garbage_collection`
--
ALTER TABLE `garbage_collection`
  MODIFY `Payment_History` int(155) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `homeowner`
--
ALTER TABLE `homeowner`
  MODIFY `Homeowner` int(155) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `Payment_History` int(155) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
