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

EventsList = PatternList.extend({
  ctor: function(parent) {
    this._super(s_ListScrollSmall, 512, 700, 512, 700, parent);

    EventsList.instance = this;

    this.m_Loading = Entity.create(s_Loading, this);

    this.m_Loading.setCenterPosition(this.getCenterX(), this.getCenterY() - Camera.sharedCamera().coord(100));

    this.m_Text = [];

    this.m_Text[1] = Text.create('events-popup-1', this);
    this.m_Text[2] = Text.create('events-popup-2', this);
    this.m_Text[3] = Text.create('events-popup-3', this);

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
          Tooflya.api.call('request.find', {
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
          });
        },
        finish: function() {
          this.m_Loading.destroy();
        }
      },
      elements: {
        remove: function(data, callback) {
          Tooflya.api.call('request.receive', {
            id: data.id,
            received: false,
          }, {
            success: function() {
              callback(true);
            }
          });
        }
      },
      empty: function() {
        this.m_Text[2].setVisible(true);
      },
      create: function(data) {
        data.forEach(function(request) {
          request.supports = {
            close: true,
            status: true
          };

          this.m_BackgroundHolder.create(request, function() {
            var handlers = {
              update: function() {
                if(this.elements.button.isRegisterTouchable()) {
                  if(this.elements.button.m_Hovered) {
                    this.elements.button.text.timeLeft((Date.now() / 1000),  (parseInt(this.data.time) + (24 * 60 * 60)));
                  }

                  this.elements.button.text.setCenterPosition(this.elements.button.text.getWidth() / 2 + Camera.sharedCamera().coord(65), this.elements.button.getHeight() / 2);
                }
              },
              touch: function() {
                var success = function(callback) {
                  Tooflya.api.call('request.receive', {
                    id: this.data.id,
                    received: true,
                  }, {
                    success: function(data) {
                      if(data.received) {
                        this.elements.button.registerTouchable(false);
                        this.elements.button.text.stopAllActions();
                        this.elements.button.text.setOpacity(255);
                        this.elements.button.text.setText( this.elements.button.text.texts.complete);
                        this.elements.button.text.setCenterPosition(this.elements.button.text.getWidth() / 2 + Camera.sharedCamera().coord(65), this.elements.button.getHeight() / 2);
                        this.elements.button.text.runAction(
                          cc.Sequence.create(
                            cc.DelayTime.create(0.2),
                            cc.EaseBounceOut.create(
                              cc.MoveTo.create(0.5, cc.p(this.elements.button.text.getCenterX() - Camera.sharedCamera().coord(40), this.elements.button.getHeight() / 2))
                            ),
                            false
                          )
                        );
                        this.elements.button.icon.runAction(cc.FadeOut.create(0.2));
                        this.close();

                        callback = callback.bind(this);
                        callback();
                      }
                    }.bind(this)
                  });
                };

                var cancel = function() {
                };

                success = success.bind(this);
                cancel = cancel.bind(this);

                switch(this.data.type) {
                  case 'live.send':
                  if(DataManager.sharedManager().get(true, references.coins.lives, {
                    success: function(value) {
                      if(value < EnergyManager.sharedManager().getCount()) {
                        success(function() {
                          EnergyManager.sharedManager().restore();
                        });
                      } else {
                        cancel();
                      }
                    }
                  }));
                  break;
                  case 'live.request':
                  success(function() {
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
                  });
                  break;
                  case 'play.send':
                  if(this.data.online) {
                    success(function() {
                      Tooflya.api.call('request.send', {
                        type: 'play.send',
                        uid: this.data.uid
                      }, {
                        success: function() {
                          Events.sharedScreen().hide(function() {
                            Multiplayer.sharedScreen(Menu.instance).show();
                            MultiplayerList.instance.showConnectionView(this.data);
                          });
                        }.bind(this)
                      });
                    });
                  } else {
                    Tooflya.VK.api.call('friends.request', {
                      id: this.data.uid,
                      message: LanguagesManager.sharedManager().get('friends-notification-vk-31').title
                    }, {
                      success: function() {
                        success(function() {
                          Tooflya.api.call('request.send', {
                            type: 'play.send',
                            uid: this.data.uid
                          }, {
                            success: function() {
                              Events.sharedScreen().hide(function() {
                                Multiplayer.sharedScreen(Menu.instance).show();
                                MultiplayerList.instance.showConnectionView(this.data);
                              });
                            }.bind(this)
                          });
                        });
                      }
                    });
                  }
                  break;
                }
              }
            };

            switch(this.data.type) {
              case 'live.send':
              this.createButton({
                texts: {
                  original: 'friends-live-present-5',
                  hover: 'friends-live-present-6',
                  complete: 'friends-live-present-7'
                },
                icon: AnimatedEntity.create(s_PanelIcon3, 3, 3),
                handlers: {
                  create: function() {
                    this.elements.button.icon.animate(0.06, 2, {start: 0, end: 7}, {start: 0, end: 5.0});

                    if(DataManager.sharedManager().get(true, references.coins.lives, {
                      success: function(value) {
                        if(value >= EnergyManager.sharedManager().getCount()) {
                          this.elements.button.text.texts.original = 'friends-live-present-10';
                          this.elements.button.text.setText(this.elements.button.text.texts.original);
                          this.elements.button.lock = true;
                        }
                      }.bind(this)
                    }));
                  },
                  touch: handlers.touch,
                  update: handlers.update
                }
              });
              break;
              case 'live.request':
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
              break;
              case 'play.send':
              this.createButton({
                texts: {
                  original: 'friends-live-present-8',
                  hover: 'friends-live-present-6',
                  complete: 'friends-live-present-9'
                },
                icon: TiledEntity.create(s_ItemsProperties, 1, 3),
                handlers: {
                  create: function() {
                    this.elements.button.icon.setCurrentFrameIndex(1);
                  },
                  touch: handlers.touch,
                  update: handlers.update
                }
              });
              break;
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

EventsList.instance = false;
EventsList.create = function(parent) {
  return new EventsList(parent);
};
