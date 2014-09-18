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

ElementStar = TiledEntity.extend({
  ctor: function(parent, world) {
    this._super(s_StarSmall, 3, 2, parent);

    this.create();
  },
  onCreate: function() {
    this._super();

    var move = [];

    switch(Game.instance.m_StarsPoints) {
      case 0:
      move.push(cc.p(Camera.sharedCamera().center.x, -this.getHeight() / 2));
      move.push(cc.p(0, Camera.sharedCamera().center.y));
      move.push(GamePanel.instance.getIcons()[3].convertToWorldSpace(cc.p(0, 0)));
      break;
      case 1:
      move.push(cc.p(Camera.sharedCamera().center.x, -this.getHeight() / 2));
      move.push(cc.p(Camera.sharedCamera().center.x, Camera.sharedCamera().center.y));
      move.push(GamePanel.instance.getIcons()[4].convertToWorldSpace(cc.p(0, 0)));
      break;
      case 2:
      move.push(cc.p(Camera.sharedCamera().center.x, -this.getHeight() / 2));
      move.push(cc.p(Camera.sharedCamera().width, Camera.sharedCamera().center.y));
      move.push(GamePanel.instance.getIcons()[5].convertToWorldSpace(cc.p(0, 0)));
      break;
    }

    this.setCenterPosition(Camera.sharedCamera().center.x, -this.getHeight() / 2);
    this.setCurrentFrameIndex(Game.instance.m_StarsPoints);
    this.setZOrder(1200);

    this.runAction(
      cc.Sequence.create(
        cc.ScaleTo.create(0.5, 3.0),
        cc.ScaleTo.create(0.5, 1.0),
        false
      )
    );

    this.runAction(
      cc.Sequence.create(
        cc.BezierTo.create(1.0, move),
        cc.CallFunc.create(this.destroy, this, this),
        cc.CallFunc.create(this.removeFromParent, this, this),
        false
      )
    );
  },
  onDestroy: function() {
    this._super();
  },
  update: function(time) {
    this._super();

    for(var i = 0; i < 2; i++) {
      var star = Game.instance.m_Stars.create();

      star.setCenterPosition(this.getCenterX() + (Camera.sharedCamera().coord(Random.sharedRandom().random(-15, 15))), this.getCenterY() + (Camera.sharedCamera().coord(Random.sharedRandom().random(-15, 15))));
      star.setZOrder(1000);
      star.setColor(cc.c3(255, 255, 0));
    }
  },
  deepCopy: function() {
    return SplashStar.create(this.getParent());
  }
});

ElementStar.create = function(parent) {
  var entity = new ElementStar(parent);

  return entity;
};
