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

  switch(this.m_Type) {
    case this.m_Types.progress:
    if(Game.tutorial) {
      if(this.m_PlayerTurn) {
        this.onBlowTutorial(element);
      }
    }
    break;
    case this.m_Types.classic:
    case this.m_Types.arcade:
    if(element instanceof Bird) {
      /*Game.sharedScreen().m_SplashEffect1.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);
      Game.sharedScreen().m_SplashEffect1.setOpacity(255);
      Game.sharedScreen().m_SplashEffect1.setColor(Bird.colors[element.m_Id / element.getHorizontalFramesCount()]);
      Game.sharedScreen().m_SplashEffect1.runRecognizeAction(cc.CallFunc.create(Game.sharedScreen().m_SplashEffect1.destroy, Game.sharedScreen().m_SplashEffect1, Game.sharedScreen().m_SplashEffect1), {
        name: 'fade',
        time: 0.02,
        value: 0.0
      });*/

      if(element instanceof BombBird) {
        this.onLost(element);

        this.m_SplashBackground.stopAllActions();
        this.m_SplashBackground.runAction(
          cc.Sequence.create(
            cc.FadeIn.create(0.1),
            cc.DelayTime.create(0.5),
            cc.FadeOut.create(1.0),
            cc.CallFunc.create(this.onLost, this, element)
            )
          );

        for(var i = 0; i < this.m_Birds.getCount(); i++) {
          var bird = this.m_Birds.get(i);

          if(bird.m_Id <= Bird.count * bird.getHorizontalFramesCount()) {
            bird.destroy();
          }
        }

        this.m_ThrowParams.birds.timeElapsed = -3.0;
      } else {
        this.m_SplashBackground.runAction(cc.FadeOut.create(0.02));
        this.m_CurrentBlows++;
      }

      switch(element.m_Id / element.getHorizontalFramesCount()) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        this.m_Results.birds++;
        break;
        case 7:
        this.m_Results.flayers++;
        break;
      }
    } else if(false) {
      //
    }
    break;
  }
};

Game.prototype.onLost = function(element) {
  if(!this.m_GameRunning) return false;

  Sound.sharedSound().play(s_SoundLoseLife);

  switch(this.m_Type) {
    case this.m_Types.classic:
    if(!cc.Browser.isMobile) {
      GamePanel.sharedScreen(this.m_Type, this).getIcons()[3 + this.m_Lifes].setCurrentFrameIndex(0);
    }

    if(++this.m_Lifes >= 3) {
      if(DataManager.sharedManager().get(references.items.bonus2)) {
        Bonus2.create();
      } else {
        this.finishGame();
      }
    } else {

    }
    break;
  }
};

Game.prototype.onKeyDropped = function(element) {
  this.m_Keys.create().setElementPosition(element.getCenterX(), element.getCenterY());
};

Game.prototype.onKeyReceived = function(element) {
  
};

Game.prototype.onGameStart = function() {
  this.m_GameRunning = true;
  this.m_Lifes = 0;

  DataManager.sharedManager().update(references.coins.lives, -1);

  Game.power = DataManager.sharedManager().get(references.weapon) * 12;

  switch(this.m_Type) {
    case this.m_Types.progress:
    this.onLevelStart();
    break;
    case this.m_Types.classic:
    break;
    case this.m_Types.arcade:
    break;
  }
};

Game.prototype.onGameFinish = function() {
  this.m_GameRunning = false;

  Finish.sharedScreen(this).show();
  GamePanel.sharedScreen().hide();

  switch(this.m_Type) {
    case this.m_Types.progress:
    this.onLevelFinish();
    break;
    case this.m_Types.classic:
    break;
    case this.m_Types.arcade:
    break;
  }
};

Game.prototype.onLevelStart = function() {
  ElementsManager.sharedManager().onLevelStart();

  this.m_Catapults.onLevelStart();
  this.m_Target.create();
};

Game.prototype.onLevelFinish = function() {
  ElementsManager.sharedManager().onLevelFinish();
};

Game.prototype.onPreviewStart = function() {
  this.m_GamePreviewRunning = true;

  this.m_PreviewText.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);
};

Game.prototype.onPreviewFinish = function() {
  this.m_GamePreviewRunning = false;

  this.startGame();
};

Game.prototype.onUpdateLevelStart = function() {
  this.m_LevelTimeElapsed = 0;

  this.m_PreviewText.setText('game-level-update');
  this.m_PreviewText.setScale(1.0);
  this.m_PreviewText.setOpacity(255);
  this.m_PreviewText.setVisible(true);
  this.m_PreviewText.setCenterPosition(this.m_PreviewText.getWidth() / 2 + Camera.sharedCamera().coord(20), this.m_PreviewText.getHeight() / 2 + Camera.sharedCamera().coord(20));

  ConfettiBackground.sharedScreen(this).show();
};

Game.prototype.onUpdateLevelFinish = function() {
  this.m_LevelTimeElapsed = 0;

  this.m_PreviewBackground.setZOrder(200);
  this.m_PreviewText.setVisible(false);
};

Game.prototype.onPauseEvent = function() {
  Pause.sharedScreen(this).show();
};

Game.prototype.onShow = function() {
  if(DataManager.sharedManager().get(references.coins.lives) > 0) {
    GamePanel.sharedScreen(this.m_Type, this).show();

    this.clearResults();

    switch(this.m_Type) {
      case this.m_Types.progress:
      this.onPreviewFinish();
      break;
      case this.m_Types.arcade:
      case this.m_Types.classic:
      this.startPreview();
      break;
    }

    DataManager.sharedManager().save(references.info.game, 1);
  } else {
    Lives.sharedScreen(this).show();
  }

  this.m_Level = 1;
  this.m_CurrentBlows = 0;
  this.m_LevelTimeElapsed = 0;
};

Game.prototype.onHide = function() {
  Game.instance = false;
  GamePanel.instance = false;
  ElementsManager.instance = false;
  MatrixManager.instance = false;
};

Game.prototype.onEnterTransitionDidFinish = function() {
  Screen.prototype.onEnterTransitionDidFinish.call(this);
};

Game.prototype.onExitTransitionDidStart = function() {
  Screen.prototype.onExitTransitionDidStart.call(this);

  GamePanel.sharedScreen(this.m_Type, this).hide();
};
