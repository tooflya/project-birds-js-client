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

ElementsManager = EntityManager.extend({
  m_MatrixManager: false,
  m_zIndex: 100,
  ctor: function() {
    this.m_Clipper = this.clipper(s_1);
    this.m_Stencil = this.stencil();

    this.m_Clipper.addChild(this.m_Stencil);

    Game.sharedScreen().addChild(this.m_Clipper);

    this._super(100, Element.create(), this.m_Stencil, this.m_zIndex, true);

    ElementsManager.instance = this;

    this.m_ElementsIcons = EntityManager.create(10, ElementIcon.create(), this.m_Stencil, 110, true);
    this.m_ElementsParts = EntityManager.create(100, ElementPart.create(), Game.sharedScreen(), 110, true);
    this.m_ElementsGlows = EntityManager.create(10, ElementGlow.create(), this.m_Stencil, 110, true);

    this.m_MatrixManager = MatrixManager.sharedManager();

    if(Game.tutorial) {
      this.m_TutorialFinger = Entity.create(s_TutorialFinger, this.m_Stencil);
    }
  },
  stencil: function() {
    var stencil = BackgroundColor.create(cc.c4(0, 0, 0, 100));

    stencil.setAnchorPoint(cc.p(0, 0));
    stencil.setPosition(cc.p(0, 0));

    return stencil;
  },
  clipper: function(file) {
    var stencil = cc.Sprite.create(file);
    var clipper = cc.ClippingNode.create(stencil);

    stencil.setAnchorPoint(cc.p(0, 0));
    clipper.setAnchorPoint(cc.p(0, 0));

    clipper.setPosition(cc.p(0, Camera.sharedCamera().coord(200)));
    stencil.setPosition(cc.p(Camera.sharedCamera().center.x - stencil.getContentSize().width / 2, 0));

    return clipper;
  },
  onLevelStart: function() {
    this.onStartAnimationStart();

    var padding = this.get(0).getWidth();

    var origin = {
      x: this.getParent().getWidth() / 2 + padding / 2,
      y: padding / 2 + Camera.sharedCamera().height
    }

    var counter = {
      x: 0,
      y: 0
    };

    for(var i = 0; i < this.m_MatrixManager.getSize().y; i++) {
      counter.x = 0;

      var y = origin.y + padding * i - Camera.sharedCamera().height;

      for(var j = -this.m_MatrixManager.getSize().x / 2; j < this.m_MatrixManager.getSize().x / 2; j++) {
        var x = origin.x + padding * j;

        if(MatrixManager.sharedManager().m_TestMatrixes[0][counter.y][counter.x] == etypes.block) {
          this.createBlock().setCenterPosition(x, y);
        }

        counter.x++;
      }

      counter.y++;
    }

    counter.x = 0;
    counter.y = 0;

    for(var i = 0; i < this.m_MatrixManager.getSize().y * 2; i++) {
      counter.x = 0;

      var y = origin.y + padding * i;

      for(var j = -this.m_MatrixManager.getSize().x / 2; j < this.m_MatrixManager.getSize().x / 2; j++) {
        var x = origin.x + padding * j;

        var type = MatrixManager.sharedManager().m_TestMatrixes[0][counter.y][counter.x];

        if(type === etypes.empty) {
          this.m_MatrixManager.set(etypes.empty, counter.x, counter.y, true);
        } else if(type === etypes.block) {
          this.m_MatrixManager.set(etypes.block, counter.x, counter.y, true);
        } else if(type === etypes.star) {
          var star = this.create();
          star.setId(Element.types.star);
          star.setCurrentFrameIndex(Element.types.star);
          star.setCenterPosition(x, y);

          this.m_MatrixManager.set(star, counter.x, counter.y);
        } else {
          this.m_MatrixManager.set(this.create(), counter.x, counter.y, true);

          this.last().setCenterPosition(x, y);
        }

        counter.x++;
      }

      counter.y++;
    }

    var counter = 0;
    var reverse = false;
    var max = 0;
    for(var i = 0; i < this.m_MatrixManager.getSize().y * 2; i++) {
      for(var j = reverse ? this.m_MatrixManager.getSize().x - 1 : 0; reverse ? (j >= 0) : (j < this.m_MatrixManager.getSize().x); reverse ? j-- : j++) {
        max = counter * 0.05 + 1.0;

        var element = this.m_MatrixManager.get(j, i);

        if(element == etypes.empty) {
        } else if(element == etypes.block) {
        } else if(element == etypes.star) {
        } else {
          element.runAction(
            cc.Sequence.create(
              cc.DelayTime.create(i == this.m_MatrixManager.getSize().y * 2 - 1 && j == (reverse ? 0 : this.m_MatrixManager.getSize().x) ? max / 2.0 : 0.05 * counter),
              cc.EaseBounceOut.create(
                cc.MoveTo.create(1.0, cc.p(element.getCenterX(), element.getCenterY() - Camera.sharedCamera().height))
              ),
              i == this.m_MatrixManager.getSize().y * 2 - 1 && j == (reverse ? 0 : this.m_MatrixManager.getSize().x) ? cc.CallFunc.create(this.onStartAnimationFinish, this, this) : false
            )
          );

          counter++;
        }
      }

      reverse = !reverse;
    }
  },
  onLevelFinish: function() {

  },
  onFreeTables: function(x, y) {
  },
  onStartAnimationStart: function() {
    if(Game.tutorial) {
      Game.sharedScreen().onStartAnimationStartTutorial();
    } else {
      Game.sharedScreen().onStartAnimationStart();
    }
  },
  onStartAnimationFinish: function() {
    if(Game.tutorial) {
      Game.sharedScreen().onStartAnimationFinishTutorial();
    } else {
      Game.sharedScreen().onStartAnimationFinish();
    }
  },
  scheduleUpdate: function() {
    this._super();

    this.m_ElementsGlows.scheduleUpdate();
    this.m_ElementsIcons.scheduleUpdate();
  },
  unscheduleUpdate: function() {
    this._super();

    this.m_ElementsGlows.unscheduleUpdate();
    this.m_ElementsIcons.unscheduleUpdate();

    MatrixManager.sharedManager().m_Busy = true;
  },
  createBlock: function() {
    this.create().setCurrentFrameIndex(7);

    return this.last();
  }
});

ElementsManager.instance = false;
ElementsManager.sharedManager = function() {
  return ElementsManager.instance ? ElementsManager.instance : new ElementsManager();
};