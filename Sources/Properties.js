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
    elements: [
      501, 502, 503, 504, 505, 506
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
    levels: [1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079],
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
        message: "",
        image: ""
      }
    },
    {
      id: 1,
      popularity: 0,
      properties: '22',
      price: {
        gold: 0,
        silver: 200
      },
      share: {
        message: "",
        image: ""
      }
    },
    {
      id: 2,
      popularity: 0,
      properties: '31',
      price: {
        gold: 0,
        silver: 300
      },
      share: {
        message: "",
        image: ""
      }
    },
    {
      id: 3,
      popularity: 0,
      properties: '36',
      price: {
        gold: 25,
        silver: 400
      },
      share: {
        message: "",
        image: ""
      }
    },
    {
      id: 4,
      popularity: 0,
      properties: '42',
      price: {
        gold: 35,
        silver: 500
      },
      share: {
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
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
        message: "",
        image: ""
      }
    }
  ]
};
