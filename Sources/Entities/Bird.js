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

Bird = PhysicsEntity.extend({
  animations: {
    fly: 0,
    dongle: 1
  },
  m_Id: 0,
  m_Lifes: 0,
  m_Explosions: false,
  m_PreviousCenterPosition: {
    x: 0,
    y: 0
  },
  ctor: function(parent, world, file, horizontal, vertical) {
      this._super(file || s_Birds, horizontal || 14, vertical || 9, parent, world);

      this.m_Explosions = EntityManager.create(5, BirdExplosion.create(), this);
  },
  onCreate: function() {
    this._super();

    this.setFlippedHorizontally(false);
    this.setFlippedVertically(false);

    this.m_Id = Random.sharedRandom().random(0, Bird.count, true) * this.getHorizontalFramesCount();
    this.m_Lifes = 12; // TODO:

    this.m_Explosions.clear();

    this.setCurrentFrameIndex(this.m_Id);

    this.animate(this.animations.fly);
  },
  onDestroy: function() {
    this._super();

    this.m_Explosions.clear();

    if(this.getCenterY() > -this.getHeight() / 2) {
      Game.sharedScreen().m_Explosions.create().setCenterPosition(this.getCenterX(), this.getCenterY());
    } else {
      Game.sharedScreen().onLost(this);
    }
  },
  onCollideStart: function(entity, point) {
    this.m_Explosions.create().setCenterPosition(point.x, point.y);
  },
  onCollideFinish: function(entity) {
    this.setFlippedHorizontally(this.getLinearVelocity().x < 0);
  },
  animate: function(type) {
    var repeat = Random.sharedRandom().random(0, 5, true);

    switch(type) {
      case this.animations.fly:
      this._super(0.06, repeat, {start: this.m_Id + 5, end: this.m_Id + 12});
      this.onAnimationFinish = function() {
        this.animate(this.animations.dongle);
      };
      break;
      case this.animations.dongle:
      this._super(0.06, 1, {start: this.m_Id, end: this.m_Id + 12});
      this.onAnimationFinish = function() {
        this.animate(this.animations.fly);
      };
      break;
    }
  },
  throwup: function() {
    var values = {};

    // TODO: Correct force values.
    values.position = {
      x: Random.sharedRandom().random(this.getWidth(), Camera.sharedCamera().width - this.getWidth()),
      y:  -Camera.sharedCamera().coord(100)
    };
    values.force = {
      x: Random.sharedRandom().random(-Math.abs(Camera.sharedCamera().center.x - values.position.x), Math.abs(Camera.sharedCamera().center.x - values.position.x)),
      y: Random.sharedRandom().random(30, 50) * -this.getCurrentPhysicsWorld().GetGravity().y
    };

    this.setLinearVelocity(values.force.x, values.force.y);
    this.setCenterPosition(values.position.x, values.position.y);

    this.setFlippedHorizontally(this.getLinearVelocity().x < 0);
  },
  createMark: function() {
    Game.sharedScreen().m_Marks.create().setCenterPosition(this.getCenterX(), this.getCenterY());
  },
  update: function(time) {
    this._super(time);

    if(this.getCurrentPhysicsWorld()) {
      this.createMark();
    }
  },
  deepCopy: function() {
    return Bird.create(this.getParent(), this.getCurrentPhysicsWorld());
  }
});

Bird.count = 7;
Bird.colors = [
  cc.c3(246.0, 143.0, 41.0),
  cc.c3(224.0, 0.0, 55.0),
  cc.c3(204.0, 51.0, 204.0),
  cc.c3(51.0, 102.0, 255.0),
  cc.c3(0.0, 255.0, 255.0),
  cc.c3(255.0, 255.0, 51.0),
  cc.c3(0.0, 236.0, 47.0),
  cc.c3(209.0, 169.0, 0.0),
  cc.c3(64.0, 70.0, 98.0)
];
Bird.create = function(parent, world) {
  var entity = new Bird(parent, world);

  return entity;
};
