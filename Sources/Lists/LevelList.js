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

LevelList = PatternList.extend({
  ctor: function(parent) {
    this._super(s_ListScrollSmall, 512, 700, 512, 700, parent);

    this.m_Text = [];
    this.m_Loading = [];
    this.m_Level =  [];
    this.m_ElementsBackgrounds =  [];

    this.m_ElementsBackgrounds[0] = BackgroundColor.create(cc.c4(0, 0, 0, 200), this, Camera.sharedCamera().coord(64), Camera.sharedCamera().coord(64));
    this.m_ElementsBackgrounds[1] = BackgroundColor.create(cc.c4(0, 0, 0, 200), this, Camera.sharedCamera().coord(64), Camera.sharedCamera().coord(64));
    this.m_ElementsBackgrounds[2] = BackgroundColor.create(cc.c4(0, 0, 0, 200), this, Camera.sharedCamera().coord(64), Camera.sharedCamera().coord(64));

    this.m_Level[0] = TiledEntity.create(s_ItemsRating, 1, 2, this);
    this.m_Level[1] = TiledEntity.create(s_ItemsRating, 1, 2, this);

    this.m_Loading[0] = Entity.create(s_Loading, this);
    this.m_Loading[1] = Entity.create(s_Loading, this);

    this.m_Text[1] = Text.create('level-popup-1', this);
    this.m_Text[2] = Text.create('level-popup-2', this);
    this.m_Text[3] = Text.create('level-popup-3', this);
    this.m_Text[4] = Text.create('level-popup-4', this);
    this.m_Text[5] = Text.create('level-popup-level-' + Game.level, this);

    this.m_Text[1].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(300));
    this.m_Text[4].setCenterPosition(-Camera.sharedCamera().coord(115) + this.m_Text[1].getWidth() / 2, this.m_Text[1].getCenterY() - this.m_Text[1].getHeight() / 2 - this.m_Text[4].getHeight() / 2 - Camera.sharedCamera().coord(30));
    this.m_Text[5].setCenterPosition(this.getCenterX(), this.m_Text[4].getCenterY() - this.m_Text[4].getHeight() / 2 - this.m_Text[5].getHeight() / 2 - Camera.sharedCamera().coord(20));
    this.m_Text[2].setCenterPosition(this.getCenterX(), this.m_Text[5].getCenterY() - this.m_Text[5].getHeight() / 2 - this.m_Text[2].getHeight() / 2 - Camera.sharedCamera().coord(50));
    this.m_Text[3].setCenterPosition(this.getCenterX(), this.m_Text[2].getCenterY() - this.m_Text[2].getHeight() / 2 - this.m_Text[2].getHeight() / 2 - Camera.sharedCamera().coord(150));
    this.m_Loading[0].create().setCenterPosition(this.getCenterX(), this.m_Text[2].getCenterY() - Camera.sharedCamera().coord(100));
    this.m_Loading[1].create().setCenterPosition(this.getCenterX(), this.m_Text[3].getCenterY() - Camera.sharedCamera().coord(100));
    this.m_Level[0].create().setCenterPosition(this.m_Text[4].getCenterX() + this.m_Text[4].getWidth() / 2 + Camera.sharedCamera().coord(120), this.m_Text[4].getCenterY());
    this.m_Level[1].create().setCenterPosition(this.m_Text[4].getCenterX() + this.m_Text[4].getWidth() / 2 + Camera.sharedCamera().coord(120), this.m_Text[4].getCenterY());

    this.m_Level[0].setCurrentFrameIndex(1);
    this.m_Level[1].setCurrentFrameIndex(0);

    this.m_Text[1].setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_Text[2].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[3].setColor(cc.c3(255.0, 130.0, 0.0));

    this.m_Text[4].setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Text[5].setColor(cc.c3(204.0, 102.0, 51.0));

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

    this.m_Text[1].ccsf([Game.level]);
    this.m_Level[1].showPercentage(Game.sharedScreen(0).m_LevelsMatrixes[Game.level - 1].difficult);
    this.m_Level[1].setCenterPosition(this.m_Level[0].getCenterX() - this.m_Level[0].getWidth() / 2 + this.m_Level[1].getTextureRect().getWidth() / 2, this.m_Level[0].getCenterY());

    this.m_ListMaxHeight = Math.abs(this.m_Loading[1].getCenterY() - this.m_Loading[1].getHeight() / 2 - Camera.sharedCamera().coord(50));

    var self = this;

    new PausableTimeout(function() {
      Tooflya.api.call('users.leaders', {
        limit: 100,
        type: 1,
        level: Game.level
      }, {
        success: function(data) {
          self.m_Loading[0].destroy();
          self.m_Loading[1].destroy();

          var y = self.m_Text[2].getCenterY() - Camera.sharedCamera().coord(100);
          var index = 0;

          data.users.forEach(function(user) {
            if(FriendsManager.sharedInstance().isFriend(user)) {
              var s = y;
              InternetEntity.create(user.photo, self, function(entity) {
                entity.create().setCenterPosition(Camera.sharedCamera().coord(100), s);

                var name = Text.create('leaderboard-name', self, cc.TEXT_ALIGNMENT_LEFT);
                var score = Text.create('leaderboard-score', self);

                name.ccsf([user.name + " " + user.surname]);
                score.ccsf([user.rating]);

                name.setCenterPosition(name.getWidth() / 2 + Camera.sharedCamera().coord(160), s + Camera.sharedCamera().coord(60) - name.getHeight() / 2);
                score.setCenterPosition(score.getWidth() / 2 + Camera.sharedCamera().coord(160), s - Camera.sharedCamera().coord(0));

                name.setColor(cc.c3(255.0, 130.0, 0.0));
                score.setColor(cc.c3(204.0, 102.0, 51.0));
              });

              y -= Camera.sharedCamera().coord(120);

              index++;
            }
          });

          if(index < 1) {
            self.m_Text[2].setVisible(false);

            y = self.m_Text[2].getCenterY() - Camera.sharedCamera().coord(20);
          }

          self.m_Text[3].setCenterPosition(self.getCenterX(), y + Camera.sharedCamera().coord(20));

          y -= Camera.sharedCamera().coord(80);

          index = 0;

          data.users.forEach(function(user) {
            if(!FriendsManager.sharedInstance().isFriend(user)) {
              var s = y;
              InternetEntity.create(user.photo, self, function(entity) {
                entity.create().setCenterPosition(Camera.sharedCamera().coord(100), s);

                var name = Text.create('leaderboard-name', self, cc.TEXT_ALIGNMENT_LEFT);
                var score = Text.create('leaderboard-score', self);

                name.ccsf([user.name + " " + user.surname]);
                score.ccsf([user.rating]);

                name.setCenterPosition(name.getWidth() / 2 + Camera.sharedCamera().coord(160), s + Camera.sharedCamera().coord(60) - name.getHeight() / 2);
                score.setCenterPosition(score.getWidth() / 2 + Camera.sharedCamera().coord(160), s - Camera.sharedCamera().coord(0));

                name.setColor(cc.c3(255.0, 130.0, 0.0));
                score.setColor(cc.c3(204.0, 102.0, 51.0));

                self.m_ListMaxHeight = Math.abs(entity.getCenterY() - entity.getHeight() / 2 - Camera.sharedCamera().coord(50));
              });

              y -= Camera.sharedCamera().coord(120);

              index++;
            }
          });

          if(index < 1) {
            self.m_Text[3].setVisible(false);
          }
        }
      });
    }, 1000);
  }
});

LevelList.create = function(parent) {
  return new LevelList(parent);
};
