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

Bought = ExtendedPopup.extend({
  ctor: function(parent) {
    this._super(parent);

    this.m_BackgroundIcon = TiledEntity.create(s_ShopItems, 10, 6, this);

    this.m_ContinueText = Text.create('tap-to-continue', this);
    this.m_ItemText = Text.create(false, this);
    this.m_UnlockText = Text.create('unlocked', this);

    this.m_Background.removeFromParent();

    this.m_Decoration1.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);
    this.m_Decoration2.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);

    this.m_BackgroundIcon.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);

    this.m_ContinueText.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(450));
    this.m_ItemText.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(300));
    this.m_UnlockText.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(400));

    this.m_BackgroundIcon.setZOrder(605);

    this.m_CloseButton.setTouchHandler('onCloseEvent', Bought);
  },
  show: function(params) {
    if(!this.m_Parent) {
      this.m_Parent = ScreenManager.sharedManager().getCurrentScreen();
    }

    Popup.prototype.show.call(this);

    this.reference = params.reference;

    this.m_BackgroundIcon.setOpacity(0);
    this.m_Decoration1.setOpacity(0);
    this.m_Decoration2.setOpacity(0);
    this.m_ContinueText.setOpacity(0);
    this.m_ItemText.setOpacity(0);
    this.m_UnlockText.setOpacity(0);
    this.runRecognizeAction(cc.CallFunc.create(this.onShow, this), {
      name: 'fade',
      time: this.m_ShowTime,
      value: this.m_Opacity
    });

    this.m_ContinueText.runAction(
      cc.RepeatForever.create(
        cc.Sequence.create(
          cc.FadeIn.create(1.0),
          cc.FadeOut.create(1.0)
          )
        )
      );

    this.m_BackgroundIcon.setCurrentFrameIndex(params.reference);

    this.m_ItemText.setText(['item-title-' + params.reference]);
    this.m_ItemText.setFontSize(this.m_UnlockText.getFontSize());
  },
  hide: function() {
    this.m_ContinueText.stopAllActions();
    this.runRecognizeAction(cc.CallFunc.create(this.onHide, this), {
      name: 'fade',
      time: this.m_HideTime,
      value: 0.0
    });
    this.m_Decoration1.runRecognizeAction(false, {
      name: 'fade',
      time: this.m_HideTime,
      value: 0.0
    });
    this.m_Decoration2.runRecognizeAction(false, {
      name: 'fade',
      time: this.m_HideTime,
      value: 0.0
    });
    this.m_BackgroundIcon.runRecognizeAction(false, {
      name: 'fade',
      time: this.m_HideTime,
      value: 0.0
    });
    this.m_ContinueText.runRecognizeAction(false, {
      name: 'fade',
      time: this.m_HideTime,
      value: 0.0
    });
    this.m_ItemText.runRecognizeAction(false, {
      name: 'fade',
      time: this.m_HideTime,
      value: 0.0
    });
    this.m_UnlockText.runRecognizeAction(false, {
      name: 'fade',
      time: this.m_HideTime,
      value: 0.0
    });
  },
  onShow: function() {
    this.m_CloseButton.stopAllActions();
    this.m_CloseButton.runAction(
      cc.RepeatForever.create(
        cc.Sequence.create(
          cc.RotateTo.create(1.0, -10),
          cc.RotateTo.create(1.0, 10)
          )
        )
      );
    this.m_Decoration1.runRecognizeAction(false, {
      name: 'fade',
      time: this.m_ShowTime,
      value: 255.0
    });
    this.m_Decoration2.runRecognizeAction(false, {
      name: 'fade',
      time: this.m_ShowTime,
      value: 255.0
    });
    this.m_BackgroundIcon.runRecognizeAction(false, {
      name: 'fade',
      time: this.m_ShowTime,
      value: 255.0
    });
    this.m_ItemText.runRecognizeAction(false, {
      name: 'fade',
      time: this.m_ShowTime,
      value: 255.0
    });
    this.m_UnlockText.runRecognizeAction(false, {
      name: 'fade',
      time: this.m_ShowTime,
      value: 255.0
    });

    ConfettiBackground.sharedScreen(this).show();
  },
  onHide: function() {
    this._super();

    Bought.instance = false;
  },
  onTouch: function() {
    switch(this.config.params.platform) {
      case 'vk':
      VK.api("wall.post", {
        message: properties.items[this.reference].share.vk.message,
        attachments: properties.items[this.reference].share.vk.image + ',http://vk.com/app4165575',
        test_mode: 1
      }, function(e) {
      });
      case 'fb':
      break;
      break;
    }

    this.hide();
  }
});

Bought.instance = false;
Bought.sharedScreen = function(parent) {
  if(Bought.instance) {
    Bought.instance.m_Parent = parent;
  } else {
    Bought.instance = new Bought(parent);
  }

  return Bought.instance;
};
