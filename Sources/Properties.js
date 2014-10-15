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

var purchase = {
  cancel: -1,
  coins: {
    pack1: 0,
    pack2: 1,
    pack3: 2,
    pack4: 3
  },
  keys: {
    pack1: 4,
    pack2: 5
  },
  lives: 6,
  moves: 7
};
var references = {
  music: 1,
  sound: 2,
  language: 3,
  info: {
    personal: {
      id: 4,
      name: 5,
      surname: 6,
      photo: 7
    },
    install: 8,
    game: 9,
    rate: 10,
    weapon: 11
  },
  coins: {
    gold: 12,
    silver: 13,
    keys: 14,
    lives: 15
  },
  lock: {
    modes: {
      classic: 16,
      arcade: 17
    }
  },
  achievements: {
    count: 18
  },
  time: {
    reward: 19,
    days: 20
  },
  items: {
    weapon1: 101,
    weapon2: 102,
    weapon3: 103,
    weapon4: 104,
    weapon5: 105,
    weapon6: 106,
    weapon7: 107,
    weapon8: 108,
    weapon9: 109,
    weapon10: 110,
    weapon11: 111,

    bird1: 201,
    bird2: 202,
    bird3: 203,
    bird4: 204,
    bird5: 205,
    bird6: 206,
    bird7: 207,
    bird8: 208,

    bonus1: 301,
    bonus2: 302,
    bonus3: 303,
    bonus4: 304,
    bonus5: 305,
    bonus6: 306,
    bonus7: 307,
    bonus8: 308
  },
  tutorial: {
    enable: 500,
    element1: 501,
    element2: 502,
    element3: 503,
    element4: 504,
    element5: 505,
    element6: 506,
    any1: 550,
    elements: [
      501, 502, 503, 504, 505, 506
    ],
    any: [
      550
    ]
  },
  levels: {
    level1: 1050,
    level2: 1051,
    level3: 1052,
    level4: 1053,
    level5: 1054,
    level6: 1055,
    level7: 1056,
    level8: 1057,
    level9: 1058,
    level10: 1059,
    level11: 1060,
    level12: 1061,
    level13: 1062,
    level14: 1063,
    level15: 1064,
    level16: 1065,
    level17: 1066,
    level18: 1067,
    level19: 1068,
    level20: 1069,
    level21: 1070,
    level22: 1071,
    level23: 1072,
    level24: 1073,
    level25: 1074,
    level26: 1075,
    level27: 1076,
    level28: 1077,
    level29: 1078,
    level30: 1079,
    level31: 1080,
    level32: 1081,
    level33: 1082,
    level34: 1083,
    level35: 1084,
    level36: 1085,
    level37: 1086,
    level38: 1087,
    level39: 1088,
    level40: 1089,
    level41: 1090,
    level42: 1091,
    level43: 1092,
    level44: 1093,
    level45: 1094,
    level46: 1095,
    level47: 1096,
    level48: 1097,
    level49: 1098,
    level50: 1099,
    level51: 1100,
    level52: 1101,
    level53: 1102,
    level54: 1103,
    level55: 1104,
    level56: 1105,
    level57: 1106,
    level58: 1107,
    level59: 1108,
    level60: 1109,
    level61: 1110,
    level62: 1111,
    level63: 1112,
    level64: 1113,
    level65: 1114,
    level66: 1115,
    level67: 1116,
    level68: 1117,
    level69: 1118,
    level70: 1119,
    level71: 1120,
    level72: 1121,
    level73: 1122,
    level74: 1123,
    level75: 1124,
    level76: 1125,
    level77: 1126,
    level78: 1127,
    level79: 1128,
    level80: 1129,
    level81: 1130,
    level82: 1131,
    level83: 1132,
    level84: 1133,
    level85: 1134,
    level86: 1135,
    level87: 1136,
    level88: 1137,
    level89: 1138,
    level90: 1139,
    levels: [
    1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 
    1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109,
    1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139
    ],
    points: [
    2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 
    2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109,
    2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139
    ],
    current: 1500
  }
};
var unlock = {
  modes: [
    {
      price: 25
    },
    {
      price: 40
    }
  ],
  items: [
    //weapons
    {
      price: 0
    },
    {
      price: 200
    },
    {
      price: 400
    },
    {
      price: 600
    },
    {
      price: 800
    },
    {
      price: 1000
    },
    {
      price: 1200
    },
    {
      price: 1400
    },
    {
      price: 1600
    },
    {
      price: 1800
    },
    {
      price: 2000
    },
    {
      price: 2200
    },
    {
      price: 2400
    },
    {
      price: 2600
    },
    {
      price: 2800
    },
    {
      price: 3000
    },
    {
      price: 3200
    },
    {
      price: 3400
    },
    {
      price: 25
    },
    {
      price: 25
    },
// BIRDS!
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
//Bonuses
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    },
    {
      price: 25
    }
  ]
};
var properties = {
  items: [
    {
      id: 0,
      popularity: 0,
      properties: '12',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 1,
      popularity: 0,
      properties: '22',
      price: {
        gold: 0,
        silver: 3000
      },
      share: {
        vk: {
          message: "Мое новое оружие - Доска! Заходи в игру и попробуй побить мои рекорды!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333261814"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 2,
      popularity: 0,
      properties: '31',
      price: {
        gold: 0,
        silver: 8000
      },
      share: {
        vk: {
          message: "Мое новое оружие - Дубина! Заходи в игру и попробуй побить мои рекорды!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333261818"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 3,
      popularity: 0,
      properties: '36',
      price: {
        gold: 0,
        silver: 15000
      },
      share: {
        vk: {
          message: "Мое новое оружие - Лопата! Заходи в игру и попробуй побить мои рекорды!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333261821"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 4,
      popularity: 0,
      properties: '42',
      price: {
        gold: 0,
        silver: 20000
      },
      share: {
        vk: {
          message: "Мое новое оружие - Молот правды! Заходи в игру и попробуй побить мои рекорды!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333261831"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 5,
      popularity: 0,
      properties: '48',
      price: {
        gold: 45,
        silver: 600
      },
      share: {
        vk: {
          message: "Мое новое оружие - Топор всевластия! Заходи в игру и попробуй побить мои рекорды!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333261839"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 6,
      popularity: 0,
      properties: '52',
      price: {
        gold: 100,
        silver: 1500
      },
      share: {
        vk: {
          message: "Мое новое оружие - Волшебная палочка! Заходи в игру и попробуй побить мои рекорды!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333261823"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 7,
      popularity: 0,
      properties: '61',
      price: {
        gold: 200,
        silver: 3000
      },
      share: {
        vk: {
          message: "Мое новое оружие - Бита клоуна! Заходи в игру и попробуй побить мои рекорды!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333261811"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 8,
      popularity: 0,
      properties: '68',
      price: {
        gold: 300,
        silver: 5000
      },
      share: {
        vk: {
          message: "Мое новое оружие - Рыба! Заходи в игру и попробуй побить мои рекорды!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333261819"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 9,
      popularity: 0,
      properties: '75',
      price: {
        gold: 350,
        silver: 8000
      },
      share: {
        vk: {
          message: "Мое новое оружие - Механическая рука! Заходи в игру и попробуй побить мои рекорды!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333261826"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 10,
      popularity: 0,
      properties: '88',
      price: {
        gold: 600,
        silver: 10000
      },
      share: {
        vk: {
          message: "Мое новое оружие - Мечь Джедая! Заходи в игру и попробуй побить мои рекорды!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333261836"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 11,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 12,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 13,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 14,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 15,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 16,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 17,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 18,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 19,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 20,
      popularity: 0,
      properties: '0:10',
      price: {
        gold: 50,
        silver: 2000
      },
      share: {
        vk: {
          message: "У меня открыта Ледяная Птица!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262538"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 21,
      popularity: 0,
      properties: '0:30',
      price: {
        gold: 60,
        silver: 2500
      },
      share: {
        vk: {
          message: "У меня открыта Птица Индеец!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262539"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 22,
      popularity: 0,
      properties: '0:00',
      price: {
        gold: 70,
        silver: 3000
      },
      share: {
        vk: {
          message: "У меня открыта Птица Робот!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262548"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 23,
      popularity: 0,
      properties: '0:00',
      price: {
        gold: 100,
        silver: 5000
      },
      share: {
        vk: {
          message: "У меня открыта Птица Пират!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262545"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 24,
      popularity: 0,
      properties: '0:23',
      price: {
        gold: 100,
        silver: 7000
      },
      share: {
        vk: {
          message: "У меня открыта Птица Мексиканец!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262541"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 25,
      popularity: 0,
      properties: '0:00',
      price: {
        gold: 120,
        silver: 8000
      },
      share: {
        vk: {
          message: "У меня открыта Птица Командор!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262549"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 26,
      popularity: 0,
      properties: '0:45',
      price: {
        gold: 150,
        silver: 9000
      },
      share: {
        vk: {
          message: "У меня открыта Птица Зомби!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262551"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 27,
      popularity: 100,
      properties: '0:00',
      price: {
        gold: 150,
        silver: 10000
      },
      share: {
        vk: {
          message: "У меня открыта Птица Ниндзя!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262543"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 28,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 29,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 30,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 31,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 32,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 33,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 34,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 35,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 36,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 37,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 38,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 39,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 40,
      popularity: 0,
      properties: '50%',
      price: {
        gold: 100,
        silver: 1000
      },
      share: {
        vk: {
          message: "Мой бонус - Щит Ветра!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262785"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 41,
      popularity: 0,
      properties: '1',
      price: {
        gold: 100,
        silver: 2000
      },
      share: {
        vk: {
          message: "Мой бонус - Сердца Жизней!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262778"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 42,
      popularity: 0,
      properties: ' + 10',
      price: {
        gold: 200,
        silver: 2000
      },
      share: {
        vk: {
          message: "Мой бонус - Песок Времени!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262784"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 43,
      popularity: 0,
      properties: '?',
      price: {
        gold: 150,
        silver: 3000
      },
      share: {
        vk: {
          message: "Мой бонус - Экстра Жизни!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262776"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 44,
      popularity: 0,
      properties: '?',
      price: {
        gold: 100,
        silver: 2500
      },
      share: {
        vk: {
          message: "Мой бонус - Счастливый Ключ!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262780"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 45,
      popularity: 0,
      properties: 'x2',
      price: {
        gold: 50,
        silver: 5000
      },
      share: {
        vk: {
          message: "Мой бонус - Увеличение Золотых Монет!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262777"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 46,
      popularity: 0,
      properties: 'x2',
      price: {
        gold: 100,
        silver: 5000
      },
      share: {
        vk: {
          message: "Мой бонус - Увеличение Серебряных Монет!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262787"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 47,
      popularity: 0,
      properties: 'x2',
      price: {
        gold: 100,
        silver: 4000
      },
      share: {
        vk: {
          message: "Мой бонус - Множитель Убийств!\n#Tooflya #ProjectBirds",
          image: "photo-43129938_333262781"
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 48,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 49,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 50,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 51,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 52,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 53,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 54,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 55,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 56,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 57,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 58,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    },
    {
      id: 59,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      },
      share: {
        vk: {
          message: "",
          image: ""
        },
        fb: {
          message: "",
          image: ""
        }
      }
    }
  ]
};
