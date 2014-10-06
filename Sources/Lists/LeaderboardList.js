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
    this.m_Text[4] = Text.create('level-popup-5', this);

    this.m_Text[1].setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Text[2].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[3].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[4].setColor(cc.c3(255.0, 130.0, 0.0));

    this.m_Loading[0].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(100));
    this.m_Loading[1].setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(120));

    this.m_BackgroundHolder = EntryManager.create(this, {
      update: {
        start: function() {
          this.m_Loading[0].create().runAction(
            cc.RepeatForever.create(
              cc.RotateTo.create(1.0, 720)
            )
          );
          this.m_Loading[1].create().runAction(
            cc.RepeatForever.create(
              cc.RotateTo.create(1.0, 720)
            )
          );

          this.m_Text[1].setVisible(true);
          this.m_Text[2].setVisible(true);
          this.m_Text[3].setVisible(true);
          this.m_Text[4].setVisible(false);

          this.m_Text[1].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(300));
          this.m_Text[2].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(220));
          this.m_Text[3].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(0));
          this.m_Text[4].setCenterPosition(this.getCenterX(), this.getCenterY());
        },
        update: function(callback) {
          Tooflya.api.call('users.leaders', {
            limit: 100,
            type: 1
          }, {
            success: function(data) {
              callback.finish();

              if(data.users.length > 0) {
                callback.create(data.users);
              } else {
                callback.empty();
              }
            }
          });
        },
        finish: function() {
          this.m_Loading[0].destroy();
          this.m_Loading[1].destroy();
        }
      },
      empty: function() {
        this.m_Text[2].setVisible(false);
        this.m_Text[3].setVisible(false);
        this.m_Text[4].setVisible(true);
      },
      create: function(data) {
        data.sort(function(user1, user2) {
          if(FriendsManager.sharedInstance().isFriend(user1)) {
            return -1;
          }

          if(FriendsManager.sharedInstance().isFriend(user2)) {
            return 1;
          }

          return 0;
        });

        var separator = false;
        var users = {
          app: 0,
          another: 0
        };
        var count = 0;
        data.forEach(function(user) {
          var crown = false;
          if(FriendsManager.sharedInstance().isFriend(user)) {
            crown = users.app++ < 1;
          } else {
            crown = users.another++ < 1;
          }

          user.supports = {
            close: false,
            status: false,
            crown: crown,
            level: true
          };

          if(!separator) {
            if(!FriendsManager.sharedInstance().isFriend(user)) {
              separator = true;

              var margin = 0;
              if(users.app > 0) {
                margin = this.m_BackgroundHolder.margin(110);
              }

              this.m_Text[3].setCenterPosition(this.getCenterX(), this.m_Text[2].getCenterY() - (count * Camera.sharedCamera().coord(120)) - margin);
            }
          }

          this.m_BackgroundHolder.create(user, function() {
            this.createText('leaderboard-score',
            {
              create: function() {
                this.elements.text.ccsf([this.data.rating, '']);
                this.elements.text.create().setCenterPosition(this.elements.text.getWidth() / 2 + Camera.sharedCamera().coord(130), Camera.sharedCamera().coord(50));
                this.elements.text.setColor(cc.c3(204.0, 102.0, 51.0));
              }
            });
          });

          count++
        }.bind(this));

        if(users.app < 1) {
          this.m_Text[2].setVisible(false);
        }

        if(users.another < 1) {
          this.m_Text[3].setVisible(false);
        }
      }
    }, {
      x: this.getCenterX(),
      y: this.getCenterY() + Camera.sharedCamera().coord(110)
    });
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();
  }
});

LeaderboardList.create = function(parent) {
  return new LeaderboardList(parent);
};
