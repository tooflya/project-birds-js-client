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

SplashStar = PhysicsEntity.extend({
  ctor: function(parent, world) {
    this._super(s_SplashStar, 1, 1, parent, world);

    this.getPhysicsFixture().filter.categoryBits = 0;
    this.getPhysicsFixture().filter.maskBits = 0;
  },
  onCreate: function() {
    this._super();

    this.setOpacity(150);

    this.setRotation(Random.sharedRandom().random(0, 720));
    this.setCenterPosition(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y + Camera.sharedCamera().coord(200));

    this.m_Forces = {
      x: Random.sharedRandom().random(-500, 500),
      y: Random.sharedRandom().random(-1000, 1000)
    };

    this.setLinearVelocity(this.m_Forces.x, this.m_Forces.y);
  },
  onDestroy: function() {
    this._super();
  },
  deepCopy: function() {
    return SplashStar.create(this.getParent(), this.getCurrentPhysicsWorld());
  }
});

SplashStar.create = function(parent, world) {
  var entity = new SplashStar(parent, world);

  return entity;
};
