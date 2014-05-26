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

ParticleCoin = PhysicsEntity.extend({
  ctor: function(parent, world) {
    this._super(s_PanelIcon1, 5, 4, parent, world);

    this.getPhysicsFixture().filter.categoryBits = 1;
    this.getPhysicsFixture().filter.maskBits = 1;
  },
  onCreate: function() {
    this._super();

    this.animate(0.02);

    var values = {};

    values.position = {
      x: Random.sharedRandom().random(this.getWidth(), Camera.sharedCamera().width - this.getWidth()),
      y:  -Camera.sharedCamera().coord(100)
    };
    values.force = {
      x: Random.sharedRandom().random(-Math.abs(Camera.sharedCamera().center.x - values.position.x), Math.abs(Camera.sharedCamera().center.x - values.position.x)),
      y: Random.sharedRandom().random(40, 50) * -this.getCurrentPhysicsWorld().GetGravity().y
    };

    this.setLinearVelocity(values.force.x, values.force.y);
    this.setCenterPosition(values.position.x, values.position.y);

    Sound.sharedSound().play(s_SoundBloom[Random.sharedRandom().random(0, s_SoundBloom.length, true)]);
  },
  deepCopy: function() {
    return ParticleCoin.create(this.getParent(), this.getCurrentPhysicsWorld());
  }
});

ParticleCoin.create = function(parent, world) {
  var entity = new ParticleCoin(parent, world);

  return entity;
};
