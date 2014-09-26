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
  m_DecorationTime: 0.5,
  m_DecorationTimeElapsed: 0.5,
  ctor: function() {
    this._super();

    Mode.instance = this;

    this.name = "Mode screen";

    this.m_Lock = [];

    this.m_Background = Entity.create(Orientation.parse(s_ThirdPartyBackground), this, true);
    this.m_BackButton = Button.create(s_ButtonsSprite, 3, 4, this);
    this.m_BackgroundDecoration1 = Entity.create(s_BackgroundDecoration1, this);
    this.m_BackgroundDecoration2 = Entity.create(s_BackgroundDecoration3, this);
    this.m_ProgressMode = Button.create(s_LongButton, 1, 1, this);
    this.m_ClassicMode = Button.create(s_LongButton, 1, 1, this);
    this.m_ArcadeMode = Button.create(s_LongButton, 1, 1, this);
    this.m_RatingButton = Button.create(s_SfxButtonsSprite, 3, 2, this);
    this.m_AchievementsButton = Button.create(s_SfxButtonsSprite, 3, 2, this);
    this.m_ShopButton = Button.create(s_ButtonsSprite, 3, 4, this);
    this.m_HelpButton = Button.create(s_ButtonsSprite, 3, 4, this);
    this.m_Lock[0] = Entity.create(s_Lock, this.m_ClassicMode);
    this.m_Lock[1] = Entity.create(s_Lock, this.m_ArcadeMode);

    this.m_ProgressModeText = Text.create('progress-mode', this.m_ProgressMode);
    this.m_ClassicModeText = Text.create('classic-mode', this.m_ClassicMode);
    this.m_ArcadeModeText = Text.create('arcade-mode', this.m_ArcadeMode);

    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));
    this.m_BackgroundDecoration1.create().setCenterPosition(this.m_BackgroundDecoration1.getWidth() / 2, Camera.sharedCamera().height - this.m_BackgroundDecoration1.getHeight() / 2);
    this.m_BackgroundDecoration2.create().setCenterPosition(Camera.sharedCamera().width - this.m_BackgroundDecoration2.getWidth() / 2, this.m_BackgroundDecoration2.getHeight() / 2);
    this.m_ProgressMode.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(300));
    this.m_ClassicMode.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(100));
    this.m_ArcadeMode.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(100));
    this.m_RatingButton.create().setCenterPosition(Camera.sharedCamera().center.x - Camera.sharedCamera().coord(110), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(320));
    this.m_AchievementsButton.create().setCenterPosition(Camera.sharedCamera().center.x + Camera.sharedCamera().coord(110), Camera.sharedCamera().center.y - Camera.sharedCamera().coord(320));
    this.m_Lock[0].create().setCenterPosition(0, this.m_ClassicMode.getHeight() / 2);
    this.m_Lock[1].create().setCenterPosition(0, this.m_ArcadeMode.getHeight() / 2);
    this.m_RatingButton.setCurrentFrameIndex(5);
    this.m_AchievementsButton.setCurrentFrameIndex(2);
    this.m_ShopButton.setCurrentFrameIndex(8);
    this.m_HelpButton.setCurrentFrameIndex(7);
    this.m_BackButton.setCurrentFrameIndex(1);

    this.m_ShopButton.createNotifier(Shop.notifyHandler, 48, 80);

    switch(Camera.sharedCamera().orientation) {
      case Camera.sharedCamera().orientations.portrait:
      this.m_ShopButton.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(200), Camera.sharedCamera().height - Camera.sharedCamera().coord(170));
      this.m_HelpButton.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(80), Camera.sharedCamera().height - Camera.sharedCamera().coord(170));
      break;
      case Camera.sharedCamera().orientations.landscape:
      this.m_ShopButton.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(200), Camera.sharedCamera().height - Camera.sharedCamera().coord(70));
      this.m_HelpButton.create().setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(80), Camera.sharedCamera().height - Camera.sharedCamera().coord(70));
      break;
    }

    this.m_ProgressModeText.setCenterPosition(this.m_ProgressMode.getWidth() / 2, this.m_ProgressMode.getHeight() / 2);
    this.m_ClassicModeText.setCenterPosition(this.m_ClassicMode.getWidth() / 2, this.m_ClassicMode.getHeight() / 2);
    this.m_ArcadeModeText.setCenterPosition(this.m_ArcadeMode.getWidth() / 2, this.m_ArcadeMode.getHeight() / 2);

    this.m_BackButton.setTouchHandler('onBackEvent', Mode);
    this.m_ProgressMode.setTouchHandler('onProgressEvent', Mode);
    this.m_ClassicMode.setTouchHandler('onClassicEvent', Mode);
    this.m_ArcadeMode.setTouchHandler('onArcadeEvent', Mode);
    this.m_RatingButton.setTouchHandler('onRatingEvent', Mode);
    this.m_AchievementsButton.setTouchHandler('onAchievementsEvent', Mode);
    this.m_ShopButton.setTouchHandler('onShopEvent', Mode);
    this.m_HelpButton.setTouchHandler('onHelpEvent', Mode);
  },
  onBackEvent: function() {
    ScreenManager.sharedManager().replace(Menu);
  },
  onProgressEvent: function() {
    Game.network = false;
    Game.server = false;

    DataManager.sharedManager().get(true, [references.tutorial.enable, references.coins.lives], {
      success: function(values) {
        var tutorial = values[0];
        var lives = values[1];

        if(tutorial) {
          Game.level = 0;
          Game.sharedScreen(0);
          ScreenManager.sharedManager().replace(Loading);
        } else {
          if(lives > 0) {
            Multiplayer.sharedScreen(Mode.instance).show();
          } else {
            Lives.sharedScreen(Mode.instance).show();
          }
        }
      }
    });
  },
  onClassicEvent: function() {
    Game.network = false;
    Game.server = false;

    DataManager.sharedManager().get(true, [references.lock.modes.classic, references.coins.lives], {
      success: function(values) {
        var lock = values[0];
        var lives = values[1];

        if(lock) {
          Game.sharedScreen(1);
          ScreenManager.sharedManager().replace(Loading);
        } else {
          if(lives > 0) {
            Lock.sharedScreen(Mode.instance).show(0, 'mode');
          } else {
            Lives.sharedScreen(Mode.instance).show();
          }
        }
      }
    });
  },
  onArcadeEvent: function() {
    Game.network = false;
    Game.server = false;

    DataManager.sharedManager().get(true, [references.lock.modes.arcade, references.coins.lives], {
      success: function(values) {
        var lock = values[0];
        var lives = values[1];

        if(lock) {
          Game.sharedScreen(2);
          ScreenManager.sharedManager().replace(Loading);
        } else {
          if(lives > 0) {
            Lock.sharedScreen(Mode.instance).show(1, 'mode');
          } else {
            Lives.sharedScreen(Mode.instance).show();
          }
        }
      }
    });
  },
  onRatingEvent: function() {
    Rating.sharedScreen(this).show();
  },
  onAchievementsEvent: function() {
    Achievements.sharedScreen(this).show();
  },
  onShopEvent: function() {
    ScreenManager.sharedManager().replace(Shop);
  },
  onHelpEvent: function() {
    Help.sharedScreen(this).show();
  },
  unlock: function(id) {
    var mode = id == 0 ? references.lock.modes.classic : references.lock.modes.arcade;

    DataManager.sharedManager().set(true, mode, 1);

    var line = Entity.create(s_ModeUnlockLine, Mode.instance);

    line.create().setCenterPosition(Mode.instance.m_Lock[id].getParent().getCenterX(), Mode.instance.m_Lock[id].getParent().getCenterY());
    line.setOpacity(0);
    line.setScaleY(5);
    line.setScaleX(Camera.sharedCamera().width / line.getWidth());

    Mode.instance.m_Lock[id].runRecognizeAction(false, {
      name: 'scale',
      time: 1.0,
      value: 3.0
    });
    Mode.instance.m_Lock[id].runRecognizeAction(false, {
      name: 'fade',
      time: 1.0,
      value: 0.0
    });
    line.runRecognizeAction(false, [{
      name: 'fade',
      time: 0.5,
      value: 255.0
    }, {
      name: 'fade',
      time: 0.5,
      value: 0.0
    }]);

    AchievementsManager.sharedManager().unlock(id + 1);

    Sound.sharedSound().play(s_SoundSlash);
  },
  onShow: function() {
    this._super();

    MenuPanel.sharedScreen(this).show();

    if(DataManager.sharedManager().get(false, references.lock.modes.classic) || this.config.params.vendor == 'ubi-nuri') this.m_Lock[0].destroy();
    if(DataManager.sharedManager().get(false, references.lock.modes.arcade)) this.m_Lock[1].destroy(); 

    switch(this.config.params.platform)
    {
      case 'vk':
      var uids = [];
      FriendsManager.instance.getAppFriends().forEach(function(user) {
        uids.push(user.uid);
      });

      if(uids.length > 0) {
        Tooflya.api.call('storage.get', {
          key: references.coins.lives,
          uids: uids
        }, {
          success: function(data) {
            FriendsManager.instance.getAppFriends().forEach(function(user) {
              data.forEach(function(u) {
                if(data.uid == user.uid) {
                  user.energy = u.storage[0];
                }
              });
            });

            LivesSend.sharedScreen(this).show();
          }.bind(this)
        });
      }
      break;
    }
  },
  onHide: function() {
    this._super();
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
        if(Help.sharedScreen().getParent()) {
          Help.sharedScreen().hide();
        } else if(Rating.sharedScreen().getParent()) {
          Rating.sharedScreen().hide();
        } else if(Achievements.sharedScreen().getParent()) {
          Achievements.sharedScreen().hide();
        } else if(Multiplayer.sharedScreen().getParent()) {
          Multiplayer.sharedScreen().hide();
        } else {
          ScreenManager.sharedManager().replace(Menu);
        }
      break;
    }
  }
});

Mode.instance = false;
Mode.sharedScreen = function() {
  return Mode.instance ? Mode.instance : new Mode();
};
