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

Multiplayer = ExtendedPopup.extend({
  ctor: function(parent) {
    this._super(parent);

    this.m_Text = [];

    this.m_ActionButton = Button.create(s_PopupButton, 1, 1, this.m_Background);
    this.m_ActionText = Text.create('go', this.m_ActionButton);
    this.m_Text[1] = Text.create('multiplayer-popup-1', this.m_Background);
    this.m_Text[2] = Text.create('multiplayer-popup-2', this.m_Background);

    this.m_Decoration = Entity.create(s_PopupDecoration15, this.m_Background);

    this.m_ActionButton.create().setCenterPosition(this.m_Background.getWidth() / 2, Camera.sharedCamera().coord(48));
    this.m_Text[1].create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getCenterY() - Camera.sharedCamera().coord(100));
    this.m_Text[2].create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getCenterY() - Camera.sharedCamera().coord(270));

    this.m_Decoration.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(250));

    this.m_ActionText.setCenterPosition(this.m_ActionButton.getWidth() / 2, this.m_ActionButton.getHeight() / 2);

    this.m_CloseButton.setTouchHandler('onCloseEvent', Multiplayer);
    this.m_ActionButton.setTouchHandler('onPlayEvent', Multiplayer);
  },
  onShow: function() {
    this._super();
  },
  onHide: function() {
    this._super();

    Multiplayer.instance = false;
  },
  onCloseEvent: function() {
    this.hide(function() {
      ScreenManager.sharedManager().replace(Levels);
    });
  },
  onPlayEvent: function() {
    this.hide(function() {
      Mode.sharedScreen().request();
    });
  }
});

Multiplayer.instance = false;
Multiplayer.sharedScreen = function(parent) {
  if(Multiplayer.instance) {
    Multiplayer.instance.m_Parent = parent;
  } else {
    Multiplayer.instance = new Multiplayer(parent);
  }

  return Multiplayer.instance;
};
