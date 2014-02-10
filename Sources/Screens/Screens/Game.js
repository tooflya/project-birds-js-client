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

Game = Screen.extend({
  m_Types: {
    progress: 0,
    classic: 1,
    arcade: 2
  },
  m_ThrowParameters: [
    {
      time: 0.0,
      timeElapsed: 0.0,
      min: {
        time: 0.0
      },
      max: {
        time: 1.0
      }
    },
    {
      count: 0,
      time: 0.0,
      timeElapsed: 0.0,
      min: {
        count: 1,
        time: 0.0
      },
      max: {
        count: 10,
        time: 1.0
      }
    },
    {
      time: 0.0,
      timeElapsed: 0.0,
      min: {
        time: 0.0
      },
      max: {
        time: 1.0
      }
    }
  ],
  m_GameRunning: false,
  m_GamePreviewRunning: false,
  m_GamePreviewCount: 0,
  m_GamePreviewTime: 0.5,
  m_Lifes: 0,
  ctor: function() {
    this._super(true);

    Game.instance = this;

    this.m_Type = this.m_Types.classic;
    this.m_ThrowParams = this.m_ThrowParameters[this.m_Type];

    this.m_Background = Entity.create(s_GameBackground1, this, true);

    this.m_PreviewBackground = BackgroundColor.create(cc.c4(0, 0, 0, 0), this);

    this.m_Marks = EntityManager.create(1500, Mark.create(), this, 100);
    this.m_Birds = EntityManager.create(50, Bird.create(false, this.getPhysicsWorld()), this, 105);
    this.m_Explosions = EntityManager.create(50, Explosion.create(), this, 110);

    this.m_PreviewText = Text.create(false, this);

    this.m_PreviewText.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);
  },
  startGame: function() {
    this.onGameStart();
  },
  finishGame: function(){
    this.onGameFinish();
  },
  update: function(time) {
    this._super(time);

    this.updateThrower(time);
  }
});

Game.instance = false;
Game.sharedScreen = function() {
  return Game.instance ? Game.instance : new Game();
};
