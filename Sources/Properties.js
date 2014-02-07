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

var weapon = 0;
var properties = {
  items: [
    {
      id: 0,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 1,
      popularity: 0,
      properties: '?',
      price: {
        gold: 520,
        silver: 1348
      }
    },
    {
      id: 2,
      popularity: 0,
      properties: '?',
      price: {
        gold: 520,
        silver: 520
      }
    },
    {
      id: 3,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 4,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 5,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 6,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 7,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 8,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 9,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 10,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
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
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 21,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 22,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 23,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 24,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 25,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 26,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 27,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
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
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 41,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 42,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 43,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 44,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 45,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 46,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
      }
    },
    {
      id: 47,
      popularity: 0,
      properties: '?',
      price: {
        gold: 0,
        silver: 0
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