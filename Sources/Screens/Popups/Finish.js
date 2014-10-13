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

Finish = Background.extend({
  m_zIndex: 1000,
  ctor: function(parent) {
    this._super();

    this.m_Parent = parent;

    this.m_Stars = [];

    this.m_Background = BackgroundColor.create(cc.c4(0, 0, 0, 0), this);
    this.m_BackgroundSquare = Entity.create(s_FinishBackgroundSquare, this);
    this.m_PrizeDecoration = TiledEntity.create(s_PrizeDecoration, 1, 2, this.m_BackgroundSquare);
    this.m_Stars[0] = TiledEntity.create(s_Star, 3, 2, this.m_BackgroundSquare);
    this.m_Stars[1] = TiledEntity.create(s_Star, 3, 2, this.m_BackgroundSquare);
    this.m_Stars[2] = TiledEntity.create(s_Star, 3, 2, this.m_BackgroundSquare);

    this.m_MenuButton = Button.create(s_FinishButtons, 4, 1, this.m_BackgroundSquare);
    this.m_RestartButton = Button.create(s_FinishButtons, 4, 1, this.m_BackgroundSquare);
    this.m_ContinueButton = Button.create(s_FinishButtons, 4, 1, this.m_BackgroundSquare);
    this.m_ShopButton = Button.create(s_FinishButtons, 4, 1, this.m_BackgroundSquare);

    this.m_Background1 = TiledEntity.create(Orientation.parse(s_FinishBackground), 1, 2, this.m_Background);
    this.m_Background2 = TiledEntity.create(Orientation.parse(s_FinishBackground), 1, 2, this.m_Background);

    this.m_TextValue1 = Text.create('finish-text-1', this.m_BackgroundSquare);
    this.m_TextValue2 = Text.create('finish-total-coins', this.m_BackgroundSquare);

    this.m_Background1.setCurrentFrameIndex(0);
    this.m_Background2.setCurrentFrameIndex(1);

    this.m_MenuButton.create().setCurrentFrameIndex(0);
    this.m_RestartButton.create().setCurrentFrameIndex(1);
    this.m_ContinueButton.create().setCurrentFrameIndex(2);
    this.m_ShopButton.create().setCurrentFrameIndex(3);

    this.m_BackgroundSquare.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y - Camera.sharedCamera().coord(50));
    this.m_Background1.create().setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().height + this.m_Background1.getHeight() / 2);
    this.m_Background2.create().setCenterPosition(Camera.sharedCamera().center.x, -this.m_Background1.getHeight() / 2);

    this.m_TextValue1.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2, this.m_BackgroundSquare.getHeight() / 2 - Camera.sharedCamera().coord(20));
    this.m_TextValue2.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2, this.m_BackgroundSquare.getHeight() / 2 - Camera.sharedCamera().coord(120));

    this.m_TextValue1.ccsf([0]);
    this.m_TextValue2.ccsf([0]);

    this.m_BackgroundSquare.setCascadeOpacityEnabled(true);

    this.m_Coins = EntityManager.create(50, ParticleCoin.create(false, this.m_Parent.getPhysicsWorld()), this.m_BackgroundSquare);
    this.m_Lives = EntityManager.create(50, ParticleLive.create(false, this.m_Parent.getPhysicsWorld()), this.m_BackgroundSquare);
    this.m_Keys = EntityManager.create(50, ParticleKey.create(false, this.m_Parent.getPhysicsWorld()), this.m_BackgroundSquare);

    this.m_MenuButton.setTouchHandler('onMenuEvent', Finish);
    this.m_RestartButton.setTouchHandler('onRestartEvent', Finish);
    this.m_ContinueButton.setTouchHandler('onContinueEvent', Finish);
    this.m_ShopButton.setTouchHandler('onShopEvent', Finish);

    this.m_ShopButton.createNotifier(Shop.notifyHandler, 32, 64);
  },
  show: function() {
    this.assert(this.getParent(), "This popup window is already showed.");

    this.m_Parent.addChild(this, this.m_zIndex);

    this.m_Stars[0].setCenterPosition(this.m_BackgroundSquare.getWidth() / 2 - Camera.sharedCamera().coord(170), this.m_BackgroundSquare.getHeight() / 2 + Camera.sharedCamera().coord(210));
    this.m_Stars[1].setCenterPosition(this.m_BackgroundSquare.getWidth() / 2 + Camera.sharedCamera().coord(0), this.m_BackgroundSquare.getHeight() / 2 + Camera.sharedCamera().coord(210));
    this.m_Stars[2].setCenterPosition(this.m_BackgroundSquare.getWidth() / 2 + Camera.sharedCamera().coord(170), this.m_BackgroundSquare.getHeight() / 2 + Camera.sharedCamera().coord(210));

    this.m_Stars[0].setCurrentFrameIndex(3);
    this.m_Stars[1].setCurrentFrameIndex(4);
    this.m_Stars[2].setCurrentFrameIndex(5);

    this.m_BackgroundSquare.setScale(3.0);
    this.m_BackgroundSquare.setOpacity(0.0);
    this.m_BackgroundSquare.runRecognizeAction(cc.CallFunc.create(this.onShow, this, this), [{
      name: 'fade',
      time: 0.3,
      value: 0.0
    }, {
      name: 'fade',
      time: 0.0,
      value: 255.0
    }, {
      name: 'scale',
      time: 0.3,
      value: {
        x: 0.9,
        y: 1.1
      }
    }, {
      name: 'scale',
      time: 0.1,
      value: {
        x: 1.1,
        y: 0.9
      }
    }, {
      name: 'scale',
      time: 0.1,
      value: {
        x: 1.0,
        y: 1.0
      }
    }]);
    this.m_Background1.runRecognizeAction(false, {
      name: 'move',
      time: 0.2,
      x: Camera.sharedCamera().center.x,
      y: Camera.sharedCamera().center.y + this.m_Background1.getHeight() / 2
    });
    this.m_Background2.runRecognizeAction(false, {
      name: 'move',
      time: 0.2,
      x: Camera.sharedCamera().center.x,
      y: Camera.sharedCamera().center.y - this.m_Background2.getHeight() / 2
    });
    this.m_Background.runRecognizeAction(false, [{
      name: 'fade',
      time: 0.2,
      value: 0
    }, {
      name: 'scale',
      time: 0.1,
      value: {
        x: 1.2,
        y: 1.0
      }
    }, {
      name: 'scale',
      time: 0.1,
      value: {
        x: 1.0,
        y: 1.2
      }
    }, {
      name: 'scale',
      time: 0.1,
      value: {
        x: 1.0,
        y: 1.0
      }
    }]);

    var types = Game.sharedScreen().m_Types;
    var type = Game.sharedScreen().m_Type;

    switch(type) {
      case types.progress:
      if(!Game.instance.m_GameState && !Game.network) {
        this.m_RestartButton.setVisible(true);
        this.m_MenuButton.setVisible(true);
        this.m_ContinueButton.setVisible(false);
        this.m_ShopButton.setVisible(true);

        this.m_ShopButton.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2 - Camera.sharedCamera().coord(190),  Camera.sharedCamera().coord(140));
        this.m_RestartButton.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2, Camera.sharedCamera().coord(120));
        this.m_MenuButton.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2 + Camera.sharedCamera().coord(190), Camera.sharedCamera().coord(140));
      } else {
        if(!Game.tutorial) {
          if(!Game.network) {
            Tooflya.api.call('level.update', {
              level: Game.level,
              score: Game.score,
              stars: Game.instance.m_StarsPoints
            });

            var previous = DataManager.sharedManager().get(false,
              [
                references.levels.levels[Game.level - 1],
                references.levels.points[Game.level - 1]
              ]
            );
            DataManager.sharedManager().set(true,
              [
                references.levels.levels[Game.level - 1],
                references.levels.points[Game.level - 1],
                references.levels.levels[Game.level]
              ],
              [
                Math.max(previous[0], Game.instance.m_StarsPoints + 1),
                Math.max(previous[1], Game.score),
                1
              ]
            );

            Game.level++;

            Tooflya.api.call('level.set', {
              level: Game.level
            });
          } else {
            if(Game.instance.m_GameState) {
              Tooflya.api.call('level.update', {
                level: -1,
                score: Game.score
              });
            }
          }
        } else {
          if(Game.instance.m_GameState) {
            DataManager.sharedManager().set(true, references.tutorial.enable, 0);
          }
        }

        if(Game.instance.m_GameState) {
          Finish.instance.current = 0;
          for(var i = 0; i < (Game.network ? 3 : Game.instance.m_StarsPoints); i++) {
            new PausableTimeout(function() {
              if(Finish.instance) {
                var current = Finish.instance.current;

                Sound.sharedSound().play(s_SoundStars[current]);

                Finish.instance.m_Stars[current].setCurrentFrameIndex(current);
                Finish.instance.m_Stars[current].runAction(
                  cc.Sequence.create(
                    cc.ScaleTo.create(0.1, 1.2),
                    cc.ScaleTo.create(0.5, 1.0),
                    false
                  )
                );

                for(var j = 0; j < 7; j++) {
                  Finish.instance.m_SplashStars.create().setCenterPosition(Finish.instance.m_Stars[current].getCenterX(), Finish.instance.m_Stars[current].getCenterY());
                }
              }

              Finish.instance.current++;
            }, 1000 + 500 * (i + 1));
          }
        }

        this.m_RestartButton.setVisible(false);
        this.m_MenuButton.setVisible(true);
        this.m_ContinueButton.setVisible(true);
        this.m_ShopButton.setVisible(true);

        this.m_ShopButton.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2 - Camera.sharedCamera().coord(190),  Camera.sharedCamera().coord(140));
        this.m_MenuButton.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2, Camera.sharedCamera().coord(120));
        this.m_ContinueButton.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2 + Camera.sharedCamera().coord(190), Camera.sharedCamera().coord(140));
      }

      this.m_Stars[0].create();
      this.m_Stars[1].create();
      this.m_Stars[2].create();
      break;
      case types.classic:
      if(!Game.instance.m_GameState) {
        this.m_RestartButton.setVisible(true);
        this.m_MenuButton.setVisible(true);
        this.m_ContinueButton.setVisible(false);
        this.m_ShopButton.setVisible(true);

        this.m_ShopButton.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2 - Camera.sharedCamera().coord(190),  Camera.sharedCamera().coord(140));
        this.m_RestartButton.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2, Camera.sharedCamera().coord(120));
        this.m_MenuButton.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2 + Camera.sharedCamera().coord(190), Camera.sharedCamera().coord(140));
      } else {
        this.m_RestartButton.setVisible(false);
        this.m_MenuButton.setVisible(true);
        this.m_ContinueButton.setVisible(true);
        this.m_ShopButton.setVisible(true);

        this.m_ShopButton.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2 - Camera.sharedCamera().coord(190),  Camera.sharedCamera().coord(140));
        this.m_MenuButton.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2, Camera.sharedCamera().coord(120));
        this.m_ContinueButton.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2 + Camera.sharedCamera().coord(190), Camera.sharedCamera().coord(140));
      }

      this.m_PrizeDecoration.create().setCenterPosition(this.m_BackgroundSquare.getWidth() / 2, this.m_BackgroundSquare.getHeight() / 2 + Camera.sharedCamera().coord(250));
      break;
      case types.arcade:
      this.m_RestartButton.setVisible(true);
      this.m_MenuButton.setVisible(true);
      this.m_ContinueButton.setVisible(false);
      this.m_ShopButton.setVisible(true);

      this.m_ShopButton.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2 - Camera.sharedCamera().coord(190),  Camera.sharedCamera().coord(140));
      this.m_RestartButton.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2, Camera.sharedCamera().coord(120));
      this.m_MenuButton.setCenterPosition(this.m_BackgroundSquare.getWidth() / 2 + Camera.sharedCamera().coord(190), Camera.sharedCamera().coord(140));
      break;
    }

    switch(type) {
      case types.progress:
      this.m_TextValue1.setText('finish-text-5');
      break;
      case types.classic:
      case types.arcade:
      this.m_TextValue1.setText('finish-text-1');
      break;
    }

    this.m_TextValue1.ccsf([0]);
    this.m_TextValue2.ccsf([0]);

    switch(type) {
      case types.progress:
      this.m_TempCoins = 0;
      this.m_TotalCoins = 0;
      this.m_CountReference = 0;
      this.m_CountReferences = [0, 0, 0, 0];
      this.m_ResultReferences = [
        Game.score,
        Game.sharedScreen().m_CurrentBlows,
        Game.sharedScreen().m_BonusKeys
      ];
      break;
      case types.classic:
      case types.arcade:
      this.m_TempCoins = 0;
      this.m_TotalCoins = 0;
      this.m_CountReference = 0;
      this.m_CountReferences = [0, 0, 0, 0];
      this.m_ResultReferences = [
        Game.sharedScreen().getResults().birds,
        Game.sharedScreen().getResults().flayers,
        Game.sharedScreen().getResults().combo,
        Game.sharedScreen().getResults().keys
      ];
      break;
    }

    if(Game.instance.m_GameState) {
      Sound.sharedSound().play(s_SoundWin);

      DataManager.sharedManager().update(true, [references.coins.lives, references.levels.current], [1, Game.level]);
      if(Game.network) {
        DataManager.sharedManager().update(true, references.coins.keys, Game.sharedScreen().m_BonusKeys);
        DataManager.sharedManager().update(true, references.coins.gold, Math.floor(this.m_ResultReferences.sum() / 100));
      } else {
        DataManager.sharedManager().update(true, references.coins.keys, Game.sharedScreen().m_BonusKeys);
        DataManager.sharedManager().update(true, references.coins.silver, Math.floor(this.m_ResultReferences.sum() / 10));
      }
    } else {
      Sound.sharedSound().play(s_SoundLose);

      this.m_TextValue1.setText('finish-text-4');
    }

    Camera.sharedCamera().setDesignResolutionSize(false, false, false, false, true);
  },
  hide: function(callback) {
    this.assert(!this.getParent(), "This popup window isn't showed.");

    this.m_HideCallback = callback;

    this.m_BackgroundSquare.runRecognizeAction(cc.CallFunc.create(this.onHide, this, this), {
      name: 'scale',
      time: 0.2,
      value: 0.0
    });
    this.m_Background1.runRecognizeAction(false, {
      name: 'move',
      time: 0.2,
      x: Camera.sharedCamera().center.x,
      y: Camera.sharedCamera().height + this.m_Background1.getHeight() / 2
    });
    this.m_Background2.runRecognizeAction(false, {
      name: 'move',
      time: 0.2,
      x: Camera.sharedCamera().center.x,
      y: -this.m_Background2.getHeight() / 2
    });
  },
  onShow: function() {
    var types = Game.sharedScreen().m_Types;
    var type = Game.sharedScreen().m_Type;

    MenuPanel.sharedScreen(this).show();

    this.m_SplashStars = EntityManager.create(20, SplashStar.create(false, Game.sharedScreen().getPhysicsWorld()), this.m_BackgroundSquare);

    switch(type) {
      case types.progress:
      if(Game.instance.m_GameState) {
        this.m_Lives.create();

        ConfettiBackground.sharedScreen(Game.sharedScreen()).show();
      }
      break;
      case types.classic:
      case types.arcade:
      if(Game.instance.m_GameState) {
        this.m_PrizeDecoration.setCurrentFrameIndex(1);

        for(var i = 0; i < 20; i++) {
          this.m_SplashStars.create();
        }

        ConfettiBackground.sharedScreen(Game.sharedScreen()).show();
      } else {

      }
      break;
    }

    Game.instance.onFinishShow();

    if(Game.instance.m_GameState) {
      this.schedule(this.count, 0.01);
    }
  },
  onHide: function() {
    this.removeFromParent();

    if(this.m_HideCallback) {
      this.m_HideCallback();
    }

    this.m_SplashStars.clear();
    this.m_SplashStars = false;
  },
  onMenuEvent: function() {
    Camera.sharedCamera().setDesignResolutionSize();

    MenuPanel.sharedScreen(this).hide(function() {
      this.setBottomScreen(Menu);

      this.hide(function() {
      });
    }.bind(this));
  },
  onShopEvent: function() {
    Camera.sharedCamera().setDesignResolutionSize();

    MenuPanel.sharedScreen(this).hide(function() {
      this.setBottomScreen(Shop);

      this.hide(function() {
      });
    }.bind(this));
  },
  onRestartEvent: function() {
    Camera.sharedCamera().setDesignResolutionSize();

    MenuPanel.sharedScreen(this).hide(function() {
      this.hide(function() {
        Game.sharedScreen().onShow();
      });
    }.bind(this));
  },
  onContinueEvent: function() {
    MenuPanel.sharedScreen(this).hide(function() {
      if(Game.tutorial) {
        this.setBottomScreen(Levels);

        new PausableTimeout(function() {
          this.hide(function() {
            new PausableTimeout(function() {
              Levels.instance.onSelected({
                id: 1
              });
            }, 1500);
          }.bind(this), 500);
        }.bind(this), 500);
      } else {
        if(Game.network) {
          Camera.sharedCamera().setDesignResolutionSize();

          this.setBottomScreen(Mode);

          new PausableTimeout(function() {
            this.hide(function() {
            });
          }.bind(this), 500);
        } else {
          this.setBottomScreen(Levels);

          Levels.sharedScreen().addCallback({
            type: 'onscreenready',
            func: function() {
              if(!DataManager.sharedManager().get(false, references.levels.levels[Game.level + 1])) {
                this.onLevelBack();
              }
            }
          });
   
          new PausableTimeout(function() {
            this.hide(function() {
            });
          }.bind(this), 500);
        }
      }
    }.bind(this));
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();
  },
  setBottomScreen: function(screen) {
    this.removeFromParent();
    ScreenManager.sharedManager().replace(screen, -1);
    screen.instance.addChild(this);
  },
  onCountingResume: function() {
    this.m_TextValue1.runRecognizeAction(false, {
      name: 'fade',
      time: 0.2,
      value: 255
    });

    var types = Game.sharedScreen().m_Types;
    var type = Game.sharedScreen().m_Type;

    switch(type) {
      case types.progress:
      switch(++this.m_CountReference) {
        default:
        this.unschedule(this.count);
        break;
        case 1:
        this.m_TextValue1.setText('finish-text-6');

        this.schedule(this.count, 0.01, null, 1.0);
        break;
        case 2:
        this.m_TextValue1.setText('finish-text-7');

        this.schedule(this.count, 0.01, null, 1.0);
        break;
        case 3:
        this.m_TextValue1.setText('finish-text-4');

        this.schedule(this.count, 0.01, null, 1.0);
        break;
      }
      break;
      case types.classic:
      case types.arcade:
      switch(++this.m_CountReference) {
        default:
        this.unschedule(this.count);
        break;
        case 1:
        this.m_TextValue1.setText('finish-text-2');

        this.schedule(this.count, 0.01, null, 1.0);
        break;
        case 2:
        this.m_TextValue1.setText('finish-text-3');

        this.schedule(this.count, 0.01, null, 1.0);
        break;
        case 3:
        this.m_TextValue1.setText('finish-text-4');

        this.schedule(this.count, 0.01, null, 1.0);
        break;
      }
      break;
    }

    this.m_TextValue1.ccsf([this.m_CountReferences[this.m_CountReference]]);
  },
  count: function() {
    var types = Game.sharedScreen().m_Types;
    var type = Game.sharedScreen().m_Type;

    switch(type) {
      case types.progress:
      switch(this.m_CountReference) {
        case 0:
        case 1:
        case 2:
        if(this.m_CountReference == 0 && this.m_ResultReferences[this.m_CountReference] - this.m_CountReferences[this.m_CountReference] >= 10) {
          this.m_CountReferences[this.m_CountReference] += 10;
          this.m_TempCoins += 10;

          if(this.m_TempCoins > (Game.network ? 1000 : 100)) {
            this.m_TempCoins = 10;

            this.m_TotalCoins += 10;
          }
        } else {
          this.m_CountReferences[this.m_CountReference]++;
          this.m_TempCoins++;

          if(this.m_TempCoins > (Game.network ? 100 : 10)) {
            this.m_TempCoins = 0;

            this.m_TotalCoins++;
          }
        }

        this.m_TextValue1.ccsf([this.m_CountReferences[this.m_CountReference]]);
        this.m_TextValue2.ccsf([this.m_TotalCoins]);

        if(this.m_CountReferences[this.m_CountReference] >= this.m_ResultReferences[this.m_CountReference]) {
          this.m_TextValue1.runAction(cc.Sequence.create(
            cc.DelayTime.create(1.0),
            cc.FadeTo.create(0.2, 0.0),
            cc.CallFunc.create(this.onCountingResume, this, this)
          ));

          this.unschedule(this.count);
        }
        break;
        case 3:
        this.unschedule(this.count);

        this.m_CountReference++;

        this.runAction(cc.Sequence.create(
          cc.DelayTime.create(0.5),
          cc.CallFunc.create(this.count, this, this)
        ));
        break;
        case 4:
        this.m_CountReference++;

        this.runAction(cc.Sequence.create(
          cc.DelayTime.create(0.5),
          cc.CallFunc.create(this.count, this, this)
        ));

        if(DataManager.sharedManager().get(false, references.items.bonus6) > 0) {
          Bonus6.create();
        }
        break;
        case 5:
        this.m_CountReference++;

        this.runAction(cc.Sequence.create(
          cc.DelayTime.create(0.5),
          cc.CallFunc.create(this.count, this, this)
        ));

        if(DataManager.sharedManager().get(false, references.items.bonus7) > 0) {
          Bonus7.create();
        }
        break;
        case 6:
        this.unschedule(this.count);
        break;
      }
      break;
      case types.classic:
      case types.arcade:
      switch(this.m_CountReference) {
        case 0:
        case 1:
        case 2:
        reward = this.m_CountReference + 1;

        this.m_CountReferences[this.m_CountReference]++;
        this.m_TotalCoins += reward;

        this.m_TextValue1.ccsf([this.m_CountReferences[this.m_CountReference]]);
        this.m_TextValue2.ccsf([this.m_TotalCoins]);

        if(this.m_CountReferences[this.m_CountReference] >= this.m_ResultReferences[this.m_CountReference]) {
          this.m_TextValue1.runAction(cc.Sequence.create(
            cc.DelayTime.create(1.0),
            cc.FadeTo.create(0.2, 0.0),
            cc.CallFunc.create(this.onCountingResume, this, this)
          ));

          this.unschedule(this.count);
        }
        break;
        case 3:
        this.unschedule(this.count);

        this.m_CountReference++;

        this.runAction(cc.Sequence.create(
          cc.DelayTime.create(0.5),
          cc.CallFunc.create(this.count, this, this)
        ));
        break;
        case 4:
        this.m_CountReference++;

        this.runAction(cc.Sequence.create(
          cc.DelayTime.create(0.5),
          cc.CallFunc.create(this.count, this, this)
        ));

        if(DataManager.sharedManager().get(false, references.items.bonus6)) {
          Bonus6.create();
        }
        break;
        case 5:
        this.m_CountReference++;

        if(DataManager.sharedManager().get(false, references.items.bonus7)) {
          Bonus7.create();
        }
        break;
        case 6:
        this.unschedule(this.count);
        break;
      }
      break;
    }

    //DataManager.sharedManager().update(references.coins.silver, reward);
  }
});

Finish.instance = false;
Finish.sharedScreen = function(parent) {
  if(Finish.instance) {
    Finish.instance.m_Parent = parent;
  } else {
    Finish.instance = new Finish(parent);
  }

  return Finish.instance;
};
