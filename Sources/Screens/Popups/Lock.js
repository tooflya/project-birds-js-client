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

Lock = ExtendedPopup.extend({
  id: 0,
  ctor: function(parent) {
    this._super(parent);

    this.m_Decoration = Entity.create(s_PopupDecoration7, this.m_Background);
    this.m_ActionButton = Button.create(s_PopupButton, 1, 1, this.m_Background);
    this.m_BackgroundText = Text.create('mode-unlock', this.m_Background);
    this.m_ActionText = Text.create('unlock', this.m_ActionButton);

    this.m_KeysDecoration1 = Entity.create(s_PopupDecoration1, this.m_Background);
    this.m_KeysDecoration2 = Entity.create(s_PopupDecoration1, this.m_Background);

    this.m_PriceText = Text.create(false, this.m_Background);
    this.m_Key = Entity.create(s_UnlockKey, this.m_Background);

    this.m_PriceText.setFontSize(Camera.sharedCamera().coord(50));
    this.m_PriceText.setColor(cc.c3(255, 200, 15));

    this.m_KeysDecoration1.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(270));
    this.m_KeysDecoration2.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(270));

    this.m_KeysDecoration1.setScale(0.7);
    this.m_KeysDecoration2.setScale(0.7);

    this.m_Decoration.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(250));
    this.m_Key.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(270));
    this.m_ActionButton.create().setCenterPosition(this.m_Background.getWidth() / 2, Camera.sharedCamera().coord(48));
    this.m_BackgroundText.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(100));
    this.m_ActionText.setCenterPosition(this.m_ActionButton.getWidth() / 2, this.m_ActionButton.getHeight() / 2);

    this.m_CloseButton.setTouchHandler('onCloseEvent', Lock);
    this.m_ActionButton.setTouchHandler('onActionEvent', Lock);
  },
  onActionEvent: function() {
    var self = this;

    this.hide(function() {
      var price = Lock.instance.price;
      var id = Lock.instance.id;
      var data = Lock.instance.data;
      var parent = Lock.instance.getParent();
      DataManager.sharedManager().get(true, references.coins.keys, {
        success: function(value) {
          if(value >= price) {
            DataManager.sharedManager().update(true, references.coins.keys, -price);

            parent.unlock(id, data);
          } else {
            Keys.sharedScreen(parent).show();
          }
        }
      });
    });
  },
  show: function(id, type, data) {
    this._super();

    var prices;
    switch(type) {
      case 'item':
      prices = unlock.items;

      this.m_BackgroundText.setText('item-unlock');
      break;
      case 'level':
      prices = unlock.levels;

      this.m_BackgroundText.setText('level-unlock');
      break;
      case 'mode':
      prices = unlock.modes;

      this.m_BackgroundText.setText('mode-unlock');
      break;
    }

    this.m_BackgroundText.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(100));

    this.m_PriceText.ccsf([prices[id].price]);
    this.m_PriceText.setCenterPosition(this.m_Background.getWidth() / 2 + this.m_PriceText.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(270));
    this.m_Key.setCenterPosition(this.m_Background.getWidth() / 2 - this.m_PriceText.getWidth() / 2, this.m_Key.getCenterY());

    this.id = id;
    this.price = prices[id].price;
    this.data = data;
  },
  onShow: function() {
    this._super();

    this.m_ActionButton.action = false;
  },
  onHide: function() {
    this._super();
  },
  update: function(time) {
    this._super(time);

    this.m_KeysDecoration1.setRotation(this.m_Decoration1.getRotation() + 10 * time);
    this.m_KeysDecoration2.setRotation(this.m_Decoration2.getRotation() - 10 * time);
  }
});

Lock.instance = false;
Lock.sharedScreen = function(parent) {
  if(Lock.instance) {
    Lock.instance.m_Parent = parent;
  } else {
    Lock.instance = new Lock(parent);
  }

  return Lock.instance;
};
