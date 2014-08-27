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

FriendsLivesList = PatternList.extend({
  ctor: function(parent) {
    this._super(s_ListScrollSmall, 512, 700, 512, 0, parent);

    this.m_Decoration1 = Entity.create(s_PopupDecoration19, this);
    this.m_Decoration2 = Entity.create(s_PopupDecoration20, this);

    this.m_Text = [];

    this.m_Text[0] = Text.create('friends-lives-popup-1', this);

    this.m_Text[0].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(320));
    this.m_Decoration1.create().setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(100));
    this.m_Decoration2.create().setCenterPosition(this.getCenterX() - Camera.sharedCamera().coord(10), this.getCenterY() + Camera.sharedCamera().coord(100));

    this.m_Text[0].setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_Decoration2.runAction(
      cc.RepeatForever.create(
        cc.Sequence.create(
          cc.ScaleTo.create(0.2, 0.95, 1.0),
          cc.ScaleTo.create(0.1, 1.0, 1.0),
          cc.MoveTo.create(2.2, cc.p(this.m_Decoration2.getCenterX(), this.m_Decoration2.getCenterY() + Camera.sharedCamera().coord(5))),
          cc.ScaleTo.create(0.2, 0.95, 1.0),
          cc.ScaleTo.create(0.1, 1.0, 1.0),
          cc.MoveTo.create(2.2, cc.p(this.m_Decoration2.getCenterX(), this.m_Decoration2.getCenterY() - Camera.sharedCamera().coord(5))),
          false
        )
      )
    );
  },
  onEnter: function() {
    this._super();
  }
});

FriendsLivesList.create = function(parent) {
  return new FriendsLivesList(parent);
};
