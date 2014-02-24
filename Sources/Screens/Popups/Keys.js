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

Keys = ExtendedPopup.extend({
  ctor: function(parent) {
    this._super(parent);

    this.m_Decoration = Entity.create(s_PopupDecoration7, this.m_Background);
    this.m_CoinsButton1 = Button.create(s_GetKeysPopupButton1, 1, 1, this.m_Background);
    this.m_CoinsButton2 = Button.create(s_GetKeysPopupButton2, 1, 1, this.m_Background);
    this.m_Text = Text.create('keys-popup', this.m_Background);

    this.m_Decoration.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(200));

    this.m_CoinsButton1.create().setCenterPosition(this.m_Background.getWidth() / 2 - Camera.sharedCamera().coord(140), this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(350));
    this.m_CoinsButton2.create().setCenterPosition(this.m_Background.getWidth() / 2 + Camera.sharedCamera().coord(140), this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(350));

    this.m_Text.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(150));

    this.m_CoinsButton1.setTouchHandler('onActionEvent', Keys, {id: purchase.keys.pack1});
    this.m_CoinsButton2.setTouchHandler('onActionEvent', Keys, {id: purchase.keys.pack2});

    this.m_CloseButton.setTouchHandler('onCloseEvent', Keys);
  },
  onActionEvent: function(params) {
    this.hide(function() {
      Purchase.sharedScreen(this.getParent()).show(params, function(id) {
        switch(id) {
          case purchase.keys.pack1:
          DataManager.sharedManager().update(references.coins.keys, 50);
          break;
          case purchase.keys.pack2:
          DataManager.sharedManager().update(references.coins.keys, 200);
          break;
        }
      });
    });
  },
  onShow: function() {
    this._super();
  },
  onHide: function() {
    this._super();

    Keys.instance = false;
  }
});

Keys.instance = false;
Keys.sharedScreen = function(parent) {
  if(Keys.instance) {
    Keys.instance.m_Parent = parent;
  } else {
    Keys.instance = new Keys(parent);
  }

  return Keys.instance;
};
