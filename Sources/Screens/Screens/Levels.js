/**
 * Tooflya Inc. Development
 *
 * @author Igor Mats from Tooflya Inc.
 * @copyright (c) 2013 by Igor Mats
 * http://www.tooflya.com/development/
 *
 * License: Attribution NonCommercial NoDerivatives 4.0 International
 *
 * Creative Commons Corporation (“Creative Commons”) is not a law firm and does
 * not provide legal services or legal advice. Distribution of Creative Commons
 * public licenses does not create a lawyer-client or other relationship.
 * Creative Commons makes its licenses and related information available on
 * an “as-is” basis. Creative Commons gives no warranties regarding its licenses,
 * any material licensed under their terms and conditions, or any related
 * information. Creative Commons disclaims all liability for damages resulting
 * from their use to the fullest extent possible.
 *
 * Creative Commons public licenses provide a standard set of terms and
 * conditions that creators and other rights holders may use to share original
 * works of authorship and other material subject to copyright and certain other
 * rights specified in the public license below. The following considerations
 * are for informational purposes only, are not exhaustive, and do not form part
 * of our licenses.
 *
 * Creative Commons may be contacted at creativecommons.org.
 *
 * @version of cocos2d-x is 2.1.4
 *
 */

Levels = Screen.extend({
  m_IconsCoordinates: [
    {x: 99, y: 256},
    {x: 246, y: 199},
    {x: 405, y: 203},
    {x: 550, y: 170},
    {x: 709, y: 184},
    {x: 836, y: 252},
    {x: 693, y: 329},
    {x: 519, y: 354},
    {x: 362, y: 358},
    {x: 201, y: 396},
    {x: 94, y: 599},
    {x: 252, y: 615},
    {x: 325, y: 711},
    {x: 166, y: 778},
    {x: 109, y: 897},
    {x: 284, y: 938},
    {x: 456, y: 899},
    {x: 548, y: 789},
    {x: 529, y: 658},
    {x: 678, y: 613},
    {x: 827, y: 727},
    {x: 1005, y: 901},
    {x: 1252, y: 776},
    {x: 1481, y: 715},
    {x: 1403, y: 603},
    {x: 1299, y: 501},
    {x: 1548, y: 482},
    {x: 1626, y: 599},
    {x: 1756, y: 719},
    {x: 1818, y: 870}
  ],
  m_PointsCoordinates: [
    {x: 84, y: 205},
    {x: 94, y: 227},
    {x: 105, y: 248},
    {x: 129, y: 256},
    {x: 152, y: 260},
    {x: 174, y: 254},
    {x: 194, y: 241},
    {x: 299, y: 184},
    {x: 315, y: 172},
    {x: 335, y: 164},
    {x: 354, y: 176},
    {x: 411, y: 246},
    {x: 427, y: 260},
    {x: 448, y: 260},
    {x: 466, y: 252},
    {x: 484, y: 235},
    {x: 499, y: 215},
    {x: 564, y: 123},
    {x: 582, y: 115},
    {x: 601, y: 111},
    {x: 625, y: 115},
    {x: 640, y: 125},
    {x: 652, y: 139},
    {x: 662, y: 160},
    {x: 682, y: 223},
    {x: 689, y: 239},
    {x: 705, y: 250},
    {x: 719, y: 256},
    {x: 733, y: 260},
    {x: 752, y: 264},
    {x: 770, y: 268},
    {x: 821, y: 295},
    {x: 809, y: 309},
    {x: 793, y: 317},
    {x: 776, y: 323},
    {x: 758, y: 329},
    {x: 629, y: 319},
    {x: 613, y: 311},
    {x: 595, y: 303},
    {x: 578, y: 303},
    {x: 560, y: 309},
    {x: 550, y: 321},
    {x: 460, y: 337},
    {x: 446, y: 327},
    {x: 431, y: 325},
    {x: 415, y: 331},
    {x: 403, y: 339},
    {x: 325, y: 335},
    {x: 313, y: 325},
    {x: 299, y: 315},
    {x: 286, y: 309},
    {x: 272, y: 307},
    {x: 256, y: 307},
    {x: 245, y: 313},
    {x: 233, y: 325},
    {x: 156, y: 393},
    {x: 147, y: 409},
    {x: 137, y: 425},
    {x: 129, y: 441},
    {x: 121, y: 458},
    {x: 113, y: 476},
    {x: 107, y: 493},
    {x: 94, y: 507},
    {x: 82, y: 519},
    {x: 68, y: 535},
    {x: 58, y: 550},
    {x: 45, y: 562},
    {x: 39, y: 582},
    {x: 90, y: 642},
    {x: 101, y: 654},
    {x: 115, y: 664},
    {x: 135, y: 670},
    {x: 152, y: 664},
    {x: 164, y: 656},
    {x: 176, y: 644},
    {x: 190, y: 633},
    {x: 311, y: 611},
    {x: 327, y: 619},
    {x: 339, y: 633},
    {x: 348, y: 648},
    {x: 356, y: 662},
    {x: 364, y: 678},
    {x: 370, y: 693},
    {x: 256, y: 727},
    {x: 243, y: 727},
    {x: 229, y: 727},
    {x: 215, y: 733},
    {x: 205, y: 742},
    {x: 199, y: 754},
    {x: 150, y: 817},
    {x: 141, y: 829},
    {x: 133, y: 842},
    {x: 115, y: 846},
    {x: 98, y: 846},
    {x: 80, y: 850},
    {x: 66, y: 856},
    {x: 56, y: 866},
    {x: 56, y: 882},
    {x: 170, y: 895},
    {x: 182, y: 889},
    {x: 192, y: 883},
    {x: 203, y: 876},
    {x: 221, y: 878},
    {x: 233, y: 889},
    {x: 241, y: 903},
    {x: 245, y: 917},
    {x: 333, y: 921},
    {x: 344, y: 911},
    {x: 358, y: 901},
    {x: 372, y: 895},
    {x: 382, y: 887},
    {x: 397, y: 882},
    {x: 499, y: 882},
    {x: 511, y: 874},
    {x: 521, y: 866},
    {x: 529, y: 852},
    {x: 529, y: 838},
    {x: 523, y: 827},
    {x: 503, y: 770},
    {x: 491, y: 756},
    {x: 490, y: 742},
    {x: 486, y: 727},
    {x: 484, y: 707},
    {x: 484, y: 691},
    {x: 564, y: 635},
    {x: 572, y: 627},
    {x: 582, y: 619},
    {x: 593, y: 611},
    {x: 611, y: 611},
    {x: 740, y: 635},
    {x: 754, y: 646},
    {x: 764, y: 656},
    {x: 776, y: 668},
    {x: 787, y: 680},
    {x: 795, y: 693},
    {x: 833, y: 770},
    {x: 831, y: 787},
    {x: 829, y: 805},
    {x: 823, y: 827},
    {x: 823, y: 850},
    {x: 833, y: 872},
    {x: 842, y: 882},
    {x: 856, y: 895},
    {x: 872, y: 903},
    {x: 889, y: 903},
    {x: 907, y: 907},
    {x: 927, y: 915},
    {x: 942, y: 913},
    {x: 1062, y: 889},
    {x: 1081, y: 878},
    {x: 1093, y: 870},
    {x: 1105, y: 860},
    {x: 1121, y: 848},
    {x: 1136, y: 834},
    {x: 1148, y: 827},
    {x: 1164, y: 813},
    {x: 1181, y: 801},
    {x: 1309, y: 766},
    {x: 1330, y: 762},
    {x: 1352, y: 756},
    {x: 1364, y: 752},
    {x: 1379, y: 744},
    {x: 1397, y: 735},
    {x: 1413, y: 727},
    {x: 1436, y: 691},
    {x: 1424, y: 678},
    {x: 1409, y: 666},
    {x: 1393, y: 658},
    {x: 1379, y: 644},
    {x: 1360, y: 578},
    {x: 1350, y: 566},
    {x: 1332, y: 554},
    {x: 1317, y: 552},
    {x: 1301, y: 544},
    {x: 1342, y: 484},
    {x: 1356, y: 480},
    {x: 1374, y: 476},
    {x: 1391, y: 474},
    {x: 1409, y: 476},
    {x: 1424, y: 478},
    {x: 1440, y: 478},
    {x: 1454, y: 478},
    {x: 1468, y: 480},
    {x: 1483, y: 482},
    {x: 1571, y: 523},
    {x: 1575, y: 539},
    {x: 1575, y: 552},
    {x: 1575, y: 568},
    {x: 1577, y: 582},
    {x: 1628, y: 640},
    {x: 1632, y: 650},
    {x: 1642, y: 662},
    {x: 1652, y: 676},
    {x: 1662, y: 687},
    {x: 1671, y: 703},
    {x: 1691, y: 715},
    {x: 1773, y: 758},
    {x: 1773, y: 778},
    {x: 1771, y: 801},
    {x: 1767, y: 823},
    {x: 1766, y: 850}
  ],
  m_TreesCoordinates: [
    {x: 60, y: 339, frame: 0},
    {x: 23, y: 86, frame: 0},
    {x: 876, y: 7, frame: 0},
    {x: 1025, y: 5, frame: 0},
    {x: 1585, y: 111, frame: 0},
    {x: 1754, y: 105, frame: 0},
    {x: 1609, y: 711, frame: 0},
    {x: 1438, y: 513, frame: 0},
    {x: 1191, y: 472, frame: 0},
    {x: 1303, y: 605, frame: 0},
    {x: 1824, y: 1009, frame: 0},
    {x: 1613, y: 966, frame: 0},
    {x: 1168, y: 958, frame: 0},
    {x: 1044, y: 850, frame: 0},
    {x: 874, y: 650, frame: 0},
    {x: 756, y: 546, frame: 0},
    {x: 442, y: 578, frame: 0},
    {x: 344, y: 836, frame: 0},
    {x: 41, y: 1036, frame: 0},
    {x: 168, y: 940, frame: 0},
    {x: 70, y: 719, frame: 0},
    {x: 227, y: 678, frame: 0},
    {x: 319, y: 1015, frame: 0},
    {x: 591, y: 913, frame: 0},
    {x: 697, y: 727, frame: 0},
    {x: 284, y: 254, frame: 0},
    {x: 452, y: 388, frame: 0},
    {x: 644, y: 384, frame: 0},
    {x: 899, y: 294, frame: 0},
    {x: 764, y: 286, frame: 0},
    {x: 760, y: 98, frame: 0},
    {x: 625, y: 194, frame: 0},
    {x: 466, y: 148, frame: 0},
    {x: 184, y: 131, frame: 0},
    {x: 544, y: 284, frame: 0},
    {x: 49, y: 221, frame: 1},
    {x: 219, y: 278, frame: 1},
    {x: 121, y: 290, frame: 1},
    {x: 286, y: 386, frame: 1},
    {x: 366, y: 270, frame: 1},
    {x: 446, y: 290, frame: 1},
    {x: 556, y: 225, frame: 1},
    {x: 625, y: 150, frame: 1},
    {x: 691, y: 86, frame: 1},
    {x: 542, y: 88, frame: 1},
    {x: 401, y: 115, frame: 1},
    {x: 615, y: 350, frame: 1},
    {x: 813, y: 339, frame: 1},
    {x: 789, y: 178, frame: 1},
    {x: 909, y: 264, frame: 1},
    {x: 825, y: 623, frame: 1},
    {x: 660, y: 687, frame: 1},
    {x: 762, y: 789, frame: 1},
    {x: 605, y: 858, frame: 1},
    {x: 454, y: 964, frame: 1},
    {x: 562, y: 897, frame: 1},
    {x: 442, y: 797, frame: 1},
    {x: 264, y: 848, frame: 1},
    {x: 346, y: 785, frame: 1},
    {x: 425, y: 738, frame: 1},
    {x: 352, y: 562, frame: 1},
    {x: 166, y: 689, frame: 1},
    {x: 27, y: 742, frame: 1},
    {x: 29, y: 811, frame: 1},
    {x: 47, y: 956, frame: 1},
    {x: 123, y: 997, frame: 1},
    {x: 127, y: 1046, frame: 1},
    {x: 246, y: 1030, frame: 1},
    {x: 393, y: 960, frame: 1},
    {x: 860, y: 954, frame: 1},
    {x: 1038, y: 981, frame: 1},
    {x: 960, y: 866, frame: 1},
    {x: 934, y: 954, frame: 1},
    {x: 1103, y: 968, frame: 1},
    {x: 1334, y: 978, frame: 1},
    {x: 1532, y: 972, frame: 1},
    {x: 1715, y: 997, frame: 1},
    {x: 1666, y: 1044, frame: 1},
    {x: 1771, y: 1056, frame: 1},
    {x: 1893, y: 1044, frame: 1},
    {x: 1717, y: 115, frame: 1},
    {x: 1591, y: 372, frame: 1},
    {x: 1354, y: 382, frame: 1},
    {x: 1432, y: 356, frame: 1},
    {x: 1473, y: 348, frame: 1},
    {x: 1522, y: 352, frame: 1},
    {x: 1550, y: 356, frame: 1},
    {x: 1581, y: 360, frame: 1},
    {x: 1472, y: 348, frame: 1},
    {x: 1432, y: 356, frame: 1},
    {x: 1389, y: 364, frame: 1},
    {x: 1426, y: 431, frame: 1},
    {x: 1395, y: 505, frame: 1},
    {x: 1509, y: 635, frame: 1},
    {x: 1595, y: 699, frame: 1},
    {x: 1542, y: 762, frame: 1},
    {x: 1509, y: 635, frame: 1},
    {x: 1448, y: 644, frame: 1},
    {x: 1507, y: 548, frame: 1},
    {x: 1607, y: 666, frame: 1},
    {x: 1546, y: 617, frame: 1},
    {x: 1364, y: 709, frame: 1},
    {x: 1270, y: 589, frame: 1},
    {x: 1234, y: 431, frame: 1},
    {x: 1160, y: 450, frame: 1},
    {x: 856, y: 309, frame: 1},
    {x: 648, y: 821, frame: 1},
    {x: 599, y: 725, frame: 1},
    {x: 615, y: 646, frame: 1},
    {x: 715, y: 676, frame: 1},
    {x: 141, y: 217, frame: 2},
    {x: 335, y: 237, frame: 2},
    {x: 523, y: 578, frame: 2},
    {x: 605, y: 564, frame: 2},
    {x: 401, y: 670, frame: 2},
    {x: 393, y: 960, frame: 2},
    {x: 540, y: 960, frame: 2},
    {x: 664, y: 903, frame: 2},
    {x: 833, y: 925, frame: 2},
    {x: 1103, y: 938, frame: 2},
    {x: 1444, y: 978, frame: 2},
    {x: 1877, y: 970, frame: 2},
    {x: 399, y: 609, frame: 2},
    {x: 295, y: 787, frame: 2},
    {x: 254, y: 991, frame: 2},
    {x: 27, y: 742, frame: 2},
    {x: 37, y: 286, frame: 2},
    {x: 1268, y: 554, frame: 2},
    {x: 1489, y: 768, frame: 2},
    {x: 1707, y: 582, frame: 2},
    {x: 1619, y: 521, frame: 2},
    {x: 1483, y: 599, frame: 2},
    {x: 1654, y: 985, frame: 2},
    {x: 1771, y: 1056, frame: 2},
    {x: 825, y: 623, frame: 2},
    {x: 789, y: 562, frame: 2},
    {x: 762, y: 768, frame: 2},
    {x: 784, y: 909, frame: 2},
    {x: 713, y: 905, frame: 2},
    {x: 566, y: 864, frame: 2},
    {x: 513, y: 846, frame: 2},
    {x: 488, y: 952, frame: 2},
    {x: 105, y: 656, frame: 2},
    {x: 54, y: 660, frame: 2},
    {x: 629, y: 98, frame: 2},
    {x: 736, y: 229, frame: 2},
    {x: 1379, y: 684, frame: 2},
    {x: 1548, y: 537, frame: 2}, 
  ],
  m_WaterCoordinates: [
    {x: 25, y: 507},
    {x: 35, y: 499},
    {x: 52, y: 511},
    {x: 43, y: 454},
    {x: 50, y: 444},
    {x: 78, y: 450},
    {x: 145, y: 480},
    {x: 143, y: 466},
    {x: 154, y: 472},
    {x: 205, y: 517},
    {x: 217, y: 511},
    {x: 205, y: 505},
    {x: 237, y: 454},
    {x: 243, y: 441},
    {x: 231, y: 433},
    {x: 282, y: 497},
    {x: 290, y: 490},
    {x: 282, y: 482},
    {x: 352, y: 519},
    {x: 360, y: 513},
    {x: 341, y: 507},
    {x: 390, y: 470},
    {x: 405, y: 462},
    {x: 384, y: 454},
    {x: 313, y: 446},
    {x: 333, y: 439},
    {x: 470, y: 525},
    {x: 476, y: 515},
    {x: 499, y: 519},
    {x: 580, y: 503},
    {x: 507, y: 435},
    {x: 542, y: 470},
    {x: 762, y: 499},
    {x: 715, y: 437},
    {x: 870, y: 515},
    {x: 829, y: 429},
    {x: 1062, y: 662},
    {x: 1023, y: 464},
    {x: 1170, y: 272},
    {x: 995, y: 376},
    {x: 1279, y: 239},
    {x: 1487, y: 266},
    {x: 1470, y: 192},
    {x: 1652, y: 201},
    {x: 1638, y: 339},
    {x: 1844, y: 219},
    {x: 1740, y: 294},
    {x: 1838, y: 352},
    {x: 1752, y: 442},
    {x: 1830, y: 558},
    {x: 1869, y: 439},
    {x: 1828, y: 458},
    {x: 1750, y: 372},
    {x: 1811, y: 305},
    {x: 1785, y: 525},
    {x: 1858, y: 476},
    {x: 1840, y: 678},
    {x: 1779, y: 654},
    {x: 1873, y: 819},
    {x: 1662, y: 844},
    {x: 1685, y: 909},
    {x: 1720, y: 782},
    {x: 1470, y: 848},
    {x: 1470, y: 917},
    {x: 1585, y: 897},
    {x: 1558, y: 827},
    {x: 1515, y: 883},
    {x: 1242, y: 889},
    {x: 1350, y: 915},
    {x: 1393, y: 846},
    {x: 1360, y: 821},
    {x: 1287, y: 848},
    {x: 1360, y: 887},
    {x: 1377, y: 784},
    {x: 1238, y: 707},
    {x: 1311, y: 738},
    {x: 1064, y: 740},
    {x: 954, y: 797},
    {x: 885, y: 846},
    {x: 1029, y: 795},
    {x: 997, y: 738},
    {x: 1115, y: 699},
    {x: 1097, y: 597},
    {x: 960, y: 595},
    {x: 1030, y: 539},
    {x: 917, y: 484},
    {x: 1066, y: 366},
    {x: 980, y: 295},
    {x: 1048, y: 258},
    {x: 899, y: 192},
    {x: 854, y: 150},
    {x: 1115, y: 225},
    {x: 1228, y: 194},
    {x: 1234, y: 299},
    {x: 1328, y: 341},
    {x: 1326, y: 315},
    {x: 1142, y: 339},
    {x: 1064, y: 305},
    {x: 1313, y: 278},
    {x: 1389, y: 196},
    {x: 1546, y: 239},
    {x: 1642, y: 286},
    {x: 1718, y: 211},
    {x: 1758, y: 262},
    {x: 1862, y: 276},
    {x: 1877, y: 401},
    {x: 1023, y: 442},
    {x: 942, y: 452},
    {x: 983, y: 542},
    {x: 954, y: 554},
    {x: 768, y: 444},
    {x: 846, y: 474},
    {x: 597, y: 464},
    {x: 650, y: 521},
    {x: 1697, y: 343},
    {x: 1711, y: 409},
    {x: 1816, y: 419},
    {x: 1832, y: 635}
  ],
  ctor: function() {
    this._super();

    Levels.instance = this;

    this.name = "Levels screen";

    this.m_Background = Entity.create(s_LevelsMapBackground, this);
    this.m_BackButton = Button.create(s_ButtonsSprite, 3, 3, this);

    this.m_Background.create().setCenterPosition(Camera.sharedCamera().center.x, this.m_Background.getHeight() / 2);

    this.m_Water = EntityManager.create(this.m_WaterCoordinates.length, Water.create(), this, 100);
    this.m_Icons = EntityManager.create(this.m_IconsCoordinates.length, MapIcon.create(), this, 101);
    /** this.m_Points = EntityManager.create(this.m_PointsCoordinates.length, MapPoint.create(), this, 102); */
    this.m_Trees = EntityManager.create(this.m_TreesCoordinates.length, MapTree.create(), this, 103);

    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));
    this.m_StarsCounterArea = Entity.create(s_LevelStarsCounterArea, this);
    this.m_StarsCounterArea.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(160), Camera.sharedCamera().coord(70));
    this.m_StarsCounterArea.text = Text.create('total-stars', this.m_StarsCounterArea);
    this.m_StarsCounterArea.text.create().setCenterPosition(this.m_StarsCounterArea.getWidth() / 2 + Camera.sharedCamera().coord(10), this.m_StarsCounterArea.getHeight() / 2);
    this.m_StarsCounterArea.text.setColor(cc.c3(114.0, 80.0, 9.0));
    this.m_StarsCounterArea.text.disableShadow();
    this.m_StarsCounterArea.text.ccsf([0, 90]);
    this.m_StarsCounterArea.setZOrder(200);
    this.m_BackButton.setCurrentFrameIndex(1);
    this.m_BackButton.setZOrder(200);

    var parallax = Entity.create(s_LevelsMapCloud);
    this.m_Cloud = ParallaxEntity.create(parallax, {
      x: 10,
      y: 0
    }, {
      x: Camera.sharedCamera().center.x,
      y: Camera.sharedCamera().height - parallax.getHeight() / 2 + Camera.sharedCamera().coord(300)
    }, this);
    this.m_Cloud.setZOrder(200);

    for(var i = 0; i < this.m_WaterCoordinates.length; i++) {
      this.m_Water.create().setCenterPosition(Camera.sharedCamera().coord(this.m_WaterCoordinates[i].x), Camera.sharedCamera().coord(this.m_WaterCoordinates[i].y));
    }

    for(var i = 0; i < this.m_IconsCoordinates.length; i++) {
      var element = this.m_Icons.create();

      element.setCenterPosition(Camera.sharedCamera().coord(this.m_IconsCoordinates[i].x), Camera.sharedCamera().coord(this.m_IconsCoordinates[i].y));
      element.registerTouchable(false);

      if(!DataManager.sharedManager().get(false, references.levels.levels[i])) {
        element.locked = true;

        element.decorations = [];
        for(var h = 0; h < 2; h++) {
          element.decorations[h] = Entity.create(s_PopupDecoration1, this);

          element.decorations[h].create().setCenterPosition(element.getCenterX(), element.getCenterY());
          element.decorations[h].setScale(0.6);
          element.decorations[h].setOpacity(100.0);
          element.decorations[h].setZOrder(99);
          element.decorations[h].runAction(
            cc.RepeatForever.create(
              cc.RotateTo.create(30.0, h == 0 ? 720 : -720),
              false
              )
            );
        }

        element.lock = Entity.create(s_Lock, element);
        element.lock.create().setCenterPosition(element.getWidth() / 2, element.getHeight() / 2 - Camera.sharedCamera().coord(10));
        element.lock.setScale(0.9);
        element.lock.setOpacity(255.0)

        element.m_Text.removeFromParent();
      } else {
        element.registerTouchable(true);

        element.decorations = [];
        for(var h = 0; h < 2; h++) {
          element.decorations[h] = Entity.create(s_PopupDecoration1, this);

          element.decorations[h].create().setCenterPosition(element.getCenterX(), element.getCenterY());
          element.decorations[h].setZOrder(99);
          element.decorations[h].setScale(0);
          element.decorations[h].runAction(
            cc.RepeatForever.create(
              cc.RotateTo.create(30.0, h == 0 ? 720 : -720),
              false
            )
          );
        }

        element.setCurrentFrameIndex(DataManager.sharedManager().get(false, references.levels.levels[i]) - 1);
      }
    }

    /*for(var i = 0; i < this.m_PointsCoordinates.length; i++) {
      this.m_Points.create().setCenterPosition(Camera.sharedCamera().coord(this.m_PointsCoordinates[i].x), Camera.sharedCamera().coord(this.m_PointsCoordinates[i].y));
    }*/

    for(var i = 0; i < this.m_TreesCoordinates.length; i++) {
      this.m_Trees.create().setCenterPosition(Camera.sharedCamera().coord(this.m_TreesCoordinates[i].x), Camera.sharedCamera().coord(this.m_TreesCoordinates[i].y));
      this.m_Trees.last().setCurrentFrameIndex(this.m_TreesCoordinates[i].frame);
    }

    this.m_BackButton.setTouchHandler('onBackEvent', Levels);
  },
  onBackEvent: function() {
    ScreenManager.sharedManager().replace(Mode);
  },
  onSelected: function(data) {
    Game.level = data.id ? data.id : Game.level;
    Level.sharedScreen(this).show();
  },
  onShowStarsInfo: function() {
  },
  onLevelItemChanged: function() {
  },
  onShow: function() {
    this._super();

    MenuPanel.sharedScreen(this).show();

    Tooflya.api.call('level.get', false, {
      success: function(data) {
        var element = Levels.instance.m_Icons.get(data.level - 1);

        for(var h = 0; h < 2; h++) {
          element.decorations[h].runAction(
            cc.Sequence.create(
              cc.DelayTime.create(1.5),
              cc.FadeIn.create(0.4),
              false
            )
          );
          element.decorations[h].runAction(
            cc.Sequence.create(
              cc.DelayTime.create(1.5),
              cc.ScaleTo.create(0.2, 1.2),
              cc.ScaleTo.create(0.1, 0.8),
              cc.ScaleTo.create(0.1, 1.0),
              false
            )
          );
        }
      }
    });

    Tooflya.api.call('level.stars', false, {
      success: function(dara) {
        Levels.instance.m_StarsCounterArea.text.ccsf([data, 90]);
      }
    });
  },
  onHide: function() {
    this._super();

    Levels.instance = false;
    MenuPanel.instance = false;
  },
  onExitTransitionDidStart: function() {
    MenuPanel.sharedScreen(this).hide();

    this._super();
  },
  update: function(time) {
    this._super(time);
  },
  onKeyDown: function(e) {
    switch(e) {
      case 27:
      ScreenManager.sharedManager().back();
      break;
    }
  }
});

Levels.instance = false;
Levels.sharedScreen = function() {
  return Levels.instance ? Levels.instance : new Levels();
};

MapTree = TiledEntity.extend({
  ctor: function(parent) {
    this._super(s_LevelsMapTrees, 3, 1, parent);

    this.setAnchorPoint(cc.p(0.5, 0.2));

    this.runAction(
      cc.RepeatForever.create(
        cc.Sequence.create(
          cc.SkewTo.create(1.0, 5.0, 0.0),
          cc.SkewTo.create(1.0, -5.0, 0.0),
          cc.SkewTo.create(1.0, 0.0, 0.0),
          cc.DelayTime.create(Random.sharedRandom().random(0.0, 5.0)),
          false
        )
      )
    );
  },
  update: function(time) {
    this._super();
  },
  deepCopy: function() {
    return MapTree.create();
  }
});

MapIcon = Button.extend({
  ctor: function() {
    this._super(s_LevelsMapIcons, 2, 2);

    this.m_Text = Text.create('level', this);
    this.m_Text.setText('level');

    this.m_Text.setColor(cc.c3(114.0, 80.0, 9.0));

    this.registerTouchable(true);
  },
  onCreate: function() {
    this._super();

    this.m_Text.setCenterPosition(this.getWidth() / 2, this.getHeight() / 2 - Camera.sharedCamera().coord(10));
    this.m_Text.ccsf([this.getID() + 1]);
    this.m_Text.disableShadow();
  },
  onHover: function() {
  },
  onUnHover: function() {
  },
  onTouch: function() {
    this._super();

    Levels.instance.onSelected({
      id: this.getID() + 1
    });
  },
  update: function(time) {
    this._super();
  },
  deepCopy: function() {
    return MapIcon.create();
  }
});

MapPoint = Entity.extend({
  ctor: function() {
    this._super(s_LevelsMapPoint);
  },
  update: function(time) {
    this._super();
  },
  deepCopy: function() {
    return MapPoint.create();
  }
});

MapTree.create = function() {
  var entity = new MapTree();

  return entity;
};
MapIcon.create = function() {
  var entity = new MapIcon();

  return entity;
};
MapPoint.create = function() {
  var entity = new MapPoint();

  return entity;
};