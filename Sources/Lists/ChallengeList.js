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

ChallengeList = PatternList.extend({
  ctor: function(parent) {
    this._super(s_ListScrollSmall, 512, 700, 512, 0, parent);

    this.m_Text = [];

    this.m_Text[0] = Text.create('challenge-popup-1', this);
    this.m_Text[1] = Text.create('challenge-popup-2', this);

    this.m_Text[0].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(300));

    this.m_Text[0].setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_Text[1].setColor(cc.c3(255.0, 130.0, 0.0));
  },
  onEnter: function() {
    this._super();

    var randomFriend = DataManager.sharedManager().getAppFriends().random();

    this.m_Text[1].ccsf([randomFriend.first_name + " " + randomFriend.last_name]);

    var self = this;

    InternetEntity.create(randomFriend.photo_big, this, function(entity) {
      entity.create().setCenterPosition(self.getCenterX(), self.getCenterY() + Camera.sharedCamera().coord(100));

      self.m_Text[1].setCenterPosition(self.getCenterX(), entity.getCenterY() - entity.getHeight() / 2 - self.m_Text[1].getHeight() / 2 - Camera.sharedCamera().coord(30));
    });
  }
});

ChallengeList.create = function(parent) {
  return new ChallengeList(parent);
};
