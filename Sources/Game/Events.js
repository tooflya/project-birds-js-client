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
    if(!Game.network) {
      if(!cc.Browser.isMobile) {
        GamePanel.sharedScreen(this.m_Type, this).getIcons()[3 + this.m_Lifes].setCurrentFrameIndex(0);
      }
    }

    if(++this.m_Lifes >= 3) {
      if(DataManager.sharedManager().get(false, references.items.bonus2)) {
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
  this.m_StarsPoints = 0;

  Game.power = DataManager.sharedManager().get(false, references.weapon) * 12;

  switch(this.m_Type) {
    case this.m_Types.progress:
    if(!Game.network || Game.server) {
      this.onLevelStart();
    }
    break;
    case this.m_Types.classic:
    break;
    case this.m_Types.arcade:
    break;
  }
};

Game.prototype.onGameFinish = function(state) {
  this.m_GameState = state;
  this.m_GameRunning = false;

  Finish.sharedScreen(this).show();

  if(!Game.network) {
    GamePanel.sharedScreen().hide();
  }

  switch(this.m_Type) {
    case this.m_Types.progress:
    if(!Game.network) {
      Game.instance.updateScore(Game.sharedScreen().m_CurrentBlows * 500);
    }
    break;
    case this.m_Types.classic:
    break;
    case this.m_Types.arcade:
    break;
  }
};

Game.prototype.onLevelStart = function(matrix) {
  ActionsManager.sharedManager().onLevelStart();
  ElementsManager.sharedManager().onLevelStart(matrix);

  this.m_Catapults.onLevelStart();
  this.m_Target.create();

  if(!Game.network) {
    if(Game.tutorial) {
      GamePanel.instance.starred();
      GamePanel.instance.starred();
      GamePanel.instance.starred();
    }
  } else {
    if(Game.server) {
      NetworkManager.sharedInstance().emit('data', {
        e: 0,
        matrix: ElementsManager.sharedManager().getMatrix()
      });

      this.m_PlayerTurn = false;
    } else {
      this.m_PlayerTurn = true;
    }
  }
};

Game.prototype.onLevelFinish = function(state) {
  this.finishGame(state);
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
  this.m_Level = 1;
  this.m_BonusKeys = 0;
  this.m_BonusKeysTemp = 0;
  this.m_CurrentBlows = 0;
  this.m_LevelTimeElapsed = 0;
  this.m_PlayerTurn = Game.tutorial;
  this.m_GameRunning = false;
  this.m_GamePreviewRunning = false;

  this.stopAllActions();

  this.resetScore();

  switch(this.m_Type) {
    case this.m_Types.progress:
    MatrixManager.sharedManager().m_Busy = true;

    if(Game.network) {
      this.m_InputBackground.setVisible(false);
    }
    break;
    case this.m_Types.classic:
    break;
    case this.m_Types.arcade:
    break;
  }

  DataManager.sharedManager().get(true, references.coins.lives, {
    success: function(value) {
      if(value > 0 || Game.tutorial) {
        if(!Game.network) {
          GamePanel.sharedScreen(Game.instance.m_Type, Game.instance).show();
        } else {
          MenuPanel.sharedScreen(Game.instance).show();
        }

        DataManager.sharedManager().update(true, references.coins.lives, -1, {
          success: function() {
            if(!Game.network) {
              GamePanel.instance.updateData();
            }
          }
        });

        Game.instance.clearResults();

        switch(Game.instance.m_Type) {
          case Game.instance.m_Types.progress:
          Game.instance.m_CurrentBlows = Game.tutorial ? Game.instance.m_TutorialMatrix.moves : Game.instance.m_LevelsMatrixes[Game.level - 1].moves;

          Game.instance.onPreviewFinish();
          break;
          case Game.instance.m_Types.arcade:
          case Game.instance.m_Types.classic:
          Game.instance.startPreview();
          break;
        }

        DataManager.sharedManager().set(true, references.info.game, 1);
      } else {
        Lives.sharedScreen(Game.instance).show();
      }
    }
  });
};

Game.prototype.onHide = function() {
  NetworkManager.sharedInstance().unsubscribe();

  Game.instance = false;
  GamePanel.instance = false;
  ElementsManager.instance = false;
  MatrixManager.instance = false;
};

Game.prototype.onFinishShow = function() {
  switch(this.m_Type) {
    case this.m_Types.progress:
    ElementsManager.instance.clear();
    MatrixManager.instance.clear();

    ElementsManager.instance = false;
    MatrixManager.instance = false;
    ActionsManager.instance = false;

    this.m_ElementsExplanationTexts.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height + Camera.sharedCamera().coord(200));
    this.m_PreviewBackground.setOpacity(0);

    this.m_Ground.setZOrder(301);
    this.m_Target.setZOrder(302);
    this.m_Notifications.m_Notification1.setZOrder(500);
    this.m_Notifications.m_Notification2.setZOrder(500);
    this.m_PreviewBackground.setZOrder(200, 200)

    this.m_Target.destroy();
    this.m_Catapults.onLevelFinish();

    if(Game.tutorial) {
      this.m_TutorialState = 1;
      this.m_TutorialRunning = true;
      this.m_PlayerTurn = true;

      this.m_TutorialTextArea.setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(300), Camera.sharedCamera().coord(480));
    }
    break;
    case this.m_Types.classic:
    break;
    case this.m_Types.arcade:
    break;
  }

  if(this.m_NetworkBackground) {
    this.m_NetworkBackground.removeFromParent();
    this.m_NetworkDecorations.removeFromParent();
    this.m_NetworkBackgroundLoader.removeFromParent();
    this.m_NetworkBackgroundText.removeFromParent();

    this.m_NetworkBackground = false;
    this.m_NetworkDecorations = false;
    this.m_NetworkBackgroundLoader = false;
    this.m_NetworkBackgroundText = false;
  }
};

Game.prototype.onEnterTransitionDidFinish = function() {
  Screen.prototype.onEnterTransitionDidFinish.call(this);
};

Game.prototype.onExitTransitionDidStart = function() {
  Screen.prototype.onExitTransitionDidStart.call(this);

  GamePanel.sharedScreen(this.m_Type, this).hide();

  Music.sharedMusic().play(s_Music1, true);
};
