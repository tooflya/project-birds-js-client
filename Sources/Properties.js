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
  info: {
    weapon: 0,
    install: 1,
    game: 2,
    rate: 3
  },
  coins: {
    gold: 4,
    silver: 5,
    keys: 6,
    lives: 7
  },
  lock: {
    modes: {
      classic: 8,
      arcade: 9
    }
  },
  achievements: {
    count: 10
  },
  time: {
    reward: 11,
    days: 12
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
      }
    },
    {
      id: 1,
      popularity: 0,
      properties: '22',
      price: {
        gold: 0,
        silver: 200
      }
    },
    {
      id: 2,
      popularity: 0,
      properties: '31',
      price: {
        gold: 0,
        silver: 300
      }
    },
    {
      id: 3,
      popularity: 0,
      properties: '36',
      price: {
        gold: 25,
        silver: 400
      }
    },
    {
      id: 4,
      popularity: 0,
      properties: '42',
      price: {
        gold: 35,
        silver: 500
      }
    },
    {
      id: 5,
      popularity: 0,
      properties: '48',
      price: {
        gold: 45,
        silver: 600
      }
    },
    {
      id: 6,
      popularity: 0,
      properties: '52',
      price: {
        gold: 100,
        silver: 1500
      }
    },
    {
      id: 7,
      popularity: 0,
      properties: '61',
      price: {
        gold: 200,
        silver: 3000
      }
    },
    {
      id: 8,
      popularity: 0,
      properties: '68',
      price: {
        gold: 300,
        silver: 5000
      }
    },
    {
      id: 9,
      popularity: 0,
      properties: '75',
      price: {
        gold: 350,
        silver: 8000
      }
    },
    {
      id: 10,
      popularity: 0,
      properties: '88',
      price: {
        gold: 600,
        silver: 10000
      }
    },
    {
      id: 11,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 12,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 13,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 14,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 15,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 16,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 17,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 18,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 19,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 20,
      popularity: 0,
      properties: '0:10',
      price: {
        gold: 50,
        silver: 2000
      }
    },
    {
      id: 21,
      popularity: 0,
      properties: '0:30',
      price: {
        gold: 60,
        silver: 2500
      }
    },
    {
      id: 22,
      popularity: 0,
      properties: '0:00',
      price: {
        gold: 70,
        silver: 3000
      }
    },
    {
      id: 23,
      popularity: 0,
      properties: '0:00',
      price: {
        gold: 100,
        silver: 5000
      }
    },
    {
      id: 24,
      popularity: 0,
      properties: '0:23',
      price: {
        gold: 100,
        silver: 7000
      }
    },
    {
      id: 25,
      popularity: 0,
      properties: '0:00',
      price: {
        gold: 120,
        silver: 8000
      }
    },
    {
      id: 26,
      popularity: 0,
      properties: '0:45',
      price: {
        gold: 150,
        silver: 9000
      }
    },
    {
      id: 27,
      popularity: 100,
      properties: '0:00',
      price: {
        gold: 150,
        silver: 10000
      }
    },
    {
      id: 28,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 29,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 30,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 31,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 32,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 33,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 34,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 35,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 36,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 37,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 38,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 39,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 40,
      popularity: 0,
      properties: '50%',
      price: {
        gold: 100,
        silver: 1000
      }
    },
    {
      id: 41,
      popularity: 0,
      properties: '1',
      price: {
        gold: 100,
        silver: 2000
      }
    },
    {
      id: 42,
      popularity: 0,
      properties: ' + 10',
      price: {
        gold: 200,
        silver: 2000
      }
    },
    {
      id: 43,
      popularity: 0,
      properties: '?',
      price: {
        gold: 150,
        silver: 3000
      }
    },
    {
      id: 44,
      popularity: 0,
      properties: '?',
      price: {
        gold: 100,
        silver: 2500
      }
    },
    {
      id: 45,
      popularity: 0,
      properties: 'x2',
      price: {
        gold: 50,
        silver: 5000
      }
    },
    {
      id: 46,
      popularity: 0,
      properties: 'x2',
      price: {
        gold: 100,
        silver: 5000
      }
    },
    {
      id: 47,
      popularity: 0,
      properties: 'x2',
      price: {
        gold: 100,
        silver: 4000
      }
    },
    {
      id: 48,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 49,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 50,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 51,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 52,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 53,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 54,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 55,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 56,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 57,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 58,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 59,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    }
  ]
};
