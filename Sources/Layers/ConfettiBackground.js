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

ConfettiBackground = BackgroundColor.extend({
  m_zIndex: 600,
  m_Elements: false,
  ctor: function(parent) {
    this._super(cc.c4(0, 0, 0, 0));

    this.m_Parent = parent;

    if(!cc.Browser.isMobile) {
      this.m_Elements = EntityManager.create(300, Confetti.create(), this, 1, true);
    }
  },
  show: function() {
    if(cc.Browser.isMobile) return false;

    ConfettiBackground.instance = false;

    this.m_Parent.addChild(this, this.m_zIndex);

    this.m_Elements.clear();

    var size = Camera.sharedCamera().coord(64);

    for(var i = 0; i < 5; i++) {
      for(var j = 0; j < Camera.sharedCamera().width / size; j++) {
        var random = {
          x: Camera.sharedCamera().coord(Random.sharedRandom().random(-10, 10)),
          y: Camera.sharedCamera().coord(Random.sharedRandom().random(-10, 10))
        };

        this.m_Elements.create().setCenterPosition(j * size + size / 2 + random.x, Camera.sharedCamera().height - i * size - size / 2 + random.y);
      }
    }
  },
  hide: function() {
    this.removeFromParent();
  },
  onEnter: function() {
    this._super();
  },
  onExit: function() {
    this._super();
  },
  update: function(time) {
    this._super(time);

    if(!cc.Browser.isMobile) {
      if(this.m_Elements.getCount() <= 0) {
        this.hide();
      }
    }
  }
});

ConfettiBackground.instance = false;
ConfettiBackground.sharedScreen = function(parent) {
  if(ConfettiBackground.instance) {
    ConfettiBackground.instance.m_Parent = parent;
  } else {
    ConfettiBackground.instance = new ConfettiBackground(parent);
  }

  return ConfettiBackground.instance;
};