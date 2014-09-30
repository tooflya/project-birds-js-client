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

MultiplayerList = PatternList.extend({
  views: {
    main: 0,
    connection: 1,
    incognito: 2
  },
  m_CurrentView: false,
  ctor: function(parent) {
    this._super(s_ListScrollSmall, 512, 700, 512, 700, parent);

    MultiplayerList.instance = this;

    this.m_Parent = parent;

    this.m_Text = [];
    this.m_Loading = [];
    this.m_Backgrounds = [];
    this.m_BackgroundHolders = [];

    this.m_Backgrounds[0] = Background.create(this);
    this.m_Backgrounds[1] = Background.create(this);
    this.m_Backgrounds[2] = Background.create(this);

    this.m_Decoration = Entity.create(s_PopupDecoration15, this);
    this.m_Text[1] = Text.create('multiplayer-popup-1', this.m_Backgrounds[0]);
    this.m_Text[2] = Text.create('multiplayer-popup-2', this.m_Backgrounds[0]);
    this.m_Text[3] = Text.create('multiplayer-popup-3', this.m_Backgrounds[0]);
    this.m_Text[4] = Text.create('multiplayer-popup-4', this.m_Backgrounds[0]);
    this.m_Text[5] = Text.create('multiplayer-popup-5', this.m_Backgrounds[1]);
    this.m_Text[6] = Text.create('multiplayer-popup-6', this.m_Backgrounds[1]);
    this.m_Text[7] = Text.create('multiplayer-popup-7', this.m_Backgrounds[1]);
    this.m_Text[8] = Text.create('multiplayer-popup-5', this.m_Backgrounds[2]);
    this.m_Text[9] = Text.create('multiplayer-popup-8', this.m_Backgrounds[2]);
    this.m_Text[10] = Text.create('multiplayer-popup-7', this.m_Backgrounds[2]);
    this.m_Text[11] = Text.create('multiplayer-popup-9', this.m_Backgrounds[2]);
    this.m_Text[12] = Text.create('multiplayer-popup-9', this.m_Backgrounds[1]);

    this.m_Mode1Button = Button.create(s_PopupLongButton1, 1, 1, this.m_Backgrounds[0]);
    this.m_Mode2Button = Button.create(s_PopupLongButton2, 1, 1, this.m_Backgrounds[0]);

    this.m_Mode1Button.text = Text.create('multiplayer-popup-10', this.m_Mode1Button);
    this.m_Mode2Button.text = Text.create('multiplayer-popup-11', this.m_Mode2Button);

    this.m_Loading[0] = Entity.create(s_Loading, this.m_Backgrounds[0]);
    this.m_Loading[1] = Entity.create(s_Loading, this.m_Backgrounds[1]);
    this.m_Loading[2] = Entity.create(s_Loading, this.m_Backgrounds[2]);

    this.m_BackgroundHolders[0] = Background.create(this.m_Backgrounds[0]);
    this.m_BackgroundHolders[1] = Background.create(this.m_Backgrounds[1]);
    this.m_BackgroundHolders[2] = Background.create(this.m_Backgrounds[2]);

    this.m_Text[1].create().setCenterPosition(this.getWidth() / 2, this.getCenterY() + Camera.sharedCamera().coord(300));
    this.m_Text[2].create().setCenterPosition(this.getWidth() / 2, this.m_Text[1].getCenterY() - this.m_Text[1].getHeight() / 2 - this.m_Text[2].getHeight() / 2 - Camera.sharedCamera().coord(30));
    this.m_Text[3].create().setCenterPosition(this.getWidth() / 2, this.m_Text[2].getCenterY() - this.m_Text[2].getHeight() / 2 - this.m_Text[3].getHeight() / 2 - Camera.sharedCamera().coord(110));
    this.m_Text[4].create().setCenterPosition(this.getWidth() / 2, this.m_Text[3].getCenterY() - this.m_Text[3].getHeight() / 2 - this.m_Text[4].getHeight() / 2 - Camera.sharedCamera().coord(110));
    this.m_Text[5].create().setCenterPosition(this.getWidth() / 2, this.getCenterY() + Camera.sharedCamera().coord(300));
    this.m_Text[6].create().setCenterPosition(this.getWidth() / 2, this.getCenterY() + Camera.sharedCamera().coord(80));
    this.m_Text[7].create().setCenterPosition(this.getWidth() / 2, 0);
    this.m_Text[8].create().setCenterPosition(this.getWidth() / 2, this.getCenterY() + Camera.sharedCamera().coord(300));
    this.m_Text[9].create().setCenterPosition(this.getWidth() / 2, this.getCenterY() + this.m_Text[9].getHeight() / 2);
    this.m_Text[10].create().setCenterPosition(this.getWidth() / 2, this.m_Text[9].getCenterY() - this.m_Text[9].getHeight() / 2 - this.m_Text[10].getHeight() / 2 - Camera.sharedCamera().coord(100));
    this.m_Text[11].create().setCenterPosition(this.getWidth() / 2, this.m_Text[9].getCenterY() - this.m_Text[9].getHeight() / 2 - this.m_Text[11].getHeight() / 2 - Camera.sharedCamera().coord(10));
    this.m_Text[12].create().setCenterPosition(this.getWidth() / 2, this.m_Text[6].getCenterY() - this.m_Text[6].getHeight() / 2 - this.m_Text[12].getHeight() / 2 - Camera.sharedCamera().coord(10));
    this.m_Loading[0].setCenterPosition(this.getWidth() / 2, this.m_Text[4].getCenterY() - Camera.sharedCamera().coord(120));
    this.m_Loading[1].setCenterPosition(this.getWidth() / 2, Camera.sharedCamera().coord(300));
    this.m_Loading[2].setCenterPosition(this.getWidth() / 2,  this.getCenterY() + Camera.sharedCamera().coord(150));
    this.m_Decoration.create().setCenterPosition(this.getWidth() / 2, this.getHeight() / 2 + Camera.sharedCamera().coord(130));
    this.m_Decoration.setScale(0.8);
    this.m_Decoration.setOpacity(30);

    this.m_Mode1Button.create().setCenterPosition(this.getWidth() / 2, this.m_Text[2].getCenterY() - this.m_Text[2].getHeight() / 2 - Camera.sharedCamera().coord(50));
    this.m_Mode2Button.create().setCenterPosition(this.getWidth() / 2, this.m_Text[3].getCenterY() - this.m_Text[3].getHeight() / 2 - Camera.sharedCamera().coord(50));

    this.m_Mode1Button.text.create().setCenterPosition(this.m_Mode1Button.getWidth() / 2, this.m_Mode1Button.getHeight() / 2);
    this.m_Mode2Button.text.create().setCenterPosition(this.m_Mode2Button.getWidth() / 2, this.m_Mode2Button.getHeight() / 2);

    this.m_Text[1].setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Text[5].setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Text[8].setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Text[11].setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Text[12].setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_Text[2].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[3].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[4].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[6].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[7].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[8].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[9].setColor(cc.c3(255.0, 130.0, 0.0));
    this.m_Text[10].setColor(cc.c3(255.0, 130.0, 0.0));

    this.m_Mode1Button.text.setColor(cc.c3(204.0, 102.0, 51.0));
    this.m_Mode2Button.text.setColor(cc.c3(204.0, 102.0, 51.0));

    this.m_Backgrounds[0].removeFromParent();
    this.m_Backgrounds[1].removeFromParent();
    this.m_Backgrounds[2].removeFromParent();

    this.m_BackgroundHolder = EntryManager.create(this, {
      update: {
        start: function() {
          this.m_Text[4].create();
          this.m_Loading[0].create().runAction(
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

              callback.finish();

              if(friends.length > 0) {
                callback.create(friends);
              } else {
                callback.empty();
              }
            }
          });
        },
        finish: function() {
          this.m_Loading[0].destroy();
        }
      },
      events: {
        enter: function() {
        }
      },
      empty: function() {
        this.m_Text[4].destroy();
      },
      create: function(data) {
        data.forEach(function(user) {
          user.supports = {
            close: true,
            status: user.app
          };

          this.m_BackgroundHolder.create(user, function() {
            if(user.app) {
              this.createButton({
                texts: {
                  original: 'friends-multiplayer-present-1',
                  complete: 'friends-multiplayer-present-3'
                },
                handlers: {
                  create: function() {
                    this.elements.button.text.setCenterPosition(this.elements.button.text.getWidth() / 2 + Camera.sharedCamera().coord(35), this.elements.button.getHeight() / 2);
                  },
                  touch: function() {
                    if(this.data.online) {
                      Tooflya.api.call('request.send', {
                        type: 'play.send',
                        uid: this.data.uid
                      }, {
                        success: function() {
                          MultiplayerList.instance.showConnectionView(this.data);
                        }.bind(this)
                      });
                    } else {
                      var handlers = {
                        vk: {
                          original: function() {
                            var messages = [
                              LanguagesManager.sharedManager().get('friends-notification-vk-21').title,
                              LanguagesManager.sharedManager().get('friends-notification-vk-22').title,
                              LanguagesManager.sharedManager().get('friends-notification-vk-23').title,
                              LanguagesManager.sharedManager().get('friends-notification-vk-24').title
                            ];

                            Tooflya.VK.api.call('friends.request', {
                              id: this.data.uid,
                              message: messages.random()
                            }, {
                              success: function() {
                                Tooflya.api.call('request.send', {
                                  type: 'play.send',
                                  uid: this.data.uid
                                }, {
                                  success: function() {
                                    handlers.success();
                                  }.bind(this)
                                });
                              }.bind(this)
                            });
                          }.bind(this),
                          playtest:function() {
                            var messages = [
                              LanguagesManager.sharedManager().get('friends-notification-vk-21').title,
                              LanguagesManager.sharedManager().get('friends-notification-vk-22').title,
                              LanguagesManager.sharedManager().get('friends-notification-vk-23').title,
                              LanguagesManager.sharedManager().get('friends-notification-vk-24').title
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
                              LanguagesManager.sharedManager().get('friends-notification-fb-21').title,
                              LanguagesManager.sharedManager().get('friends-notification-fb-22').title,
                              LanguagesManager.sharedManager().get('friends-notification-fb-23').title,
                              LanguagesManager.sharedManager().get('friends-notification-fb-24').title
                            ];

                            // TODO: Add Facebook original handler.
                          }.bind(this),
                          playtest:function() {
                            // TODO: Add Facebook playtest handler.
                          }.bind(this),
                        },

                        success: function() {
                          this.elements.button.registerTouchable(false);
                          this.elements.button.text.setText(this.elements.button.text.texts.complete);
                          this.elements.button.text.setCenterPosition(Camera.sharedCamera().coord(45) + this.elements.button.text.getWidth() / 2, this.elements.button.getHeight() / 2);
                          this.elements.button.text.runAction(
                            cc.Sequence.create(
                              cc.DelayTime.create(0.2),
                              cc.EaseBounceOut.create(
                                cc.MoveTo.create(0.5, cc.p(this.elements.button.text.getCenterX() - Camera.sharedCamera().coord(10), this.elements.button.text.getCenterY()))
                              ),
                              false
                            )
                          );
                          this.close();
                        }.bind(this)
                      };

                      switch(this.config.params.platform) {
                        case 'vk':
                        if(!this.config.params.playtest) {
                          handlers.vk.original();
                        } else {
                          handlers.vk.playtest();
                        }
                        break;
                        case 'fb':
                        if(!this.config.params.playtest) {
                          handlers.fb.original();
                        } else {
                          handlers.fb.playtest();
                        }
                        break;
                      }
                    }
                  }
                }
              });
            } else {
              this.createButton({
                texts: {
                  original: 'friends-multiplayer-present-2',
                  complete: 'friends-multiplayer-present-3'
                },
                handlers: {
                  create: function() {
                    this.elements.button.text.setCenterPosition(this.elements.button.text.getWidth() / 2 + Camera.sharedCamera().coord(35), this.elements.button.getHeight() / 2);
                  },
                  touch: function() {
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
                            id: this.data.uid,
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
                          // TODO: Add Facebook playtest handler.
                        }.bind(this),
                      },

                      success: function() {
                        this.elements.button.registerTouchable(false);
                        this.elements.button.text.setText(this.elements.button.text.texts.complete);
                        this.elements.button.text.setCenterPosition(Camera.sharedCamera().coord(40) + this.elements.button.text.getWidth() / 2, this.elements.button.getHeight() / 2);
                        this.elements.button.text.runAction(
                          cc.Sequence.create(
                            cc.DelayTime.create(0.2),
                            cc.EaseBounceOut.create(
                              cc.MoveTo.create(0.5, cc.p(this.elements.button.text.getCenterX() - Camera.sharedCamera().coord(10), this.elements.button.text.getCenterY()))
                            ),
                            false
                          )
                        );
                        this.close();
                      }.bind(this)
                    };

                    switch(this.config.params.platform) {
                      case 'vk':
                      if(!this.config.params.playtest) {
                        handlers.vk.original();
                      } else {
                        handlers.vk.playtest();
                      }
                      break;
                      case 'fb':
                      if(!this.config.params.playtest) {
                        handlers.fb.original();
                      } else {
                        handlers.fb.playtest();
                      }
                      break;
                    }
                  }
                }
              });
            }
          });
        }.bind(this));
      }
    }, {
      x: this.getCenterX(),
      y: this.m_Text[4].getCenterY() - Camera.sharedCamera().coord(100)
    });

    this.m_Mode1Button.setTouchHandler('onMode1Event', Multiplayer);
    this.m_Mode2Button.setTouchHandler('onMode2Event', Multiplayer);
  },
  onEnter: function() {
    this._super();

    this.showMainView();
  },
  onExit: function() {
    this._super();

    this.m_Loading[0].destroy();
    this.m_Loading[1].destroy();
    this.m_Loading[2].destroy();

    this.m_BackgroundHolders[0].removeAllChildrenWithCleanup(true);
    this.m_BackgroundHolders[1].removeAllChildrenWithCleanup(true);
    this.m_BackgroundHolders[2].removeAllChildrenWithCleanup(true);

    if(!Game.network) {
      NetworkManager.sharedInstance().unsubscribe();
    } else {
      Multiplayer.instance = false;
    }
  },
  onViewChanged: function() {
    this.setCenterPosition(-Camera.sharedCamera().margin.x / 2, -Camera.sharedCamera().margin.y / 2);
    this.onMouseUp(false, true);

    this.m_BackgroundHolder.clear();
  },
  showMainView: function(data) {
    this.addChild(this.m_Backgrounds[0]);

    this.m_Backgrounds[1].removeFromParent();
    this.m_Backgrounds[2].removeFromParent();

    this.onViewChanged();
    this.onUnSetIncognotoView();
    this.onUnSetConnectionView();
    this.onSetMainView(data);
  },
  showConnectionView: function(data) {
    this.addChild(this.m_Backgrounds[1]);

    this.m_Backgrounds[0].removeFromParent();

    this.onViewChanged();
    this.onUnSetMainView();
    this.onSetConnectionView(data);
  },
  showIncognitoConnectionView: function(data) {
    this.addChild(this.m_Backgrounds[2]);

    this.m_Backgrounds[0].removeFromParent();

    this.onViewChanged();
    this.onUnSetMainView();
    this.onSetIncognitoConnectionView(data);
  },
  onUnSetMainView: function() {
  },
  onUnSetConnectionView: function() {
    this.m_BackgroundHolders[1].removeAllChildrenWithCleanup(true);

    this.m_Loading[1].destroy();
  },
  onUnSetIncognotoView: function() {
    this.m_BackgroundHolders[2].removeAllChildrenWithCleanup(true);

    this.m_Loading[2].destroy();
  },
  onSetMainView: function(data) {
    this.m_CurrentView = this.views.main;
    this.m_Connected = false;

    this.m_BackgroundHolder.upgrade();
  },
  onSetConnectionView: function(data) {
    this.m_CurrentView = this.views.connection;

    this.m_Connection = true;
    this.m_ConnectionTime = 20.0;
    this.m_ConnectionTimeElapsed = 0.0;

    this.m_Loading[1].create().runAction(
      cc.RepeatForever.create(
        cc.RotateTo.create(1.0, 720)
      )
    );

    this.m_Text[7].setVisible(true);

    InternetEntity.create((data.photo_medium || data.photo), this.m_BackgroundHolders[1], function(entity) {
      entity.create().setCenterPosition(Camera.sharedCamera().coord(100), this.getCenterY() + Camera.sharedCamera().coord(190));

      var name = Text.create('leaderboard-name', this.m_BackgroundHolders[1]);

      name.ccsf([(data.first_name || data.name) + " " + (data.last_name || data.surname)]);

      name.setCenterPosition(name.getWidth() / 2 + Camera.sharedCamera().coord(160), this.getCenterY() + Camera.sharedCamera().coord(190) + Camera.sharedCamera().coord(60) - name.getHeight() / 2);

      name.setColor(cc.c3(255.0, 130.0, 0.0));
    }.bind(this));

    this.m_Text[6].ccsf([(data.first_name || data.name) + " " + (data.last_name || data.surname)]);
    this.m_Text[7].setCenterPosition(this.getWidth() / 2, this.m_Text[12].getCenterY() - this.m_Text[7].getHeight() / 2 - Camera.sharedCamera().coord(150));
    this.m_Loading[1].setCenterPosition(this.getWidth() / 2, this.m_Text[7].getCenterY() + Camera.sharedCamera().coord(70));

    var button = Button.create(s_LivesPresentBackground, 1, 1, this.m_BackgroundHolders[1]);
    var text = Text.create('friends-multiplayer-present-4', button, cc.TEXT_ALIGNMENT_LEFT);

    button.create().setCenterPosition(this.getCenterX(), this.m_Text[7].getCenterY() - Camera.sharedCamera().coord(100));
    text.setCenterPosition(button.getWidth() / 2, button.getHeight() / 2);

    text.setColor(cc.c3(204.0, 102.0, 51.0));

    button.registerTouchable(true);
    button.onTouch = function(e) {
      Button.prototype.onTouch.call(this, e);

      NetworkManager.sharedInstance().unsubscribe();

      MultiplayerList.instance.showMainView();
    };

    this.m_Text[12].ccsf([LanguagesManager.sharedManager().get('network-1').title]);
    NetworkManager.sharedInstance().subscribe({
      weapon: DataManager.sharedManager().get(false, references.info.weapon) - 1
    }, {
      subscribe: function() {
        this.m_Text[12].ccsf([LanguagesManager.sharedManager().get('network-5').title]);

        Game.network = false;
        Game.server = false;
      }.bind(this),
      pending: function() {
        this.m_Text[12].ccsf([LanguagesManager.sharedManager().get('network-3').title]);
        this.m_Text[7].setVisible(false);

        this.m_Connected = true;
        this.m_Connection = false;

        // TODO: add info.
      }.bind(this),
      start: function(data) {
        Music.sharedMusic().stop();

        Game.level = 1; // Random.sharedRandom().random(1, 30, true); // TODO: Random level?
        Game.users = data.users;
        Game.network = true;
        Game.server = data.server || false;
        Game.sharedScreen(0);

        Multiplayer.instance.hide(function() {
          ScreenManager.sharedManager().replace(Game);
        });

        setTimeout(function() {
          Music.sharedMusic().play(s_Music2, true);
        }, 1000);
      }.bind(this),
      cancel: function() {
        this.m_BackgroundHolders[1].removeAllChildrenWithCleanup(true);
        this.onSetConnectionView(data);
      }.bind(this)
    });
  },
  onSetIncognitoConnectionView: function() {
    this.m_CurrentView = this.views.incognito;

    this.m_Connection = true;
    this.m_ConnectionTime = 60.0;
    this.m_ConnectionTimeElapsed = 0.0;

    this.m_Loading[2].create().runAction(
      cc.RepeatForever.create(
        cc.RotateTo.create(1.0, 720)
      )
    );

    this.m_Text[10].setVisible(true);

    var button = Button.create(s_LivesPresentBackground, 1, 1, this.m_BackgroundHolders[2]);
    var text = Text.create('friends-multiplayer-present-4', button, cc.TEXT_ALIGNMENT_LEFT);

    button.create().setCenterPosition(this.getCenterX(), this.m_Text[10].getCenterY() - Camera.sharedCamera().coord(100));
    text.setCenterPosition(button.getWidth() / 2, button.getHeight() / 2);

    text.setColor(cc.c3(204.0, 102.0, 51.0));

    button.registerTouchable(true);
    button.onTouch = function(e) {
      Button.prototype.onTouch.call(this, e);

      NetworkManager.sharedInstance().unsubscribe();

      MultiplayerList.instance.showMainView();
    };

    this.m_Text[11].ccsf([LanguagesManager.sharedManager().get('network-1').title]);
    NetworkManager.sharedInstance().subscribe({
      weapon: DataManager.sharedManager().get(false, references.info.weapon) - 1
    }, {
      subscribe: function() {
        this.m_Text[11].ccsf([LanguagesManager.sharedManager().get('network-2').title]);

        Game.network = false;
        Game.server = false;
      }.bind(this),
      pending: function(data) {
        this.m_Text[11].ccsf([LanguagesManager.sharedManager().get('network-3').title]);
        this.m_Text[10].setVisible(false);

        this.m_Connected = true;
        this.m_Connection = false;

        this.m_Loading[2].destroy();

        InternetEntity.create(data.user.photo, this.m_BackgroundHolders[2], function(entity) {
          entity.create().setCenterPosition(Camera.sharedCamera().coord(100), this.getCenterY() + Camera.sharedCamera().coord(190));

          var name = Text.create('leaderboard-name', this.m_BackgroundHolders[2]);

          name.ccsf([data.user.name + " " + data.user.surname]);

          name.setCenterPosition(name.getWidth() / 2 + Camera.sharedCamera().coord(160), this.getCenterY() + Camera.sharedCamera().coord(190) + Camera.sharedCamera().coord(60) - name.getHeight() / 2);

          name.setColor(cc.c3(255.0, 130.0, 0.0));
        }.bind(this));
      }.bind(this),
      start: function(data) {
        Music.sharedMusic().stop();

        Game.level = 1; // Random.sharedRandom().random(1, 30, true); // TODO: Random level?
        Game.users = data.users;
        Game.network = true;
        Game.server = data.server || false;
        Game.sharedScreen(0);

        Multiplayer.instance.hide(function() {
          ScreenManager.sharedManager().replace(Game);
        });

        setTimeout(function() {
          Music.sharedMusic().play(s_Music2, true);
        }, 1000);
      }.bind(this),
      cancel: function() {
        this.m_BackgroundHolders[2].removeAllChildrenWithCleanup(true);
        this.onSetIncognitoConnectionView();
      }.bind(this)
    });
  },
  updateMainView: function(time) {

  },
  updateConnectionView: function(time) {
    if(this.m_Connection) {
      if(this.m_ConnectionTimeElapsed < this.m_ConnectionTime) {
        this.m_ConnectionTimeElapsed += time;

        this.m_Text[7].timeLeft(this.m_ConnectionTimeElapsed, this.m_ConnectionTime);
      } else {
        this.m_Connection = false;

        NetworkManager.sharedInstance().unsubscribe();

        this.showMainView();
      }
    }
  },
  updateIncognitoView: function(time) {
    if(this.m_Connection) {
      if(this.m_ConnectionTimeElapsed < this.m_ConnectionTime) {
        this.m_ConnectionTimeElapsed += time;

        this.m_Text[10].timeLeft(this.m_ConnectionTimeElapsed, this.m_ConnectionTime);
      } else {
        this.m_Connection = false;

        NetworkManager.sharedInstance().unsubscribe();

        this.showMainView();
      }
    }
  },
  update: function(time) {
    this._super(time);

    switch(this.m_CurrentView) {
      case this.views.main:
      this.updateMainView(time);
      break;
      case this.views.connection:
      this.updateConnectionView(time);
      break;
      case this.views.incognito:
      this.updateIncognitoView(time);
      break;
    }
  }
});

MultiplayerList.instance = false;
MultiplayerList.create = function(parent) {
  return new MultiplayerList(parent);
};
