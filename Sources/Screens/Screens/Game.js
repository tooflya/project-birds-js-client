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

Game = Screen.extend({
  m_Types: {
    progress: 0,
    classic: 1,
    arcade: 2
  },
  m_ThrowParameters: {
    birds: [
      {
        count: 0,
        time: 0.0,
        timeElapsed: 0.0,
        min: {
          time: 0.0
        },
        max: {
          time: 0.0
        }
      },
      {
        count: 0,
        time: 0.0,
        timeElapsed: 0.0,
        min: {
          count: 1,
          time: 1.0
        },
        max: {
          count: 5,
          time: 5.0
        }
      },
      {
        count: 0,
        time: 0.0,
        timeElapsed: 0.0,
        min: {
          time: 0.0
        },
        max: {
          time: 1.0
        }
      }
    ],
    flayers: [
      {
        time: 0.0,
        timeElapsed: 0.0,
        min: {
          time: 0.0
        },
        max: {
          time: 0.0
        }
      },
      {
        count: 0,
        time: 0.0,
        timeElapsed: 0.0,
        min: {
          count: 1,
          time: 5.0
        },
        max: {
          count: 10,
          time: 10.0
        }
      },
      {
        time: 0.0,
        timeElapsed: 0.0,
        min: {
          time: 0.0
        },
        max: {
          time: 1.0
        }
      }
    ]
  },
  m_Results: {
    birds: 0,
    flayers: 0,
    combo: 0,
    keys: 0
  },
  m_GameRunning: false,
  m_TutorialRunning: false,
  m_GamePreviewRunning: false,
  m_GamePause: false,
  m_GameTimeElapsed: 0,
  m_LevelTimeElapsed: 0,
  m_LevelTime: 10.0,
  m_GamePreviewCount: 0,
  m_GamePreviewTime: 0.5,
  m_BonusKeysAnimationRunning: false,
  m_BonusKeysAnimationTimeElapsed: 0,
  m_BonusKeysAnimationTime: 0.2,
  m_Lifes: 0,
  m_Touch: {
    point: {
      x: 0,
      y: 0
    },
    active: false
  },
  m_CurrentBlows: 0,
  m_BestBlows: 0,
  m_Level: 0,
  m_SplashBackground : false,
  m_PlayerTurn: false,
  m_DecorationTime: 0.5,
  m_DecorationTimeElapsed: 0.5,
  m_HelpTime: 5.0,
  m_HelpTimeElapsed: 0,
  ctor: function() {
    this._super(true);

    Game.instance = this;

    this.name = "Game screen";

    Game.tutorial = DataManager.sharedManager().get(false, references.tutorial.enable);

    this.m_Type = Game.type;
    this.m_ThrowParams = {
      birds: this.m_ThrowParameters.birds[this.m_Type],
      flayers: this.m_ThrowParameters.flayers[this.m_Type]
    };

    switch(this.m_Type) {
      case this.m_Types.progress:
      var backgrounds = [
        Orientation.parse(s_GameBackground1Blured),
        Orientation.parse(s_GameBackground2Blured),
        Orientation.parse(s_GameBackground3Blured),
        Orientation.parse(s_GameBackground4Blured),
        Orientation.parse(s_GameBackground5Blured)
      ];
      break;
      case this.m_Types.classic:
      case this.m_Types.arcade:
      var backgrounds = [
        Orientation.parse(s_GameBackground1),
        Orientation.parse(s_GameBackground2),
        Orientation.parse(s_GameBackground3),
        Orientation.parse(s_GameBackground4),
        Orientation.parse(s_GameBackground5)
      ];
      break;
    }

    this.m_Background = Entity.create(backgrounds[Random.sharedRandom().random(0, backgrounds.length, true)], this, true);

    this.m_PreviewBackground = BackgroundColor.create(cc.c4(0, 0, 0, 0), this);
    this.m_SplashBackground = BackgroundColor.create(cc.c4(255, 255, 255, 0), this);
    this.m_SplashEffect1 = Entity.create(s_ScreenEffect1, this);

    this.m_PreviewBackground.setZOrder(200);
    this.m_SplashBackground.setZOrder(200);
    this.m_SplashEffect1.setZOrder(200);

    this.m_Marks = EntityManager.create(1500, Mark.create(), this, 105);
    this.m_Stars = EntityManager.create(1500, Star.create(), this, 105);
    this.m_Keys = EntityManager.create(50, Key.create(), this, 102, true);
    this.m_Birds = EntityManager.create(50, Bird.create(false, this.getPhysicsWorld()), this, 105);
    this.m_BombBirds = EntityManager.create(10, BombBird.create(false, this.getPhysicsWorld()), this, 105);
    this.m_FlayerBirds = EntityManager.create(10, FlayerBird.create(false, this.getPhysicsWorld()), this, 105);

    this.m_PreviewText = Text.create(false, this.m_PreviewBackground);

    switch(this.m_Type) {
      case this.m_Types.progress:
      this.m_LevelBackground = Background.create(this);

      this.m_WeaponParticles1 = EntityManager.create(100, WeaponParticle1.create(), this.m_LevelBackground, 305);
      this.m_WeaponParticles2 = EntityManager.create(100, WeaponParticle2.create(), this.m_LevelBackground, 305);

      this.m_Feathers = EntityManager.create(500, Feather.create(false, this.getPhysicsWorld()), this.m_LevelBackground, 304);
      this.m_Explosions = EntityManager.create(50, Explosion.create(), this.m_LevelBackground, 306);

      this.m_Ground = PhysicsEntity.create(s_Ground, 1, 1, this.m_LevelBackground, this.getPhysicsWorld(), 0.1, 1.0, 0.1, 2.0, 8.0);
      this.m_Target = Target.create(this.m_LevelBackground);
      this.m_BubbleTarget = BubbleTarget.create(this);
      this.m_Catapults = {
        m_Elements: [
          Catapult.create(Game.instance.m_LevelBackground),
          Catapult.create(Game.instance.m_LevelBackground)
        ],
        get: function(i) {
          return this.m_Elements[i];
        },
        onLevelStart: function() {
          this.get(0)._id = 0;
          this.get(1)._id = 1;

          if(Game.network) {
            if(Game.server) {
              this.get(0)._user = Game.users[0];
              this.get(1)._user = Game.users[1];
            } else {
              this.get(0)._user = Game.users[1];
              this.get(1)._user = Game.users[0];
            }
          }

          this.get(0).create().setCenterPosition(-this.get(0).getWidth() / 2, Camera.sharedCamera().coord(75));
          this.get(1).create().setCenterPosition(Camera.sharedCamera().width + this.get(1).getWidth() / 2, Camera.sharedCamera().coord(75));

          this.get(0).setFlippedHorizontally(false);
          this.get(1).setFlippedHorizontally(true);

          this.get(0).setZOrder(303);
          this.get(1).setZOrder(303);

          this.get(0).createElements();
          this.get(1).createElements();
        },
        onLevelFinish: function() {
          this.get(0).setCenterPosition(-this.get(0).getWidth() / 2, Camera.sharedCamera().coord(75));
          this.get(1).setCenterPosition(Camera.sharedCamera().width + this.get(1).getWidth() / 2, Camera.sharedCamera().coord(75));

          this.get(0).destroyElements();
          this.get(1).destroyElements();
        }
      };
      this.m_Notifications = {
        m_Notification1: false,
        m_Notification2: false,
        m_Notification3: false
      };
      this.m_Notifications.m_Notification1 = Entity.create(LanguagesManager.sharedManager().parse(s_Notification1), this);
      this.m_Notifications.m_Notification2 = Entity.create(LanguagesManager.sharedManager().parse(s_Notification2), this);
      this.m_Notifications.m_Notification3 = Entity.create(LanguagesManager.sharedManager().parse(s_Notification3), this);
      this.m_Notifications.m_Notification1.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);
      this.m_Notifications.m_Notification2.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);
      this.m_Notifications.m_Notification3.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);
      this.m_Notifications.m_Notification1.setZOrder(500);
      this.m_Notifications.m_Notification2.setZOrder(500);
      this.m_Notifications.m_Notification3.setZOrder(500);

      this.m_SplashStars = EntityManager.create(10, SplashStar.create(false, Game.sharedScreen().getPhysicsWorld()), this, 500);

      this.m_Elements = ElementsManager.sharedManager();

      this.m_HelpFinger = Entity.create(s_TutorialFinger, this.m_LevelBackground);

      this.m_Ground.setZOrder(301);
      this.m_Target.setZOrder(302);
      this.m_BubbleTarget.setZOrder(303);
      this.m_HelpFinger.setZOrder(500);

      this.m_Ground.m_PhysicsDefinition.type = Box2D.Dynamics.b2Body.b2_staticBody;

      this.m_Ground.create();

      this.m_Ground.setCenterPosition(Camera.sharedCamera().center.x, this.m_Ground.getHeight() / 2);
      this.m_Target.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().coord(18));
      this.m_BubbleTarget.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().coord(18));

      if(Game.tutorial) {
        this.createTutorialElements();
      }

      this.m_KeysPanel = Entity.create(s_DailyMapTitle, this);

      this.m_KeysPanel.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height + Camera.sharedCamera().coord(200));
      this.m_KeysPanel.setZOrder(302);

      /*this.m_KeysIcon = Entity.create(s_UnlockKey, this.m_KeysPanel);

      this.m_KeysIcon.create().setCenterPosition(Camera.sharedCamera().coord(64), this.m_KeysPanel.getHeight() / 2);
      this.m_KeysIcon.runAction(
        cc.RepeatForever.create(
          cc.Sequence.create(
            cc.RotateTo.create(1.0, -15.0),
            cc.RotateTo.create(1.0, 15.0),
            false
          )
        )
      );*/

      this.m_BonusKeys = 0;
      this.m_BonusKeysTemp = 0;

      this.m_KeysText = Text.create('bonus-keys', this.m_KeysPanel);
      this.m_KeysText.setCenterPosition(this.m_KeysPanel.getWidth() / 2, this.m_KeysPanel.getHeight() / 2);

      this.m_ElementsExplanationTexts = TiledEntity.create(LanguagesManager.sharedManager().parse(s_TutorialElementsExplanationTexts), 1, 5, this);

      this.m_ElementsExplanationTexts.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height + Camera.sharedCamera().coord(200));
      this.m_ElementsExplanationTexts.setZOrder(303);

      this.m_CombinationsNotification = BackgroundColor.create(cc.c4(255, 255, 255, 255), this, Camera.sharedCamera().width, Camera.sharedCamera().coord(200));
      this.m_CombinationsNotification.setCenterPosition(Camera.sharedCamera().center.x, -this.m_CombinationsNotification.getHeight());
      this.m_CombinationsNotification.setZOrder(300);

      this.m_CombinationsNotificationText = Text.create('no-more-combinations', this.m_CombinationsNotification);
      this.m_CombinationsNotificationText.setCenterPosition(this.m_CombinationsNotification.getWidth() / 2, this.m_CombinationsNotification.getHeight() / 2);
      this.m_CombinationsNotificationText.disableShadow();
      this.m_CombinationsNotificationText.setColor(cc.c3(26, 92, 165));

      var parallax = Entity.create(s_Cloud2);
      this.m_Cloud = ParallaxEntity.create(parallax, {
        x: 50,
        y: 0
      }, {
        x: Camera.sharedCamera().center.x,
        y: parallax.getHeight() / 2
      }, this);
      this.m_Cloud.setOpacity(0);

      if(Game.network) {
        this.m_InputBackground = Entity.create(s_InputTextArea, this);
        this.m_Input = Input.create({
          size: cc.size(this.m_InputBackground.getWidth() - Camera.sharedCamera().coord(40), this.m_InputBackground.getHeight() - Camera.sharedCamera().coord(30)),
          placeholder: {
            text: 'Enter your message',
            color: cc.c4(143, 215, 59, 255)
          },
          font: {
            name: 'Comic Sans MS Bold',
            size: Camera.sharedCamera().coord(38),
            color: cc.c4(143, 215, 59, 255)
          }
        }, this.m_InputBackground);
        this.m_InputBackground.setAnchorPoint(0, 0);
        this.m_InputBackground.setZOrder(900);
        this.m_Input.setCenterPosition(Camera.sharedCamera().coord(275), Camera.sharedCamera().coord(90));
        this.m_Input.setMaxLength(23);
        this.m_Input.setDelegate(this);

        NetworkManager.instance.onData = function(data) {
          switch(data.e) {
            case 0:
            Game.instance.onLevelStart(data.matrix);
            break;
            case 1:
            var element1 = MatrixManager.instance.get(data.element1.x, data.element1.y);
            var element2 = MatrixManager.instance.get(data.element2.x, data.element2.y);

            MatrixManager.instance.replace(element1, element2, false, true);
            break;
            case 2:
            MatrixManager.instance.fillAll(data.matrix);
            break;
          }
        };
        NetworkManager.instance.onCancel = function(data) {
          if(Game.instance) {
            Game.instance.networkProblem();
          }
        };
        NetworkManager.instance.onMessage = function(data) {
          if(Game.instance) {
            Game.instance.createSplashText(data.message);
          }
        };
      }
      break;
      case this.m_Types.classic:
      case this.m_Types.arcade:
      this.m_Feathers = EntityManager.create(500, Feather.create(false, this.getPhysicsWorld()), this, 110, true);
      this.m_Explosions = EntityManager.create(50, Explosion.create(), this, 110);

      this.m_WeaponParticles1 = EntityManager.create(100, WeaponParticle1.create(), this, 201, true);
      this.m_WeaponParticles2 = EntityManager.create(100, WeaponParticle2.create(), this, 201, true);
      break;
    }
  },
  startGame: function() {
    this.onGameStart();
  },
  finishGame: function(state1, state2) {
    this.onGameFinish(state2 != 'undefined' ? state2 : state1);
  },
  addChild: function(child, zindex) {
    this._super(child, zindex);

    if(!Game.network) {
      if(child instanceof Popup) {
        this.pause();
      }
    }
  },
  removeChild: function(child) {
    this._super(child);

    if(!Game.network) {
      if(child instanceof Popup) {
        this.pause();
      }
    }
  },
  clearResults: function() {
    this.m_Results = {
      birds: 0,
      flayers: 0,
      combo: 0,
      keys: 0
    };
  },
  getResults: function() {
    return this.m_Results;
  },
  getWeapon: function() {
    if(Game.network) {
      var user;

      if(Game.server) {
        user = Game.users[Game.instance.m_PlayerTurn ? 0 : 1];
      } else {
        user = Game.users[Game.instance.m_PlayerTurn ? 1 : 0];
      }

      return user.weapon;
    } else if(Game.instance.m_PlayerTurn) {
      return DataManager.sharedManager().get(false, references.info.weapon) - 1;
    } else {
      if(Game.tutorial) {
        return Game.instance.m_TutorialMatrix.opponent.weapon;
      } else {
        return Game.instance.m_LevelsMatrixes[Game.level - 1].opponent.weapon;
      }
    }
  },
  networkProblem: function() {
    this.m_NetworkBackground = BackgroundColor.create(cc.c4(0, 0, 0, 0), this);
    this.m_NetworkDecorations = EntityManager.create(15, CircleDecoration1.create(), this.m_NetworkBackground);
    this.m_NetworkBackgroundLoader = Entity.create(s_LoadingDecoration, this.m_NetworkBackground);
    this.m_NetworkBackgroundText = Text.create('network-4', this.m_NetworkBackground);

    this.m_NetworkBackgroundLoader.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y);
    this.m_NetworkBackgroundText.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(400));
    this.m_NetworkBackground.setCascadeOpacityEnabled(true);
    this.m_NetworkBackground.setZOrder(800);
    this.m_NetworkBackgroundLoader.runAction(
      cc.RepeatForever.create(
        cc.Sequence.create(
          cc.ScaleTo.create(1.0, 1.02),
          cc.ScaleTo.create(1.0, 1.0),
          false
        )
      )
    );

    this.m_NetworkBackground.onEnter = function() {
      cc.LayerColor.prototype.onEnter.call(this);

      if(cc.Browser.isMobile) {
        cc.Director.getInstance().getTouchDispatcher()._addTargetedDelegate(this, 0, true);
      } else {
        cc.Director.getInstance().getMouseDispatcher().addMouseDelegate(this, Touchable.priority--);
      }
    };
    this.m_NetworkBackground.onExit = function() {
      cc.LayerColor.prototype.onExit.call(this);

      if(cc.Browser.isMobile) {
        cc.Director.getInstance().getTouchDispatcher()._removeDelegate(this);
      } else {
        cc.Director.getInstance().getMouseDispatcher().removeMouseDelegate(this);
      }
    };
    this.m_NetworkBackground.onMouseDown = function(e) {
      var r = !(this.getOpacity() == 255);

      if(!r) {
        Touchable.active = true;
        Touchable.list = true;
      }

      return r;
    }; 
    this.m_NetworkBackground.onMouseUp = function(e) {
      Touchable.active = false;
      Touchable.list = false;

      this.onTouch(e);

      return false;
    };
    this.m_NetworkBackground.onTouchBegan = function(touch, e) {
      return this.onMouseDown(touch);
    };
    this.m_NetworkBackground.onTouchEnded = function(touch, e) {
      return this.onMouseUp(touch);
    };
    this.m_NetworkBackground.onTouch = function(e) {
    };

    this.m_NetworkBackground.runAction(
      cc.Sequence.create(
        cc.FadeIn.create(0.5),
        false
      )
    );

    setTimeout(function() {
      Game.instance.finishGame(true, true);
    }, 10000);
  },
  createSplashText: function(message, my) {
    var text = SplashText.create('splash-message', this, my);

    text.ccsf([message]);
    text.setColor(cc.c3(143, 215, 59));
  },
  editBoxEditingDidEnd: function(sender) {
    if(Game.network) {
      if(Game.instance.m_InputBackground.isVisible()) {
        Game.instance.onTouch();

        var message = sender.getText();

        if(message != 'undefined' && message != '') {
          NetworkManager.sharedInstance().emit('message', {
            message: message
          });

          Game.instance.createSplashText(message, true);
        }
      }
    }
  },
  update: function(time) {
    if(this.m_GamePause) return;

    this._super(time);

    this.updateThrower(time);
    this.updateTimer(time);

    this.m_Touch.active = this.m_WasTouched;

    switch(this.m_Type) {
      case this.m_Types.progress:
      if(this.m_GameRunning && !this.m_TutorialRunning) {
        if(!Game.network) {
          if(!this.m_PlayerTurn && !MatrixManager.sharedManager().active() && !MatrixManager.sharedManager().busy()) {
            if(!this.getNumberOfRunningActions() && !this.m_CombinationsNotification.getNumberOfRunningActions()) {
              this.runAction(
                cc.Sequence.create(
                  cc.DelayTime.create(3.0),
                  cc.CallFunc.create(MatrixManager.sharedManager().computer, MatrixManager.sharedManager()),
                  false
                )
              );
            }
          }
        }

        if(this.m_PlayerTurn && MatrixManager.sharedManager().active()) {
          if(Date.now() - this.m_LastActionTime > 10000) {
            this.m_HelpTimeElapsed += time;
            if(this.m_HelpTimeElapsed >= this.m_HelpTime) {
              this.m_LastActionTime = Date.now() + 60 * 1000;

              if(MatrixManager.sharedManager().selectRandomCombination()) {
                this.m_HelpTimeElapsed = 0;
              }
            }
          }
        }

        if(this.m_Target.collideWithEntity(this.m_Catapults.get(0)) || this.m_Target.collideWithEntity(this.m_Catapults.get(1))) {
          this.m_GameRunning = false;

          this.m_PreviewBackground.setZOrder = function(selector, index) {
            BackgroundColor.prototype.setZOrder.call(this, index);
          };
          this.m_PreviewBackground.runAction(
            cc.Sequence.create(
              cc.FadeTo.create(0.5, 0),
              cc.CallFunc.create(this.m_PreviewBackground.setZOrder, this.m_PreviewBackground, 600),
              cc.FadeTo.create(2.0, 255),
              false
            )
          );
          this.m_Target.finish(this.m_PlayerTurn, this.m_PlayerTurn);
        }

        if(this.m_BonusKeysAnimationRunning) {
          this.m_BonusKeysAnimationTimeElapsed += time;
          if(this.m_BonusKeysAnimationTimeElapsed >= this.m_BonusKeysAnimationTime) {
            this.m_BonusKeysAnimationTimeElapsed = 0;

            if(this.m_BonusKeysTemp >= this.m_BonusKeys) {
              this.m_BonusKeysAnimationRunning = false;

              this.m_KeysPanel.runAction(
                cc.Sequence.create(
                  cc.EaseExponentialIn.create(
                    cc.MoveTo.create(1.0, cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().height + Camera.sharedCamera().coord(200)))
                  ),
                  cc.CallFunc.create(this.onTurnFinish, this),
                  false
                )
              );
            } else {
              this.m_BonusKeysTemp++;

              this.m_KeysText.ccsf([this.m_BonusKeysTemp]);
            }
          }
        }
      }
      break;
      case this.m_Types.classic:
      break;
      case this.m_Types.arcade:
      break;
    }

    if(this.m_NetworkDecorations) {
      this.m_DecorationTimeElapsed += time;

      if(this.m_DecorationTimeElapsed >= this.m_DecorationTime) {
        this.m_DecorationTimeElapsed = 0;

        this.m_NetworkDecorations.create();
      }
    }
  },
  onKeyDown: function(e) {
    switch(e) {
      case 27:
      break;
    }
  }
});

Game.instance = false;
Game.tutorial = true;
Game.type = false;
Game.sharedScreen = function(type) {
  Game.type = type === false || type === undefined ? Game.type : type;

  return Game.instance ? Game.instance : new Game();
};
