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
  m_Elements: [],
  m_Limit: 20,
  m_LastIndex: 0,
  m_LastPosition: 0,
  ctor: function(parent) {
    this._super(false, 1920, 250, 5920, 0, parent, 1);

    FriendsList.instance = this;

    this.fixed = true;

    this.m_BackgroundHolder = Background.create(this);

    var count = 0;
    var limit = 50;

    FriendsManager.sharedInstance().getAppFriends().forEach(function(user) {
      if(count < limit) {
        var background = FriendsButton.create(user, this);

        background.create().setCenterPosition(Camera.sharedCamera().coord(90) + Camera.sharedCamera().coord(180) * count, this.config.params.designed.size.margin.y / 2 + Camera.sharedCamera().coord(25));

        this.m_Elements.push(background);

        count++;
        this.m_LastPosition++;
      }
    }.bind(this));

    var limit = this.m_Limit + (limit - count);

    FriendsManager.sharedInstance().getNotAppFriends().forEach(function(user) {
      if(count <= limit) {
        var background = FriendsButton.create(user, this);

        background.create().setCenterPosition(Camera.sharedCamera().coord(90) + Camera.sharedCamera().coord(180) * count, this.config.params.designed.size.margin.y / 2 + Camera.sharedCamera().coord(25));

        this.m_Elements.push(background);

        count++;
        this.m_LastIndex++;
        this.m_LastPosition++;
      }
    }.bind(this));

    this.m_BackgroundPicture = Entity.create(s_FriendsCover, parent);

    this.setCenterPosition(0, this.m_BackgroundPicture.getHeight() / 2 - Camera.sharedCamera().height / 2 + Camera.sharedCamera().coord(5));
    this.m_BackgroundPicture.create().setCenterPosition(Camera.sharedCamera().center.x, -this.m_BackgroundPicture.getHeight() / 2);
    this.m_BackgroundPicture.setZOrder(-1);
    this.setZOrder(100);

    DisplayManager.sharedManager().m_Children.sort(function compare(element1, element2) {
      if(element1.getZOrder() < element2.getZOrder()) {
        return -1;
      }

      if(element1.getZOrder() > element2.getZOrder()) {
        return 1;
      }

      return 0;
    });

    this.setListCenterPosition(Camera.sharedCamera().center.x, -this.config.params.designed.size.margin.y / 2);
    this.setPosition(cc.p(0, -this.config.params.designed.size.margin.y / 2));

    this.m_ListMaxWidth = Camera.sharedCamera().coord(180) * (count + 0.5) - Camera.sharedCamera().width - Camera.sharedCamera().coord(90);
  },
  containsTouchLocation: function(e) {
    return cc.rectContainsPoint(cc.rect(
      this.getListCenterX(),
      this.getListCenterY() - this.m_ListHeight,
      this.m_ListWidth, this.m_ListHeight), e.getLocation()) && this.isVisible();
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();
  },
  visit: function() {
    if(Camera.sharedCamera().margin.y <= 0) {
      return false;
    }

    this._super();
  }
});

FriendsButton = Button.extend({
  ctor: function(user, parent) {
    this._super(s_FriendsListBackground, 2, 1, parent);

    this.user = user;
  },
  onCreate: function() {
    this._super();

    this.text = Text.create(false, this);
    this.text.setCenterPosition(this.getWidth() / 2, Camera.sharedCamera().coord(33));
    this.text.ccsf([this.user.first_name.toUpperCase()]);
    this.text.setFontSize(9);

    if(this.user.app) {
      this.setCurrentFrameIndex(0);
    } else {
      this.setCurrentFrameIndex(1);
    }

    InternetEntity.create(this.user.photo_medium, this, function(entity) {
      entity.create().setCenterPosition(this.getWidth() / 2 + Camera.sharedCamera().coord(3), this.getHeight() / 2 + Camera.sharedCamera().coord(4));
      entity.setScale(1.2);
      entity.setZOrder(-1);
    }.bind(this));
  },
  onDestroy: function() {
    this._super();
  },
  onHover: function() {
    this._super();
  },
  onUnHover: function() {
    this._super();
  },
  onFinish: function() {
  },
  onTouch: function(e) {
    this._super();

    if(this.user.app) {

    } else {                      
      var handlers = {
        vk: {
          original: function() {
            var messages = [
              LanguagesManager.sharedManager().get('friends-notification-vk-1').title,
              LanguagesManager.sharedManager().get('friends-notification-vk-2').title,
              LanguagesManager.sharedManager().get('friends-notification-vk-3').title,
              LanguagesManager.sharedManager().get('friends-notification-vk-4').title
            ];

            Tooflya.VK.api.call('friends.request', {
              id: this.user.uid,
              message: messages.random()
            }, {
              success: function() {
                handlers.success();
              }.bind(this)
            });
          }.bind(this),
          playtest:function() {
            var messages = [
              LanguagesManager.sharedManager().get('friends-notification-vk-1').title,
              LanguagesManager.sharedManager().get('friends-notification-vk-2').title,
              LanguagesManager.sharedManager().get('friends-notification-vk-3').title,
              LanguagesManager.sharedManager().get('friends-notification-vk-4').title
            ];

            VK.api("wall.post", {
              owner_id: this.data.uid,
              message: messages.random(),
              attachments: 'photo-43129938_340443444,http://vk.com/app4165575',
              test_mode: 1
            }, function(e) {
              if(!e.error) {
                handlers.success();
              }
            });
          }.bind(this),
        },
        fb: {
          original: function() {
            var messages = [
              LanguagesManager.sharedManager().get('friends-notification-fb-1').title,
              LanguagesManager.sharedManager().get('friends-notification-fb-2').title,
              LanguagesManager.sharedManager().get('friends-notification-fb-3').title,
              LanguagesManager.sharedManager().get('friends-notification-fb-4').title
            ];

            // TODO: Add Facebook original handler.
          }.bind(this),
          playtest:function() {
            var messages = [
              LanguagesManager.sharedManager().get('friends-notification-fb-1').title,
              LanguagesManager.sharedManager().get('friends-notification-fb-2').title,
              LanguagesManager.sharedManager().get('friends-notification-fb-3').title,
              LanguagesManager.sharedManager().get('friends-notification-fb-4').title
            ];

            // TODO: Add Facebook playtest handler.
          }.bind(this),
        },

        success: function() {
          this.runAction(
            cc.Sequence.create(
              cc.EaseSineInOut.create(
                cc.MoveTo.create(0.1, cc.p(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(50)))
              ),
              cc.EaseSineInOut.create(
                cc.MoveTo.create(0.2, cc.p(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(200)))
              ),
              cc.CallFunc.create(this.destroy, this, this),
              cc.CallFunc.create(this.removeFromParent, this, this),
              false
            )
          );

          var count = 0;
          FriendsList.instance.m_Elements.forEach(function(element) {
            if(FriendsList.instance.m_Elements.indexOf(element) > FriendsList.instance.m_Elements.indexOf(this)) {
              count++;

              element.runAction(
                cc.Sequence.create(
                  cc.DelayTime.create(0.2 * count),
                  cc.EaseBounceOut.create(
                    cc.MoveTo.create(0.8, cc.p(element.getCenterX() - Camera.sharedCamera().coord(180), element.getCenterY()))
                  ),
                  false
                )
              );
            }
          }.bind(this));

          FriendsList.instance.m_Elements.remove(FriendsList.instance.m_Elements.indexOf(this));

          if(FriendsManager.sharedInstance().getNotAppFriends()[FriendsList.instance.m_LastIndex]) {
            var background = FriendsButton.create(FriendsManager.sharedInstance().getNotAppFriends()[FriendsList.instance.m_LastIndex], FriendsList.instance.m_BackgroundHolder);
            background.create().setCenterPosition(Camera.sharedCamera().coord(90) + Camera.sharedCamera().coord(180) * (FriendsList.instance.m_LastPosition - 1), this.config.params.designed.size.margin.y / 2 + Camera.sharedCamera().coord(25) - Camera.sharedCamera().coord(200));
            background.runAction(
              cc.Sequence.create(
                cc.DelayTime.create(0.2 * count + 0.5),
                cc.EaseSineInOut.create(
                  cc.MoveTo.create(0.1, cc.p(background.getCenterX(), background.getCenterY() - Camera.sharedCamera().coord(50)))
                ),
                cc.EaseSineInOut.create(
                  cc.MoveTo.create(0.2, cc.p(background.getCenterX(), background.getCenterY() + Camera.sharedCamera().coord(200)))
                ),
                false
              )
            );

            FriendsList.instance.m_Elements.push(background);

            FriendsList.instance.m_LastIndex++;
          }
        }.bind(this)
      };

      switch(this.config.params.platform) {
        case 'vk':
        if(!this.config.params.playtest) {
          handlers.vk.original();
        } else {
          handlers.vk.bind();
        }
        break;
        case 'fb':
        if(!this.config.params.playtest) {
          handlers.fb.original();
        } else {
          handlers.fb.bind();
        }
        break;
      }
    }
  },
  onEnter: function() {
    this._super();

    this.registerTouchable(true);
  },
  onExit: function() {
    this._super();

    this.registerTouchable(false);
  },
  stopAllActions: function() {
  }
});

FriendsList.instance = false;
FriendsList.sharedScreen = function(parent) {
  if(!FriendsList.instance) {
    FriendsList.instance = new FriendsList(parent);
  }

  return FriendsList.instance;
};

FriendsButton.create = function(user, parent) {
  return new FriendsButton(user, parent);
};
