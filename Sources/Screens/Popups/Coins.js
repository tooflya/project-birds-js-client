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

Coins = ExtendedPopup.extend({
  ctor: function(parent) {
    this._super(parent);

    this.m_Decoration = Entity.create(s_PopupDecoration6, this.m_Background);
    this.m_CoinsButton1 = Button.create(s_GetCoinsPopupButton, 2, 2, this.m_Background);
    this.m_CoinsButton2 = Button.create(s_GetCoinsPopupButton, 2, 2, this.m_Background);
    this.m_CoinsButton3 = Button.create(s_GetCoinsPopupButton, 2, 2, this.m_Background);
    this.m_CoinsButton4 = Button.create(s_GetCoinsPopupButton, 2, 2, this.m_Background);
    this.m_Text = Text.create('coins-popup', this.m_Background);

    this.m_CoinsButton1.setTextureRect(cc.rect(Camera.sharedCamera().coord(14), Camera.sharedCamera().coord(36), Camera.sharedCamera().coord(282), Camera.sharedCamera().coord(207)));
    this.m_CoinsButton2.setTextureRect(cc.rect(Camera.sharedCamera().coord(296), Camera.sharedCamera().coord(25), Camera.sharedCamera().coord(279), Camera.sharedCamera().coord(201)));
    this.m_CoinsButton3.setTextureRect(cc.rect(Camera.sharedCamera().coord(14), Camera.sharedCamera().coord(243), Camera.sharedCamera().coord(285), Camera.sharedCamera().coord(225)));
    this.m_CoinsButton4.setTextureRect(cc.rect(Camera.sharedCamera().coord(296), Camera.sharedCamera().coord(226), Camera.sharedCamera().coord(279), Camera.sharedCamera().coord(242)));

    this.m_Decoration.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(350));

    this.m_CoinsButton1.create().setCenterPosition(this.m_Background.getWidth() / 2 - Camera.sharedCamera().coord(140), this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(155));
    this.m_CoinsButton2.create().setCenterPosition(this.m_Background.getWidth() / 2 + Camera.sharedCamera().coord(140), this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(140));
    this.m_CoinsButton3.create().setCenterPosition(this.m_Background.getWidth() / 2 - Camera.sharedCamera().coord(140), this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(350));
    this.m_CoinsButton4.create().setCenterPosition(this.m_Background.getWidth() / 2 + Camera.sharedCamera().coord(140), this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(345));

    this.m_Text.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(60));

    this.m_CoinsButton1.setTouchHandler('onActionEvent', Coins);
    this.m_CoinsButton2.setTouchHandler('onActionEvent', Coins);
    this.m_CoinsButton3.setTouchHandler('onActionEvent', Coins);
    this.m_CoinsButton4.setTouchHandler('onActionEvent', Coins);

    this.m_CloseButton.setTouchHandler('onCloseEvent', Coins);
  },
  onActionEvent: function() {
    //
  },
  onShow: function() {
    this._super();
  },
  onHide: function() {
    this._super();

    Coins.instance = false;
  }
});

Coins.instance = false;
Coins.sharedScreen = function(parent) {
  if(Coins.instance) {
    Coins.instance.m_Parent = parent;
  } else {
    Coins.instance = new Coins(parent);
  }

  return Coins.instance;
};
