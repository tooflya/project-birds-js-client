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
    this.m_GetButton = Button.create(s_GetLivesPopupButton, 1, 1, this.m_Background);
    this.m_Text = Text.create('lives-popup-1', this.m_Background);
    this.m_Counter = Text.create('lives-counter', this.m_Background);

    var platformPriceText;

    switch(this.config.params.platform) {
      case 'vk':
      platformPriceText = 'vk-price-text';
      break;
    }

    this.m_PriceText = Text.create(platformPriceText, this.m_GetButton);

    switch(this.config.params.platform) {
      case 'vk':
      this.m_PriceText.ccsf([5]);
      break;
    }

    this.m_PriceText.setCenterPosition(this.m_GetButton.getWidth() / 2, this.m_GetButton.getHeight() / 2 - Camera.sharedCamera().coord(83));

    this.m_Decoration.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(250));
    this.m_GetButton.create().setCenterPosition(this.m_Background.getWidth() / 2, Camera.sharedCamera().coord(80));

    this.m_Text.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(170));
    this.m_Counter.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(320));

    this.m_Counter.setColor(cc.c3(0.0, 120.0, 255.0));

    this.m_CloseButton.setTouchHandler('onCloseEvent', Lives);
    this.m_GetButton.setTouchHandler('onActionEvent', Lives, {id: purchase.lives});
  },
  onActionEvent: function(params) {
    this.m_GetButton.action = true;
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
          EnergyManager.sharedManager().restoreAll();

          if(Game.instance) {
            if(!Game.sharedScreen().m_GameRunning) {
              Game.sharedScreen().onShow();
            }
          }
          break;
        }
      });
    });
  },
  show: function() {
    DataManager.sharedManager().get(true, references.coins.lives, {
      success: function(value) {
        ExtendedPopup.prototype.show.call(Lives.instance);

        if(value <= 0) {
          Lives.instance.m_GetButton.setVisible(true);
        } else if(value < 5) {
          Lives.instance.m_GetButton.setVisible(true);
          Lives.instance.m_Text.setText('lives-popup-3');
          Lives.instance.m_Text.setCenterPosition(Lives.instance.m_Background.getWidth() / 2, Lives.instance.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(170));
        } else {
          Lives.instance.m_Text.setText('lives-popup-2');
          Lives.instance.m_Text.setCenterPosition(Lives.instance.m_Background.getWidth() / 2, Lives.instance.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(230));
          Lives.instance.m_GetButton.setVisible(false);
          Lives.instance.m_GetButton.runAction(
            cc.Sequence.create(
            cc.ScaleTo.create(0.1, 0.8, 1.2),
            cc.ScaleTo.create(0.1, 1.2, 0.8),
            cc.ScaleTo.create(0.1, 1.0, 1.0)
            )
          );
        }
      }
    });
  },
  onShow: function() {
    this._super();

    Tooflya.api.call('payments.visit');

    if(DataManager.sharedManager().get(false, references.coins.lives) < 5) {
      this.m_GetButton.runAction(
        cc.Sequence.create(
        cc.ScaleTo.create(0.1, 0.8, 1.2),
        cc.ScaleTo.create(0.1, 1.2, 0.8),
        cc.ScaleTo.create(0.1, 1.0, 1.0)
        )
      );
    }
  },
  onHide: function(callback, prepare) {
    this._super(callback, prepare);

    if(!prepare && !this.m_GetButton.action) {
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

    var self = this;

    var lives = DataManager.sharedManager().get(false, references.coins.lives);

    if(lives <= 0) {
      EnergyManager.sharedManager().time(function(value) {
        self.m_Counter.timeLeft(value / 1000, EnergyManager.sharedManager().getRestoreTime() / 1000);
      });
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
