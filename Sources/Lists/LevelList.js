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
    this.m_ElementsBackgrounds =  [];
    this.m_Elements =  [];
    this.m_ElementsIcons =  [];
    //this.m_Feathers = EntityManager.create(100, Feather.create(false, Levels.instance.getPhysicsWorld()), Levels.instance, 3000);

    var self = this;

    for(var i = -1; i < 2; i++) {
      this.m_ElementsIcons[i + 1] = TiledEntity.create(s_LevelElementIcons, 8, 2, this);
      this.m_ElementsIcons[i + 1].create().setCenterPosition(this.getCenterX() + (Camera.sharedCamera().coord(120) * i), this.getCenterY() + Camera.sharedCamera().coord(185));

      this.m_ElementsBackgrounds[i + 1] = Button.create(s_LevelElementChoise, 1, 1, this);
      this.m_ElementsBackgrounds[i + 1].create().setCenterPosition(this.getCenterX() + (Camera.sharedCamera().coord(120) * i), this.getCenterY() + Camera.sharedCamera().coord(180));
      this.m_ElementsBackgrounds[i + 1].setTouchHandler('onLevelItemChanged', Levels);
      this.m_ElementsBackgrounds[i + 1].icon = this.m_ElementsIcons[i + 1];
      this.m_ElementsBackgrounds[i + 1].id = i + 1;
      this.m_ElementsBackgrounds[i + 1].onTouch = function(e) {
        Button.prototype.onTouch.call(this, e);

        //if(self.m_Feathers.getCount() > 50) return;

        this.icon.setCurrentFrameIndex(self.m_Elements.getElement());
        /*for(var i = 0; i < 100; i++) {
          var feather = self.m_Feathers.create();

          feather.setCenterPosition(this.convertToWorldSpace(cc.p(0, 0)).x + this.getWidth() / 2, this.convertToWorldSpace(cc.p(0, 0)).y);
          feather.setCurrentFrameIndex(this.icon.getCurrentFrameIndex());
        }*/

        Game.selected.birds[this.id] = this.icon.getCurrentFrameIndex();

        DataManager.sharedManager().get(false, references.tutorial.any1, {
          success: function(value) {
            if(!value) {
              DataManager.sharedManager().set(true, references.tutorial.any1, 1);

              self.m_TutorialFinger.stopAllActions();
              self.m_TutorialFinger.runAction(
                cc.Sequence.create(
                  cc.FadeTo.create(0.5, 0.0),
                  cc.CallFunc.create(self.m_TutorialFinger.destroy, self.m_TutorialFinger, self.m_TutorialFinger),
                  false
                )
              );
            }
          }
        });
      };
    }

    this.m_ElementsIcons[0].setCurrentFrameIndex(0);
    this.m_ElementsIcons[1].setCurrentFrameIndex(1);
    this.m_ElementsIcons[2].setCurrentFrameIndex(2);

    Game.selected = {
      birds: [0, 1, 2]
    };

    this.m_Elements.elementId = 0;
    this.m_Elements.specialElementsCount = 0;
    this.m_Elements.getElement = function() {
      this.elementId = this.elementId == 6 ? 0 : ++this.elementId;

      return this[this.elementId];
    };
    this.m_Elements.getSpecialElement = function() {
      return this[8];
    };
    this.m_Elements.push(0);
    this.m_Elements.push(1);
    this.m_Elements.push(2);
    this.m_Elements.push(3);
    this.m_Elements.push(4);
    this.m_Elements.push(5);
    this.m_Elements.push(6);

    if(DataManager.sharedManager().get(false, references.items.bird1)) { this.m_Elements.push(8); this.m_Elements.specialElementsCount++; }
    if(DataManager.sharedManager().get(false, references.items.bird2)) { this.m_Elements.push(9); this.m_Elements.specialElementsCount++; }
    if(DataManager.sharedManager().get(false, references.items.bird3)) { this.m_Elements.push(10); this.m_Elements.specialElementsCount++; }
    if(DataManager.sharedManager().get(false, references.items.bird4)) { this.m_Elements.push(11); this.m_Elements.specialElementsCount++; }
    if(DataManager.sharedManager().get(false, references.items.bird5)) { this.m_Elements.push(12); this.m_Elements.specialElementsCount++; }
    if(DataManager.sharedManager().get(false, references.items.bird6)) { this.m_Elements.push(13); this.m_Elements.specialElementsCount++; }
    if(DataManager.sharedManager().get(false, references.items.bird7)) { this.m_Elements.push(14); this.m_Elements.specialElementsCount++; }
    if(DataManager.sharedManager().get(false, references.items.bird8)) { this.m_Elements.push(15); this.m_Elements.specialElementsCount++; }

    this.m_Loading[0] = Entity.create(s_Loading, this);
    this.m_Loading[1] = Entity.create(s_Loading, this);

    this.m_Text[1] = Text.create('level-popup-1', this);
    this.m_Text[2] = Text.create('level-popup-2', this);
    this.m_Text[3] = Text.create('level-popup-3', this);
    //this.m_Text[4] = Text.create('level-popup-4', this);
    this.m_Text[5] = Text.create('level-popup-level-1', this);
    this.m_Text[6] = Text.create('level-popup-6', this);

var points = DataManager.sharedManager().get(false, references.levels.points[Game.level - 1]);
    this.m_Text[1].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(300));
    this.m_Text[5].setCenterPosition(this.getCenterX(), this.m_Text[1].getCenterY() - this.m_Text[1].getHeight() / 2 - this.m_Text[5].getHeight() / 2 - Camera.sharedCamera().coord(points ? 250 : 140));
    this.m_Text[2].setCenterPosition(this.getCenterX(), this.m_Text[5].getCenterY() - this.m_Text[5].getHeight() / 2 - this.m_Text[2].getHeight() / 2 - Camera.sharedCamera().coord(50));
    this.m_Text[3].setCenterPosition(this.getCenterX(), this.m_Text[2].getCenterY() - this.m_Text[2].getHeight() / 2 - this.m_Text[2].getHeight() / 2 - Camera.sharedCamera().coord(150));
    this.m_Loading[0].setCenterPosition(this.getCenterX(), this.m_Text[2].getCenterY() - Camera.sharedCamera().coord(100));
    this.m_Loading[1].setCenterPosition(this.getCenterX(), this.m_Text[3].getCenterY() - Camera.sharedCamera().coord(100));

    this.m_Text[1].setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_Text[2].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[3].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[6].setColor(cc.c3(255.0, 130.0, 0.0));

    this.m_Text[5].setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_BackgroundHolder = EntryManager.create(this, {
      update: {
        start: function() {
          this.m_Text[6].setVisible(false);

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
        },
        update: function(callback) {
          Tooflya.api.call('users.leaders', {
            limit: 100,
            type: 1,
            level: Game.level
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
        this.m_Text[6].setVisible(true);
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
            status: true,
            crown: crown,
            level: false
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
              }
            );
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
      y: this.m_Text[2].getCenterY() - Camera.sharedCamera().coord(210)
    });

    DataManager.sharedManager().get(false, references.tutorial.any1, {
      success: function(value) {
        if(!value) {
          this.m_TutorialFinger = Entity.create(s_TutorialFinger, this);
        }
      }.bind(this)
    });
  },
  onEnter: function() {
    this._super();

    var points = DataManager.sharedManager().get(false, references.levels.points[Game.level - 1]);

    this.m_Text[1].ccsf([Game.level]);
    this.m_Text[2].setVisible(true);
    this.m_Text[3].setVisible(true);

    this.m_Text[5] .setText('level-popup-level-' + Game.level);

    this.m_Text[1].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(300));
    this.m_Text[5].setCenterPosition(this.getCenterX(), this.m_Text[1].getCenterY() - this.m_Text[1].getHeight() / 2 - this.m_Text[5].getHeight() / 2 - Camera.sharedCamera().coord(points ? 250 : 140));
    this.m_Text[2].setCenterPosition(this.getCenterX(), this.m_Text[5].getCenterY() - this.m_Text[5].getHeight() / 2 - this.m_Text[2].getHeight() / 2 - Camera.sharedCamera().coord(50));
    this.m_Text[3].setCenterPosition(this.getCenterX(), this.m_Text[2].getCenterY() - this.m_Text[2].getHeight() / 2 - this.m_Text[2].getHeight() / 2 - Camera.sharedCamera().coord(150));
    this.m_Text[6].setCenterPosition(this.getCenterX(), this.m_Text[5].getCenterY() - this.m_Text[5].getHeight() / 2 - this.m_Text[6].getHeight() / 2 - Camera.sharedCamera().coord(30));
    this.m_Loading[0].setCenterPosition(this.getCenterX(), this.m_Text[2].getCenterY() - Camera.sharedCamera().coord(100));
    this.m_Loading[1].setCenterPosition(this.getCenterX(), this.m_Text[3].getCenterY() - Camera.sharedCamera().coord(100));

    if(points) {
      this.m_PointsHolder = Entity.create(s_LevelPointsHolder, this.m_BackgroundHolder);
      this.m_PointsHolder.stars = TiledEntity.create(s_LevelStars, 1, 4, this.m_PointsHolder);
      this.m_PointsHolder.text = Text.create('level-points', this.m_PointsHolder);
      this.m_PointsHolder.temp = Text.create('level-points-point', false);

      this.m_PointsHolder.create().setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(70));
      this.m_PointsHolder.stars.create().setCenterPosition(Camera.sharedCamera().coord(16), Camera.sharedCamera().coord(16));
      this.m_PointsHolder.text.create().setCenterPosition(this.m_PointsHolder.getWidth() / 2, this.m_PointsHolder.getHeight() / 2);
      this.m_PointsHolder.temp.ccsf([points]);
      this.m_PointsHolder.text.ccsf([points, this.m_PointsHolder.temp.getString()]);
      this.m_PointsHolder.text.setColor(cc.c3(204.0, 102.0, 51.0));

      this.m_PointsHolder.stars.setCurrentFrameIndex(DataManager.sharedManager().get(false, references.levels.levels[Game.level - 1]) - 1);
    }

    this.m_BackgroundHolder.m_Position = {
      x: this.getCenterX(),
      y: this.m_Text[2].getCenterY() - Camera.sharedCamera().coord(100)
    };

    /** TUTORIAL */

    DataManager.sharedManager().get(false, references.tutorial.any1, {
      success: function(value) {
        if(!value) {
          if(this.m_TutorialFinger) {
            this.m_TutorialFinger.create().setCenterPosition(this.m_ElementsBackgrounds[2].getCenterX() + this.m_ElementsBackgrounds[2].getWidth() / 2 - Camera.sharedCamera().coord(15), this.m_ElementsBackgrounds[2].getCenterY() - this.m_TutorialFinger.getHeight() / 2 + Camera.sharedCamera().coord(15));
            this.m_TutorialFinger.setOpacity(0);
            this.m_TutorialFinger.runAction(
              cc.RepeatForever.create(
                cc.Sequence.create(
                  cc.FadeTo.create(0.5, 255),
                  cc.DelayTime.create(0.5),
                  cc.ScaleTo.create(0.2, 0.9),
                  cc.ScaleTo.create(0.1, 1.0),
                  cc.DelayTime.create(0.5),
                  cc.FadeTo.create(0.5, 0),
                  cc.DelayTime.create(0.5),
                  false
                )
              )
            );
          }
        }
      }.bind(this)
    });
  },
  onExit: function() {
    this._super();

    if(this.m_TutorialFinger) {
      this.m_TutorialFinger.destroy();
    }

    this.m_Loading[0].destroy();
    this.m_Loading[1].destroy();
  }
});

LevelList.create = function(parent) {
  return new LevelList(parent);
};
