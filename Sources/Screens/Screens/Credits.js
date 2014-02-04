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

    //Credits.instance = this;

    this.m_Background = Entity.create(s_ThirdPartyBackground, this, true);
    this.m_BackButton = Button.create(s_ButtonsSprite, 3, 3, this);
    this.m_BackgroundDecoration1 = Entity.create(s_BackgroundDecoration1, this);
    this.m_BackgroundDecoration2 = Entity.create(s_BackgroundDecoration3, this);

    thisHolder1 = Entity.create(s_ListFixLarge, this);
    thisHolder2 = Entity.create(s_ListFixLarge, this);
    this.m_List = CreditsList.create(this);

    this.m_BackgroundDecoration1.create().setCenterPosition(this.m_BackgroundDecoration1.getWidth() / 2, Camera.sharedCamera().height - this.m_BackgroundDecoration1.getHeight() / 2);
    this.m_BackgroundDecoration2.create().setCenterPosition(Camera.sharedCamera().width - this.m_BackgroundDecoration2.getWidth() / 2, this.m_BackgroundDecoration2.getHeight() / 2);
    this.m_BackButton.create().setCenterPosition(Camera.sharedCamera().coord(100), Camera.sharedCamera().coord(100));
    thisHolder1.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(450));
    thisHolder2.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(450));

    this.m_BackButton.setCurrentFrameIndex(1);

    thisHolder2.setScaleY(-1);

    this.m_BackButton.setTouchHandler('onBackEvent', Credits);
  },
  onBackEvent: function() {
    ScreenManager.sharedManager().replace(Settings);
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

CreditsList = PatternList.extend({
  ctor: function(parent) {
    this._super(s_ListScrollLarge, 800, 890, 0, 800, parent);

    this.m_GameLogo = Entity.create(s_CreditsGameName, this);
    this.m_CompanyLogo = Entity.create(s_CreditsCompanyName, this);

    var textes = new Array();

    textes[0] = Text.create('text-credits-1', this);
    textes[1] = Text.create('text-credits-2', this);
    textes[2] = Text.create('text-credits-3', this);
    textes[3] = Text.create('text-credits-4', this);
    textes[4] = Text.create('text-credits-5', this);
    textes[5] = Text.create('text-credits-6', this);
    textes[6] = Text.create('text-credits-7', this);
    textes[7] = Text.create('text-credits-8', this);
    textes[8] = Text.create('text-credits-9', this);
    textes[9] = Text.create('text-credits-10', this);
    textes[10] = Text.create('text-credits-11', this);
    textes[11] = Text.create('text-credits-12', this);
    textes[12] = Text.create('text-credits-13', this);

    textes[0].setCenterPosition(0, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(500));
    textes[1].setCenterPosition(0, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(600));
    textes[2].setCenterPosition(0, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(650));
    textes[3].setCenterPosition(0, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(750));
    textes[4].setCenterPosition(0, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(850));
    textes[5].setCenterPosition(0, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(950));
    textes[6].setCenterPosition(0, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(1050));
    textes[7].setCenterPosition(0, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(1150));
    textes[8].setCenterPosition(0, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(1250));
    textes[9].setCenterPosition(0, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(1300));
    textes[10].setCenterPosition(0, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(1350));
    textes[11].setCenterPosition(0, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(1450));
    textes[12].setCenterPosition(0, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(1500));

    textes[0].setColor(cc.c3(167.0, 65.0, 7.0));

    textes[1].setColor(cc.c3(248.0, 163.0, 73.0));
    textes[2].setColor(cc.c3(248.0, 163.0, 73.0));

    textes[3].setColor(cc.c3(167.0, 65.0, 7.0));

    textes[4].setColor(cc.c3(167.0, 65.0, 7.0));
    textes[5].setColor(cc.c3(248.0, 163.0, 73.0));

    textes[6].setColor(cc.c3(167.0, 65.0, 7.0));
    textes[7].setColor(cc.c3(248.0, 163.0, 73.0));

    textes[8].setColor(cc.c3(167.0, 65.0, 7.0));
    textes[9].setColor(cc.c3(248.0, 163.0, 73.0));
    textes[10].setColor(cc.c3(248.0, 163.0, 73.0));

    textes[11].setColor(cc.c3(167.0, 65.0, 7.0));
    textes[12].setColor(cc.c3(248.0, 163.0, 73.0));

    this.m_GameLogo.create().setCenterPosition(0, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(300));
    this.m_CompanyLogo.create().setCenterPosition(0, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(1650));
  }
});

Credits.instance = false;
Credits.sharedScreen = function() {
  return Credits.instance ? Credits.instance : new Credits();
};

CreditsList.create = function(parent) {
  return new CreditsList(parent);
};
