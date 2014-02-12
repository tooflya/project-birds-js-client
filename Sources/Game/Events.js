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

Game.prototype.onBlow = function(element) {
  if(!this.m_GameRunning) return false;
};

Game.prototype.onLost = function(element) {
  if(!this.m_GameRunning) return false;return;

  switch(this.m_Type) {
    case this.m_Types.classic:
    GamePanel.sharedScreen(this.m_Type, this).getIcons()[3 + this.m_Lifes].setCurrentFrameIndex(0);
    if(++this.m_Lifes >= 3) {
      this.finishGame();

      this.m_Birds.clear();
    } else {

    }
    break;
  }
};

Game.prototype.onGameStart = function() {
  this.m_GameRunning = true;
  this.m_Lifes = 0;
};

Game.prototype.onGameFinish = function() {
  this.m_GameRunning = false;

  Finish.sharedScreen(this).show();
  GamePanel.sharedScreen().hide();
};

Game.prototype.onPreviewStart = function() {
};

Game.prototype.onPreviewFinish = function() {
  this.startGame();
};

Game.prototype.onUpdateLevelStart = function() {
  this.m_LevelTimeElapsed = 0;
};

Game.prototype.onUpdateLevelFinish = function() {
  this.m_LevelTimeElapsed = 0;
};

Game.prototype.onPauseEvent = function() {
  Pause.sharedScreen(this).show();
};

Game.prototype.onShow = function() {
  GamePanel.sharedScreen(this.m_Type, this).show();

  this.startPreview();
};

Game.prototype.onHide = function() {
  Game.instance = false;
};

Game.prototype.onEnterTransitionDidFinish = function() {
  //this._super();
};

Game.prototype.onExitTransitionDidStart = function() {
  Screen.prototype.onExitTransitionDidStart.call(this);

  GamePanel.sharedScreen(this.m_Type, this).hide();
};
