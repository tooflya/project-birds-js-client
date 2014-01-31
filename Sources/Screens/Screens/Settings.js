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

Settings = Screen.extend({
  ctor: function() {
    this._super();

    Settings.instance = this;

    this.m_Background = Entity.create(s_ThirdPartyBackground, this, true);
    this.m_BackButton = Button.create(s_ButtonsSprite, 3, 3, this);
    this.m_CreditsButton = Button.create(s_LongButton, 1, 1, this);
    this.m_ProgressButton = Button.create(s_LongButton, 1, 1, this);
    this.m_MoreButton = Button.create(s_LongButton, 1, 1, this);
    this.m_LanguagesButton = Button.create(s_LongButton, 1, 1, this);
    this.m_SoundButton = Button.create(s_SfxButtonsSprite, 3, 2, this);
    this.m_MusicButton = Button.create(s_SfxButtonsSprite, 3, 2, this);
    this.m_BackgroundDecoration1 = Entity.create(s_BackgroundDecoration1, this);
    this.m_BackgroundDecoration2 = Entity.create(s_BackgroundDecoration2, this);
    this.m_LanguageIndicator = TiledEntity.create(s_SmallFlags, 2, 5, this.m_LanguagesButton);

    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));
    this.m_CreditsButton.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(430));
    this.m_ProgressButton.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(230));
    this.m_MoreButton.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y  + Camera.sharedCamera().coord(30));
    this.m_LanguagesButton.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(170));
    this.m_MusicButton.create().setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(110), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(380));
    this.m_SoundButton.create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(110), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(380));
    this.m_BackgroundDecoration1.create().setCenterPosition(this.m_BackgroundDecoration1.getWidth() / 2, Camera.sharedCamera().height - this.m_BackgroundDecoration1.getHeight() / 2);
    this.m_BackgroundDecoration2.create().setCenterPosition(Camera.sharedCamera().width - this.m_BackgroundDecoration2.getWidth() / 2, this.m_BackgroundDecoration2.getHeight() / 2);
    this.m_LanguageIndicator.create().setCenterPosition(this.m_LanguagesButton.getWidth(), this.m_LanguagesButton.getHeight() / 2);

    this.m_BackButton.setCurrentFrameIndex(1);

    this.m_BackButton.setTouchHandler('onBackEvent', Settings);
    this.m_CreditsButton.setTouchHandler('onCreditsEvent', Settings);
    this.m_ProgressButton.setTouchHandler('onProgressEvent', Settings);
    this.m_MoreButton.setTouchHandler('onMoreEvent', Settings);
    this.m_LanguagesButton.setTouchHandler('onLanguagesEvent', Settings);
    this.m_SoundButton.setTouchHandler('onSoundEvent', Settings);
    this.m_MusicButton.setTouchHandler('onMusicEvent', Settings);
  },
  onBackEvent: function() {
    ScreenManager.sharedManager().replace(Menu);
  },
  onCreditsEvent: function() {
    ScreenManager.sharedManager().replace(Credits);
  },
  onProgressEvent: function() {
    ScreenManager.sharedManager().replace(Reset);
  },
  onMoreEvent: function() {
    ScreenManager.sharedManager().replace(More);
  },
  onLanguagesEvent: function() {
    ScreenManager.sharedManager().replace(Languages);
  },
  onSoundEvent: function() {
    Sound.sharedSound().changeState();

    this.updateSoundButtonsState();
  },
  onMusicEvent: function() {
    Music.sharedMusic().changeState();

    this.updateSoundButtonsState();
  },
  onShow: function() {
    this._super();

    this.updateSoundButtonsState();
  },
  onHide: function() {
    this._super();

    Settings.instance = false;
  },
  updateSoundButtonsState: function() {
    this.m_MusicButton.setCurrentFrameIndex(Music.sharedMusic().enabled ? 0 : 3);
    this.m_SoundButton.setCurrentFrameIndex(Sound.sharedSound().enabled ? 1 : 4);
  },
  update: function(time) {
    this._super(time);
  }
});

Settings.instance = false;
Settings.sharedScreen = function() {
  return Settings.instance ? Settings.instance : new Settings();
};
