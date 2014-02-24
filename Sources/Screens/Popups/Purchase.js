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

Purchase = ExtendedPopup.extend({
  m_PurchaseCallback: false,
  m_PurchaseParameters: false,
  ctor: function(parent) {
    this._super(parent);

    this.m_Decoration = Entity.create(s_PopupDecoration13, this.m_Background);
    this.m_CoinsButton4 = Button.create(s_GetCoinsPopupButton, 2, 2, this.m_Background);
    this.m_Text = Text.create('coins-popup', this.m_Background);

    this.m_Decoration.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(350));

    this.m_Text.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(60));

    this.m_CloseButton.setTouchHandler('onCloseEvent', Purchase);
  },
  show: function(params, callback) {
    this._super();

    this.m_PurchaseCallback = callback;
    this.m_PurchaseParameters = params;
  },
  onShow: function() {
    this._super();

    var params = this.m_PurchaseParameters;
    var self = this;

    switch(this.config.params.platform) {
      default:
      break;
      case 'vk':
      VK.callMethod('showOrderBox', {
        type: 'item',
        item: params.id
      });
      VK.addCallback('onOrderCancel', function() {
        self.hide();
      });
      VK.addCallback('onOrderSuccess', function() {
        self.hide(self.m_PurchaseCallback(params.id));
      });
      break;
    }
  },
  onHide: function() {
    this._super();

    Purchase.instance = false;
  },
  update: function(time) {
    this._super(time);
  }
});

Purchase.instance = false;
Purchase.sharedScreen = function(parent) {
  if(Purchase.instance) {
    Purchase.instance.m_Parent = parent;
  } else {
    Purchase.instance = new Purchase(parent);
  }

  return Purchase.instance;
};
