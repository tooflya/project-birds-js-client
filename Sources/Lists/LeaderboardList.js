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

LeaderboardList = PatternList.extend({
  m_Loading: false,
  ctor: function(parent) {
    this._super(s_ListScrollSmall, 512, 700, 512, 0, parent);

    this.m_Loading = Entity.create(s_Loading, this);

    this.m_Loading.create().setCenterPosition(this.getCenterX(), this.getCenterY());

    this.m_Text = [];

    this.m_Text[1] = Text.create('leaderboard-popup-1', this);
    this.m_Text[2] = Text.create('leaderboard-popup-2', this, cc.TEXT_ALIGNMENT_LEFT);
    this.m_Text[3] = Text.create('leaderboard-popup-3', this, cc.TEXT_ALIGNMENT_LEFT);

    this.m_Text[1].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(300));
    this.m_Text[2].setCenterPosition(this.getCenterX() + Camera.sharedCamera().coord(10), this.getCenterY() + Camera.sharedCamera().coord(120));
    this.m_Text[3].setCenterPosition(this.getCenterX() + Camera.sharedCamera().coord(10), this.getCenterY() + Camera.sharedCamera().coord(70));

    this.m_Text[1].setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Text[2].setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Text[3].setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_Text[2].setVisible(false);
    this.m_Text[3].setVisible(false);

    this.m_Loading.runAction(
      cc.RepeatForever.create(
        cc.RotateTo.create(1.0, 720)
        )
      );
  },
  onEnter: function() {
    this._super();

    var self = this;

    DataManager.sharedManager().emit('leaderboard', false, function(data) {
      self.m_Loading.destroy();

      VK.api("getProfiles", {
        fields: [
        "first_name",
        "last_name",
        "photo_medium"
        ],
        uids: data.player.id,
        test_mode: 1
      }, function(user) {
        InternetEntity.create(user.response[0].photo_medium, self, function(entity) {
          entity.create().setCenterPosition(Camera.sharedCamera().coord(100), self.getCenterY() + Camera.sharedCamera().coord(200));

          var name = Text.create('leaderboard-name', self, cc.TEXT_ALIGNMENT_LEFT);
          var score = Text.create('leaderboard-score', self);

          name.ccsf([user.response[0].first_name + " " + user.response[0].last_name]);
          score.ccsf([data.player.score]);

          name.setCenterPosition(name.getWidth() / 2 + Camera.sharedCamera().coord(160), self.getCenterY() + Camera.sharedCamera().coord(260) - name.getHeight() / 2);
          score.setCenterPosition(score.getWidth() / 2 + Camera.sharedCamera().coord(160), self.getCenterY() + Camera.sharedCamera().coord(200));

          name.setColor(cc.c3(255.0, 130.0, 0.0));
          score.setColor(cc.c3(204.0, 102.0, 51.0));
        });

        self.m_Text[2].ccsf([data.player.place]);
        self.m_Text[3].ccsf([data.users]);

        self.m_Text[2].setVisible(true);
        self.m_Text[3].setVisible(true);
      });

      VK.api("getProfiles", {
        fields: [
        "first_name",
        "last_name",
        "photo_medium"
        ],
        uids: data.players.id,
        test_mode: 1
      }, function(user) {
        var y = self.getCenterY() - Camera.sharedCamera().coord(50);
        var index = 0;

        user.response.forEach(function(entry) {
          if(entry.first_name == "DELETED") {
            // Dead user.
          } else {
            InternetEntity.create(entry.photo_medium, self, function(entity) {
              entity.create().setCenterPosition(Camera.sharedCamera().coord(100), y);

              var name = Text.create('leaderboard-name', self, cc.TEXT_ALIGNMENT_LEFT);
              var score = Text.create('leaderboard-score', self);

              name.ccsf([entry.first_name + " " + entry.last_name]);
              score.ccsf([data.players.score[index]]);

              name.setCenterPosition(name.getWidth() / 2 + Camera.sharedCamera().coord(160), y + Camera.sharedCamera().coord(60) - name.getHeight() / 2);
              score.setCenterPosition(score.getWidth() / 2 + Camera.sharedCamera().coord(160), y - Camera.sharedCamera().coord(0));

              name.setColor(cc.c3(255.0, 130.0, 0.0));
              score.setColor(cc.c3(204.0, 102.0, 51.0));

              y -= Camera.sharedCamera().coord(120);

              index++;

              self.m_ListMaxHeight = Math.abs(entity.getCenterY() - entity.getHeight() / 2 - Camera.sharedCamera().coord(50));
            });
          }
        });
      });
    });
  }
});

LeaderboardList.create = function(parent) {
  return new LeaderboardList(parent);
};
