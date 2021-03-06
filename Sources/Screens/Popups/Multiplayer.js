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

    this.m_BackgroundHolder1 = Entity.create(s_ListFixSmall, this.m_Background);
    this.m_BackgroundHolder2 = Entity.create(s_ListFixSmall, this.m_Background);

    this.m_List = MultiplayerList.create(this.m_Background);

    this.m_BackgroundHolder1.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 + Camera.sharedCamera().coord(352));
    this.m_BackgroundHolder2.create().setCenterPosition(this.m_Background.getWidth() / 2, this.m_Background.getHeight() / 2 - Camera.sharedCamera().coord(355));

    this.m_BackgroundHolder2.setScaleY(-1);

    this.m_CloseButton.setTouchHandler('onCloseEvent', Multiplayer);
  },
  show: function(params) {
    this._super(params);
  },
  hide: function(params) {
    this._super(params);

    this.m_List.m_BackgroundHolder.cancel();
  },
  onShow: function() {
    this._super();
  },
  onHide: function() {
    this._super();
  },
  onCloseEvent: function() {
    this.hide();
  },
  onMode1Event: function() {
    this.hide(function() {
      ScreenManager.sharedManager().replace(Levels);
    });
  },
  onMode2Event: function() {
    this.m_List.showIncognitoConnectionView();
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
