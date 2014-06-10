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

Levels = Screen.extend({
  ctor: function() {
    this._super();

    Levels.instance = this;

    this.name = "Levels screen";

    this.m_Background = Entity.create(Orientation.parse(s_ThirdPartyBackground), this, true);
    this.m_BackButton = Button.create(s_ButtonsSprite, 3, 3, this);
    this.m_BackgroundDecoration1 = Entity.create(s_BackgroundDecoration1, this);
    this.m_BackgroundDecoration2 = Entity.create(s_BackgroundDecoration3, this);
    this.m_StarsPanel = Entity.create(s_StarsPanel, this);
    this.m_Star = TiledEntity.create(s_Star, 3, 2, this.m_StarsPanel);
    this.m_Lamp = TiledEntity.create(s_Lamp, 1, 2, this);

    this.m_StarsText = Text.create(false, this.m_StarsPanel);

    this.m_BackgroundDecoration1.create().setCenterPosition(this.m_BackgroundDecoration1.getWidth() / 2, Camera.sharedCamera().height - this.m_BackgroundDecoration1.getHeight() / 2);
    this.m_BackgroundDecoration2.create().setCenterPosition(Camera.sharedCamera().width - this.m_BackgroundDecoration2.getWidth() / 2, this.m_BackgroundDecoration2.getHeight() / 2);
    this.m_StarsPanel.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(200), Camera.sharedCamera().height - Camera.sharedCamera().coord(200));
    this.m_Star.create().setCenterPosition(Camera.sharedCamera().coord(100), this.m_StarsPanel.getHeight() / 2);
    this.m_Lamp.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height - this.m_Lamp.getHeight() / 2);
    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));

    this.m_StarsText.setFontSize(Camera.sharedCamera().coord(64));

    this.m_Star.setScale(0.5);

    this.m_Star.setCurrentFrameIndex(1);
    this.m_BackButton.setCurrentFrameIndex(1);

    this.m_BackButton.setTouchHandler('onBackEvent', Levels);
  },
  onBackEvent: function() {
    ScreenManager.sharedManager().replace(Mode);
  },
  onShow: function() {
    this._super();

    MenuPanel.sharedScreen(this).show();

    this.m_StarsText.ccsf([51]);
    this.m_StarsText.setCenterPosition(this.m_Star.getCenterX() + this.m_StarsText.getWidth() + Camera.sharedCamera().coord(24), this.m_StarsPanel.getHeight() / 2);
    this.m_Star.stopAllActions();
    this.m_Star.runAction(
      cc.RepeatForever.create(
        cc.Sequence.create(
          cc.RotateTo.create(1.0, -10),
          cc.RotateTo.create(1.0, 10)
          )
        )
      );
  },
  onHide: function() {
    this._super();

    Levels.instance = false;
  },
  onExitTransitionDidStart: function() {
    MenuPanel.sharedScreen(this).hide();

    this._super();
  },
  update: function(time) {
    this._super(time);
  },
  onKeyDown: function(e) {
    switch(e) {
      case 27:
      ScreenManager.sharedManager().back();
      break;
    }
  }
});

Levels.instance = false;
Levels.sharedScreen = function() {
  return Levels.instance ? Levels.instance : new Levels();
};
