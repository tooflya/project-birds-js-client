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

FriendsPanel = BackgroundColor.extend({
  _added: 0,

  ctor: function(parent) {
    this._super(cc.c4(255, 255, 255, 250.0), parent, Camera.sharedCamera().width, Camera.sharedCamera().coord(120));

    FriendsPanel.instance = this;

    this.create();
  },
  show: function() {
    this.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(1.0),
        cc.EaseBounceOut.create(
          cc.MoveTo.create(2.0, cc.p(Camera.sharedCamera().center.x, this.getHeight() / 2))
        ),
        false
      )
    );
  },
  hide: function() {

  },
  onShow: function() {

  },
  onHide: function() {
    FriendsPanel.instance = false;
  },
  create: function() {
    var self = this;
    var friends = FriendsManager.sharedInstance().getFriends();

    for(var i = 0; i < 20; i++) {
      var friend = friends[i];

      InternetEntity.create(friend.photo_medium, this, function(entity) {
        entity.create().setCenterPosition(Camera.sharedCamera().coord(120) * ++self._added - Camera.sharedCamera().coord(50), self.getHeight() / 2);
      });
    }

    this.setCenterPosition(Camera.sharedCamera().center.x, this.getHeight() / 2 - self.getHeight());
  }
});

FriendsPanel.instance = false;
FriendsPanel.sharedScreen = function(parent) {
  return FriendsPanel.instance ? FriendsPanel.instance : new FriendsPanel(parent);
};
