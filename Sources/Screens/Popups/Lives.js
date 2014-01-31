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

    this.m_Decoration.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(250));
    this.m_GetButton.create().setCenterPosition(this.m_Background.getWidth() / 2, Camera.sharedCamera().coord(80));

    this.m_CloseButton.setTouchHandler('onCloseEvent', Lives);
    this.m_GetButton.setTouchHandler('onGetEvent', Lives);
  },
  onActionEvent: function() {
    //
  },
  onGetEvent: function() {
    //
  },
  onShow: function() {
    this._super();
  },
  onHide: function() {
    this._super();

    Lives.instance = false;
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
