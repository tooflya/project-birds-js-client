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

Game.prototype.createTutorialelements = function() {
  this.m_TutorialState = 1;
  this.m_TutorialRunning = true;

  this.m_TutorialBackground = Background.create(this);
  this.m_TutorialBackgroundSplash = BackgroundColor.create(cc.c4(0, 0, 0, 200), this.m_TutorialBackground, Camera.sharedCamera().width, Camera.sharedCamera().coord(200));
  this.m_TutorialBackgroundSplashText = Text.create(false, this.m_TutorialBackgroundSplash);

  this.m_TutorialFinger = Entity.create(s_TutorialFinger, this.m_TutorialBackground);

  this.m_TutorialBackgroundSplash.setCenterPosition(Camera.sharedCamera().center.x, -this.m_TutorialBackgroundSplash.getHeight() / 2);
  this.m_TutorialBackgroundSplashText.setCenterPosition(Camera.sharedCamera().center.x, this.m_TutorialBackgroundSplash.getHeight() / 2);

  this.m_TutorialBackground.setZOrder(1000);
};

Game.prototype.onStartAnimationStartTutorial = function() {
};

Game.prototype.onStartAnimationFinishTutorial = function() {
  MatrixManager.sharedManager().enable();

  for(var y = 0; y < MatrixManager.sharedManager().getSize().y; y++) {
    for(var x = 0; x < MatrixManager.sharedManager().getSize().x; x++) {
      if(x == 7 && y == 5) {
        MatrixManager.sharedManager().get(x, y).onTouch();
      } else {
        MatrixManager.sharedManager().get(x, y).registerTouchable(false);
      }
    }
  }

  this.m_TutorialFinger.create().setCenterPosition(Camera.sharedCamera().coord(1280), Camera.sharedCamera().coord(720));
  this.m_TutorialFinger.setOpacity(0);
  this.m_TutorialFinger.runAction(
    cc.RepeatForever.create(
      cc.Sequence.create(
        cc.MoveTo.create(0.0, cc.p(this.m_TutorialFinger.getCenterX(), this.m_TutorialFinger.getCenterY())),
        cc.FadeIn.create(0.5),
        cc.DelayTime.create(0.5),
        cc.MoveTo.create(1.0, cc.p(this.m_TutorialFinger.getCenterX() - Camera.sharedCamera().coord(100), this.m_TutorialFinger.getCenterY())),
        cc.FadeOut.create(0.5),
        cc.DelayTime.create(0.5),
        false
      )
    )
  );
  this.m_TutorialBackgroundSplash.runAction(
    cc.EaseBounceOut.create(
      cc.MoveTo.create(1.0, cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().coord(300)))
    )
  );
  this.m_TutorialBackgroundSplashText.setText('tutorial-1');
};

Game.prototype.onReplaceTutorial = function() {
  switch(this.m_TutorialState) {
    case 1:
    for(var y = 0; y < MatrixManager.sharedManager().getSize().y; y++) {
      for(var x = 0; x < MatrixManager.sharedManager().getSize().x; x++) {
        if(MatrixManager.sharedManager().get(x, y)) {
          if(!MatrixManager.sharedManager().get(x, y).isRegisterTouchable()) MatrixManager.sharedManager().get(x, y).registerTouchable(true);
        }
      }
    }

    this.m_TutorialState = 2;
    break;
  }
};

Game.prototype.onBlowTutorial = function() {
  switch(this.m_TutorialState) {
    case 2:
    this.m_TutorialFinger.stopAllActions();
    this.m_TutorialFinger.runAction(
      cc.Sequence.create(
        cc.FadeTo.create(0.5, 0.0),
        cc.CallFunc.create(this.m_TutorialFinger.destroy, this.m_TutorialFinger),
        false
      )
    );
    this.m_TutorialBackgroundSplash.runAction(
      cc.EaseBounceOut.create(
        cc.MoveTo.create(1.0, cc.p(Camera.sharedCamera().center.x, -this.m_TutorialBackgroundSplash.getHeight() / 2))
      )
    );
  
    this.m_TutorialState = false;
    this.m_TutorialRunning = false;
    break;
  }
};

Game.prototype.onTurnChangeStartTutorial = function() {
};

Game.prototype.onTurnChangeFinishTutorial = function() {
};
