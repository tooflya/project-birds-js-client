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

AboutList = PatternList.extend({
  ctor: function(parent) {
    this._super(s_ListScrollLarge, 800, 890, 0, 600, parent);

    this.m_GameLogo = Entity.create(LanguagesManager.sharedManager().getLanguageId() == 7 ? s_CreditsGameNameJapan : s_CreditsGameName, this);
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

    textes[0].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(100));
    textes[1].setCenterPosition(this.getCenterX(), this.getCenterY());
    textes[2].setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(50));
    textes[3].setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(150));
    textes[4].setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(250));
    textes[5].setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(300));
    textes[6].setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(400));
    textes[7].setCenterPosition(this.getCenterX(), this.getCenterY()- Camera.sharedCamera().coord(450));
    textes[8].setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(550));
    textes[9].setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(600));
    textes[10].setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(650));
    textes[11].setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(750));
    textes[12].setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(800));

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

    this.m_GameLogo.create().setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(300));
    this.m_CompanyLogo.create().setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(950));
  }
});

AboutList.create = function(parent) {
  return new AboutList(parent);
};
