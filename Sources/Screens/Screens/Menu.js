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

Menu = Screen.extend({
  ctor: function() {
    this._super();

    Menu.instance = this;

    this.name = "Menu screen";

    this.m_PlayButtonDecorations = new Array();

    this.m_Background = Entity.create(LanguagesManager.sharedManager().getLanguageId() == 7 ? Orientation.parse(s_MenuBackgroundJapan) : Orientation.parse(s_MenuBackground), this, true);
    this.m_PlayButtonDecorations[0] = Entity.create(s_CircleDecoration1, this);
    this.m_PlayButtonDecorations[1] = Entity.create(s_CircleDecoration1, this);
    this.m_PlayButton = Button.create(s_PlayButton, 6, 2, this);
    this.m_SettingsButton = Button.create(s_ButtonsSprite, 3, 4, this);
    this.m_EventsButton = Button.create(s_ButtonsSprite, 3, 4, this);
    this.m_ShopButton = Button.create(s_ButtonsSprite, 3, 4, this);

    if(this.config.params.vendor == 'ubi-nuri') {
    } else {
      this.m_TwitterButton = Button.create(s_ButtonsSprite, 3, 4, this);
      if(this.config.params.platform == 'fb' || this.config.params.platform == 'standalone') this.m_FacebookButton = Button.create(s_ButtonsSprite, 3, 4, this);
      if(this.config.params.platform == 'vk') this.m_VkontakteButton = Button.create(s_VkontakteButton, 1, 1, this);
    }

    this.m_SettingsButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));
    this.m_PlayButtonDecorations[0].create().setCenterPosition(Camera.sharedCamera().center.x+ Camera.sharedCamera().coord(10), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(80));
    this.m_PlayButtonDecorations[1].create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(10), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(80));
    this.m_PlayButton.create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(20), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(80));
    this.m_EventsButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(270));
    this.m_ShopButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(440));
    
    if(this.config.params.vendor == 'ubi-nuri') {
    } else {
      if(this.config.params.platform == 'fb' || this.config.params.platform == 'standalone') this.m_FacebookButton.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));
      if(this.config.params.platform == 'vk') this.m_VkontakteButton.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));
      this.m_TwitterButton.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(270), Camera.sharedCamera().coord(100));
    }

    this.m_SettingsButton.setCurrentFrameIndex(6);
    this.m_ShopButton.setCurrentFrameIndex(2);

    if(this.config.params.vendor == 'ubi-nuri') {
    } else {
      if(this.config.params.platform == 'fb' || this.config.params.platform == 'standalone') this.m_FacebookButton.setCurrentFrameIndex(3);
      this.m_TwitterButton.setCurrentFrameIndex(0);
    }

    this.m_PlayButtonDecorations[0].setColor(cc.RED);
    this.m_PlayButtonDecorations[1].setColor(cc.RED);

    this.m_PlayButton.animate(0.06, 1, false, {start: 0, end: 5.0});

    this.m_PlayButton.setTouchHandler('onPlayEvent', Menu);
    this.m_SettingsButton.setTouchHandler('onSettingsEvent', Menu);
    this.m_EventsButton.setTouchHandler('onEventsEvent', Menu);
    this.m_ShopButton.setTouchHandler('onShopEvent', Menu);

    if(this.config.params.vendor == 'ubi-nuri') {
    } else {
      if(this.config.params.platform == 'fb' || this.config.params.platform == 'standalone') this.m_FacebookButton.setTouchHandler('onFacebookEvent', Menu);
      if(this.config.params.platform == 'vk') this.m_VkontakteButton.setTouchHandler('onVkontakteEvent', Menu);
      this.m_TwitterButton.setTouchHandler('onTwitterEvent', Menu);
    }

    Rate.sharedScreen(this).prepare();
    Invite.sharedScreen(this).prepare();
  },
  onPlayEvent: function() {
    ScreenManager.sharedManager().replace(Mode);
  },
  onSettingsEvent: function() {
    ScreenManager.sharedManager().replace(Settings);
  },
  onShopEvent: function() {
    ScreenManager.sharedManager().replace(Shop);
  },
  onEventsEvent: function() {
    Events.sharedScreen(this).show();
  },
  onFacebookEvent: function() {
    openURL("http://www.facebook.com/tooflya");
  },
  onVkontakteEvent: function() {
    openURL("http://www.vk.com/tooflya");
  },
  onTwitterEvent: function() {
    openURL("http://www.twitter.com/tooflya");
  },
  onShow: function() {
    this._super();

    if(Promotion.sharedInstance(this).show()) {
    } else if(DataManager.sharedManager().get(false, references.info.game) && !DataManager.sharedManager().get(false, references.info.rate) && LanguagesManager.sharedManager().config.params.vendor != 'ubi-nuri') {
      Rate.sharedScreen(this).show();
    } else if(FriendsManager.sharedInstance().getAppFriends().length > 0 && Random.sharedRandom().probably(30)) {
      Invite.sharedScreen(this).show();
    }

    Music.sharedMusic().play(s_Music1, true);

    if(!Menu.gameCenterNotificationShowed) {
      Menu.gameCenterNotificationShowed = true;

      GameCenterNotification.sharedNotification().show();
    }

    DustBackground.sharedInstance();
  },
  onHide: function() {
    this._super();
  },
  update: function(time) {
    this._super(time);

    this.m_PlayButtonDecorations[0].setRotation(this.m_PlayButtonDecorations[0].getRotation() - 10 * time);
    this.m_PlayButtonDecorations[1].setRotation(this.m_PlayButtonDecorations[1].getRotation() + 10 * time);
  },
  onKeyDown: function(e) {
    switch(e) {
      case 27:
        if(Rate.sharedScreen().getParent()) {
          Rate.sharedScreen().hide();
        } else if(Invite.sharedScreen(this).getParent()) {
          Invite.sharedScreen(this).hide();
        } else if(Promotion.sharedInstance(this).isShowed()) {
          Promotion.sharedInstance(this).hide();
        } else {

        }
      break;
    }
  }
});

Menu.gameCenterNotificationShowed = false;
Menu.instance = false;
Menu.sharedScreen = function() {
  return Menu.instance ? Menu.instance : new Menu();
};
