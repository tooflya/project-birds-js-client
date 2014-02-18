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

Rate = ExtendedPopup.extend({
  ctor: function(parent) {
    this._super(parent);

    this.m_Decoration = Entity.create(s_PopupDecoration2, this.m_Background);
    this.m_ActionButton = Button.create(s_PopupButton, 1, 1, this.m_Background);
    this.m_Text1 = Text.create('rate-popup-1', this.m_Background);
    this.m_Text2 = Text.create('rate-popup-2', this.m_Background);
    this.m_Text3 = Text.create('rate-popup-3', this.m_ActionButton);

    this.m_Decoration.create().setCenterPosition(this.m_Background.getWidth() / 2 - Camera.sharedCamera().coord(28), this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(250));
    this.m_ActionButton.create().setCenterPosition(this.m_Background.getWidth() / 2, Camera.sharedCamera().coord(48));

    this.m_Text1.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(90));
    this.m_Text2.setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(280));
    this.m_Text3.setCenterPosition(this.m_ActionButton.getWidth() / 2, this.m_ActionButton.getHeight() / 2);

    this.m_CloseButton.setTouchHandler('onCloseEvent', Rate);
    this.m_ActionButton.setTouchHandler('onActionEvent', Rate);
  },
  onActionEvent: function() {
    this.hide(function() {
      DataManager.sharedManager().save(references.info.rate, 1);
    });
  },
  onShow: function() {
    this._super();

    DataManager.sharedManager().save(references.info.game, 0);
  },
  onHide: function() {
    this._super();

    Rate.instance = false;
  }
});

Rate.instance = false;
Rate.sharedScreen = function(parent) {
  if(Rate.instance) {
    Rate.instance.m_Parent = parent;
  } else {
    Rate.instance = new Rate(parent);
  }

  return Rate.instance;
};
