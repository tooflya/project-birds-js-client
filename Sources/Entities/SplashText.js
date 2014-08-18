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

SplashText = Text.extend({
  m_Time: 3.0,
  m_TimeElapsed: 0,
  m_SpeedX: 30,
  m_SpeedY: 70,
  m_CurrentSpeedX: 0,
  m_Orientation: false,
  ctor: function(id, parent, my) {
    this._super(id, parent);

    var x = Random.sharedRandom().random(150, 300);
    var y = Random.sharedRandom().random(150, 300);

    if(my) {
      this.setCenterPosition(Camera.sharedCamera().coord(x), Camera.sharedCamera().coord(y));
    } else {
      this.setCenterPosition(Camera.sharedCamera().width - Camera.sharedCamera().coord(x), Camera.sharedCamera().coord(y));
    }
  },
  update: function(time) {
    this._super(time);

    this.setCenterPosition(this.getCenterX() + Camera.sharedCamera().coord(this.m_Orientation ? this.m_CurrentSpeedX : -this.m_CurrentSpeedX) * time, this.getCenterY() + Camera.sharedCamera().coord(this.m_SpeedY) * time);

    this.m_TimeElapsed += time;

    if(this.m_TimeElapsed >= this.m_Time) {
      this.setOpacity(this.getOpacity() - 1);

      if(this.getOpacity() <= 0) {
        this.removeFromParent();
      }
    }

    if(this.m_CurrentSpeedX == this.m_SpeedX) {
      this.m_Orientation = !this.m_Orientation;

      this.m_CurrentSpeedX = 0;
    }

    this.m_CurrentSpeedX += 0.5;
  }
});

SplashText.create = function(id, parent, my) {
  var text = new SplashText(id, parent, my);

  return text;
};
