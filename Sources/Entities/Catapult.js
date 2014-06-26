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
  m_Health: 0,
  m_State: 0,
  m_States: {
    stop: 0,
    run: 1,
    fire: 2,
    destroy: 3,
    regeneration: 4
  },
  m_StateData: false,
  ctor: function(parent) {
    this._super(s_Catapult, 6, 2, parent);

    this.m_PlayerHealth = Entity.create(s_PlayerHealth, parent);
    this.m_PlayerHealthBar = TiledEntity.create(s_PlayerHealthBar, 1, 1, this.m_PlayerHealth);

    this.m_PlayerHealth.create().setCenterPosition(0, 0);
    this.m_PlayerHealthBar.create().setCenterPosition(this.m_PlayerHealth.getWidth() / 2, this.m_PlayerHealth.getHeight() / 2);

    this.m_Speed = Camera.sharedCamera().coord(50);

    this.m_PlayerHealth.setZOrder(304);

    this.registerTouchable(true);
  },
  onCreate: function() {
    this._super();

    this.m_Health = 100;

    this.changeState(this.m_States.run, {
      distance: this.getWidth() * 2
    });
  },
  onDestroy: function() {
    this._super();

    
  },
  onStop: function() {
  },
  onRun: function() {
  },
  onFire: function() {
  },
  onAnimationFinish: function() {
    this._super();

    if(this.m_StateData) {
      if(this.m_StateData.callback) {
        this.m_StateData.callback();
      }
    }

    switch(this.m_State) {
      case this.m_States.stop:
      break;
      case this.m_States.run:
      break;
      case this.m_States.fire:
      if(this.m_StateData.fire) {
        this.changeState(this.m_States.fire, {
          fire: false
        });
      } else {
        this.changeState(this.m_States.stop);
      }
      break;
      case this.m_States.destroy:
      break;
      case this.m_States.regeneration:
      break;
    }
  },
  onTouch: function() {
    this.changeState(this.m_States.fire, {
      fire: true
    });
  },
  runGameAction: function(id, data) {
    switch(id) {
      case 0:
      this.changeState(this.m_States.fire, {
        fire: true,
        callback: function() {
          Game.sharedScreen().onTurnFinish(id + 10, {
            destroy: data.destroy
          });
        }
      });
      break;
      case 1:
      this.changeState(this.m_States.regeneration, {
        regeneration: data.regeneration,
        callback: function() {
          Game.sharedScreen().onTurnFinish(id);
        }
      });
      break;
      case 2:
      Game.sharedScreen().onTurnFinish(id);
      break;
      case 3:
      break;
      case 4:
      this.changeState(this.m_States.run, {
        distance: data.distance,
        callback: function() {
          Game.sharedScreen().onTurnFinish(id);
        }
      });
      break;
      case 10:
      this.changeState(this.m_States.destroy, {
        destroy: data.destroy,
        callback: function() {
          Game.sharedScreen().onTurnFinish(0);
        }
      });
      break;
    }
  },
  changeState: function(state, data) {
    //if(this.m_State == state) return false;

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
        this.animate(0.01, 1, {start: 0, end: 5});
      } else {
        this.animate(0.06, 1, {start: 5, end: 0});
      }

      this.onFire();
      break;
      case this.m_States.destroy:
      break;
      case this.m_States.regeneration:
      break;
    }
  },
  updateState: function(time) {
    switch(this.m_State) {
      case this.m_States.stop:
      break;
      case this.m_States.run:
      if(this.m_StateData.distance > 0) {
        this.setCenterPosition(this.getCenterX() + (this.m_Speed * time) * (this.isFlippedHorizontally() ? -1 : 1), this.getCenterY());

        this.m_StateData.distance -= this.m_Speed * time;
      } else {
        this.onAnimationFinish();

        this.changeState(this.m_States.stop);
      }
      break;
      case this.m_States.fire:
      break;
      case this.m_States.destroy:
      this.m_Health -= 0.1;
      this.m_StateData.destroy -= 0.1;

      if(this.m_Health <= 0.0) {
        this.destroy();
      } else if(this.m_StateData.destroy <= 0.0) {
        this.changeState(this.m_States.stop, {
          callback: this.m_StateData.callback
        });
      }
      break;
      case this.m_States.regeneration:
      this.m_Health += 0.1;
      this.m_StateData.regeneration -= 0.1;

      if(this.m_StateData.regeneration <= 0.0 || this.m_Health >= 100.0) {
        this.changeState(this.m_States.stop, {
          callback: this.m_StateData.callback
        });
      }
      break;
    }

    this.m_PlayerHealth.setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(50));
    this.m_PlayerHealthBar.showPercentage(this.m_Health);
    this.m_PlayerHealthBar.setCenterPosition(this.m_PlayerHealth.getWidth() / 2 + this.m_PlayerHealthBar.getTextureRect().getWidth() / 2 - this.m_PlayerHealthBar.getWidth() / 2, this.m_PlayerHealth.getHeight() / 2);

    var color;
    if(this.m_Health < 25) {
      color = cc.c3(255, 0, 0);
    } else if(this.m_Health < 75) {
      color = cc.c3(255, 255, 0);
    } else {
      color = cc.c3(0, 255, 0);
    }

    this.m_PlayerHealthBar.setColor(color);
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
