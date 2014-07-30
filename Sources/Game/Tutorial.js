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
  DataManager.sharedManager().set(true, references.tutorial.enable, false);

  this.m_TutorialState = 1;
  this.m_TutorialRunning = true;
  this.m_PlayerTurn = true;

  this.m_TutorialBackground = BackgroundColor.create(cc.c4(0, 0, 0, 0), this);
  this.m_TutorialBackgroundSplash = BackgroundColor.create(cc.c4(0, 0, 0, 200), this.m_TutorialBackground, Camera.sharedCamera().width, Camera.sharedCamera().coord(200));

  this.m_TutorialFinger = Entity.create(s_TutorialFinger, this.m_TutorialBackground);
  this.m_TutorialTextArea = Entity.create(s_TutorialTextArea, this.m_TutorialBackground);
  this.m_TutorialTargetExplanation = Entity.create(s_TutorialTargetExplanation, this.m_TutorialBackground);
  this.m_TutorialTeamExplanation = Entity.create(s_TutorialTeamExplanation, this.m_TutorialBackground);
  this.m_TutorialElementsExplanation = TiledEntity.create(s_TutorialElementsExplanation, 3, 2, this.m_TutorialBackground);
  this.m_TutorialElementsExplanationTexts = TiledEntity.create(LanguagesManager.sharedManager().parse(s_TutorialElementsExplanationTexts), 1, 5, this.m_TutorialBackground);

  this.m_TutorialBackgroundSplashText = Text.create(false, this.m_TutorialBackgroundSplash);
  this.m_TutorialAreaText = Text.create(false, this.m_TutorialTextArea);
  this.m_TutorialElementsExplanationText = Text.create('tutorial-elements-explanation-title-0', this.m_TutorialElementsExplanation);
  this.m_TutorialTapContinueText = Text.create('click-to-continue', this.m_TutorialTextArea);

  this.m_TutorialBackgroundSplash.setCenterPosition(Camera.sharedCamera().center.x, -this.m_TutorialBackgroundSplash.getHeight());
  this.m_TutorialTextArea.create().setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(300), Camera.sharedCamera().coord(480));
  this.m_TutorialTargetExplanation.create().setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(40), Camera.sharedCamera().coord(170));
  this.m_TutorialTeamExplanation.create();
  this.m_TutorialElementsExplanation.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);
  this.m_TutorialElementsExplanationTexts.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height + Camera.sharedCamera().coord(150));
  this.m_TutorialBackgroundSplashText.setCenterPosition(Camera.sharedCamera().center.x, this.m_TutorialBackgroundSplash.getHeight() / 2);
  this.m_TutorialAreaText.setCenterPosition(this.m_TutorialTextArea.getWidth() / 2, this.m_TutorialTextArea.getHeight() / 4);
  this.m_TutorialTapContinueText.setCenterPosition(this.m_TutorialTextArea.getWidth() / 2, Camera.sharedCamera().coord(50));
  this.m_TutorialElementsExplanationText.setCenterPosition(this.m_TutorialElementsExplanation.getWidth() / 2, this.m_TutorialElementsExplanation.getHeight() / 4 + Camera.sharedCamera().coord(30));

  this.m_TutorialTargetExplanation.setOpacity(0);
  this.m_TutorialTextArea.setOpacity(0);
  this.m_TutorialTeamExplanation.setOpacity(0);
  this.m_TutorialElementsExplanation.setOpacity(0);

  this.m_TutorialBackground.setZOrder(600);
  this.m_TutorialTextArea.setZOrder(601);
  this.m_TutorialTargetExplanation.setZOrder(601);
  this.m_TutorialTeamExplanation.setZOrder(601);

  this.m_TutorialAreaText.disableShadow();
  this.m_TutorialTapContinueText.disableShadow();
  this.m_TutorialAreaText.setColor(cc.c3(26, 92, 165));
  this.m_TutorialTapContinueText.setColor(cc.c3(26, 92, 165));
  this.m_TutorialTapContinueText.setFontSize(Camera.sharedCamera().coord(32));

  this.m_TutorialTextArea.setCascadeOpacityEnabled(true);
  this.m_TutorialElementsExplanation.setCascadeOpacityEnabled(true);

  this.m_TutorialTapContinueText.runAction(
    cc.RepeatForever.create(
      cc.Sequence.create(
        cc.FadeTo.create(1.0, 0.0),
        cc.FadeTo.create(1.0, 255.0),
        false
      )
    )
  );

  this.m_TutorialBackground.onEnter = function() {
    BackgroundColor.prototype.onEnter.call(this);

    if(cc.Browser.isMobile) {
      cc.Director.getInstance().getTouchDispatcher()._addTargetedDelegate(this, 1000, true);
    } else {
      cc.Director.getInstance().getMouseDispatcher().addMouseDelegate(this, 1);
    }
  };
  this.m_TutorialBackground.onExit = function() {
    BackgroundColor.prototype.onExit.call(this);

    if(cc.Browser.isMobile) {
      cc.Director.getInstance().getTouchDispatcher()._removeDelegate(this);
    } else {
      cc.Director.getInstance().getMouseDispatcher().removeMouseDelegate(this);
    }
  };
  this.m_TutorialBackground.onMouseDown = function(e) {
    if(this.getOpacity() >= 200) {
      return true;
    }

    return false;
  };
  this.m_TutorialBackground.onMouseUp = function(e) {
    this.onTouch(e);

    return true;
  };
  this.m_TutorialBackground.onTouch = function(e) {
    Game.sharedScreen().onTouchTutorial();
  };
};

Game.prototype.onStartAnimationStartTutorial = function() {
};

Game.prototype.onStartAnimationFinishTutorial = function() {
  this.m_Target.setZOrder(600);

  this.m_TutorialBackground.runAction(cc.FadeTo.create(0.5, 200));
  this.m_TutorialTextArea.runAction(cc.FadeTo.create(0.5, 255));
  this.m_TutorialAreaText.runAction(cc.FadeTo.create(0.5, 255));
  this.m_TutorialTargetExplanation.runAction(cc.FadeTo.create(0.5, 255));

  this.m_TutorialAreaText.setText("tutorial-2");

  this.m_TutorialState = 2;
};

Game.prototype.onTouchTutorial = function() {
  switch(this.m_TutorialState) {
    case 2:
    this.m_TutorialTargetExplanation.setOpacity(0);
    this.m_TutorialTeamExplanation.setOpacity(255);

    this.m_Target.setZOrder(302);
    this.m_Catapults.get(0).setZOrder(600);

    this.m_TutorialTeamExplanation.setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(600), Camera.sharedCamera().coord(120));
    this.m_TutorialTeamExplanation.setFlippedHorizontally(true);

    this.m_TutorialTextArea.setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(400), Camera.sharedCamera().coord(430));

    this.m_TutorialAreaText.setText("tutorial-3");

    this.m_TutorialState = 3;
    break;
    case 3:
    this.m_Catapults.get(0).setZOrder(303);
    this.m_Catapults.get(1).setZOrder(600);

    this.m_TutorialTeamExplanation.setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(600), Camera.sharedCamera().coord(120));
    this.m_TutorialTeamExplanation.setFlippedHorizontally(false);

    this.m_TutorialTextArea.setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(400), Camera.sharedCamera().coord(430));

    this.m_TutorialAreaText.setText("tutorial-4");

    this.m_TutorialState = 4;
    break;
    case 4:
    this.m_Catapults.get(0).setZOrder(303);
    this.m_Catapults.get(1).setZOrder(303);

    this.m_TutorialBackground.runAction(cc.FadeTo.create(0.5, 0));
    this.m_TutorialTextArea.runAction(cc.FadeTo.create(0.5, 0));
    this.m_TutorialAreaText.runAction(cc.FadeTo.create(0.5, 0));
    this.m_TutorialTargetExplanation.runAction(cc.FadeTo.create(0.5, 0));
    this.m_TutorialTeamExplanation.runAction(cc.FadeTo.create(0.5, 0));

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

    this.m_TutorialState = 5;
    break;
    case 10:
    if(this.m_TutorialBackground.getNumberOfRunningActions() > 0 || this.m_TutorialElementsExplanation.getNumberOfRunningActions() > 0 || this.m_TutorialBackgroundSplash.getNumberOfRunningActions() > 0) return false;

    this.m_TutorialBackground.runAction(cc.FadeTo.create(0.5, 0));
    this.m_TutorialElementsExplanation.runAction(
      cc.FadeTo.create(0.5, 0.0)
    );
    this.m_TutorialElementsExplanation.runAction(
      cc.EaseExponentialIn.create(
        cc.ScaleTo.create(0.5, 10.0)
      )
    );
    this.m_TutorialElementsExplanationTexts.runAction(
      cc.EaseBounceOut.create(
        cc.MoveTo.create(1.0, cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().height + Camera.sharedCamera().coord(150)))
      )
    ); 
    this.m_TutorialBackgroundSplash.runAction(
      cc.Sequence.create(
        cc.EaseBounceOut.create(
          cc.MoveTo.create(1.0, cc.p(Camera.sharedCamera().center.x, -this.m_TutorialBackgroundSplash.getHeight()))
        ),
        false
      )
    );

    this.m_TutorialState = false;
    this.m_TutorialRunning = false;

    ElementsManager.sharedManager().scheduleUpdate();

    MatrixManager.sharedManager().clear();
    break;
  }
};

Game.prototype.onReplaceTutorial = function() {
  switch(this.m_TutorialState) {
    case 5:
    for(var y = 0; y < MatrixManager.sharedManager().getSize().y; y++) {
      for(var x = 0; x < MatrixManager.sharedManager().getSize().x; x++) {
        if(MatrixManager.sharedManager().get(x, y)) {
          if(!MatrixManager.sharedManager().get(x, y).isRegisterTouchable()) MatrixManager.sharedManager().get(x, y).registerTouchable(true);
        }
      }
    }

    this.m_TutorialState = 6;
    break;
  }
};

Game.prototype.onBlowTutorial = function(element) {
  switch(this.m_TutorialState) {
    case 6:
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
        cc.MoveTo.create(1.0, cc.p(Camera.sharedCamera().center.x, -this.m_TutorialBackgroundSplash.getHeight()))
      )
    );
  
    this.m_TutorialState = false;
    this.m_TutorialRunning = false;

    default:
    var id = element.getId();

    if(DataManager.sharedManager().get(false, references.tutorial.elements[id])) {
      DataManager.sharedManager().set(true, references.tutorial.elements[id], 0);

      this.m_TutorialBackground.runAction(cc.FadeTo.create(0.5, 200));
      this.m_TutorialElementsExplanationText.setText("tutorial-elements-explanation-title-" + id);
      this.m_TutorialBackgroundSplashText.setText("tutorial-elements-explanation-" + id);
      this.m_TutorialElementsExplanation.setCurrentFrameIndex(id);
      this.m_TutorialElementsExplanation.setOpacity(255);
      this.m_TutorialElementsExplanation.setScale(0);
      this.m_TutorialElementsExplanation.runAction(
        cc.Sequence.create(
          cc.EaseElasticOut.create(
            cc.ScaleTo.create(0.5, 1.0)
          ),
          false
        )
      );
      this.m_TutorialBackgroundSplash.runAction(
        cc.Sequence.create(
          this.m_TutorialBackgroundSplash.getNumberOfRunningActions() > 0 ? cc.DelayTime.create(1.1) : cc.DelayTime.create(0.0),
          cc.EaseBounceOut.create(
            cc.MoveTo.create(1.0, cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().coord(150)))
          ),
          false
        )
      );
      this.m_TutorialElementsExplanationTexts.setCurrentFrameIndex(id);
      this.m_TutorialElementsExplanationTexts.runAction(
        cc.EaseBounceOut.create(
          cc.MoveTo.create(1.0, cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().height - Camera.sharedCamera().coord(150)))
        )
      ); 
  
      this.m_TutorialState = 10;
      this.m_TutorialRunning = true;

      ElementsManager.sharedManager().unscheduleUpdate();
    }
    break;
  }
};

Game.prototype.onTurnChangeStartTutorial = function() {
};

Game.prototype.onTurnChangeFinishTutorial = function() {
};
