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

PopupShaderManager = EntityManager.extend({
  m_AnimationTime: 0,
  m_AnimationTimeElapsed: 0,
  ctor: function(parent) {
    this._super(6, PopupShader.create(), parent);

    PopupShaderManager.instance = this;

    parent.addChild(this);
  },
  animate: function() {
    var element1 = this.create();
    var element2 = this.create();

    var x = Random.sharedRandom().random(0, Camera.sharedCamera().width);
    var y = Random.sharedRandom().random(0, Camera.sharedCamera().height);
    var scale = Random.sharedRandom().random(0.1, 3.0);
    var time = Random.sharedRandom().random(0.1, 0.2);
    var speed = Random.sharedRandom().random(10, 100);

    element1.animate(x, y, scale, speed, time, 1);
    element2.animate(x, y, scale, speed, time, 2);
  },
  update: function(time) {
    this._super(time);

    this.m_AnimationTimeElapsed += time;

    if(this.m_AnimationTimeElapsed >= this.m_AnimationTime) {
      this.m_AnimationTimeElapsed = 0;

      if(this.getCount() < this.getCapacity()) {
        this.animate();

        this.m_AnimationTime = Random.sharedRandom().random(0, 1.0);
      }
    }
  }
});

PopupShaderManager.create = function(parent) {
  return new PopupShaderManager(parent);
};
