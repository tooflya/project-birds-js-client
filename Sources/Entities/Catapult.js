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

Catapult = AnimatedEntity.extend({
  m_Birds: false,
  m_Health: 0,
  m_HealthBasic: 0,
  m_Speed: 0,
  m_SpeedFactor: 0,
  m_Defence: 0,
  m_State: 0,
  m_States: {
    stop: 0,
    run: 1,
    fire: 2,
    destroy: 3,
    regeneration: 4
  },
  m_StateData: false,
  m_LastMoveDistance: 0,
  ctor: function(parent) {
    this._super(s_Catapult, 6, 2, parent);

    this.m_PlayerHealth = Entity.create(s_PlayerHealth, parent);
    this.m_PlayerHealthBar = TiledEntity.create(s_PlayerHealthBar, 1, 1, this.m_PlayerHealth);

    this.m_PlayerHealthText = Text.create('player-health', parent);
    this.m_PlayerDefenceText = Text.create('player-defence', parent);

    this.m_PlayerHealth.setZOrder(304);
    this.m_PlayerHealthText.setZOrder(304);
    this.m_PlayerDefenceText.setZOrder(304);
  },
  onCreate: function() {
    this._super();

    this.m_PlayerHealth.create().setCenterPosition(0, 0);
    this.m_PlayerHealthBar.create().setCenterPosition(this.m_PlayerHealth.getWidth() / 2, this.m_PlayerHealth.getHeight() / 2);

    this.m_PlayerHealthText.create();
    this.m_PlayerDefenceText.create();

    if(Game.network) {
      this.m_Health = this.m_HealthBasic = 100;
      this.m_Defence = 0;

      this.m_SpeedFactor = 1;
    } else {
      this.m_Health = this.m_HealthBasic = this._id > 0 ? (Game.tutorial ? Game.instance.m_TutorialMatrix.opponent.health : Game.instance.m_LevelsMatrixes[Game.level - 1].opponent.health) : (100 + (53 * (DataManager.sharedManager().get(false, references.info.weapon) - 1)));
      this.m_Defence = 0;

      this.m_SpeedFactor = this._id > 0 ? (Game.tutorial ? Game.instance.m_TutorialMatrix.opponent.speed : Game.instance.m_LevelsMatrixes[Game.level - 1].opponent.speed) : 1;
    }

    this.m_Speed = Camera.sharedCamera().coord(50);

    this.changeState(this.m_States.run, {
      distance: this.getWidth() * 2,
      speedFactor: 1
    });

    if(Game.network) {
      if(this._user) {
        var background = Entity.create(s_NetworkHolder, Game.instance);

        InternetEntity.create(this._user.photo, background, function(entity) {
          var photo = entity.create();
          var text = Text.create('zero', background);

          background.create().setCenterPosition(this._id == 0 ? Camera.sharedCamera().coord(260) : Camera.sharedCamera().width - Camera.sharedCamera().coord(260), Camera.sharedCamera().height - Camera.sharedCamera().coord(150));
          photo.setCenterPosition(background.getWidth() / 2 + Camera.sharedCamera().coord(7), background.getHeight() / 2 - Camera.sharedCamera().coord(6));
          photo.setScale(1.5);

          text.setFontSize(Camera.sharedCamera().coord(26));
          text.ccsf([this._user.name]);
          text.create().setCenterPosition(background.getWidth() / 2 + Camera.sharedCamera().coord(2), Camera.sharedCamera().coord(22));

          if(this._id == 0) {
            background.setFlippedHorizontally(false);
            photo.setScale(1.5);
            text.setScale(1.0);
          } else {
            background.setFlippedHorizontally(true);
            photo.setScaleX(-1.5);
            text.setScaleX(-1.0);
          }
        }.bind(this));
      }
    }
  },
  onDestroy: function() {
    this._super();

    this.m_PlayerHealth.destroy();
    this.m_PlayerHealthBar.destroy();
    this.m_PlayerHealthText.destroy();
    this.m_PlayerDefenceText.destroy();

    var explosion = Game.sharedScreen().m_Explosions.create();
    explosion.setCenterPosition(this.getCenterX(), this.getCenterY());
    explosion.setZOrder(800);

    this.parts = [
      PhysicsEntity.create(s_CatapultPart1, 1, 1, Game.instance, Game.instance.getPhysicsWorld(), 0.1, 0.1, 0.1, 4.0),
      PhysicsEntity.create(s_CatapultPart2, 1, 1, Game.instance, Game.instance.getPhysicsWorld(), 0.1, 0.1, 0.1, 4.0),
      PhysicsEntity.create(s_CatapultPart3, 1, 1, Game.instance, Game.instance.getPhysicsWorld(), 0.1, 0.1, 0.1, 4.0),
      PhysicsEntity.create(s_CatapultPart3, 1, 1, Game.instance, Game.instance.getPhysicsWorld(), 0.1, 0.1, 0.1, 4.0),
      PhysicsEntity.create(s_CatapultPart3, 1, 1, Game.instance, Game.instance.getPhysicsWorld(), 0.1, 0.1, 0.1, 4.0),
      PhysicsEntity.create(s_CatapultPart3, 1, 1, Game.instance, Game.instance.getPhysicsWorld(), 0.1, 0.1, 0.1, 4.0)
    ];

    for(var i = 0; i < this.parts.length; i++) {
      var x = Random.sharedRandom().random(-500, 500);
      var y = Random.sharedRandom().random(500, 2000);
      var r = Random.sharedRandom().random(0, 720);

      this.parts[i].create().setCenterPosition(this.getCenterX(), this.getCenterY());
      this.parts[i].setLinearVelocity(x, y);
      this.parts[i].setRotation(r);
      this.parts[i].setZOrder(450);
    }

    Game.instance.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(2.0),
        cc.CallFunc.create(Game.instance.finishGame, Game.instance, this._id == 1),
        false
      )
    );
  },
  onStop: function() {
  },
  onRun: function() {
    this.m_Defence = 0;

    this.m_LastMoveDistance = this.m_StateData.distance * (this.m_StateData.speedFactor || this.m_SpeedFactor);
  },
  onFire: function(data) {
    this.animate(0.1, 1, {start: 0, end: 5});

    Sound.sharedSound().play(s_SoundThrowBird);
  },
  onUnFire: function() {
    this.animate(0.06, 1, {start: 5, end: 0});
  },
  onAnimationFinish: function() {
    this._super();

    switch(this.m_State) {
      case this.m_States.stop:
      break;
      case this.m_States.run:
      this.changeState(this.m_States.stop, {
        callback: this.m_StateData.callback
      });

      if(this.m_StateData) {
        if(this.m_StateData.callback) {
          this.m_StateData.callback();
        }
      }
      break;
      case this.m_States.fire:
      if(this.m_StateData.fire) {
        if(this.m_StateData) {
          if(this.m_StateData.response) {
            this.m_StateData.response();
          }
        }

        this.changeState(this.m_States.fire, {
          fire: false,
          callback: this.m_StateData.callback
        });
      } else {
        this.changeState(this.m_States.stop, {
          callback: this.m_StateData.callback
        });
      }
      break;
      case this.m_States.destroy:
      this.changeState(this.m_States.stop, {
        callback: this.m_StateData.callback
      });

      if(this.m_StateData) {
        if(this.m_StateData.callback) {
          this.m_StateData.callback();
        }
      }
      break;
      case this.m_States.regeneration:
      this.changeState(this.m_States.stop, {
        callback: this.m_StateData.callback
      });

      if(this.m_StateData) {
        if(this.m_StateData.callback) {
          this.m_StateData.callback();
        }
      }
      break;
    }
  },
  createElements: function() {
    var self = this;

    this.m_Birds = EntityManager.create(3, CatapultBird.create(false, this), Game.instance);
    this.m_Birds.fire = function() {
      this.get(0).changeState(this.get(0).m_States.fire);
      this.get(1).changeState(this.get(1).m_States.run, {
        distance: Camera.sharedCamera().coord(55),
        pause: 0.5
      });
      this.get(2).changeState(this.get(2).m_States.run, {
        distance: Camera.sharedCamera().coord(55),
        pause: 1.0
      });
    };
    this.m_Birds.renew = function() {
      var element = this.get(0);

      this.m_Elements.remove(0);
      this.m_Elements.push(element);

      for(var i = 0; i < this.getCapacity(); i++) {
        this.get(i).setID(i);
      }

      this.get(2).setCenterPosition((this.get(2).isFlippedHorizontally() ? Camera.sharedCamera().width + this.get(2).getWidth() / 2 : -this.get(2).getWidth() / 2), Camera.sharedCamera().coord(10));
      this.get(2).changeState(this.get(2).m_States.run, {
        distance: this.get(2).isFlippedHorizontally() ? ((this.get(2).getCenterX() - self.getCenterX()) - Camera.sharedCamera().coord(220)) : ((self.getCenterX() - this.get(2).getCenterX()) - Camera.sharedCamera().coord(220)),
        pause: 1.0,
        callback: function() {
          if(self.m_StateData) {
            if(self.m_StateData.callback) {
              self.m_StateData.callback();
            }
          }
        }
      });

      for(var i = 0; i < 2; i++) {
        this.get(i).setCenterPosition(self.getCenterX() - (Camera.sharedCamera().coord(55) * i + Camera.sharedCamera().coord(110)) * (this.get(i).isFlippedHorizontally() ? -1 : 1), Camera.sharedCamera().coord(10) + this.get(i).getHeight() / 2);
      }
    };
    this.m_Birds.fix = function() {
      for(var i = 0; i < 3; i++) {
        this.get(i).setCenterPosition(self.getCenterX() - (Camera.sharedCamera().coord(55) * i + Camera.sharedCamera().coord(110)) * (this.get(i).isFlippedHorizontally() ? -1 : 1), Camera.sharedCamera().coord(10) + this.get(i).getHeight() / 2);
      }
    };

    for(var i = 1; i < 4; i++) {
      this.m_Birds.create();
      this.m_Birds.last().setFlippedHorizontally(this.isFlippedHorizontally());
      this.m_Birds.last().setCenterPosition(this.getCenterX() - (Camera.sharedCamera().coord(55) * i + Camera.sharedCamera().coord(55)) * (this.m_Birds.last().isFlippedHorizontally() ? -1 : 1), this.getCenterY() + this.m_Birds.last().getHeight() / 2 - Camera.sharedCamera().coord(65));
      this.m_Birds.last().setZOrder(this.getZOrder());
      this.m_Birds.last().chooseId();
    }
  },
  destroyElements: function() {
    if(this.parts) {
      for(var i = 0; i < this.parts.length; i++) {
        this.parts[i].removeFromParent();
      }
      this.parts = false;
    }

    this.m_Birds.removeFromParent();
  },
  runGameAction: function(id, data) {
    var self = this;

    data.repeat--;

    switch(id) {
      case 0:
      this.changeState(this.m_States.fire, {
        fire: true,
        callback: function() {
          if(data.repeat > 0) {
            self.runGameAction(id, data);
          }
        },
        response: function() {
          Game.sharedScreen().onTurnFinish(id + 10, data);
        }
      });
      break;
      case 1:
      this.changeState(this.m_States.regeneration, {
        regeneration: data.regeneration,
        callback: function() {
          if(data.repeat > 0) {
            self.runGameAction(id, data);
          } else {
            Game.sharedScreen().onTurnFinish(id);
          }
        }
      });
      break;
      case 2:
      this.m_Defence += data.shield * (data.repeat + 1);

      for(var i = 0; i < 3; i++) {
        this.m_Birds.get(i).changeState(this.m_Birds.get(i).m_States.defence, {
          pause: 0.6 * i,
          callback: (i == 2 ? function() {
            Game.sharedScreen().onTurnFinish(id);
          } : false)
        });
      }
      break;
      case 3:
      break;
      case 4:
      this.changeState(this.m_States.run, {
        distance: data.distance,
        pause: data.pause,
        callback: function() {
          if(data.repeat > 0) {
            self.runGameAction(id, {
              distance: data.distance,
              pause: 1.5
            });
          } else {
            Game.sharedScreen().onTurnFinish(id);
          }
        }
      });
      break;
      case 10:
      this.changeState(this.m_States.destroy, {
        destroy: data.destroy,
        pause: data.pause,
        callback: function() {
          if(++data.repeat <= 0) {
            Game.sharedScreen().onTurnFinish(0);
          }
        }
      });
      break;
    }
  },
  changeState: function(state, data) {
    this.m_StateData = data;
    this.m_State = state;

    switch(state) {
      case this.m_States.stop:
      this.stopAnimation();
      this.onAnimationFinish();

      this.onStop();
      break;
      case this.m_States.run:
      this.animate(0.1, -1, {start: 6, end: 11});

      this.onRun();
      break;
      case this.m_States.fire:
      if(this.m_StateData.fire) {
        this.m_Birds.fire();
      } else {
        this.onUnFire();
      }
      break;
      case this.m_States.destroy:
      break;
      case this.m_States.regeneration:
      break;
    }
  },
  setHealth: function(value) {
    this.m_Health = this.m_HealthBasic = value;
  },
  setSpeed: function(value) {
    this.m_SpeedFactor = value;
  },
  updateState: function(time) {
    switch(this.m_State) {
      case this.m_States.stop:
      break;
      case this.m_States.run:
      this.m_StateData.pause -= time;

      if(!this.m_StateData.pause || this.m_StateData.pause <= 0) {
        if(this.m_StateData.distance > 0) {
          this.setCenterPosition(this.getCenterX() + (this.m_Speed * time) * (this.isFlippedHorizontally() ? -1 : 1), this.getCenterY());

          this.m_StateData.distance -= (this.m_Speed / (this.m_StateData.speedFactor || this.m_SpeedFactor)) * time;
        } else {
          this.onAnimationFinish();

          for(var i = 0; i < 3; i++) {
            this.m_Birds.get(i).changeState(this.m_Birds.get(i).m_States.run, {
              pause: 0.5 * i
            });
          }
        }
      }
      break;
      case this.m_States.fire:
      break;
      case this.m_States.destroy:
      this.m_StateData.pause -= time;

      if(this.m_StateData.pause <= 0) {
        if(this.m_Health <= 0.0) {
          this.destroy();
        } else if(this.m_StateData.destroy <= 0.0) {
          this.onAnimationFinish();
        } else {
          if(this.m_Defence > 0) {
            this.m_Defence -= 1;
          } else {
            this.m_Health -= 1;
          }
          this.m_StateData.destroy -= 1;
        }
      }
      break;
      case this.m_States.regeneration:
      if(this.m_StateData.regeneration <= 0.0 || this.m_Health >= this.m_HealthBasic) {
        this.onAnimationFinish();
      } else {
        this.m_Health += 1;
        this.m_StateData.regeneration -= 1;
      }
      break;
    }

    var percent = Math.floor(this.m_Health * 100.0 / this.m_HealthBasic);

    this.m_PlayerHealth.setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(50));
    this.m_PlayerHealthBar.showPercentage(percent);
    this.m_PlayerHealthBar.setCenterPosition(this.m_PlayerHealth.getWidth() / 2 + this.m_PlayerHealthBar.getTextureRect().getWidth() / 2 - this.m_PlayerHealthBar.getWidth() / 2, this.m_PlayerHealth.getHeight() / 2);

    this.m_PlayerHealthText.ccsf([this.m_Health]);
    this.m_PlayerDefenceText.ccsf([this.m_Defence]);
    this.m_PlayerHealthText.setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(80));
    this.m_PlayerDefenceText.setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(110));

    var color;
    if(percent < 25) {
      color = cc.c3(255, 0, 0);
    } else if(percent < 75) {
      color = cc.c3(255, 255, 0);
    } else {
      color = cc.c3(0, 255, 0);
    }

    this.m_PlayerHealthBar.setColor(color);
    this.m_PlayerHealthText.setColor(color);
    this.m_PlayerDefenceText.setColor(cc.c3(0, 200, 255));

    this.m_PlayerDefenceText.setVisible(this.m_Defence > 0);
  },
  update: function(time) {
    this._super(time);

    this.updateState(time);
  },
  deepCopy: function() {
    return Catapult.create();
  }
});

Catapult.create = function(parent) {
  var entity = new Catapult(parent);

  return entity;
};
