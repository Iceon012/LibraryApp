-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2022 at 04:09 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `lib_users`
--

CREATE TABLE `lib_users` (
  `id_num` int(5) NOT NULL,
  `stud_id` int(22) NOT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `middle` varchar(255) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `bdate` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lib_users`
--

INSERT INTO `lib_users` (`id_num`, `stud_id`, `lname`, `fname`, `middle`, `course`, `bdate`, `time`, `email`, `password`) VALUES
(1, 4761, 'Ayson', 'Arvin', 'S', 'BSIT', '2022-11-21', '09:21:00', 'a.ayson12345@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef'),
(2, 4558, 'Dela Cruz', 'Juan', 'S', 'BSIT', '2022-04-12', '15:52:00', 'a.ayson12345@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef'),
(3, 4882, 'xzczC', 'Auson', 'dsdsa', 'BSBA', '2022-11-22', '10:38:00', 'dsadsa', '40bd001563085fc35165329ea1ff5c5ecbdbbeef'),
(4, 1520, 'Mamato', 'Ollem', 'B', 'BSIT', '2022-11-22', '13:39:00', 'sample@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef'),
(5, 5396, 'Castaño', 'Rianne', 'B', 'BSIT', '2022-11-22', '15:03:00', 'rianne@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef');

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id_log` int(255) NOT NULL,
  `id_num` int(255) NOT NULL,
  `log_date` date NOT NULL,
  `log_time` time NOT NULL,
  `log_purpose` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userlogin`
--

CREATE TABLE `userlogin` (
  `id_num` int(22) NOT NULL,
  `emp_num` int(22) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userlogin`
--

INSERT INTO `userlogin` (`id_num`, `emp_num`, `name`, `email`, `password`) VALUES
(1, 4761, 'Arvin', '123@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef'),
(2, 4886, 'Ariel Ayson', 'ariel@gmail.com', '51eac6b471a284d3341d8c0c63d0f1a286262a18'),
(3, 4855, 'Arvin', 'a.ayson12345@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lib_users`
--
ALTER TABLE `lib_users`
  ADD PRIMARY KEY (`id_num`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id_log`);

--
-- Indexes for table `userlogin`
--
ALTER TABLE `userlogin`
  ADD PRIMARY KEY (`id_num`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lib_users`
--
ALTER TABLE `lib_users`
  MODIFY `id_num` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id_log` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userlogin`
--
ALTER TABLE `userlogin`
  MODIFY `id_num` int(22) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
