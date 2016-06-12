/*
Navicat MySQL Data Transfer

Source Server         : eo biet
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : ci_pj

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-06-11 22:34:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `parent` tinyint(5) DEFAULT NULL,
  `status` tinyint(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES ('1', 'Kinh Tế', '2', '1');
INSERT INTO `categories` VALUES ('2', 'Văn Hóa', '4', '1');
INSERT INTO `categories` VALUES ('3', 'Tài Chính', '0', '1');
INSERT INTO `categories` VALUES ('4', 'Điện Ảnh', '0', '1');
INSERT INTO `categories` VALUES ('5', 'Thể Thao', '2', '1');
INSERT INTO `categories` VALUES ('6', 'Giáo Dục', '2', '1');
INSERT INTO `categories` VALUES ('7', 'Công nghệ', '0', '1');

-- ----------------------------
-- Table structure for level
-- ----------------------------
DROP TABLE IF EXISTS `level`;
CREATE TABLE `level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level_name` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of level
-- ----------------------------
INSERT INTO `level` VALUES ('1', 'Admin', 'Administration, quản lý toàn bộ dự án');
INSERT INTO `level` VALUES ('2', 'Mod', 'Quản lý thành viên và bài viết');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `author` varchar(100) CHARACTER SET utf8 NOT NULL,
  `shortDes` text CHARACTER SET utf8 NOT NULL,
  `content` longtext CHARACTER SET utf8 NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 NOT NULL,
  `category` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `status` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('8', 'phim ninja', 'truongbt', '<p>nothing</p>\r\n', '<p><em><img alt=\"\" src=\"/php/qhonline/ci_pj/public/kcfinder/upload/images/Lighthouse%282%29.jpg\" style=\"height:96px; width:128px\" />phim nhw cut</em></p>\r\n', '1465401191_a49fe8914df0eada4d4b7d530d7fa5ba.jpg', '4', '1', '1');
INSERT INTO `news` VALUES ('9', 'now you see me 2', 'america', '<p>xvxcv</p>\r\n', '<p>vbvcb</p>\r\n', '1465404709_4f6a306c94af679657ced7273b5ad4ea.jpg', '1', '1', '-1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `firstname` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastname` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `level_id` int(11) DEFAULT NULL,
  `status` tinyint(5) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'truongbt', '299f324b7fcbb495b48dfaa274013f53', 'truongbt_fake@gmail.com', 'truong', 'school', '1', '1', '2016-05-25 22:43:22', null);
INSERT INTO `user` VALUES ('2', 'dungdk', '88615e2d2fc66c588a639e9ed4fd2664', 'dungdk_fake@gmail.com', 'dung', 'kim', '2', '1', '2016-05-25 22:43:22', null);
INSERT INTO `user` VALUES ('3', 'lyly', '8a1227fa35289eec0d11321758a4c169', 'lyly_fake@gmail.com', 'ly', 'bui', '2', '1', '2016-05-25 23:41:58', null);
