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

LivesSendList = PatternList.extend({
  ctor: function(parent) {
    this._super(s_ListScrollSmall, 512, 700, 512, 0, parent);

    this.m_Loading = Entity.create(s_Loading, this);

    this.m_Loading.setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(100));

    this.m_Decoration1 = Entity.create(s_PopupDecoration19, this);
    this.m_Decoration2 = Entity.create(s_PopupDecoration20, this);

    this.m_Text = [];

    this.m_Text[0] = Text.create('friends-lives-popup-1', this);
    this.m_Text[1] = Text.create('friends-lives-popup-2', this);
    this.m_Text[2] = Text.create('friends-lives-popup-3', this);
    this.m_Text[3] = Text.create('friends-lives-popup-4', this);

    this.m_Text[0].setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(320));
    this.m_Text[1].setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(230));
    this.m_Text[2].setCenterPosition(this.getCenterX(), this.m_Text[0].getCenterY() - this.m_Text[0].getHeight() / 2 - this.m_Text[2].getHeight() / 2 - Camera.sharedCamera().coord(30));
    this.m_Text[3].setCenterPosition(this.getCenterX(), this.getCenterY());
    this.m_Decoration1.setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(100));
    this.m_Decoration2.setCenterPosition(this.getCenterX() - Camera.sharedCamera().coord(10), this.getCenterY() + Camera.sharedCamera().coord(100));

    this.m_Text[0].setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Text[1].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[2].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[3].setColor(cc.c3(255.0, 130.0, 0.0));

    this.m_Decoration2.runAction(
      cc.RepeatForever.create(
        cc.Sequence.create(
          cc.MoveTo.create(2.2, cc.p(this.m_Decoration2.getCenterX(), this.m_Decoration2.getCenterY() + Camera.sharedCamera().coord(5))),
          cc.MoveTo.create(2.2, cc.p(this.m_Decoration2.getCenterX(), this.m_Decoration2.getCenterY() - Camera.sharedCamera().coord(5))),
          false
        )
      )
    );

    this.m_BackgroundHolder = EntryManager.create(this, {
      update: {
        start: function() {
          this.m_Text[1].setVisible(false);
          this.m_Text[2].setVisible(true);
          this.m_Text[3].setVisible(false);

          this.m_Decoration1.destroy();
          this.m_Decoration2.destroy();
          this.m_Loading.create().runAction(
            cc.RepeatForever.create(
              cc.RotateTo.create(1.0, 720)
            )
          );
        },
        update: function(callback) {
          // TODO: Check available time;
          /*Tooflya.api.call('request.check', {
            force: true
            }, {
            success: function(data) {
              callback.finish();

              if(data.requests.length > 0) {
                callback.create(data.requests);
              } else {
                callback.empty();
              }
            }
          });*/
          callback.finish();

          var friends = FriendsManager.instance.getAppFriends();
          if(friends.length > 0) {
            callback.create(friends);
          } else {
            callback.empty();
          }
        },
        finish: function() {
          this.m_Text[1].setVisible(false);

          this.m_Decoration1.destroy();
          this.m_Decoration2.destroy();

          this.m_Loading.destroy();
        }
      },
      events: {
        enter: function() {
          this.m_BackgroundHolder.clear();
        }
      },
      empty: function() {
        this.m_Text[3].setVisible(true);
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
                  LanguagesManager.sharedManager().get('friends-notification-vk-11').title,
                  LanguagesManager.sharedManager().get('friends-notification-vk-12').title,
                  LanguagesManager.sharedManager().get('friends-notification-vk-13').title,
                  LanguagesManager.sharedManager().get('friends-notification-vk-14').title
                ];

                Tooflya.VK.api.call('friends.request', {
                  id: this.data.uid,
                  message: messages.random()
                }, {
                  success: function() {
                    Tooflya.api.call('request.send', {
                      type: 'live.send',
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

            this.createButton({
              texts: {
                original: 'friends-live-present-1',
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
          });
        }.bind(this));
      }
    }, {
      x: this.getCenterX(),
      y: this.m_Text[2].getCenterY() - this.m_Text[2].getHeight() / 2 - Camera.sharedCamera().coord(90)
    });
  },
  onActionEvent: function() {
    this.m_BackgroundHolder.upgrade();
  },
  onEnter: function() {
    this._super();

    this.m_Text[1].setVisible(true);
    this.m_Text[2].setVisible(false);
    this.m_Text[3].setVisible(false);

    this.m_Decoration1.create();
    this.m_Decoration2.create();
  },
  onExit: function() {
    this._super();

    this.m_Decoration1.destroy();
    this.m_Decoration2.destroy();
  }
});

LivesSendList.create = function(parent) {
  return new LivesSendList(parent);
};
