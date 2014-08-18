/**
 * Tooflya Inc. Development
 *
 * @author Igor Mats from Tooflya Inc.
 * @copyright (c) 2013 by Igor Mats
 * http://www.tooflya.com/development/
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @version of cocos2d-x is 2.1.4
 *
 */

FlayerBird = Bird.extend({
  m_Forces: {
    x: 0,
    y: 0
  },
  ctor: function(parent, world) {
    var game = Game.sharedScreen();

    switch(game.m_Type) {
      case game.m_Types.progress:
      world = false;
      break;
      case game.m_Types.classic:
      case game.m_Types.arcade:
      break;
    }

    this._super(parent, world);
  },
  onCreateSound: function() {
    //Sound.sharedSound().play(s_SoundThrowBird);
  },
  onDestroySound: function() {
    Sound.sharedSound().play(s_SoundBirdExplosion);
  },
  onCreate: function() {
    this._super();

    this.m_Id = 7 * this.getHorizontalFramesCount();

    this.animate(this.animations.fly);
  },
  onDestroy: function() {
    PhysicsEntity.prototype.onDestroy.call(this);

    this.m_Explosions.clear();

    if(this.getCenterX() < -Camera.sharedCamera().width || this.getCenterX() > Camera.sharedCamera().width * 2 || this.getCenterY() < 0) {
    } else {
      if(Game.sharedScreen().m_GameRunning) {
        this.onDestroySound();
        this.createExplosion();

        var game = Game.sharedScreen();

        switch(game.m_Type) {
          case game.m_Types.progress:
          break;
          case game.m_Types.classic:
          case game.m_Types.arcade:
          game.onKeyDropped(this);
          break;
        }
      }
    }
  },
  onCollideStart: function(entity, point) {
    var game = Game.sharedScreen();

    switch(game.m_Type) {
      case game.m_Types.progress:
      break;
      case game.m_Types.classic:
      case game.m_Types.arcade:
      if(entity instanceof Bird) {
        this.destroy();
      }
      break;
    }
  },
  onCollideFinish: function(entity) {
    var game = Game.sharedScreen();

    switch(game.m_Type) {
      case game.m_Types.progress:
      break;
      case game.m_Types.classic:
      case game.m_Types.arcade:
      break;
    }
  },
  run: function(data) {
    var game = Game.sharedScreen();

    switch(game.m_Type) {
      case game.m_Types.progress:
      var values = {};

      values.position = {
        x: Random.sharedRandom().probably(50) ? -this.getWidth() / 2 : Camera.sharedCamera().width + this.getWidth() / 2,
        y: Random.sharedRandom().random(Camera.sharedCamera().height / 10, Camera.sharedCamera().center.y)
      };

      this.m_Forces = {
        x: 2000,
        y: 100
      };
      this.m_Forces.x *= this.getCenterX() < Camera.sharedCamera().center.x ? 1 : -1;
      this.m_Forces.y *= Random.sharedRandom().probably(50) ? 1 : -1;

      this.setCenterPosition(values.position.x, values.position.y);
      this.setFlippedHorizontally(this.m_Forces.x < 0);

      this.runAction(
        cc.Sequence.create(
          cc.MoveTo.create(data.speed, data.element.convertToWorldSpace(cc.p(0, 0))),
          cc.CallFunc.create(this.destroy, this, this),
          false
        )
      );
      break;
      case game.m_Types.classic:
      case game.m_Types.arcade:
      var values = {};

      values.position = {
        x: Random.sharedRandom().probably(50) ? -this.getWidth() / 2 : Camera.sharedCamera().width + this.getWidth() / 2,
        y: Random.sharedRandom().random(Camera.sharedCamera().height / 10, Camera.sharedCamera().center.y)
      };

      this.m_Forces = {
        x: 2000,
        y: 100
      };
      this.m_Forces.x *= this.getCenterX() < Camera.sharedCamera().center.x ? 1 : -1;
      this.m_Forces.y *= Random.sharedRandom().probably(50) ? 1 : -1;

      this.setLinearVelocity(this.m_Forces.x, this.m_Forces.y);
      this.setCenterPosition(values.position.x, values.position.y);
      this.setFlippedHorizontally(this.getLinearVelocity().x < 0);
      break;
    }
  },
  createMark: function() {
    Game.sharedScreen().m_Stars.create().setCenterPosition(this.getCenterX(), this.getCenterY() + Camera.sharedCamera().coord(Random.sharedRandom().random(0, 50)));
  },
  createExplosion: function() {
    Game.sharedScreen().m_Explosions.create().setCenterPosition(this.getCenterX(), this.getCenterY());
  },
  checkCollides: function() {
    var game = Game.sharedScreen();

    switch(game.m_Type) {
      case game.m_Types.progress:
      break;
      case game.m_Types.classic:
      case game.m_Types.arcade:
      if(!Game.sharedScreen().m_Touch.active) return false;

      if(this.collideWithPoint(Game.sharedScreen().m_Touch.point.x, Game.sharedScreen().m_Touch.point.y)) {
        this.destroy();
      }
      break;
    }
  },
  checkPosition: function() {
    this._super();
  },
  checkBonuses: function() {
  },
  update: function(time) {
    this._super(time);

    this.setLinearVelocity(this.m_Forces.x, this.m_Forces.y);

    if(this.getCenterX() < -Camera.sharedCamera().width || this.getCenterX() > Camera.sharedCamera().width * 2) {
      this.destroy();
    }
  },
  deepCopy: function() {
    return FlayerBird.create(this.getParent(), this.getCurrentPhysicsWorld());
  }
});

FlayerBird.create = function(parent, world) {
  var entity = new FlayerBird(parent, world);

  return entity;
};
