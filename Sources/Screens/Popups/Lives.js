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

Lives = ExtendedPopup.extend({
  ctor: function(parent) {
    this._super(parent);

    this.m_Decoration = Entity.create(s_PopupDecoration8, this.m_Background);
    this.m_Button1 = Button.create(s_PopupLongButton2, 1, 1, this.m_Background);
    this.m_Button2 = Button.create(s_PopupLongButton2, 1, 1, this.m_Background);
    this.m_Text = Text.create('lives-popup-1', this.m_Background);
    this.m_Counter = Text.create('lives-counter', this.m_Background);

    this.m_Decoration.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(250));

    this.m_Text.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(170));
    this.m_Counter.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(320));

    this.m_Counter.setColor(cc.c3(0.0, 120.0, 255.0));

    this.m_Button1.text = Text.create('friends-live-present-11', this.m_Button1);
    this.m_Button2.text = Text.create('friends-live-present-12', this.m_Button2);

    this.m_Button1.text.setCenterPosition(this.m_Button1.text.getWidth() / 2 + Camera.sharedCamera().coord(65), this.m_Button1.getHeight() / 2);
    this.m_Button2.text.setCenterPosition(this.m_Button2.text.getWidth() / 2 + Camera.sharedCamera().coord(65), this.m_Button2.getHeight() / 2);

    this.m_Button1.text.setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Button2.text.setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_Button1.icon = AnimatedEntity.create(s_PanelIcon3, 3, 3, this.m_Button1);
    this.m_Button2.icon = AnimatedEntity.create(s_PanelIcon3, 3, 3, this.m_Button2);

    this.m_Button1.icon.create().setCenterPosition(Camera.sharedCamera().coord(35), this.m_Button1.getHeight() / 2);
    this.m_Button2.icon.create().setCenterPosition(Camera.sharedCamera().coord(35), this.m_Button2.getHeight() / 2);

    this.m_Button1.icon.animate(0.06, 2, {start: 0, end: 7}, {start: 0, end: 5.0});
    this.m_Button2.icon.animate(0.06, 2, {start: 0, end: 7}, {start: 0, end: 5.0});

    this.m_CloseButton.setTouchHandler('onCloseEvent', Lives);
    this.m_Button1.setTouchHandler('onFriendsEvent', Lives);
    this.m_Button2.setTouchHandler('onPurchaseEvent', Lives, {id: purchase.lives});
  },
  onPurchaseEvent: function(params) {
    this.m_Button2.action = true;

    this.hide(function() {
      Purchase.sharedScreen(this.getParent()).show(params, function(id) {
        switch(id) {
          case purchase.cancel:
          DataManager.sharedManager().get(true, EnergyManager.sharedManager().getReference(), {
            success: function(value) {
              if(value <= 0) {
                if(Game.instance) {
                  ScreenManager.sharedManager().replace(Menu);
                }
              }
            }
          });
          break;
          case purchase.lives:
          EnergyManager.sharedManager().restoreAll(function() {
            if(Game.instance) {
              if(!Game.sharedScreen().m_GameRunning) {
                Game.sharedScreen().onShow();
              }
            }
          });
          break;
        }
      });
    });
  },
  onFriendsEvent: function() {
    this.hide(function() {
      LivesRequest.sharedScreen().show();
    });
  },
  show: function() {
    EventsManager.sharedInstance().getEvents('live.send', function(events) {
      if(events) {
        LivesReceive.sharedScreen().show();
      } else {
        DataManager.sharedManager().get(true, references.coins.lives, {
          success: function(value) {
            ExtendedPopup.prototype.show.call(this);

            if(value <= 0) {
              this.m_Text.setText('lives-popup-1');
              this.m_Text.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(170));
            } else if(value < 5) {
              this.m_Text.setText('lives-popup-3');
              this.m_Text.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(170));
            } else {
              this.m_Text.setText('lives-popup-2');
              this.m_Text.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(170));
            }

            this.m_Button1.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Text.getCenterY() - this.m_Text.getHeight() / 2 - Camera.sharedCamera().coord(60));
            this.m_Button2.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Text.getCenterY() - this.m_Text.getHeight() / 2 - Camera.sharedCamera().coord(130));
          }.bind(this)
        });
      }
    }.bind(this));
  },
  onShow: function() {
    this._super();

    Tooflya.api.call('payments.visit');

    this.m_Button1.action = false;
    this.m_Button2.action = false;
  },
  onHide: function(callback, prepare) {
    this._super(callback, prepare);

    if(!prepare && !this.m_Button2.action) {
      if(DataManager.sharedManager().get(false, references.coins.lives) <= 0) {
        if(Game.instance) {
          if(!Game.sharedScreen().m_GameRunning) {
            ScreenManager.sharedManager().replace(Menu);
          }
        }
      } else {
        if(Game.instance) {
          if(!Game.sharedScreen().m_GameRunning && !Game.sharedScreen().m_GamePreviewRunning) {
            Game.sharedScreen().onShow();
          }
        }
      }
    }
  },
  update: function(time) {
    this._super(time);

    var lives = DataManager.sharedManager().get(false, references.coins.lives);

    if(lives <= 0) {
      EnergyManager.sharedManager().time(function(value) {
        this.m_Counter.timeLeft(value / 1000, EnergyManager.sharedManager().getRestoreTime() / 1000);
      }.bind(this));
    } else {
      this.m_Counter.ccsf([lives]);
    }

    EnergyManager.sharedManager().check();
  }
});

Lives.instance = false;
Lives.sharedScreen = function(parent) {
  if(Lives.instance) {
    Lives.instance.m_Parent = parent;
  } else {
    Lives.instance = new Lives(parent);
  }

  return Lives.instance;
};
