# Host:   (Version: 5.5.53)
# Date: 2020-05-16 19:38:56
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `typeId` char(3) NOT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`),
  KEY `typeId` (`typeId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
INSERT INTO `goodsinfo` VALUES ('00101','欧莱雅护发精油230ml套装 头发防毛躁柔顺修复干枯烫染受损','001',122,100,' 添加高浓度微分子玻尿酸，持久补水保湿，深度滋养抗初老，全脸可用，淡化细纹皱纹，打造年轻水光肌','./images/product/goods_img_02.jpg','209','5.8','白色；均码','补水 保湿','./images/product/goods_02_03.jpg','./images/product/goods_02_04.jpg','./images/product/goods_02_01.jpg','./images/product/goods_02_02.jpg','','','','',''),('00102','欧莱雅青春密码肌底液75ml黑精华补水紧致保湿','001',329,100,'欧莱雅小黑瓶精华液，添加高纯度酵素，抗初老，修护肌底，淡化细纹，活肤嫩肤，促进肌肤更新和吸收','./images/product/goods_img_01.jpg','460','7.2','均码','','./images/product/goods_01_03.jpg','./images/product/goods_01_04.jpg','./images/product/goods_01_01.jpg','./images/product/goods_01_02.jpg','','','','',''),('00103','【王嘉尔同款】欧莱雅男士水能玻尿酸保湿10件套洗面奶精华面霜','001',179,100,' 蕴含法国葡萄籽提取物等成分，鲜养锁水滋润，深层补水保湿，提亮肤色抗氧化，使肌肤焕发光彩','images/product/goods_img_03.jpg','239','7.5','均码','','./images/product/goods_03_03.jpg','./images/product/goods_04_04.jpg','./images/product/goods_04_01.jpg','./images/product/goods_04_02.jpg','','','','',''),('00104','欧莱雅紫熨斗玻尿酸全脸淡纹眼霜30ml滋润补水','001',289,100,'巴黎欧莱雅 欧莱雅 男士水能保湿滋润乳 50ml 蕴含法国高山泉水+抗微尘附着配方 不油不黏腻 滋润 保湿 男士乳液','./images/product/goods_img_04.jpg','430','8','50ml','滋润 ','./images/product/goods_04_03.jpg','./images/product/goods_04_04.jpg','./images/product/goods_04_01.jpg','./images/product/goods_04_02.jpg','./images/product/icon01.jpg','日常版30ml','./images/product/icon02.jpg','限量版30ml','./images/product/goods_01_04.jpg'),('00105','欧莱雅清润葡萄籽洁面+水+乳液补水保湿套装滋润','001',79,100,' 蕴含法国葡萄籽提取物等成分，鲜养锁水滋润，深层补水保湿，提亮肤色抗氧化，使肌肤焕发光彩','./images/product/goods_img_05.jpg','110','8','3.7g','持久不脱妆','./images/product/001.jpg','./images/product/002.jpg','./images/product/003.jpg','./images/product/004.jpg','','','','','./images/product/goods_01_04.jpg'),('00106','欧莱雅复颜洁面乳125ml温和洁面补水保湿深层清洁','001',94,100,'温和清洁，淡化细纹，抗皱提拉，泡沫丰富不紧绷','./images/product/005.jpg','104','6.8','152ml','温和清洁','./images/product/005.jpg','./images/product/006.jpg','./images/product/007.jpg','./images/product/005.jpg','','','','','./images/product/goods_01_04.jpg'),('00107','【雾感黑管】 欧莱雅纷泽丰润黑管唇膏口红哑光雾感豆沙色','002',108,100,'巴黎欧莱雅 小黑管雾感口红唇膏 持久不掉色','./images/product/009.jpg','138','8','3.7g','持久不脱妆','./images/product/010.jpg','./images/product/011.jpg','./images/product/012.jpg','./images/product/09.jpg','./images/product/icon03.jpg','217木莓色','./images/product/icon04.jpg','238赤枫色【hot！】','./images/product/013.jpg'),('00108','欧莱雅惊艳特长美睫膜纤长睫毛膏 轻松上色','001',119,100,' 巴黎欧莱雅公认好口碑双重刷头惊艳纤长不晕染不脱落温水可卸妆后女神','./images/product/014.jpg','160','7.5','2*7ml','纤长浓密','./images/product/018.jpg','./images/product/015.jpg','./images/product/016.jpg','./images/product/017.jpg',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;

#
# Structure for table "goodstype"
#

DROP TABLE IF EXISTS `goodstype`;
CREATE TABLE `goodstype` (
  `typeid` char(3) NOT NULL,
  `goodstype` varchar(20) NOT NULL,
  PRIMARY KEY (`typeid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodstype"
#

/*!40000 ALTER TABLE `goodstype` DISABLE KEYS */;
INSERT INTO `goodstype` VALUES ('001','综合'),('002','口红'),('003','染发'),('004','粉底'),('005','爽肤水'),('006','护肤套装'),('007','卸妆水');
/*!40000 ALTER TABLE `goodstype` ENABLE KEYS */;

#
# Structure for table "shoppingcart"
#

DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `vipName` varchar(10) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
INSERT INTO `shoppingcart` VALUES ('1091735073','00108',3),('小明','00104',1),('1091735073','00101',1),('1091735073','00105',2);
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;

#
# Structure for table "vip"
#

DROP TABLE IF EXISTS `vip`;
CREATE TABLE `vip` (
  `username` varchar(20) NOT NULL,
  `userpass` varchar(16) NOT NULL,
  `sex` char(2) DEFAULT '女',
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "vip"
#

/*!40000 ALTER TABLE `vip` DISABLE KEYS */;
INSERT INTO `vip` VALUES ('1091735073','123456789','女',NULL);
/*!40000 ALTER TABLE `vip` ENABLE KEYS */;
