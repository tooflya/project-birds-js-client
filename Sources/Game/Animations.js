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

  this.onTurnChangeStart();

  var notification;

  if(this.m_PlayerTurn) {
    notification = this.m_Notifications.m_Notification2;
  } else {
    notification = this.m_Notifications.m_Notification1;
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

  if(Game.tutorial) {
    this.onTurnChangeFinishTutorial();
  }
};

Game.prototype.onTurnStart = function(id) {
  if(!this.m_GameRunning) return false;

  this.m_PreviewBackground.runAction(cc.FadeTo.create(0.5, 200));
  this.m_ElementsExplanationTexts.setCurrentFrameIndex(id);
  this.m_ElementsExplanationTexts.runAction(
    cc.Sequence.create(
      cc.EaseExponentialOut.create(
        cc.MoveTo.create(1.0, cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().height - Camera.sharedCamera().coord(300)))
      ),
      cc.CallFunc.create(this.startAction, this, id),
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
          cc.MoveTo.create(1.0, cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().height + Camera.sharedCamera().coord(200)))
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

Game.prototype.startAction = function(selector, id) {
  switch(id) {
    case 0:
    this.m_Catapults.get(this.m_PlayerTurn ? 0 : 1).runGameAction(id, {
      destroy: 10
    });
    break;
    case 1:
    this.m_Catapults.get(this.m_PlayerTurn ? 0 : 1).runGameAction(id);
    break;
    case 2:
    this.m_Catapults.get(this.m_PlayerTurn ? 0 : 1).runGameAction(id);
    break;
    case 3:
    Game.sharedScreen().onTurnFinish();
    break;
    case 4:
    this.m_Catapults.get(this.m_PlayerTurn ? 0 : 1).runGameAction(id);
    break;
  }
};

Game.prototype.onActionAnimationStart = function() {
};

Game.prototype.onActionAnimationFinish = function() {
};
