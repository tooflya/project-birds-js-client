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

Credits = Screen.extend({
  ctor: function() {
    this._super();

    Credits.instance = this;

    this.name = "Credits screen";

    this.m_Background = Entity.create(Orientation.parse(s_ThirdPartyBackground), this, true);

    this.m_BackgroundDecoration1 = Entity.create(s_BackgroundDecoration1, this);
    this.m_BackgroundDecoration2 = Entity.create(s_BackgroundDecoration3, this);

    this.m_BackButton = Button.create(s_ButtonsSprite, 3, 3, this);

    thisHolder1 = Entity.create(s_ListFixLarge, this);
    thisHolder2 = Entity.create(s_ListFixLarge, this);

    this.m_List = AboutList.create(this);

    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));

    this.m_BackgroundDecoration1.create().setCenterPosition(this.m_BackgroundDecoration1.getWidth() / 2, Camera.sharedCamera().height - this.m_BackgroundDecoration1.getHeight() / 2);
    this.m_BackgroundDecoration2.create().setCenterPosition(Camera.sharedCamera().width - this.m_BackgroundDecoration2.getWidth() / 2, this.m_BackgroundDecoration2.getHeight() / 2);

    thisHolder1.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(450));
    thisHolder2.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(450));

    this.m_BackButton.setCurrentFrameIndex(1);

    thisHolder2.setScaleY(-1);

    this.m_BackButton.setTouchHandler('onBackEvent', Credits);
  },
  onBackEvent: function() {
    ScreenManager.sharedManager().replace(Settings);
  },
  onShow: function() {
    this._super();
  },
  onHide: function() {
    this._super();

    Credits.instance = false;
  },
  update: function(time) {
    this._super(time);
  },
  onKeyDown: function(e) {
    switch(e) {
      case 27:
      ScreenManager.sharedManager().replace(Settings);
      break;
    }
  }
});

Credits.instance = false;
Credits.sharedScreen = function() {
  return Credits.instance ? Credits.instance : new Credits();
};
