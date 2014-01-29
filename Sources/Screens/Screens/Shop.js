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

Shop = Screen.extend({
  m_ElementsCount: [10, 10, 10],
  m_Backgrounds: [],
  ctor: function() {
    this._super();

    Shop.instance = this;

    this.m_Background = Entity.create(s_ThirdPartyBackground, this, true);
    this.m_BackButton = Button.create(s_ButtonsSprite, 3, 3, this);
    this.m_Panel = Entity.create(s_ShopPanel, this);

    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < this.m_ElementsCount[i]; j++) {
        this.m_Backgrounds[i] = BackgroundColor.create(cc.c4(Random.sharedRandom().random(0, 255), Random.sharedRandom().random(0, 255), Random.sharedRandom().random(0, 255), 255), this, Camera.sharedCamera().width, Camera.sharedCamera().coord(200));
        this.m_Backgrounds[i].setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(200) * (i - 1));
      }
    }

    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));
    this.m_Panel.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height - this.m_Panel.getHeight() / 2);

    this.m_BackButton.setCurrentFrameIndex(1);

    this.m_BackButton.setTouchHandler('onBackEvent', Shop);
  },
  onBackEvent: function() {
    ScreenManager.sharedManager().replace(Menu);
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();
  },
  update: function(time) {
    this._super(time);
  }
});

Shop.instance = false;
Shop.sharedScreen = function() {
  return Shop.instance ? Shop.instance : new Shop();
};
