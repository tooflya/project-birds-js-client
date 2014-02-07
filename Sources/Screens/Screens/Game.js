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
  types: {
    progress: 0,
    classic: 1,
    arcade: 2
  },
  m_Type: 1,
  m_GameRunning: false,
  m_GamePreviewRunning: false,
  m_GamePreviewCount: 0,
  m_GamePreviewTime: 0.5,
  ctor: function() {
    this._super(true);

    Game.instance = this;

    this.m_Background = Entity.create(s_GameBackground1, this, true);

    this.m_PreviewBackground = BackgroundColor.create(cc.c4(0, 0, 0, 0), this);

    this.m_Marks = EntityManager.create(1000, Mark.create(), this, 100);
    this.m_Birds = EntityManager.create(30, Bird.create(false, this.getPhysicsWorld()), this, 105);
    this.m_Explosions = EntityManager.create(30, Explosion.create(), this, 110);

    this.m_PreviewText = Text.create(false, this);

    this.m_PreviewText.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);
  },
  onTouch: function(e) {
    this.throwBird();
    this.throwBird();
    this.throwBird();
    this.throwBird();
    this.throwBird();
  },
  startGame: function() {
    //Finish.sharedScreen(this).show();
  },
  onGamePreviewFinished: function() {
    this.m_GameRunning = true;
  },
  startGamePreview: function() {
    this.m_PreviewText.setScale(0.5);
    this.m_PreviewText.setOpacity(255);
    this.m_PreviewText.setVisible(true);

    switch(this.m_GamePreviewCount) {
      case 0:
      this.m_PreviewText.setVisible(false);
      this.m_PreviewBackground.runRecognizeAction(cc.CallFunc.create(this.startGamePreview, this, this), {
        name: 'fade',
        time: 1.0,
        value: 200
      });
      break;
      case 1:
      this.m_PreviewText.setText('game-preview-0');
      this.m_PreviewText.runRecognizeAction(cc.CallFunc.create(this.startGamePreview, this, this), [{
        name: 'scale',
        time: this.m_GamePreviewTime,
        value: 1.0
      }, {
        name: 'fade',
        time: this.m_GamePreviewTime,
        value: 0.0
      }]);
      break;
      case 2:
      this.m_PreviewText.setText('game-preview-1');
      this.m_PreviewText.runRecognizeAction(cc.CallFunc.create(this.startGamePreview, this, this), [{
        name: 'scale',
        time: this.m_GamePreviewTime,
        value: 1.0
      }, {
        name: 'fade',
        time: this.m_GamePreviewTime,
        value: 0.0
      }]);
      break;
      case 3:
      this.m_PreviewText.setVisible(false);
      this.m_PreviewBackground.runRecognizeAction(cc.CallFunc.create(this.startGame, this, this), {
        name: 'fade',
        time: 1.0,
        value: 0
      });
      this.m_GamePreviewCount = -1;
      break;
    }

    this.m_GamePreviewCount++;
  },
  throwBird: function() {
    this.m_Birds.create().throwup();
  },
  proceedGame: function() {
    if(!this.m_GameRunning) return;

    //
  },
  onShow: function() {
    this._super();

    GamePanel.sharedScreen(this.m_Type, this).show();

    this.startGamePreview();
  },
  onHide: function() {
    this._super();

    Game.instance = false;
  },
  onExitTransitionDidStart: function() {
    GamePanel.sharedScreen(this.m_Type, this).hide();

    this._super();
  },
  onPauseEvent: function() {
    Pause.sharedScreen(this).show();
  },
  update: function(time) {
    this._super(time);
  }
});

Game.instance = false;
Game.sharedScreen = function() {
  return Game.instance ? Game.instance : new Game();
};
