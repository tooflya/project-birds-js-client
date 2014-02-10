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

Item = ExtendedPopup.extend({
  ctor: function(parent) {
    this._super(parent);

    this.m_ActionButton = Button.create(s_PopupButton, 1, 1, this.m_Background);
    this.m_ActionText = Text.create(false, this.m_ActionButton);

    this.m_BackgroundHolder1 = Entity.create(s_ListFixSmall, this.m_Background);
    this.m_BackgroundHolder2 = Entity.create(s_ListFixSmall, this.m_Background);

    this.m_List = ItemList.create(this.m_Background);

    this.m_ActionButton.create().setCenterPosition(this.m_Background.getWidth() / 2, Camera.sharedCamera().coord(48));
    this.m_BackgroundHolder1.create().setCenterPosition(this.m_Background.getWidth() / 2, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(308));
    this.m_BackgroundHolder2.create().setCenterPosition(this.m_Background.getWidth() / 2, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(348));

    this.m_ActionText.setCenterPosition(this.m_ActionButton.getWidth() / 2, this.m_ActionButton.getHeight() / 2);

    this.m_BackgroundHolder2.setScaleY(-1);

    this.m_CloseButton.setTouchHandler('onCloseEvent', Item);
  },
  onActionEvent: function() {
    this.m_ActionButton.action = true;

    this.hide();
  },
  show: function(params) {
    this.m_ActionButton.setTouchHandler('onActionEvent', Item);
    this.m_ActionButton.action = false;
    this.m_ActionButton.params = params;

    this._super();

    this.showButton(params.id);

    this.m_List.onShow(params.id);
  },
  showButton: function(id) {
    if(false) {
      this.m_ActionButton.setVisible(false);
    } else {
      this.m_ActionButton.setVisible(true);

      this.m_ActionText.setText('buy');
    }
  },
  onShow: function() {
    this._super();
  },
  onHide: function() {
    this._super();

    if(this.m_ActionButton.action) {
      var silver = properties.items[this.m_ActionButton.params.id].price.silver;
      var gold = properties.items[this.m_ActionButton.params.id].price.gold;

      if(DataManager.sharedManager().get(references.coins.silver) < silver || DataManager.sharedManager().get(references.coins.gold) < gold) {
        Coins.sharedScreen(this.m_Parent).show();
      } else {
        DataManager.sharedManager().update(references.coins.gold, -gold);
        DataManager.sharedManager().update(references.coins.silver, -silver);

        Bought.sharedScreen(this.m_Parent).show(this.m_ActionButton.params);
      }
    }

    Item.instance = false;
  }
});

Item.instance = false;
Item.sharedScreen = function(parent) {
  if(Item.instance) {
    Item.instance.m_Parent = parent;
  } else {
    Item.instance = new Item(parent);
  }

  return Item.instance;
};
