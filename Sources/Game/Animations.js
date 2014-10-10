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

Game.prototype.onTurnChange = function() {
  if(!this.m_GameRunning) return false;

  if(Game.instance.m_CurrentBlows <= 0 && !this.m_PlayerTurn) {
    this.m_PlayerTurn = true;

    Moves.sharedScreen(this).show();

    return false;
  }

  this.onTurnChangeStart();

  var notification;

  switch(MatrixManager.sharedManager().getType()) {
    case MatrixManager.types.bubbles:
    notification = this.m_Notifications.m_Notification4;
    break;
    case MatrixManager.types.war:
    if(this.m_PlayerTurn) {
      notification = this.m_Notifications.m_Notification2;
    } else {
      notification = this.m_Notifications.m_Notification1;
    }
    break;
  }

  notification.create();
  notification.setOpacity(255.0);
  notification.setScale(0.0);
  notification.runAction(
    cc.Sequence.create(
      cc.DelayTime.create(0.7),
      cc.FadeOut.create(0.5)
    )
  );
  notification.runAction(
    cc.Sequence.create(
      cc.CallFunc.create(MatrixManager.sharedManager().busy, MatrixManager.sharedManager()),
      cc.EaseElasticOut.create(
        cc.ScaleTo.create(0.5, 1.0)
      ),
      cc.ScaleTo.create(0.2, 1.2),
      cc.EaseExponentialIn.create(
        cc.ScaleTo.create(0.5, 10.0)
      ),
      cc.CallFunc.create(notification.destroy, notification),
      cc.CallFunc.create(this.m_PlayerTurn ? MatrixManager.sharedManager().disable : MatrixManager.sharedManager().enable, MatrixManager.sharedManager()),
      cc.CallFunc.create(this.onTurnChangeFinish, this),
      false
    )
  );

  this.m_PlayerTurn = !this.m_PlayerTurn;

  Sound.sharedSound().play(s_SoundSwitch);

  return this.m_PlayerTurn;
};

Game.prototype.onTurnChangeStart = function() {
  this.m_PreviewBackground.runAction(cc.FadeTo.create(0.5, 200));

  if(Game.tutorial) {
    this.onTurnChangeStartTutorial();
  }
};

Game.prototype.onTurnChangeFinish = function() {
  this.m_PreviewBackground.runAction(cc.FadeTo.create(0.5, 0));

  this.runAction(
    cc.Sequence.create(
      cc.CallFunc.create(MatrixManager.instance.addBoxes, MatrixManager.instance),
      cc.CallFunc.create(MatrixManager.instance.addChange, MatrixManager.instance),
      false
    )
  );

  new PausableTimeout(function() {
    if(!MatrixManager.sharedManager().computer(false, true)) {
      this.onNoMoreCombinations();
    } else {
      if(Game.tutorial) {
        this.onTurnChangeFinishTutorial();
      }

      MatrixManager.sharedManager().unbusy();

      Game.instance.m_LastActionTime = Date.now();
    }
  }.bind(this), 500);
};

Game.prototype.onSimpleTurnChange = function() {
  if(MatrixManager.sharedManager().getType() == MatrixManager.types.bubbles) {
    if(Game.instance.m_CurrentBlows <= 0) {
      Moves.sharedScreen(this).show();

      return true;
    }

    if(MatrixManager.sharedManager().getBubblesCount() < 1) {
      ActionsManager.sharedManager().clear();

      MatrixManager.sharedManager().setType(MatrixManager.types.war);

      this.m_PlayerTurn = false;

      this.onTurnChange();

      return true;
    } else {
      if(MatrixManager.sharedManager().getVisibleBubblesCount() < 1) {
        ElementsManager.sharedManager().moveDown();
      }
    }

    this.runAction(
      cc.Sequence.create(
        cc.CallFunc.create(MatrixManager.instance.addBoxes, MatrixManager.instance),
        cc.CallFunc.create(MatrixManager.instance.addChange, MatrixManager.instance),
        false
      )
    );

    new PausableTimeout(function() {
      if(!MatrixManager.sharedManager().computer(false, true)) {
        this.onNoMoreCombinations();
      } else {
        MatrixManager.sharedManager().enable();
        MatrixManager.sharedManager().unbusy();

        Game.instance.m_LastActionTime = Date.now();
      }
    }.bind(this), 500);

    return true;
  }

  return false;
};

Game.prototype.onExtraMove = function() {
  if(!this.m_GameRunning) return false;

  this.onExtraMoveStart();

  var notification = this.m_Notifications.m_Notification3;

  notification.create();
  notification.setOpacity(255.0);
  notification.setScale(0.0);
  notification.runAction(
    cc.Sequence.create(
      cc.DelayTime.create(0.7),
      cc.FadeOut.create(0.5)
    )
  );
  notification.runAction(
    cc.Sequence.create(
      cc.EaseElasticOut.create(
        cc.ScaleTo.create(0.5, 1.0)
      ),
      cc.ScaleTo.create(0.2, 1.2),
      cc.EaseExponentialIn.create(
        cc.ScaleTo.create(0.5, 10.0)
      ),
      cc.CallFunc.create(notification.destroy, notification),
      cc.CallFunc.create(this.m_PlayerTurn ? MatrixManager.sharedManager().enable : MatrixManager.sharedManager().disable, MatrixManager.sharedManager()),
      cc.CallFunc.create(this.onExtraMoveFinish, this),
      false
    )
  );

  Sound.sharedSound().play(s_SoundExtraMove);
};

Game.prototype.onExtraMoveStart = function() {
  ConfettiBackground.sharedScreen(this).show();

  this.m_PreviewBackground.runAction(cc.FadeTo.create(0.5, 200));
};

Game.prototype.onExtraMoveFinish = function() {
  this.m_PreviewBackground.runAction(cc.FadeTo.create(0.5, 0));

  MatrixManager.sharedManager().unbusy();
  MatrixManager.sharedManager().m_ExtaMove = false;
};

Game.prototype.onTurnStart = function(data) {
  if(!this.m_GameRunning) return false;

  this.m_PreviewBackground.runAction(cc.FadeTo.create(0.5, 200));
  this.m_ElementsExplanationTexts.setCurrentFrameIndex(data.id);
  this.m_ElementsExplanationTexts.runAction(
    cc.Sequence.create(
      cc.EaseExponentialOut.create(
        cc.MoveTo.create(1.0, cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().height - Camera.sharedCamera().coord(300)))
      ),
      cc.CallFunc.create(this.startAction, this, data),
      false
    )
  );
};

Game.prototype.onTurnFinish = function(id, data) {
  if(!this.m_GameRunning) return false;

  switch(id) {
    default:
    this.m_ElementsExplanationTexts.runAction(
      cc.Sequence.create(
        cc.EaseExponentialIn.create(
          cc.MoveTo.create(0.5, cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().height + Camera.sharedCamera().coord(200)))
        ),
        cc.CallFunc.create(ActionsManager.sharedManager().run, ActionsManager.sharedManager()),
        false
      )
    );
    break;
    case 10:
    this.m_Catapults.get(this.m_PlayerTurn ? 1 : 0).runGameAction(id, data);
    break;
  }
};

Game.prototype.onStartAnimationStart = function() {
  MatrixManager.sharedManager().disable();
};

Game.prototype.onStartAnimationFinish = function() {
  this.onTurnChange();
};

Game.prototype.startAction = function(selector, data) {
  switch(data.id) {
    case 0:
    this.m_Catapults.get(this.m_PlayerTurn ? 0 : 1).runGameAction(data.id, {
      repeat: data.repeat,
      destroy: 15 * data.factor + (this.getWeapon() * 12),
      pause: 1.5
    });
    break;
    case 1:
    this.m_Catapults.get(this.m_PlayerTurn ? 0 : 1).runGameAction(data.id, {
      repeat: data.repeat,
      regeneration: (5 * (this.getWeapon() + 1)) * data.factor
    });
    break;
    case 2:
    this.m_Catapults.get(this.m_PlayerTurn ? 0 : 1).runGameAction(data.id, {
      repeat: data.repeat,
      shield: (7 * (this.getWeapon() + 1)) * data.factor
    });
    break;
    case 3:
    this.m_BonusKeysAnimationRunning = true;
    this.m_BonusKeysAnimationTimeElapsed = -1.0;
    this.m_BonusKeys += (2 + data.factor) * data.repeat;

    this.m_KeysText.ccsf([this.m_BonusKeysTemp]);

    this.m_KeysPanel.runAction(
      cc.EaseExponentialOut.create(
        cc.MoveTo.create(1.0, cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().height - Camera.sharedCamera().coord(500)))
      )
    );
    break;
    case 4:
    this.m_Catapults.get(this.m_PlayerTurn ? 0 : 1).runGameAction(data.id, {
      repeat: data.repeat,
      distance: Camera.sharedCamera().coord(80) * data.factor
    });
    break;
  }
};

Game.prototype.onActionAnimationStart = function() {
};

Game.prototype.onActionAnimationFinish = function() {
};

Game.prototype.onNoMoreCombinations = function() {
  this.stopAllActions();

  this.m_CombinationsNotification.runAction(
    cc.Sequence.create(
      cc.DelayTime.create(0.5),
      cc.EaseBounceOut.create(
        cc.MoveTo.create(1.0, cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().coord(300)))
      ),
      cc.DelayTime.create(0.5),
      cc.CallFunc.create(MatrixManager.sharedManager().shuffle, MatrixManager.sharedManager()),
      cc.DelayTime.create(0.5),
      cc.CallFunc.create(this.onNoMoreCombinationsCheck, this, this),
      false
    )
  );
};
Game.prototype.onNoMoreCombinationsCheck = function() {
  if(!MatrixManager.sharedManager().computer(false, true)) {
    this.m_CombinationsNotification.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(0.5),
        cc.CallFunc.create(MatrixManager.sharedManager().shuffle, MatrixManager.sharedManager()),
        cc.DelayTime.create(0.5),
        cc.CallFunc.create(this.onNoMoreCombinationsCheck, this, this),
        false
      )
    );
  } else {
    this.m_CombinationsNotification.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(0.5),
        cc.EaseBounceOut.create(
          cc.MoveTo.create(1.0, cc.p(Camera.sharedCamera().center.x, -this.m_CombinationsNotification.getHeight()))
        ),
        cc.CallFunc.create(MatrixManager.sharedManager().unbusy, MatrixManager.sharedManager()),
        false
      )
    );

    if(Game.tutorial) {
      this.onTurnChangeFinishTutorial();
    }

    Game.instance.m_LastActionTime = Date.now();
  }
};
