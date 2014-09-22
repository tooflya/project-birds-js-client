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

FriendsList = List.extend({
  ctor: function(parent) {
    this._super(false, 1920, 1480, 320, 0, parent, 1);

    FriendsList.instance = this;

    Tooflya.api.call('users.leaders', {
      limit: 100,
      type: 1
    }, {
      success: function(data) {
        this.m_BackgroundPicture = Entity.create(s_FriendsCover, parent);

        this.setCenterPosition(0, this.m_BackgroundPicture.getHeight() / 2 - Camera.sharedCamera().height / 2 + Camera.sharedCamera().coord(5));
        this.m_BackgroundPicture.create().setCenterPosition(Camera.sharedCamera().center.x, -this.m_BackgroundPicture.getHeight() / 2 + Camera.sharedCamera().coord(5));

        this.m_BackgroundHolder = Background.create(this);

        data.users.forEach(function(user) {
          if(FriendsManager.sharedInstance().isFriend(user)) {console.log(this);
            var background = TiledEntity.create(s_FriendsListBackground, 2, 1, this);

            background.create();
          }
        }.bind(this));
      }.bind(this)
    });
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();

    this.m_BackgroundHolder.removeAllChildrenWithCleanup(true);
  }
});

FriendsList.instance = false;
FriendsList.sharedScreen = function(parent) {
  if(!FriendsList.instance) {
    FriendsList.instance = new FriendsList(parent);
  }

  return FriendsList.instance;
};
