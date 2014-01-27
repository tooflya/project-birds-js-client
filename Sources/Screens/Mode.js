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

Mode = Screen.extend({
  ctor: function() {
    this._super();

    Mode.instance = this;

    this.m_Background = Entity.create(s_ThirdPartyBackground, this, true);
    this.m_BackButton = Button.create(s_ButtonsSprite, 3, 3, this);
    this.m_BackgroundDecoration1 = Entity.create(s_BackgroundDecoration1, this);
    this.m_BackgroundDecoration2 = Entity.create(s_BackgroundDecoration3, this);
    this.m_ProgressMode = Button.create(s_LongButton, 1, 1, this);
    this.m_ClassicMode = Button.create(s_LongButton, 1, 1, this);
    this.m_ArcadeMode = Button.create(s_LongButton, 1, 1, this);
    this.m_RatingButton = Button.create(s_SfxButtonsSprite, 3, 2, this);
    this.m_AchievementsButton = Button.create(s_SfxButtonsSprite, 3, 2, this);
    this.m_ShopButton = Button.create(s_ButtonsSprite, 3, 3, this);
    this.m_HelpButton = Button.create(s_ButtonsSprite, 3, 3, this);
    this.m_Panel = Entity.create(s_ShopPanel, this);

    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));
    this.m_BackgroundDecoration1.create().setCenterPosition(this.m_BackgroundDecoration1.getWidth() / 2, Camera.sharedCamera().height - this.m_BackgroundDecoration1.getHeight() / 2 - Camera.sharedCamera().coord(70));
    this.m_BackgroundDecoration2.create().setCenterPosition(Camera.sharedCamera().width - this.m_BackgroundDecoration2.getWidth() / 2, this.m_BackgroundDecoration2.getHeight() / 2);
    this.m_ProgressMode.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(300));
    this.m_ClassicMode.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(100));
    this.m_ArcadeMode.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(100));
    this.m_RatingButton.create().setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(110), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(320));
    this.m_AchievementsButton.create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(110), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(320));
    this.m_ShopButton.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(200), Camera.sharedCamera().height - Camera.sharedCamera().coord(150));
    this.m_HelpButton.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(80), Camera.sharedCamera().height - Camera.sharedCamera().coord(150));
    this.m_Panel.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height - this.m_Panel.getHeight() / 2);
    this.m_RatingButton.setCurrentFrameIndex(5);
    this.m_AchievementsButton.setCurrentFrameIndex(2);
    this.m_ShopButton.setCurrentFrameIndex(8);
    this.m_HelpButton.setCurrentFrameIndex(7);
    this.m_BackButton.setCurrentFrameIndex(1);

    this.m_BackButton.setTouchHandler('onBackEvent', Mode);
    this.m_ProgressMode.setTouchHandler('onGameEvent', Mode);
    this.m_ClassicMode.setTouchHandler('onGameEvent', Mode);
    this.m_ArcadeMode.setTouchHandler('onGameEvent', Mode);
    this.m_RatingButton.setTouchHandler('onRatingEvent', Mode);
    this.m_AchievementsButton.setTouchHandler('onAchievementsEvent', Mode);
    this.m_ShopButton.setTouchHandler('onShopEvent', Mode);
    this.m_HelpButton.setTouchHandler('onHelpEvent', Mode);
  },
  onBackEvent: function() {
    ScreenManager.sharedManager().replace(Menu);
  },
  onGameEvent: function() {
    ScreenManager.sharedManager().replace(Loading);
  },
  onRatingEvent: function() {

  },
  onAchievementsEvent: function() {

  },
  onShopEvent: function() {
    ScreenManager.sharedManager().replace(Shop);
  },
  onHelpEvent: function() {

  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();
  },
  update: function(time) {
    this._super(time);
  }
});

Mode.instance = false;
Mode.sharedScreen = function() {
  return Mode.instance ? Mode.instance : new Mode();
};
