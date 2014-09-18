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

    this.m_Loading = [];

    this.m_Loading[0] = Entity.create(s_Loading, this);
    this.m_Loading[1] = Entity.create(s_Loading, this);

    this.m_Text = [];

    this.m_Text[1] = Text.create('leaderboard-popup-1', this);
    this.m_Text[2] = Text.create('level-popup-2', this);
    this.m_Text[3] = Text.create('level-popup-3', this);

    this.m_Text[1].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(300));
    this.m_Text[2].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(220));
    this.m_Text[3].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(0));

    this.m_Text[1].setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Text[2].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[3].setColor(cc.c3(255.0, 130.0, 0.0));

    this.m_Loading[0].create().setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(100));
    this.m_Loading[1].create().setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(120));

    this.m_Loading[0].runAction(
      cc.RepeatForever.create(
        cc.RotateTo.create(1.0, 720)
      )
    );
    this.m_Loading[1].runAction(
      cc.RepeatForever.create(
        cc.RotateTo.create(1.0, 720)
      )
    );
  },
  onEnter: function() {
    this._super();

    new PausableTimeout(function() {
      Tooflya.api.call('users.leaders', {
        limit: 100,
        type: 1
      }, {
        success: function(data) {
          this.m_Loading[0].destroy();
          this.m_Loading[1].destroy();

          var y = this.getCenterY() + Camera.sharedCamera().coord(120);
          var index = 0;

          data.users.forEach(function(user) {
            if(FriendsManager.sharedInstance().isFriend(user)) {
              var s = y;
              var i = index;
              InternetEntity.create(user.photo, this, function(entity) {
                entity.create().setCenterPosition(Camera.sharedCamera().coord(100), s);

                var icon = Entity.create(s_LevelIcon, entity);
                var level = Text.create('zero', icon);

                level.setColor(cc.BLACK);
                level.disableShadow();
                level.setFontSize(Camera.sharedCamera().coord(24));
                level.ccsf([user.level]);
                level.create().setCenterPosition(icon.getWidth() / 2, icon.getHeight() / 2);

                icon.create().setCenterPosition(Camera.sharedCamera().coord(10), Camera.sharedCamera().coord(10));

                var name = Text.create('leaderboard-name', this, cc.TEXT_ALIGNMENT_LEFT);
                var score = Text.create('leaderboard-score', this);

                name.ccsf([user.name + " " + user.surname]);
                score.ccsf([user.rating, '']);

                name.setCenterPosition(name.getWidth() / 2 + Camera.sharedCamera().coord(160), s + Camera.sharedCamera().coord(60) - name.getHeight() / 2);
                score.setCenterPosition(score.getWidth() / 2 + Camera.sharedCamera().coord(160), s - Camera.sharedCamera().coord(0));

                name.setColor(cc.c3(255.0, 130.0, 0.0));
                score.setColor(cc.c3(204.0, 102.0, 51.0));

                if(i == 0) {
                  var crown = Entity.create(s_UsersCrown, this);

                  crown.create().setCenterPosition(Camera.sharedCamera().coord(100), s + Camera.sharedCamera().coord(50));
                }
              }.bind(this));

              y -= Camera.sharedCamera().coord(120);

              index++;
            }
          }.bind(this));

          if(index < 1) {
            this.m_Text[2].setVisible(false);

            this.m_Text[3].setCenterPosition(this.getCenterX(), y + Camera.sharedCamera().coord(100));
          } else {
            this.m_Text[3].setCenterPosition(this.getCenterX(), y + Camera.sharedCamera().coord(20));

            y -= Camera.sharedCamera().coord(80);
          }

          index = 0;

          data.users.forEach(function(user) {
            if(!FriendsManager.sharedInstance().isFriend(user)) {
              var s = y;
              var i = index;
              InternetEntity.create(user.photo, this, function(entity) {
                entity.create().setCenterPosition(Camera.sharedCamera().coord(100), s);

                var icon = Entity.create(s_LevelIcon, entity);
                var level = Text.create('zero', icon);

                level.setColor(cc.BLACK);
                level.disableShadow();
                level.setFontSize(Camera.sharedCamera().coord(24));
                level.ccsf([user.level]);
                level.create().setCenterPosition(icon.getWidth() / 2, icon.getHeight() / 2);

                icon.create().setCenterPosition(Camera.sharedCamera().coord(10), Camera.sharedCamera().coord(10));

                var name = Text.create('leaderboard-name', this, cc.TEXT_ALIGNMENT_LEFT);
                var score = Text.create('leaderboard-score', this);

                name.ccsf([user.name + " " + user.surname]);
                score.ccsf([user.rating, '']);

                name.setCenterPosition(name.getWidth() / 2 + Camera.sharedCamera().coord(160), s + Camera.sharedCamera().coord(60) - name.getHeight() / 2);
                score.setCenterPosition(score.getWidth() / 2 + Camera.sharedCamera().coord(160), s - Camera.sharedCamera().coord(0));

                name.setColor(cc.c3(255.0, 130.0, 0.0));
                score.setColor(cc.c3(204.0, 102.0, 51.0));

                this.m_ListMaxHeight = Math.abs(entity.getCenterY() - entity.getHeight() / 2 - Camera.sharedCamera().coord(50));

                if(i == 0) {
                  var crown = Entity.create(s_UsersCrown, this);

                  crown.create().setCenterPosition(Camera.sharedCamera().coord(100), s + Camera.sharedCamera().coord(50));
                }
              }.bind(this));

              y -= Camera.sharedCamera().coord(120);

              index++;
            }
          }.bind(this));

          if(index < 1) {
            this.m_Text[3].setVisible(false);
          }
        }.bind(this)
      });
    }.bind(this), 1000);
  }
});

LeaderboardList.create = function(parent) {
  return new LeaderboardList(parent);
};
