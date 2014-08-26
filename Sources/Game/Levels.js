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

Game.prototype.m_TutorialMatrix = {
  moves: 100,
  opponent: {
    weapon: 0,
    health: 35,
    speed: 1.5
  },
  matrix: [
    [4, 2, 4, 1, 2, 3, 3, 1, 2, 1],
    [4, 1, 0, 3, 1, 4, 3, 2, 3, 1],
    [2, 2, 1, 3, 3, 4, 0, 0, 2, 0],
    [0, 0, 3, 1, 3, 3, 2, 0, 4, 3],
    [3, 3, 4, 2, 4, 0, 2, 1, 0, 0],
    [4, 3, 0, 3, 4, 4, 3, 4, 1, 0],
    [1, 1, 2, 4, 1, 0, 0, 2, 0, 2],
    [1, 3, 0, 3, 0, 4, 3, 4, 3, 0],
    [3, 4, 3, 0, 2, 2, 0, 3, 1, 3],
    [1, 3, 4, 1, 4, 0, 2, 4, 4, 0],
    [3, 2, 3, 4, 4, 2, 4, 4, 3, 1],
    [4, 3, 4, 3, 0, 0, 2, 0, 4, 3],
    [0, 0, 2, 3, 4, 1, 4, 1, 2, 4],
    [2, 1, 4, 0, 3, 2, 1, 1, 0, 0]
  ]
};

Game.prototype.m_LevelsMatrixes = [
  /** Matrix of level #1 */
  {
    moves: 15,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 0.6
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, -3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #2 */
  {
    moves: 30,
    opponent: {
      weapon: 0,
      health: 50,
      speed: 1.5
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, -1, -3, 1, -1, 1, 1, 1],
      [1, 1, 1, -1, 1, 1, -1, 1, 1, 1],
      [1, 1, 1, -1, 1, 1, -1, 1, 1, 1],
      [1, -10, 1, -3, 1, 1, -3, 1, -14, 1],
      [-10, -11, -10, -10, -11, -12, -14, -14, -12, -14],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #3 */
  {
    moves: 30,
    opponent: {
      weapon: 1,
      health: 100,
      speed: 2
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, -2, -2, 1, 1, 1, 1],
      [1, 1, 1, 1, -2, -2, 1, 1, 1, 1],
      [1, 1, 1, 1, -2, -2, 1, 1, 1, 1],
      [1, 1, 1, -3, 1, 1, -3, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #4 */
  {
    moves: 30,
    opponent: {
      weapon: 1,
      health: 50,
      speed: 2
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, 1, 1, 1, 1, 1, 1, -1, -1],
      [-1, -1, 1, 1, 1, 1, 1, 1, -1, -1],
      [-1, -1, 1, 1, 1, 1, 1, 1, -1, -1],
      [-1, -1, 1, 1, -3, -3, 1, 1, -1, -1],
      [1, 1, 1, 1, 1, 1, -3, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #5 */
  {
    moves: 30,
    opponent: {
      weapon: 2,
      health: 75,
      speed: 1.5
    },
    matrix: [
      [1, -11, -14, 1, 1, 1, 1, -11, 1, 1],
      [1, 1, -100, -4, 1, 1, -4, -140, 1, 1],
      [1, -10, -14, -1, -1, -1, -1, -14, 1, 1],
      [1, -14, -10, -11, 1, 1, -10, -3, -14, 1],
      [1, -11, -10, 1, 1, 1, 13, -14, -11, 1],
      [1, 1, -12, -13, -1, -1, -10, -11, -12, 1],
      [1, 1, 1, -3, 1, 1, 1, -3, -10, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #6 */
  {
    moves: 30,
    opponent: {
      weapon: 2,
      health: 70,
      speed: 4.0
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, 1, -13, 1, 1, 1, 1, -1, -1],
      [-10, -14, -14, -11, -140, -140, -10, -11, 1, 1],
      [-1, -1, 1, -14, -13, 1, -3, 1, -1, -1],
      [1, -3, 1, 1, 1, 1, 1, 1, -3, 1],
      [-1, -1, 1, 1, 1, 1, 1, 1, -1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #7 */
  {
    moves: 20,
    opponent: {
      weapon: 2,
      health: 70,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, -1, -1, -1, -1, -1, -1, 1, 1],
      [1, 1, -1, -1, -1, -1, -1, -1, 1, 1],
      [1, 1, -1, -1, -1, -1, -1, -1, -3, 1],
      [1, -3, -1, -1, -1, -1, -1, -1, -3, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #8 */
  {
    moves: 20,
    opponent: {
      weapon: 3,
      health: 70,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, -4, 1, -4, -4, 1, -4],
      [1, 1, 1, 1, -1, -1, -1, -3, -1, -1],
      [1, 1, 1, 1, -1, -3, -1, -1, -1, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #9 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, 1, 1, -1, -1, -1, -1],
      [-3, -1, -1, -1, 1, 1, -1, -1, -1, -3],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #10 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, 1, 1, -1, 1, 1, -1, -1],
      [-1, -1, -1, 1, 1, -1, 1, 1, -1, -1],
      [-1, -1, -1, 1, 1, -1, 1, 1, -1, -1],
      [1, 1, 3, -1, 1, -3, -1, -3, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #11 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [-1, -1, -1, -1, 1, 1, -1, -1, -1, -1],
      [-1, -1, 1, 1, 1, 1, 1, 1, -1, -1],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1],
      [-1, -1, 1, 1, 1, 1, 1, 1, -1, -1],
      [-1, -1, -1, -1, 1, 1, -1, -1, -1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #12 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1],
      [-1, -1, -1, 1, -1, -1, 1, -1, -1, -1],
      [-1, -1, -1, 1, -1, -1, 1, -1, -1, -1],
      [-1, -1, -1, 1, -1, -1, 1, -1, -1, -1],
      [1, 1, 1, -3, 1, 1, -3, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #13 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, 1, 1, -1, -1, -1, -1],
      [-1, -1, -1, -1, 1, 1, -1, -1, -1, -1],
      [-1, 1, 1, -1, 1, 1, -1, 1, 1, -1],
      [-1, -3, 1, -1, 1, 1, -1, -3, 1, -1],
      [-1, -1, -1, -1, -3, 1, -1, -1, -1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #14 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -3, 1, -1, -3, 1, -1, 1, -3, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #15 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -3, 1, 1, 1, 1, -3, -1, -1],
      [-1, -1, -1, -1, -3, 1, -1, -1, -1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #16 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [1, 1, 1, 1, -3, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-3, 1, 1, 1, 1, 1, 1, 1, 1, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #17 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [1, 1, -1, -1, 1, 1, -1, -1, 1, 1],
      [-1, -3, 1, -3, 1, 1, 1, 1, -3, -1],
      [1, 1, -1, -1, 1, 1, -1, -1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #18 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, -1, 1, -1, 1, 1, -1, 1, -1, 1],
      [1, -1, 1, -1, 1, 1, -1, 1, -1, 1],
      [1, -1, 1, -1, -3, 1, -1, 1, -1, 1],
      [1, -1, 1, -1, 1, 1, -1, 1, -1, 1],
      [1, -1, 1, -1, 1, 1, -1, 1, -1, 1],
      [1, -1, -3, -1, 1, 1, -1, -3, -1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #19 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -3, -1, -1, 1, 1, -1, -1, -3, -1],
      [-1, 1, -1, 1, -3, 1, 1, -1, 1, -1],
      [-1, 1, -1, 1, 1, 1, 1, -1, 1, -1],
      [-1, 1, -1, -1, 1, 1, -1, -1, 1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #20 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, 1, -1, 1, -2, -2, 1, -1, 1, -1],
      [-1, 1, -1, 1, 1, 1, 1, -1, 1, -1],
      [-1, 1, -1, -1, -3, 1, -1, -1, 1, -1],
      [1, -3, 1, -1, -1, -1, -1, 1, -3, 1],
      [1, -1, 1, -1, -1, -1, -1, 1, -1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #21 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, -4, -4, -4],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, -3, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-3, 1, 1, 1, -1, -1, 1, 1, 1, 1],
      [1, -2, -2, 1, -1, -1, 1, -2, -2, 1],
      [1, 1, 1, 1, -1, -1, 1, 1, 1, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #22 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [-4, -4, -4, -4, -4, -4, -4, -4, -4, -4],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -3, -1, 1, -1, -1, 1, -1, -3, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [1, 1, 1, -1, 1, -3, -1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #23 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [-4, -4, 1, 1, 1, 1, 1, 1, -4, -4],
      [-2, -2, 1, 1, -4, -4, 1, 1, -2, -2],
      [1, -3, 1, 1, 1, 1, 1, 1, -3, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #24 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, -4, 1, 1, -4, 1, 1, 1],
      [1, 1, 1, -4, 1, 1, -4, 1, 1, 1],
      [-2, 1, -2, 1, -2, -2, -3, -2, 1, -2],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, 1, 1, -1, -1, -1, -1, 1, 1, -1],
      [-3, -1, -1, -1, -1, -1, -1, -1, -1, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #25 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, -4, -4, 1, 1, 1, 1],
      [-1, -1, -1, -1, -3, 1, -1, -1, -1, -1],
      [1, 1, 1, -1, -1, -1, -1, 1, 1, 1],
      [1, -1, -1, -1, 1, 1, -1, -1, -1, 1],
      [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1],
      [-3, 1, 1, 1, 1, 1, 1, 1, 1, 3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #26 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
      [1, -1, -4, -4, -4, -4, -4, -4, -1, 1],
      [1, -1, 1, 1, 1, 1, 1, 1, -1, 1],
      [1, -1, 1, 1, -3, 1, 1, 1, -1, 1],
      [1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
      [-3, 1, 1, 1, 1, 1, 1, 1, 1, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #27 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, -2, -2, -2, -2, 1, 1, 1],
      [1, -2, 1, 1, -1, -1, 1, 1, -2, 1],
      [-4, 1, 1, -1, -1, -1, -1, 1, 1, -4],
      [1, 1, -1, -1, -1, -1, -1, -1, 1, 1],
      [-3, -1, -1, 1, 1, -3, 1, -1, -1, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #28 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-4, -1, -4, -1, -1, -1, -1, -4, -1, -4],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -3, -1, 1, 1, 1, 1, -1, -3, -1],
      [-1, 1, -1, -1, -3, 1, -1, -1, 1, -1],
      [1, 1, 1, -1, -1, -1, -1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #29 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, -4, 1, 1, 1, 1, 1, 1, -4, 1],
      [1, -1, 1, 1, 1, 1, 1, 1, -1, 1],
      [-1, -1, -1, -1, 1, 1, -1, -1, -1, -1],
      [1, -1, 1, 1, -1, -1, 1, 1, -1, 1],
      [1, -1, -1, 1, -1, -1, 1, -1, -1, 1],
      [-3, 1, -1, -3, -1, -1, 1, -1, -3, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  },
  /** Matrix of level #30 */
  {
    moves: 1,
    opponent: {
      weapon: 0,
      health: 35,
      speed: 1
    },
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-4, -4, -1, -1, -1, -1, -1, -1, -4, -4],
      [-1, -1, -1, -1, -3, 1, -1, -1, -1, -1],
      [1, 1, -3, -1, 1, 1, -1, -3, 1, 1],
      [1, -2, 1, -1, -1, -1, -1, 1, -2, 1],
      [1, 1, 1, -1, -1, -1, -1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  }
];
