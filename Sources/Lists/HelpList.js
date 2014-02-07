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

HelpList = PatternList.extend({
  ctor: function(parent) {
    this._super(s_ListScrollSmall, 512, 700, 512, 700, parent);

    this.m_Text = [];

    this.m_Text[1] = Text.create('help-popup-1', this);
    this.m_Text[2] = Text.create('help-popup-2', this);
    this.m_Text[3] = Text.create('help-popup-3', this);
    this.m_Text[4] = Text.create('help-popup-4', this);
    this.m_Text[5] = Text.create('help-popup-5', this);
    this.m_Text[6] = Text.create('help-popup-6', this);
    this.m_Text[7] = Text.create('help-popup-7', this);

    this.m_Text[1].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(300));
    this.m_Text[2].setCenterPosition(this.getCenterX(), this.m_Text[1].getCenterY() - this.m_Text[1].getHeight() / 2 - this.m_Text[2].getHeight() / 2 - Camera.sharedCamera().coord(50));
    this.m_Text[5].setCenterPosition(this.getCenterX(), this.m_Text[2].getCenterY() - this.m_Text[2].getHeight() / 2 - this.m_Text[5].getHeight() / 2 - Camera.sharedCamera().coord(50));
    this.m_Text[3].setCenterPosition(this.getCenterX(), this.m_Text[5].getCenterY() - this.m_Text[5].getHeight() / 2 - this.m_Text[3].getHeight() / 2 - Camera.sharedCamera().coord(50));
    this.m_Text[6].setCenterPosition(this.getCenterX(), this.m_Text[3].getCenterY() - this.m_Text[3].getHeight() / 2 - this.m_Text[6].getHeight() / 2 - Camera.sharedCamera().coord(50));
    this.m_Text[4].setCenterPosition(this.getCenterX(), this.m_Text[6].getCenterY() - this.m_Text[6].getHeight() / 2 - this.m_Text[4].getHeight() / 2 - Camera.sharedCamera().coord(50));
    this.m_Text[7].setCenterPosition(this.getCenterX(), this.m_Text[4].getCenterY() - this.m_Text[4].getHeight() / 2 - this.m_Text[7].getHeight() / 2 - Camera.sharedCamera().coord(50));

    this.m_Text[1].setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_Text[2].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[3].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[4].setColor(cc.c3(255.0, 130.0, 0.0));

    this.m_Text[5].setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Text[6].setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Text[7].setColor(cc.c3(204.0, 102.0, 51.0));
  },
  onEnter: function() {
    this._super();

    this.params.max.height = Math.abs(this.m_Text[7].getCenterY() - this.m_Text[7].getHeight() / 2 - Camera.sharedCamera().coord(50));
  }
});

HelpList.create = function(parent) {
  return new HelpList(parent);
};
