-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 14, 2023 at 01:06 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `petheaven`
--

-- --------------------------------------------------------

--
-- Table structure for table `adoptions`
--

CREATE TABLE `adoptions` (
  `id` int(11) NOT NULL,
  `adopter` varchar(50) NOT NULL,
  `petname` varchar(50) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  `status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adoptions`
--

INSERT INTO `adoptions` (`id`, `adopter`, `petname`, `contact`, `address`, `email`, `date`, `status`) VALUES
(8, 'Mahin', 'LGR Lovebirds', '01839963763', 'Dhaka,Bangladesh', 'mahin00021@gmail.com', '14/11/2023', 'Delivered'),
(11, 'Mahin', 'Siimba and Nala', '01839963763', 'Mirpur,Dhaka', 'mahin00021@gmail.com', '14/11/2023', 'Approved'),
(12, 'Mahin', 'Piglet', '01839963763', 'Jessore,Bangladesh', 'mahin00021@gmail.com', '14/11/2023', 'Pending'),
(13, 'Talha', 'Siimba and Nala', '01871212436', 'Mirpur,Dhaka', 'talha39@gmail.com', '14/11/2023', 'Approved'),
(14, 'Talha', 'Mocha', '01871212436', 'Jessore,Bangladesh', 'talha39@gmail.com', '14/11/2023', 'Pending'),
(15, 'Mahin', 'Jackson', '01839963763', 'Dhaka,Bangladesh', 'mahin00021@gmail.com', '14/11/2023', 'Pending'),
(16, 'mahin', 'Mocha', '01839963763', 'Mirpur,Dhaka', 'mahin00021@gmail.com', '14/11/2023', 'Pending'),
(17, 'mahin', 'Mocha', '01839963763', 'Mirpur,Dhaka', 'mahin00021@gmail.com', '14/11/2023', 'Pending'),
(18, 'mahin', 'Mocha', '01839963763', 'Mirpur,Dhaka', 'mahin00021@gmail.com', '14/11/2023', 'Pending'),
(19, 'mahin', 'Mocha', '01839963763', 'Mirpur,Dhaka', 'mahin00021@gmail.com', '14/11/2023', 'Pending'),
(20, 'mahin', 'Mocha', '01839963763', 'Mirpur,Dhaka', 'mahin00021@gmail.com', '14/11/2023', 'Pending'),
(21, 'mahin', 'Mocha', '01839963763', 'Mirpur,Dhaka', 'mahin00021@gmail.com', '14/11/2023', 'Pending'),
(22, 'mahin', 'Mocha', '01839963763', 'Mirpur,Dhaka', 'mahin00021@gmail.com', '14/11/2023', 'Pending'),
(23, 'mahin', 'Piglet', '01839963763', 'Dinajpur,Bangladesh', 'mahin00021@gmail.com', '14/11/2023', 'Pending'),
(24, 'admin', 'LGR Lovebirds', '01839963763', 'Amar Ekushey Hall, KUET,Fulbarigate,Khulna', 'mahin00021@gmail.com', '14/11/2023', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `pets`
--

CREATE TABLE `pets` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `type` varchar(20) NOT NULL,
  `breed` varchar(30) NOT NULL,
  `description` varchar(255) NOT NULL,
  `age` varchar(10) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(50) DEFAULT NULL,
  `available` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pets`
--

INSERT INTO `pets` (`id`, `name`, `type`, `breed`, `description`, `age`, `gender`, `price`, `image`, `available`) VALUES
(25, 'Mocha', 'Dog', 'Chihuahua', 'Mocha is affectionate,calm and exteranodvaosdfasdv', '2', 'Male', 350, '1.PNG', 'yes'),
(26, 'Nickel', 'Cat', 'Bengali Cat', 'Nickel is a sweet and extremely curious hdasof haosdf vasndofds fgasodfh', '1', 'Female', 450, '2.PNG', 'yes'),
(27, 'Piglet', 'Cat', 'Domestic Short Hair', 'Piglet is a kitten with a great dreams of finding the perfect one! She\'s hasof vhsoadv sdvoasn ytwowa goyahak', '6', 'Female', 500, '3.PNG', 'yes'),
(28, 'Shell-lock Holmes', 'Tortoise', 'Russian', 'This adorable Russian tortoise is Shell-lock Holmes. He enjoys sdga dfasv vhhao pasdf', '13', 'Male', 550, '8.PNG', 'yes'),
(29, 'Siimba and Nala', 'Rabbit', 'Rex Mix', 'Simba and Nala are a bonded pair of medium-large rabbits. Both born sdaf yowqa qodfjhw woudf.', '3', 'Male', 32, '7.PNG', 'yes'),
(30, 'Jackson', 'Guinea Pig', 'Short-Haired', 'It hanbdo adsf aslge qw pufea nbnvbuia fhwsiovc gfbeicva opqfwegf bqwicsadfldhg gkasdgf.', '3', 'Male', 30, '6.PNG', 'yes'),
(31, 'LGR Lovebirds', 'Bird', 'Lovebird', 'many lovebirds waiting for their perfect home. Many of them are very friendly and would love to keep you and you family company.', '16', 'Male', 650, '5.PNG', 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `contactNumber` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  `role` varchar(10) NOT NULL,
  `token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `contactNumber`, `address`, `role`, `token`) VALUES
(5, 'mahin', 'mahin00021@gmail.com', '$2b$10$eQW9uRuApXxrrp01ur1EPe9iaG1Zus/0.XHKjWFZrce9/51YVaM9S', '01839963763', 'Dhaka,Bangladesh', 'user', '5091ade6c5a3f169920d174751eb66d321bf430a'),
(7, 'admin', 'admin@admin.com', '$2b$10$CsrHT4oS79.l1E6IsrjBfuvpByeHGFYiZ7f.YErQGc7lAuNlU0VxG', '01839963763', 'Dhaka,Bangladesh', 'admin', NULL),
(8, 'Talha', 'talha39@gmail.com', '$2b$10$VMx4Z7Lh/4JLU99QdhvzBe/2scYtOJ7RALzqXRtngQPKOWbXZT/bC', '01871212436', 'Mirpur,Dhaka', 'user', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adoptions`
--
ALTER TABLE `adoptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adoptions`
--
ALTER TABLE `adoptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `pets`
--
ALTER TABLE `pets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
