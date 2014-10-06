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

LivesRequestList = PatternList.extend({
  ctor: function(parent) {
    this._super(s_ListScrollSmall, 512, 700, 512, 700, parent);

    LivesRequestList.instance = this;

    this.m_Loading = Entity.create(s_Loading, this);

    this.m_Loading.setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(100));

    this.m_Text = [];

    this.m_Text[1] = Text.create('events-popup-7', this);
    this.m_Text[2] = Text.create('events-popup-9', this);
    this.m_Text[3] = Text.create('events-popup-8', this);

    this.m_Text[1].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(300));
    this.m_Text[2].setCenterPosition(this.getCenterX(), this.getCenterY());
    this.m_Text[3].setCenterPosition(this.getCenterX(), this.m_Text[1].getCenterY() - this.m_Text[1].getHeight() / 2 - this.m_Text[3].getHeight() / 2 - Camera.sharedCamera().coord(30));

    this.m_Text[1].setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_Text[2].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[3].setColor(cc.c3(255.0, 130.0, 0.0));

    this.m_BackgroundHolder = EntryManager.create(this, {
      update: {
        start: function() {
          this.m_Text[2].setVisible(false);
          this.m_Loading.create().runAction(
            cc.RepeatForever.create(
              cc.RotateTo.create(1.0, 720)
            )
          );
        },
        update: function(callback) {
          var friends = FriendsManager.sharedInstance().getFriends();
          friends.sort(function compare(element1, element2) {
            if(element1.app) {
              return -1;
            }

            if(element2.app) {
              return 1;
            }

            return 0;
          });
          var uids = [];
          FriendsManager.sharedInstance().getAppFriends().forEach(function(friend) {
            uids.push(friend.uid);
          });

          Tooflya.api.call('users.online', {
            uids: uids
          }, {
            success: function(data) {
              data.uids.forEach(function(uid) {
                friends.forEach(function(friend) {
                  if(friend.uid == uid.uid) {
                    friend.online = uid.online;
                  }
                });
              });

              friends.sort(function compare(element1, element2) {
                if(element1.app && element2.app) {
                  if(element1.online) return -1;
                  if(element2.online) return 1;
                }

                if(element1.app) {
                  return -1;
                }

                if(element2.app) {
                  return 1;
                }

                return 0;
              });

              var uids = [];
              friends.forEach(function(friend) {
                uids.push(friend.uid);
              });

              Tooflya.api.call('request.check', {
                uids: uids,
                type: 'live.request'
              },
              {
                success: function(data) {
                  callback.finish();

                  friends.forEach(function(friend) {
                    data.requests.forEach(function(entry) {
                      if(friend.uid == entry.uid) {
                        friend.time = entry.time;
                      }
                    });
                  });

                  if(friends.length > 0) {
                    callback.create(friends.slice(0, 20));
                  } else {
                    callback.empty();
                  }
                }
              });
            }
          });
        },
        finish: function() {
          this.m_Loading.destroy();
        }
      },
      empty: function() {
        this.m_Text[2].setVisible(true);
      },
      create: function(data) {
        data.forEach(function(user) {
          user.supports = {
            close: true,
            status: true
          };

          this.m_BackgroundHolder.create(user, function() {
            var handlers = {
              touch: function() {
                var messages = [
                  LanguagesManager.sharedManager().get('friends-notification-vk-41').title,
                  LanguagesManager.sharedManager().get('friends-notification-vk-42').title,
                  LanguagesManager.sharedManager().get('friends-notification-vk-43').title,
                  LanguagesManager.sharedManager().get('friends-notification-vk-44').title
                ];

                Tooflya.VK.api.call('friends.request', {
                  id: this.data.uid,
                  message: messages.random()
                }, {
                  success: function() {
                    Tooflya.api.call('request.send', {
                      type: 'live.request',
                      uid: this.data.uid
                    }, {
                      success: function(data) {
                        this.elements.button.registerTouchable(false);
                        this.elements.button.text.setText(this.elements.button.text.texts.complete);
                        this.elements.button.text.runAction(
                          cc.Sequence.create(
                            cc.DelayTime.create(0.2),
                            cc.EaseBounceOut.create(
                              cc.MoveTo.create(0.5, cc.p(this.elements.button.text.getCenterX() - Camera.sharedCamera().coord(100), this.elements.button.text.getCenterY()))
                            ),
                            false
                          )
                        );
                        this.elements.button.icon.runAction(cc.FadeOut.create(0.2));
                        this.close();
                      }.bind(this)
                    });
                    this.registerTouchable(false);
                  }.bind(this)
                });
              }
            };

            if((Date.now() / 1000) - parseInt(user.time) < 24 * 60 * 60) {
              this.createText('friends-lives-popup-5',
                {
                  create: function() {
                    this.elements.text.create().setColor(cc.c3(204.0, 102.0, 51.0));
                  },
                  update: function(time) {
                    this.elements.text.setCenterPosition(this.elements.text.getWidth() / 2 + Camera.sharedCamera().coord(130), Camera.sharedCamera().coord(40));
                    if(this.elements.text.timeLeft(Date.now() / 1000 - this.data.time, 24 * 60 * 60) <= 0) {
                      // TODO: Destroy text and create new button.
                    }
                  }
                }
              );
            } else {
              this.createButton({
                texts: {
                  original: 'friends-live-present-13',
                  hover: '',
                  complete: 'friends-live-present-2'
                },
                icon: AnimatedEntity.create(s_PanelIcon3, 3, 3),
                handlers: {
                  create: function() {
                    this.elements.button.icon.animate(0.06, 2, {start: 0, end: 7}, {start: 0, end: 5.0});
                    this.elements.button.text.setCenterPosition(this.elements.button.text.getWidth() / 2 + Camera.sharedCamera().coord(65), this.elements.button.getHeight() / 2);
                  },
                  touch: handlers.touch,
                  update: handlers.update
                }
              });
            }
          });
        }.bind(this));
      }
    }, {
      x: this.getCenterX(),
      y: this.m_Text[3].getCenterY() - this.m_Text[3].getHeight() / 2 - Camera.sharedCamera().coord(90)
    });
  }
});

LivesRequestList.instance = false;
LivesRequestList.create = function(parent) {
  return new LivesRequestList(parent);
};
