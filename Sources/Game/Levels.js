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
  moves: 99,
  opponent: {
    weapon: 0,
    health: 10,
    speed: 1.5
  },
  size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
    [-12, -14, -11, -12, -10, -13, -12, -14, -11, -12],
    [-10, -11, -13, -12, -14, -11, -10, -12, -13, -10],
    [-11, -12, -10, -11, -10, -12, -10, -14, -11, -13],
    [-14, -10, -12, -11, -11, -14, -13, -12, -12, -11],
    [-11, -11, -13, -14, -13, -10, -11, -11, -10, -10],
    [-14, -12, -10, -12, -14, -14, -13, -14, -14, -13],
    [-14, -14, -11, -12, -12, -11, -10, -12, -13, -11],
    [-12, -12, -11, -13, -13, -14, -12, -13, -14, -10],
    [-13, 4, 3, 0, -12, 2, 0, 3, 1, 3],
    [-14, 3, 4, 1, 4, 0, 2, 4, 4, 0],
    [3, 2, 3, -11, 4, 2, 4, 4, 3, 1],
    [4, 3, 4, -11, 0, 0, 2, 0, 4, 3],
    [0, 0, 2, 3, 4, 1, 4, 1, 2, 4],
    [2, 1, 4, 0, 3, 2, 1, 1, 0, 0]
  ],
  /**
   * Generate of creation of new elements.
   * If probably of bonus creation is 10% it's mean that probably of creation of simple element is 90%.
   *
   * !!! Please be careful in setting this properties. !!!
   * !!! Sum of probability for the each section must be 100% !!!
   *
   */
  probability: {
    scope: true, // Rules of probability is working for computer to!
    bonuses: {
      probably: 0, // Probably for the creation of bonus.

      horizontal: 0, // Probably of creation of specific bonus.
      vertical: 0,
      pack: 0,
      bomb: 0
    },
    elements: {
      // Probably for the creation of simple element is 100% now.

      fire: 20, // Probably of creation of specific element.
      regeneration: 20,
      defence: 20,
      keys: 20,
      run: 20
    }
  }
};

Game.prototype.m_LevelsMatrixes = [
  /** Matrix of level #1 */
  {
    moves: 20,
    opponent: {
      weapon: 0,
      health: 75,
      speed: 0.6
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, -3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #2 */
  {
    moves: 10,
    opponent: {
      weapon: 0,
      health: 75,
      speed: 2
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
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
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #3 */
  {
    moves: 10,
    opponent: {
      weapon: 1,
      health: 100,
      speed: 2
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
      [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
      [1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
      [1, 1, 1, -3, 1, 1, -3, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #4 */
  {
    moves: 13,
    opponent: {
      weapon: 1,
      health: 50,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, -2, 1, 1, -2, 1, 1, 1],
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
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #5 */
  {
    moves: 15,
    opponent: {
      weapon: 2,
      health: 75,
      speed: 1.5
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, -11, -14, 1, 1, 1, 1, -11, 1, 1],
      [1, 1, -100, -4, 1, 1, -4, -140, 1, 1],
      [1, -10, -14, -1, -1, -1, -1, -14, 1, 1],
      [1, -14, -10, -11, 1, 1, -10, -3, -14, 1],
      [1, -11, -10, 1, 1, 1, 13, -14, -11, 1],
      [1, 1, -12, -1, -1, -1, -1, -11, -12, 1],
      [1, 1, 1, -3, 1, 1, 1, -3, -10, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #6 */
  {
    moves: 15,
    opponent: {
      weapon: 2,
      health: 70,
      speed: 2.0
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
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
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #7 */
  {
    moves: 15,
    opponent: {
      weapon: 2,
      health: 70,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
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
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #8 */
  {
    moves: 15,
    opponent: {
      weapon: 1,
      health: 70,
      speed: 1.5
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
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
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #9 */
  {
    moves: 15,
    opponent: {
      weapon: 1,
      health: 70,
      speed: 1.5
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, -4, -4, 1, 1, 1, 1],
      [-4, 1, 1, 1, -4, -4, 1, 1, 1, -4],
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
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #10 */
  {
    moves: 15,
    opponent: {
      weapon: 2,
      health: 50,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, 1, -1, 1, 1, -1, 1, -1, -1],
      [-1, -1, 1, -1, 1, 1, -1, 1, -1, -1],
      [-1, -1, 1, -1, 1, 1, -1, 1, -1, -1],
      [1, 1, 3, -1, 1, -3, -1, -3, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #11 */
  {
    moves: 10,
    opponent: {
      weapon: 2,
      health: 120,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-1, -1, -1, -1, 1, 1, -1, -1, -1, -1],
      [-1, -1, -4, -4, -4, -4, -4, -4, -1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -6, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -3, 1, -4, -4, 1, -3, -1, -1],
      [-1, -1, -1, -1, -3, 1, -1, -1, -1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #12 */
  {
    moves: 10,
    opponent: {
      weapon: 2,
      health: 100,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, -6, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -3, -12, 1, 1, 1],
      [-1, -1, -1, -100, -1, -1, -140, -1, -1, -1],
      [-1, -1, -1, -100, -1, -1, -140, -1, -1, -1],
      [-1, -1, -1, -11, -1, -1, -12, -1, -1, -1],
      [1, 1, 1, -3, 1, 1, -3, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #13 */
  {
    moves: 10,
    opponent: {
      weapon: 3,
      health: 100,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, -12, -11, 1, -6, -11, -13, 1, 1],
      [-100, -100, -11, -10, -12, -13, -14, -11, -140, -140],
      [-1, -1, -1, -1, 1, -13, -1, -1, -1, -1],
      [-1, -1, -1, -1, -13, 1, -1, -1, -1, -1],
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
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #14 */
  {
    moves: 15,
    opponent: {
      weapon: 3,
      health: 100,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-5, -5, -5, -5, -5, -5, -5, -5, -5, -5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -6, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -3, 1, -1, -3, 1, -1, 1, -3, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #15 */
  {
    moves: 15,
    opponent: {
      weapon: 3,
      health: 150,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, -4, -4, 1, 1, -4, -4, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -3, 1, 1, 1, 1, -3, -1, -1],
      [-1, -1, -1, -1, -3, -6, -1, -1, -1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #16 */
  {
    moves: 15,
    opponent: {
      weapon: 3,
      health: 150,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [1, 1, 1, 1, -3, 1, -6, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-3, 1, 1, 1, 1, 1, 1, 1, 1, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #17 */
  {
    moves: 15,
    opponent: {
      weapon: 3,
      health: 150,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [1, 1, -1, -1, 1, 1, -1, -1, 1, 1],
      [-1, -3, 1, -3, -6, 1, 1, 1, -3, -1],
      [1, 1, -1, -1, 1, 1, -1, -1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #18 */
  {
    moves: 15,
    opponent: {
      weapon: 3,
      health: 150,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, -10, 1, 1, 1, 1, 1],
      [1, -1, 1, -1, -10, -14, -1, 1, -1, 1],
      [1, -1, 1, -1, -11, 1, -1, 1, -1, 1],
      [1, -1, 1, -1, -10, -14, -1, 1, -1, 1],
      [1, -1, 1, -1, -3, -14, -1, 1, -1, 1],
      [1, -1, 1, -1, 1, 1, -1, 1, -1, 1],
      [1, -1, -3, -1, 1, 1, -1, -3, -1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #19 */
  {
    moves: 15,
    opponent: {
      weapon: 3,
      health: 150,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -3, -1, -1, 1, 1, -1, -1, -3, -1],
      [-1, 1, -1, 1, -3, -6, 1, -1, 1, -1],
      [-1, 1, -1, 1, 1, 1, 1, -1, 1, -1],
      [-1, 1, -1, -1, 1, 1, -1, -1, 1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #20 */
  {
    moves: 15,
    opponent: {
      weapon: 3,
      health: 150,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, 1, -1, 1, -1, -1, 1, -1, 1, -1],
      [-1, 1, -1, 1, 1, 1, 1, -1, 1, -1],
      [-1, 1, -1, -1, -3, -6, -1, -1, 1, -1],
      [1, -3, 1, -1, -1, -1, -1, 1, -3, 1],
      [1, -1, 1, -1, -1, -1, -1, 1, -1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #21 */
  {
    moves: 15,
    opponent: {
      weapon: 4,
      health: 200,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-4, -4, -4, -4, -4, -4, -4, -4, -4, -4],
      [-5, -5, 1, 1, 1, 1, 1, 1, -5, -5],
      [1, 1, 1, 1, 1, 1, 1, -3, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-3, 1, 1, 1, -1, -1, 1, 1, 1, 1],
      [1, -2, -2, 1, -1, -1, 1, -2, -2, 1],
      [1, 1, 1, 1, -1, -1, 1, 1, -6, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #22 */
  {
    moves: 15,
    opponent: {
      weapon: 4,
      health: 200,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-4, -4, -4, -4, -4, -4, -4, -4, -4, -4],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -3, -1, 1, -1, -1, -6, -1, -3, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [1, 1, 1, -1, 1, -3, -1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #23 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 200,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-4, -4, 1, 1, 1, 1, 1, 1, -4, -4],
      [-1, -5, 1, 1, -4, -4, 1, 1, -5, -1],
      [1, -3, 1, 1, 1, -6, 1, 1, -3, 1],
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
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #24 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 200,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, -4, 1, 1, -4, 1, 1, 1],
      [1, 1, 1, -4, 1, 1, -4, 1, 1, 1],
      [-1, 1, -1, 1, -1, -1, -3, -1, 1, -1],
      [1, 1, 1, 1, 1, -6, 1, 1, 1, 1],
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
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #25 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-4, 1, 1, 1, 1, 1, 1, 1, 1, -4],
      [1, 1, 1, 1, -4, -4, 1, 1, 1, 1],
      [-1, -1, -1, -1, -3, 1, -1, -1, -1, -1],
      [1, 1, 1, -1, -1, -1, -1, 1, 1, 1],
      [1, -1, -1, -1, 1, -6, -1, -1, -1, 1],
      [-1, -1, -1, 1, 1, 1, 1, -1, -1, -1],
      [-3, 1, 1, 1, 1, 1, 1, 1, 1, 3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #26 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, -5, 1, 1, 1, 1],
      [1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
      [1, -1, -4, -4, 1, 1, -4, -4, -1, 1],
      [1, -1, 1, 1, 1, 1, 1, 1, -1, 1],
      [1, -1, 1, 1, -3, 1, -6, 1, -1, 1],
      [1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
      [-3, 1, 1, 1, 1, 1, 1, 1, 1, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #27 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, -1, -1, -1, -1, 1, 1, 1],
      [1, -4, 1, 1, 1, 1, -6, 1, -4, 1],
      [1, -1, -4, 1, -1, -1, 1, -4, -1, 1],
      [1, -4, 1, -1, -1, -1, -1, 1, -4, 1],
      [-3, 1, -1, -1, -1, -1, 1, -1, 1, -3],
      [1, -1, -1, 1, 1, -3, 1, -1, -1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #28 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-4, -1, -4, -1, -1, -1, -1, -4, -1, -4],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -3, -1, 1, -6, 1, 1, -1, -3, -1],
      [-1, 1, -1, -1, -3, 1, -1, -1, 1, -1],
      [1, 1, 1, -1, -1, -1, -1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #29 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, -5, -5, 1, 1, 1, 1],
      [1, -4, 1, 1, 1, 1, 1, 1, -4, 1],
      [1, -1, 1, 1, -1, -1, 1, 1, -1, 1],
      [-1, -1, -1, -1, -6, 1, -1, -1, -1, -1],
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
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #30 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-10, -11, 1, 1, 1, 1, 1, 1, -11, -10],
      [-140, 1, 1, 1, 1, 1, 1, 1, 1, -140],
      [-140, -100, 1, -1, -1, -1, -1, 1, -100, -140],
      [-1, -1, -1, -1, -3, 1, -1, -1, -1, -1],
      [1, 1, -3, -1, 1, -6, -1, -3, 1, 1],
      [1, -1, 1, -1, -1, -1, -1, 1, -1, 1],
      [1, -6, 1, -1, -1, -1, -1, 1, -6, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #31 */
  {
    moves: 20,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1001, 1001, 1001, 1001, 1001, 1001, 1, 1],
      [1, 1, 1001, 1001, 1001, 1001, 1001, 1001, 1, 1],
      [1, 1, 1, 1001, 1001, 1001, 1001, 1, 1, 1],
      [1, 1, 1, 1001, 1001, 1001, 1001, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, -6, 1, 1],
      [1, 1, 1, -3, -3, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #32 */
  {
    moves: 20,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 1
    },
    size: {
      x: 10,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, -4, 1001, 1001, 1001, 1001, 1001, 1001, -4, 1],
      [1, -4, 1001, 1001, 1001, 1001, 1001, 1001, -4, 1],
      [1, 1, -4, 1001, 1001, 1001, 1001, -4, 1, 1],
      [1, 1, 1, -4, -4, -4, -4, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, -6, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, -3, -3, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #33 */
  {
    moves: 25,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 1
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1001, 1001, 1001, 1001, 1001, 1, 1, 1],
      [1001, 1001, 1001, 1001, -4, -4, -4, 1001, 1001, 1001, 1001],
      [1001, 1001, -4, -4, 1, -3, 1, -4, -4 , 1001, 1001],
      [1, 1, -6, 1, 1, -3, 1, 1, -6, 1, 1],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #34 */
  {
    moves: 20,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 1
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1001, 1001, 1001, 1, 1001, 1001, 1001, 1, 1],
      [1, 1, 1001, 1, -4, -4, -4, 1, 1001, 1, 1],
      [1, 1, 1001, -4, 1001, 1001, 1001, -4, 1001, 1, 1],
      [1, 1, 1, -4, 1001, -1, 1001, -4, 1, 1, 1],
      [1, 1, 1, -4, 1001, 1001, 1001, -4, 1, 1, 1],
      [1, 1, 1, 1, -4, -4, -4, 1, 1, 1, 1],
      [-3, 1, 1, 1, 1, -3, 1, 1, 1, 1, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #35 */
  {
    moves: 35,
    opponent: {
      weapon: 5,
      health: 200,
      speed: 1
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1001, 1001, 1001, 1001, 1001, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1001, 1001, 1001, 1001],
      [1, 1001, 1001, 1001, 1, 1, 1, 1, 1, 1, 1],
      [1, 1001, 1001, 1001, 1, 1001, 1001, 1001, 1001, 1001, 1001],
      [1, 1, 1, 1, 1, 1, 1, -3, 1, 1, 1],
      [1001, 1001, 1001, 1001, -3, 1, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -6, 1001, 1001, 1001, 1, 1],
      [1, 1, 1, 1, 1, 1, 1001, 1001, 1001, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #36 */
  {
    moves: 30,
    opponent: {
      weapon: 5,
      health: 200,
      speed: 1
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1001, 1001, 1, 1, 1, 1, 1, 1001, 1001, 1],
      [1, 1001, 1, 1, 1, 1, 1, 1, 1, 1001, 1],
      [1, 1, 1, 1001, 1001, 1001, 1001, 1001, 1, 1, 1],
      [1, 1, 1, -3, 1, 1001, -3, 1, 1, 1, 1],
      [1, 1001, 1001, 1001, 1, 1001, 1, 1001, 1001, 1001, 1],
      [1, 1001, 1, 1, 1, 1001, 1, 1, 1, 1001, 1],
      [1, 1001, 1, 1, 1, -3, 1, 1, 1, 1001, 1],
      [1, 1001, 1001, 1001, 1, 1, 1, 1001, 1001, 1001, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #37 */
  {
    moves: 30,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 1
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1, 1],
      [1, 1, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, -1, -1, -1, 1, -1, -1, -1, 1, 1],
      [1, 1, -1, 1001, 1, -6, 1, 1001, -1, 1, 1],
      [1, 1, -1, 1001, 1, 1, 1, 1001, -1, 1, 1],
      [1, 1, -3, 1001, 1, -1, 1, 1001, -3, 1, 1],
      [1, 1, 1, 1, -1, -1, -1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #38 */
  {
    moves: 30,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1001, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1001],
      [1001, 1001, -1, 1, 1, 1, 1, 1, -1, 1001, 1001],
      [1001, 1001, 1001, -1, 1, 1, 1, -1, 1001, 1001, 1001],
      [1001, 1001, 1001, 1001, -1, -1, -1, 1001, 1001, 1001, 1001],
      [1001, 1001, 1001, 1001, -1, -1, -1, 1001, 1001, 1001, 1001],
      [1001, 1001, 1001, -1, 1, 1, 1, -1, 1001, 1001, 1001],
      [1001, 1001, -1, -3, 1, 1, 1, -3, -1, 1001, 1001],
      [1001, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1001],
      [1, -6, 1, 1, 1, 1, 1, 1, 1, -3, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #39 */
  {
    moves: 30,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [-5, -5, -5, -5, -1, -1, -1, -5, -5, -5, -5],
      [1, 1001, 1001, 1, -1, -1, -1, 1, 1001, 1001, 1],
      [1, 1001, 1001, 1, -1, -1, -1, 1, 1001, 1001, 1],
      [1, 1001, 1001, 1, -1, -1, -1, 1, 1001, 1001, 1],
      [-4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4],
      [1, 1, 1001, 1001, 1, 1, 1, 1001, 1001, 1, 1],
      [1, 1, 1001, 1001, 1, 1, 1, 1001, 1001, 1, 1],
      [1, 1, 1001, 1001, 1, 1, 1, 1001, 1001, 1, 1],
      [1, 1, -3, 1, 1, -6, 1, 1, -3, 1, 1],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #40 */
  {
    moves: 30,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [1, 1, 1, -5, -5, -5, -5, -5, 1, 1, 1],
      [1, 1, -4, 1, -4, -4, -4, 1, -4, 1, 1],
      [1, 1, 1, 1, -1, -1, -1, 1, 1, 1, 1],
      [1001, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1001],
      [1001, 1, -4, -4, -4, 1001, -4, -4, -4, 1, 1001],
      [1001, -4, -4, -4, 1, 1001, 1, -4, -4, -4, 1001],
      [1001, 1, -1, -1, 1, 1001, 1, -1, -1, 1, 1001],
      [1001, 1, -1, -1, 1, 1001, 1, -1, -1, 1, 1001],
      [1001, 1, -3, -3, 1, 1001, 1, -6, -3, 1, 1001],
      [1001, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1001],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #41 */
  {
    moves: 30,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, -4, 1, -4, 1, 1, 1, 1],
      [1, 1, -4, -4, 1, -4, 1, -4, -4, 1, 1],
      [1, 1, -1, -1, -1, -1, -1, -1, -1, 1, 1],
      [1, 1, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1, 1],
      [-1, -1, 1001, 1001, 1001, -6, 1001, 1001, 1001, -1, -1],
      [1, -3, 1001, 1001, 1001, 1001, 1001, 1001, 1001, -3, 1],
      [1, 1, -1, -1, -1, -1, -1, -1, -1, 1, 1],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #42 */
  {
    moves: 30,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1],
      [1, -1, 1001, 1001, 1001, 1001, 1001, 1001, 1001, -1, 1],
      [1, 1, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1, 1],
      [1, -1, -1, 1001, 1001, 1001, 1001, 1001, -1, -1, 1],
      [1, 1, 1, -4, -4, -4, -4, -4, 1, 1, 1],
      [1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1],
      [1, -1, 1, 1, 1, -6, 1, 1, 1, -1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #43 */
  {
    moves: 30,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-2, 1, 1, 1, 1, 1, 1, 1, 1, 1, -2],
      [-1, -2, -2, -3, 1, 1, -3, 1, -3, -2, -1],
      [-1, -1, -1, -2, -3, 1001, 1, 2, -1, -1, -1],
      [-1, 1, -1, -1, -2, 1001, -2, -1, -1, 1, -1],
      [1, 1, 1, -1, -1, 1001, -1, -1, 1, 1, 1],
      [-1, 1, -1, -1, 1001, 1001, 1001, -1, -1, 1, -1],
      [-1, -1, -1, 1001, 1001, -6, 1001, 1001, -1, -1, -1],
      [1, 1, 1001, 1001, 1, 1, 1, 1001, 1001, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #44 */
  {
    moves: 30,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [-5, -5, -5, -5, -5, -5, -5, 1-5, -5, -5, -5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, 1, -6, 1, -1, -1, -1, -1],
      [1001, 1001, 1001, -1, 1, 1, 1, -1, 1001, 1001, 1001],
      [1001, 1001, 1001, -1, -1, -1, -1, -1, 1001, 1001, 1001],
      [1001, 1001, 1001, -1, 1, 1, 1, -1, 1001, 1001, 1001],
      [-1, -1, -1, -1, -3, -3, -3, -1, -1, -1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #45 */
  {
    moves: 30,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, -1, -1, -1, -1, -1, -1, -1, 1, 1],
      [1, 1, -1, -1, -1, -1, -1, -1, -1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, -6, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, -1, 1001, -1003, -1003, -1003, 1001, -1, 1, 1],
      [1, 1, -1, 1001, 1001, 1001, 1001, 1001, -1, 1, 1],
      [1, 1, -1, -1, -1, -1, -1, -1, -1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #46 */
  {
    moves: 30,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, 1001, 1001, 1001, 1001, 1001, 1001, 1001, -1, -1],
      [-1, -1, 1001, 1001, 1001, 1001, 1001, 1001, 1001, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [1, 1, 1, 1, -3, -1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1],
      [-3, 1, 1, 1, 1, -1, -6, 1, 1, 1, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #47 */
  {
    moves: 30,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1001],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1001, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1001, -1, -1],
      [1, 1, 1, -6, 1, 1, 1, 1001, -1, -1, 1001],
      [1, 1, 1, 1, 1, 1, 1001, -1, -1, 1001, 1],
      [1, 1, 1, 1, 1, 1001, -1, -1, 1001, 1, 1],
      [1, 1, -1, 1, 1001, -1, -1, 1001, 1, 1, 1],
      [1, 1, 1, 1001, -1, -1, 1001, 1, 1, 1, 1],
      [-3, -3, -3, -1, -1, 1001, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #48 */
  {
    moves: 30,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [1, 1, 1, 1, -1, -1, -1, 1, 1, 1, 1],
      [1001, 1001, 1001, 1001, -1, -1, -1, 1001, 1001, 1001, 1001],
      [1001, 1001, 1001, 1001, -1, -1, -1, 1001, -1005, 1001, 1001],
      [1001, 1001, 1001, 1001, -1, -1, -1, 1001, 1001, 1001, 1001],
      [-1, -1, -1, -1, -1, -1004, -1, -1, -1, -1, -1],
      [-1, -3, -1, -1, -1100, 1001, -1100, -1, -1, -3, 1],
      [-1, -1, -1, 1, 1, -1010, 1, 1, -1, -1, -1],
      [-1, -1, 1, 1, 1, -1003, 1, 1, 1, -1, -1],
      [1, 1, 1, 1, 1001, 1001, 1001, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1001, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #49 */
  {
    moves: 30,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [-1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
      [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1],
      [1, 1, 1, 1001, 1, 1001, 1, 1001, 1, 1, 1],
      [1, 1, 1001, 1001, 1, 1001, 1, 1001, 1001, 1, 1],
      [1, 1, 1, 1, 1, 1001, 1, 1, 1, 1, 1],
      [1, 1, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1, 1],
      [-1, 1, 1001, 1, 1001, 1, 1001, 1, 1001, 1, -1],
      [-1, -1, -3, -1, -3, -1, -3, -1, -6, -1, -1],
      [-1, -1, 1, -1, 1, -1, 1, -1, 1, -1, -1],
      [-1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #50 */
  {
    moves: 30,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 10
    },
    scrolls: [3],
    matrix: [
      [-1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1],
      [-1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
      [1, 1, 1, 1, 1, 1001, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1001, 1001, 1001, 1, 1, 1, 1],
      [1, 1, 1, 1001, 1001, -1006, 1001, 1001, 1, 1, 1],
      [-1, -1, 1, 1, 1001, 1001, 1001, 1, 1, -1, -1],
      [-1, -1, -1, 1, 1, -1003, 1, 1, -1, -1, -1],
      [1, 1, -1, -1, 1, 1, 1, -1, -1, 1, 1],
      [1, 1, -3, -1, 1, 1, 1, -1, -3, 1, 1],
      [1, 1, -1, -1, 1, 1, 1, -1, -1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #51 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4],
      [1, 1, 1, 1, 1, 1, -6, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-4, -4, -4, 1, -4, -4, -4, 1, -4, -4, -4],
      [-4, -3, -4, 1, -4, -3, -4, 1, -4, -3, -4],
      [-4, -4, -4, 1, -4, -4, -4, 1, -4, -4, -4],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #52 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-4, -4, -4, -4, -4, -1, -5, -5, -5, -5, -5],
      [-4, -4, -4, -4, -4, -1, -5, -5, -5, -5, -5],
      [1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1],
      [1, -6, 1, 1, 1, -1, 1, -3, 1, 1, 1],
      [1, 1, 1, -3, 1, -1, 1, 1, 1, -3, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #53 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, -5, -5, -5, -5, -5, 1, 1, 1],
      [1, 1, -5, -4, -4, -4, -4, -4, -5, 1, 1],
      [1, 1, -5, -4, -3, -3, -3, -4, -5, 1, 1],
      [1, 1, -5, -4, -4, -4, -4, -4, -5, 1, 1],
      [1, 1, 1, -5, -5, -5, -5, -5, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #54 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-4, -5, -5, -5, -5, -5, -5, -5, -5, -5, -4],
      [1, -4, 1, 1, 1, 1, 1, 1, 1, -4, 1],
      [1, 1, -4, -4, -4, 1, -4, -4, -4, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, -6, 1, 1, 1, 1, 1, 1],
      [1, 1, -3, 1, 1, -3, 1, 1, -3, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #55 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-5, -5, -4, 1, 1, 1, 1, 1, -4, -5, -5],
      [-5, -5, -4, 1, 1, 1, 1, 1, -4, -5, -5],
      [-4, -4, -4, 1, 1, 1, 1, 1, -4, -4, -4],
      [1, 1, 1, 1, 1, -6, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4],
      [1, -3, 1, 1, 1, -3, 1, 1, 1, -3, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #56 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-5, 1, 1, -4, -4, -4, -4, -4, 1, 1, -5],
      [-5, -1, 1, 1, 1, 1, 1, 1, 1, -1, -5],
      [-5, -1, 1, 1, 1, 1, 1, 1, 1, -1, -5],
      [-5, -1, 1, 1, 1, 1, 1, 1, 1, -1, -5],
      [-5, -1, 1, 1, 1, -3, 1, 1, 1, -1, -5],
      [-5, -1, 1, 1, 1, 1, 1, 1, 1, -1, -5],
      [-5, -1, -3, 1, 1, -6, 1, 1, -3, -1, -5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #57 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1],
      [1, 1, -1, -1, 1, -6, 1, -1, -1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-4, 1, 1, 1, 1, -4, 1, 1, 1, 1, -4],
      [-3, -4, -1, -1, -4, -3, -4, -1, -1, -4, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #58 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, -4, 1, -4, 1, -4, 1, -4, 1, 1],
      [1, -1, -3, -1, -3, -1, -3, -1, -6, -1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #59 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, -1, -4, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1],
      [1, 1, -1, -1, -1, 1, 1, 1, 1, 1, 1],
      [1, 1, -1, -4, 1, 1, 1, 1, -1, 1, 1],
      [-1, -1, -1, 1, 1, 1, -3, -1, -1, 1, 1],
      [-4, 1, 1, 1, 1, 1, -1, -1, -4, 1, 1],
      [1, 1, 1, 1, -3, 1, 1, 1, 1, -3, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #60 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-4, 1, 1, 1, 1, 1, 1, 1, 1, 1, -4],
      [-1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
      [-1, -1, -1, -4, -1, -1, -1, -4, -1, -1, -1],
      [-1, -1, -1, -4, -1, -1, -1, -4, -1, -1, -1],
      [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1],
      [-3, 1, 1, -6, 1, 1, 1, -3, 1, 1, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #61 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1],
      [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
      [1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1],
      [-1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
      [1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1],
      [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1],
      [-3, 1, 1, 1, -6, -1, -3, 1, 1, 1, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #62 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1],
      [1, 1, -1, -1, 1, 1, 1, -1, 1, 1, 1],
      [-3, -1, -1, -4, 1, 1, 1, -1, 1, 1, 1],
      [-1, -1, -4, 1, 1, 1, -1, -1, 1, 1, 1],
      [1, 1, 1, 1, 1, -1, -1, -4, 1, 1, 1],
      [1, 1, 1, -3, -1, -1, -4, 1, 1, 1, 1],
      [1, 1, 1, -1, -1, 1, 1, -3, 1, 1, -6],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #63 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [2,5],
    matrix: [
      [-1, -1, -1, -5, -1, -1, -1, -5, 1, 1, 1],
      [-1, -1, -1, 1, 1, 1, 1, 1, 1, -1, -1],
      [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1001, 1001, 1001, 1001, 1001, -6, 1001, 1001, 1001, 1001, 1001],
      [-1, 1001, 1001, 1001, 1001, -1, 1001, 1001, 1001, 1001, -1],
      [-1, -1, 1, 1, -1, -1, -1, 1, 1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [1, 1, -1, -1, 1001, 1001, 1001, -1, -1, 1, 1],
      [1, 1, -1, -1, 1001, 1001, 1001, -1, -1, 1, 1],
      [1, 1, -1, -1, 1001, 1001, 1001, -1, -1, 1, 1],
      [1, 1, 1, 1, -3, -3, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #64 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [5,2],
    matrix: [
      [-5, -1, -1, -1, -5, -5, -5, -1, -1, -1, -5],
      [1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1],
      [1, 1, 1, 1001, 1, 1, 1, 1001, 1, 1, 1],
      [1, 1, 1001, 1001, 1001, 1, 1001, 1001, 1001, 1, 1],
      [1, -1, 1, 1001, 1, 1, 1, 1001, 1, -1, 1],
      [-1, -1, -1, -4, -4, -4, -4, -4, -1, -1, -1],
      [1, -1, 1001, 1001, 1001, 1001, 1001, 1001, 1001, -1, 1],
      [1, 1, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1, 1],
      [1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1],
      [1, 1, 1, -1, 1, -6, 1, -1, 1, 1, 1],
      [1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-5, -1, 1, 1, 1, -1, 1, 1, 1, -1, -5],
      [-1, -1, -1, -3, -1, -3, -1, -3, -1, -1, -1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #65 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [5,2],
    matrix: [
      [-1, -1, -5, -5, -5, -5, -5, -5, -5, -1, -1],
      [-1, -1, -4, 1, 1, 1, 1, 1, -4, -1, -1],
      [-1, -1, -4, 1, 1001, 1001, 1001, 1, -4, -1, -1],
      [-1, -2, -4, 1, 1001, 1001, 1001, 1, -4, -2, -1],
      [-1, -4, 1, 1001, 1001, 1001, 1001, 1001, 1, -4, -1],
      [-1, -4, 1, 1001, 1001, 1001, 1001, 1001, 1, -4, -1],
      [-2, -4, 1, 1001, 1001, 1001, 1001, 1001, 1, -4, -2],
      [1, 1, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1, 1],
      [1, 1, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, -6, 1, -3, 1, 1, -3, 1, 1, -3, 1],
      [1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1],
      [1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1],
      [1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #66 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [4,3],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, -4, 1, 1, 1, 1001, 1, 1, 1, -4, -1],
      [-1, 1, 1, 1, 1001, 1001, 1001, 1, 1, 1, -1],
      [-1, 1, 1, 1001, 1001, -1004, 1001, 1001, 1, 1, -1],
      [-1, -1, 1, 1001, -1004, -1004, -1004, -1001, 1, -1, -1],
      [-1, -1, 1, 1001, 1001, 1001, 1001, 1001, 1, -1, -1],
      [-1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
      [-1, -3, 1, -1, -1, -1, -1, -1, 1, -3, -1],
      [-1, 1, 1, -1, -1, -1, -1, -1, 1, 1, -1],
      [-1, 1, 1, 1, -1, -1, -1, 1, 1, 1, -1],
      [1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1],
      [1, 1, 1, -3, 1, 1, 1, -6, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #67 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, -6, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4],
      [-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1],
      [-3, -1, 1, -1, 1, -1, 1, -1, 1, -1, -3],
      [-1, 1, -1, 1, -1, -3, -1, 1, -1, 1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #68 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-5, 1, 1, 1, 1, 1, 1, 1, 1, 1, -5],
      [1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1],
      [1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1],
      [1, 1, -1, 1, 1, -6, 1, 1, -1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, -1, -1, -1, 1, 1, 1, -1, -1, -1, 1],
      [1, 1, 1, 1, -3, -3, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #69 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1],
      [1, -4, 1, -4, 1, -4, 1, -4, 1, -4, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-4, -4, 1, 1, 1, -4, 1, 1, 1, -4, -4],
      [-3, -4, 1, 1, -4, -3, -4, 1, 1, -4, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #70 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-2010, -1, 1, 1, 1, 1, 1, 1, 1, -1, -2010],
      [1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1],
      [-1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1],
      [-1, 1, 1, 1, 1, 1, -6, 1, 1, 1, -1],
      [-4, 1, 1, 1, -3, 1, 1, 1, 1, 1, -4],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-3, -1, 1, 1, 1, -1, 1, 1, 1, -1, -3],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #71 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, -4, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -4, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -4, 1, 1, -6, 1, 1],
      [1, 1, 1, 1, -4, -3, -4, 1, 1, 1, 1],
      [1, 1, 1, -4, 1, 1, 1, -4, 1, 1, 1],
      [1, 1, -4, 1, 1, 1, 1, 1, -1, 1, 1],
      [1, -4, -3, 1, 1, 1, 1, 1, -3, -4, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #72 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, -4, 1, 1, 1, 1, -5, -5],
      [1, 1, 1, 1, 1, -4, 1, 1, 1, 1, -5],
      [1, 1, 1, 1, 1, 1, -4, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, -4, 1, 1, 1],
      [1, -1, -6, -1, -3, 1, 1, 1, -4, 1, 1],
      [-1, 1, -1, 1, -1, 1, 1, 1, 1, -4, 1],
      [1, -1, -3, -1, -3, 1, 1, 1, 1, 1, -4],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #73 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1],
      [1, 1, 1, 1, -4, -4, -4, 1, 1, 1, 1],
      [-4, -4, 1, 1, 1, -6, 1, 1, 1, -4, -4],
      [-4, -4, 1, 1, 1, 1, 1, 1, 1, -4, -4],
      [-3, 1, 1, 1, -4, -4, -4, 1, 1, 1, -3],
      [1, 1, 1, 1, 1, -3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #74 */
  {
    moves: 15,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 7
    },
    scrolls: [],
    matrix: [
      [-1, -1, 1, -1, -4100, -1, -4100, -1, 1, -1, -1],
      [-1, 1, 1, 1, -1, 1, -1, 1, 1, 1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, 1, -3, -3, 1, -1, 1, -3, -6, 1, -1],
      [-1, -1, 1, 1, -1, -1, -1, 1, 1, -1, -1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #75 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [3,4],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, -4, 1, 1, 1, 1, 1, 1, 1, -4, 1],
      [-1, 1, -4, 1, 1, 1, 1, 1, -4, 1, -1],
      [-1, -1, 1, -4, 1001, 1, 1001, -4, 1, -1, -1],
      [-1, -1, -1, 1001, -4, 1001, -4, 1001, -1, -1, -1],
      [-1, -1, -1, -1, 1001, -4, 1001, -1, -1, -1, -1],
      [-1, -1, -1, -1, -4, 1001, -4, -1, -1, -1, -1],
      [-1, -1, -1, 1001, 1001, -4, 1001, 1001, -1, -1, -1],
      [-1, -1, 1, 1, 1, 1001, 1, 1, 1, -1, -1],
      [-1, 1, 1, 1, 1001, 1, 1001, 1, 1, 1, -1],
      [1, 1, 1, 1001, 1, -6, 1, 1001, 1, 1, 1],
      [1, 1, 1001, 1, -3, -3, -3, 1, 1001, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #76 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [7],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, -4, -4, -4, 1, 1, 1, 1, 1, 1],
      [1, -4, -4, -4, -4, -4, 1, 1, 1, 1, 1],
      [1, -4, -4, -6, -4, -4, 1, 1, 1, 1, 1],
      [-2, 1, 1, 1, 1, 1, -2, 1, 1, 1, 1],
      [1, -2, 1001, 1001, 1001, -2, 1, -2, 1001, 1001, 1001],
      [1, 1, -2, 1001, -2, 1001, -1003, 1001, -2, 1001, 1001],
      [1, 1, 1, -2, 1, 1001, 1, 1, 1001, -2, 1001],
      [1, 1, 1, 1001, -2, 1001, 1, 1, 1001, 1, -2],
      [1, 1, 1001, 1, 1001, -2, 1001, 1001, 1001, -2, 1],
      [1, 1001, 1, -3, 1, 1001, -2, 1, -2, 1001, 1],
      [1, 1, 1, 1, 1, 1, 1, -2, 1, 1, -3]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #77 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [7],
    matrix: [
      [1, 1, 1, -1, 1, 1, 1, 1, 1, -1, -11],
      [1, 1, 1, -1, 1, 1, 1, 1, 1, -1, -12],
      [1, 1, 1, -1, 1, 1, 1, 1, 1, -1, -12],
      [1, 1, 1, -1, 1, 1, 1, 1, 1, -1, -100],
      [1, 1, 1, -1, 1, 1, 1, 1, 1, -1, -12],
      [1, 1, 1, -1, 1, 1, 1, 1, 1, -1, -10],
      [1, 1, 1, -1, 1, 1, 1, 1, 1, -1, -10],
      [1, 1, 1, -1, 1001, 1001, 1001, 1001, 1001, -1, -14],
      [1, 1, 1, -1, 1001, 1001, 1001, 1001, 1001, -1, -14],
      [1, 1, 1, -1, 1, 1001, 1001, 1001, 1, -1, -130],
      [1, 1, 1, -1, 1, -6, 1001, 1, 1, -1, -14],
      [1, 1, 1, -1, 1001, 1, 1001, 1, 1001, -1, -11],
      [1, 1, 1, -1, 1001, 1, 1, 1, 1001, -1, -11],
      [-3, 1, 1, -1, 1001, 1001, -3, 1001, 1001, -1, -3]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #78 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [7],
    matrix: [
      [1, -1, -1, -1, -1, 1, -1, -1, -1, -1, 1],
      [1, -1, -1, -1, 1, 1, 1, -1, -1, -1, 1],
      [1, -1, -1, 1, 1, 1, 1, 1, -1, -1, 1],
      [1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1001, -1, -1, 1001, 1001, 1001, 1001, 1001, -1, -1, 1001],
      [1001, -1, -1, 1001, 1001, 1001, 1001, 1001, -1, -1, 1001],
      [1, -1, -1, 1001, 1001, -6, 1001, 1001, -1, -1, 1],
      [1, -1, -1, 1001, 1001, 1001, 1001, 1001, -1, -1, 1],
      [1, -1, -1, 1001, 1001, 1001, 1001, 1001, -1, -1, 1],
      [1, -1, -1, 1, 1001, 1, 1001, 1, -1, -1, 1],
      [-3, -1, -1, 1, 1001, -3, 1001, 1, -1, -1, -3]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #79 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [2,5],
    matrix: [
      [-5, -5, 1, 1, -5, -5, -5, 1, 1, -5, -5],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, -4, -1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, -4, -1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, -4, -1, 1, 1],
      [1, 1, 1, 1, -4, -4, -4, -4, -4, 1, 1],
      [1001, 1001, 1001, 1001, -1, -1, -1, -1, -1, 1001, 1001],
      [1001, 1, 1, 1, -1, 1001, 1001, 1001, 1001, 1, 1001],
      [1001, 1, 1, 1, 1001, 1001, 1001, 1001, 1001, 1, 1001],
      [1001, 1, -6, 1001, -4, -4, -4, -4, -4, 1, 1001],
      [1, 1, 1, 1001, -4, -1, -1, -1, -1, 1001, 1001],
      [1, 1001, 1001, 1001, -4, -1, -3, 1, 1, 1, 1],
      [1, 1001, 1001, 1001, -4, -1, -3, 1, 1, 1, 1],
      [1, 1, 1, 1, -4, -1, -3, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #80 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [2,5],
    matrix: [
      [-5, 1, 1, 1, 1, -5, -1, -5, 1, 1, -5],
      [1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1],
      [-4, -4, -4, -4, 1, 1, -1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1],
      [1, 1, -1, -1, -1, -1, 1001, 1001, 1001, 1001, 1001],
      [1, 1001, -1, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1001],
      [1, 1001, -1, 1001, 1001, 1001, 1001, 1001, 1001, 1001, 1],
      [1, 1001, -1, 1001, 1001, 1001, 1001, 1001, 1001, 1, 1],
      [1, 1001, -1, -1, -1, -1, -1, 1001, 1, 1, 1],
      [1, 1001, 1001, 1001, -1, -1, -1, 1001, 1, 1, 1],
      [1, 1, 1, 1001, -1, -1, -1, 1001, -6, 1, 1],
      [1, 1, 1, 1001, -1, -1, -1, 1001, 1, 1, 1],
      [-3, -3, -3, 1001, -1, -1, -1, 1001, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #81 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [4,3],
    matrix: [
      [1, 1, -1, 1, 1, 1, 1, -1, 1, 1, 1],
      [1, 1, -1, 1, 1, 1, 1, -1, 1, 1, 1],
      [1, 1, -1, 1, 1, 1, 1, -1, 1, 1, 1],
      [1, 1, -1, 1, 1, 1, 1, -1, 1001, 1001, 1001],
      [1, 1, -1, 1001, -1, -1, -1, -1, 1001, 1001, 1001],
      [-1, -1, -1, 1001, -1, 1001, 1001, 1001, 1001, 1001, 1001],
      [1001, 1001, 1001, 1001, -1, 1001, 1001, 1001, 1001, 1001, 1001],
      [1001, 1001, 1001, 1001, -1, 1001, 1001, 1001, 1001, 1001, 1001],
      [-1, -1, -1, 1001, -1, 1001, -1006, 1001, 1001, 1001, 1001],
      [1, 1, -1, 1001, -1, -1, -1, -1, 1001, 1001, 1001],
      [1, 1, -1, 1, 1, 1, 1, -1, 1001, 1001, 1001],
      [1, 1, -1, 1, 1, 1, 1, -1, 1, 1, 1],
      [1, 1, -1, 1, 1, 1, 1, -1, 1, 1, 1],
      [1, -3, -1, 1, 1, -3, 1, -1, 1, -3, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #82 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [3,4],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -4, 1, 1, 1, 1, 1],
      [1, 1, 1, -4, 1, 1, 1, -4, 1, 1, 1],
      [1, 1, -4, 1, -1, -1, -1, 1, -4, 1, 1],
      [1, -4, 1, -1, -1, 1001, -1, -1, 1, -4, 1],
      [1, 1, -1, -1, 1001, 1001, 1001, -1, -1, 1, 1],
      [-1, -1, -1, 1001, 1001, 1001, 1001, 1001, 1, 1, 1],
      [1001, 1001, -1, 1001, 1001, 1001, 1001, 1001, -1, 1001, 1001],
      [1001, 1001, -1, 1, 1001, -1006, 1001, 1, -1, 1001, 1001],
      [1001, 1001, -1, 1, 1, 1001, 1, 1, -1, 1001, 1001],
      [1001, -1, -1, -1, 1, 1, 1, -1, -1, -1, 1001],
      [1001, 1001, 1001, -1, 1, 1, 1, -1, 1001, 1001, 1001],
      [1, -3, 1, -1, -1, -3, -1, -1, 1, -3, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #83 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [4,3],
    matrix: [
      [1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, -1, 1001, 1001, 1001, 1001, 1001, 1, 1],
      [1, 1, 1, -1, -1, -1, -1, -1, -1, 1, 1],
      [1, 1, 1001, 1001, 1001, 1001, 1001, 1001, -1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1],
      [1, 1, 1001, 1001, 1001, 1001, 1001, -1003, -1, 1, 1],
      [1, 1, -1, -1, -1, -1, -1, -1, -1, 1, 1],
      [1, 1, -1, 1001, 1001, 1001, 1001, 1001, 1001, 1, 1],
      [1, 1, -1, 1, 1, 1, -6, 1, 1, 1, 1],
      [1, 1, -1, -1003, 1001, 1001, 1001, 1001, 1, 1, 1],
      [1, 1, -1, -1, -1, -1, -1, -1, 1, 1, 1],
      [1, 1, 1001, 1001, 1001, 1001, -1003, -1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #84 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [4,3],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1],
      [1, -1, 1, -4, 1, -4, 1, -4, 1, -1, 1],
      [1, 1, -1, 1, -1, 1, -1, 1, -1, 1, 1],
      [1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1],
      [1, 1, 1, 1001, -1, 1, -1, 1001, 1, 1, 1],
      [1, 1, 1001, 1001, 1001, -1, 1001, 1001, 1001, 1, 1],
      [1, 1001, 1001, 1001, 1001, -1006, 1001, 1001, 1001, 1001, 1],
      [1, 1, 1001, 1001, 1001, -1, 1001, 1001, 1001, 1, 1],
      [1, 1, 1, 1001, -1, -1003, -1, 1001, 1, 1, 1],
      [1, 1, 1, -1, 1001, 1001, 1001, -1, 1, 1, 1],
      [1, 1, -1, 1, 1001, 1001, 1001, 1, -1, 1, 1],
      [1, -1, -3, 1, 1, 1001, 1, 1, -3, -1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #85 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [4,3],
    matrix: [
      [-1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
      [-1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1],
      [1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1],
      [1, -1, -1, 1, 1, 1, 1, 1, -1, -1, 1],
      [1, 1, -1, -1, 1, 1, 1, -1, -1, 1, 1],
      [1, 1, 1, -1, -1, 1001, -1, -1, 1, 1, 1],
      [1, 1, 1, 1001, 1001, -1006, 1001, 1001, 1, 1, 1],
      [1, -1, -1, -1, -1, 1001, -1, -1, -1, -1, 1],
      [1, -1, 1001, 1, -1, 1001, -1, 1, 1001, -1, 1],
      [1, -1, 1001, 1, -1, 1001, -1, 1, 1001, -1, 1],
      [-1, -1, 1001, 1, -1, 1, -1, 1, 1001, -1, -1],
      [1001, 1, -1, -1, -1, 1, -1, -1, -1, 1, 1001],
      [1001, 1, -1, 1001, 1, 1001, 1, 1001, -1, 1, 1001],
      [1001, -3, -1, 1001, 1, -1003, 1, 1001, -1, -3, 1001]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #86 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [4,3],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1],
      [1, 1001, 1001, 1001, -1, -1, -1, 1001, 1001, 1001, 1],
      [1, 1001, 1001, 1001, 1001, -1, 1001, 1001, 1001, 1001, 1],
      [1, 1001, 1001, -1, -1, -1, -1, -1, 1001, 1001, 1],
      [-1, -1, -1, -1, -5, -5, -5, -1, -1, -1, -1],
      [1, 1, 1, 1, 1001, 1001, 1001, 1, 1, 1, 1],
      [1, 1, 1001, 1001, 1001, -1006, 1001, 1001, 1001, 1, 1],
      [1, 1, 1, 1, 1001, 1001, 1001, 1, 1, 1, 1],
      [-1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [1, 1001, 1001, 1, -1, -1, -1, 1, 1001, 1001, 1],
      [1, 1001, -1003, 1001, 1001, -1003, 1001, 1001, -1003, 1001, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #87 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [4,3],
    matrix: [
      [1, -1, -5, 1, 1, -5, 1, 1, -5, -1, 1],
      [1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1],
      [1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1],
      [1, -1, 1001, 1001, 1, 1, 1, 1001, 1001, -1, 1],
      [1, -1, 1001, 1001, 1001, 1, 1001, 1001, 1001, -1, 1],
      [1001, 1001, 1001, 1, 1, 1001, 1, 1, 1001, 1001, 1001],
      [1, 1, 1, 1, 1, 1001, 1, 1, 1, 1, 1],
      [-1, -1, 1, 1001, -3, -1006, 1, 1001, 1, -1, -1],
      [-4, -1, -1, 1001, 1001, 1001, 1001, 1001, -1, -1, -4],
      [-3, -1, -1, -1, 1, 1001, 1, -1, -1, -1, -3],
      [1, 1, -1, -1, -1, 1, -1, -1, -1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #88 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [7],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, -5, 1, 1, 1, 1, 1],
      [1, 1, -4, 1, 1, 1, 1, 1, -4, 1, 1],
      [1, -4, 1, -2, -1, -1, -1, -2, 1, -4, 1],
      [-4, 1, -2, -1, 1, 1, 1, -1, -2, 1, -4],
      [1, -2, -1, 1, 1, -1003, 1, 1, -1, -2, 1],
      [-2, -1, 1, 1, -1003, 1001, -1003, 1, 1, -1, -2],
      [-1, -1, -1, -1, -1, 1001, -1, -1, -1, -1, -1],
      [1001, 1001, -1, 1001, -1, 1001, -1, 1001, -1, 1001, 1001],
      [1001, -1, -1, 1001, -1, 1001, -1, 1001, -1, -1, 1001],
      [1001, -1, 1001, 1001, -1, 1001, -1, 1001, 1001, -1, 1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #89 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [3,4],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1],
      [-1, 1, -1, -1, -1, 1, -1, -1, -1, 1, -1],
      [1, 1, 1, -1, 1, 1001, 1, -1, 1, 1, 1],
      [1, 1, 1001, 1, 1001, 1001, 1001, 1, 1001, 1, 1],
      [1, -1, 1001, 1001, 1001, 1001, 1001, 1001, 1001, -1, 1],
      [1, -1, 1001, 1001, 1, -1006, 1, 1001, 1001, -1, 1],
      [1, -1, 1001, 1, 1, 1001, 1, 1, 1001, -1, 1],
      [1, -1, 1001, 1, 1, 1001, 1, 1, 1001, -1, 1],
      [-5, -1, 1, 1, -1, 1, -1, 1, 1, -1, -5],
      [-1, -1, 1, -1, -1, 1, -1, -1, 1, -1, -1],
      [-1, -1, -3, -1, -1, 1, -1, -1, -3, -1, -1],
      [-1, -1, -1, -1, -1, -3, -1, -1, -1, -1, -1]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  },
  /** Matrix of level #90 */
  {
    moves: 45,
    opponent: {
      weapon: 5,
      health: 250,
      speed: 0
    },
    size: {
      x: 11,
      y: 14
    },
    scrolls: [7],
    matrix: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, -6, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [-1, 1, 1, 1, -1, -1, -1, 1, 1, 1, -1],
      [-1, -1, -3, -1, -1, -1, -1, -1, -3, -1, -1],
      [1001, -1, 1, -1, 1, 1, 1, -1, 1, -1, -1003],
      [1001, 1001, 1, 1, 1, 1, 1, 1, 1, 1001, 1001],
      [1001, -1, 10011, -1, 1, 1, 1, -1, 1001, -1, 1001],
      [-1, -1, 1001, -1, -1, -1, -1, -1, 1001, -1, -1],
      [-1, 1001, 1001, 1001, -1, -1, -1, 1001, 1001, 1001, -1],
      [-1, -1, 1001, -1, -1, -1, -1, -1, 1001, -1, -1],
      [1001, 1001, 1001, 1001, 1001, -1, 1001, 1001, 1001, 1001, 1001]
    ],
    probability: {
      scope: true,
      bonuses: {
        probably: 0,

        horizontal: 0,
        vertical: 0,
        pack: 0,
        bomb: 0
      },
      elements: {
        fire: 20,
        regeneration: 20,
        defence: 20,
        keys: 20,
        run: 20
      }
    }
  }
];
