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

ExtendedPopup = Popup.extend({
  color: cc.c4(0, 0, 0, 0),
  m_Opacity: 200,
  m_ShowTime: 0.2,
  m_HideTime: 0.1,
  ctor: function(parent) {
    this._super(this.color, parent);

    PopupShaderManager.create(this);

    this.m_Decoration1 = Entity.create(s_PopupDecoration1, this);
    this.m_Decoration2 = Entity.create(s_PopupDecoration1, this);

    this.m_Background = Entity.create(s_PopupBackground, this, true);

    this.m_CloseButton = Button.create(s_PopupCloseButton, 1, 1, this.m_Background);

    this.m_CloseButton.create().setCenterPosition(this.m_Background.getWidth() - Camera.sharedCamera().coord(32), this.m_Background.getHeight() - Camera.sharedCamera().coord(32));
    this.m_Decoration1.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(300));
    this.m_Decoration2.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(300));

    this.m_Decoration1.setScale(3);
    this.m_Decoration2.setScale(3);
  },
  show: function() {
    if(!this.m_Parent) {
      this.m_Parent = ScreenManager.sharedManager().getCurrentScreen();
    }

    this._super();

    this.m_Background.setScale(0);
    this.m_Decoration1.setOpacity(0);
    this.m_Decoration2.setOpacity(0);
    this.runRecognizeAction(false, {
      name: 'fade',
      time: this.m_ShowTime,
      value: this.m_Opacity
    });
    this.m_Background.runRecognizeAction(cc.CallFunc.create(this.onShow, this), [{
      name: 'scale',
      time: this.m_ShowTime,
      value: 1.2
    }, {
      name: 'scale',
      time: this.m_ShowTime,
      value: {
        x: 0.9,
        y: 0.8
      }
    }, {
      name: 'scale',
      time: this.m_ShowTime,
      value: 1.0
    }]);
  },
  hide: function() {
    this.runRecognizeAction(false, {
      name: 'fade',
      time: this.m_HideTime,
      value: 0.0
    });
    this.m_Background.runRecognizeAction(cc.CallFunc.create(this.onHide, this), [{
      name: 'scale',
      time: this.m_HideTime,
      value: 1.2
    }, {
      name: 'scale',
      time: this.m_HideTime,
      value: 0.0
    }]);
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
  },
  onHide: function() {
    this.removeFromParent();
  },
  onCloseEvent: function() {
    this.hide();
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();
  },
  prepare: function() {
    this.onHide();
  },
  update: function(time) {
    this._super(time);

    this.m_Decoration1.setRotation(this.m_Decoration1.getRotation() + 10 * time);
    this.m_Decoration2.setRotation(this.m_Decoration2.getRotation() - 10 * time);
  }
});
