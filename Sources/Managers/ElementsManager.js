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
  m_Matrix: false,
  m_zIndex: 100,
  ctor: function() {
    this.m_Clipper = this.clipper(Game.tutorial ? s_TutorialLevel : s_Levels[Game.level - 1]);
    this.m_Stencil = this.stencil();

    this.m_Clipper.addChild(this.m_Stencil);

    Game.sharedScreen().m_LevelBackground.addChild(this.m_Clipper);

    this._super(200, Element.create(), this.m_Stencil, this.m_zIndex, true);

    ElementsManager.instance = this;

    this.m_ElementsSplashes = EntityManager.create(10, ElementSplash.create(), this.m_Stencil, 110, true);
    this.m_ElementsIcons = EntityManager.create(150, ElementIcon.create(), this.m_Stencil, 110, true);
    this.m_ElementsParts = EntityManager.create(300, ElementPart.create(), Game.sharedScreen(), 110, true);
    this.m_ElementsSickles = EntityManager.create(10, Entity.create(s_ElementsSickles), Game.sharedScreen(), 110, true);
    this.m_ElementsGlows = EntityManager.create(10, ElementGlow.create(), this.m_Stencil, 110, true);
    this.m_ElementsBubbles = EntityManager.create(150, Bubble.create(), this.m_Stencil, 111, true);
    this.m_ElementsBubblesPoping = EntityManager.create(10, BubblePoping.create(), this.m_Stencil, 111, true);

    this.m_MatrixArrows2 = EntityManager.create(30, Entity.create(s_MatrixArrow2), Game.sharedScreen().m_LevelBackground, 110, true);
    this.m_MatrixArrows1 = EntityManager.create(30, Entity.create(s_MatrixArrow1), Game.sharedScreen().m_LevelBackground, 111, true);

    this.m_MatrixManager = MatrixManager.sharedManager();

    if(Game.tutorial) {
      this.m_TutorialFinger = Entity.create(s_TutorialFinger, this.m_Stencil);
    }
  },
  stencil: function() {
    var stencil = BackgroundColor.create(cc.c4(0, 0, 0, 100), false, Camera.sharedCamera().width, this.m_Template.getContentSize().height);

    stencil.setAnchorPoint(cc.p(0, 0));
    stencil.setPosition(cc.p(0, 0));

    return stencil;
  },
  clipper: function(file) {
    this.m_Template = Entity.create(file);

    var stencil = cc.Sprite.create(file);
    var clipper = cc.ClippingNode.create(stencil);

    stencil.setAnchorPoint(cc.p(0, 0));
    clipper.setAnchorPoint(cc.p(0, 0));

    clipper.setPosition(cc.p(0, Camera.sharedCamera().coord(200)));
    stencil.setPosition(cc.p(Camera.sharedCamera().center.x - stencil.getContentSize().width / 2, 0));

    return clipper;
  },
  onLevelStart: function(matrix) {
    if(Game.network) {
      if(Game.server) {
        this.m_Matrix = Array(MatrixManager.instance.getSize().x + 1);

        for(var i = 0; i < MatrixManager.instance.getSize().x + 1; i++) {
          this.m_Matrix[i] = Array(MatrixManager.instance.getSize().y * 2);
        }

        matrix = Game.tutorial ? Game.instance.m_TutorialMatrix.matrix : Game.instance.m_LevelsMatrixes[Game.level - 1].matrix;
      }
    } else {
      matrix = Game.tutorial ? Game.instance.m_TutorialMatrix.matrix : Game.instance.m_LevelsMatrixes[Game.level - 1].matrix;
    }

    var m = Game.tutorial ? Game.instance.m_TutorialMatrix : Game.instance.m_LevelsMatrixes[Game.level - 1];

    this.m_MatrixManager.m_Size = {
      x: m.size.x,
      y: m.size.y
    };
    this.m_MatrixManager.m_CurrentSize = {
      x: {
        start: 0,
        finish: m.size.x - 1
      },
      y: {
        start: 0,
        finish: 6
      }
    };

    this.m_MatrixManager.createMatrix();

    for(var i = 0; i < m.size.y * 2; i++) {
      if(!matrix[i]) {
        matrix[i] = Array(this.m_MatrixManager.getSize().x);
        for(var j = 0; j < m.size.x; j++) {
          matrix[i].push(1);
        }
      }
    }

    this.m_MovesDown = m.scrolls;
    this.m_MoveDown = 0;

    var padding = this.get(0).getWidth();

    var origin = {
      x: this.getParent().getWidth() / 2 + padding / 2,
      y: Camera.sharedCamera().height + Camera.sharedCamera().coord(3)
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

        if(matrix[counter.y][counter.x] == etypes.block) {
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

        var bubble = false;
        var bonuses = {
          horizontal: false,
          vertical: false
        };

        if(Game.network && !Game.server) { // TODO: Adjust third-party types such as block or empty but not a star.
          var id = matrix[counter.x][counter.y];

          this.create();
          this.last().setId(id);
          this.last().setCurrentFrameIndex(id);
          this.last().setCenterPosition(x, y);

          this.m_MatrixManager.set(this.last(), counter.x, counter.y);
        } else {
          var type = matrix[counter.y][counter.x];

          if(type < -4000) {
            bonuses.vertical = true;

            type += 4000;
          } else if(type < -2000) {
            bonuses.horizontal = true;

            type += 2000;
          }

          if(Math.abs(type) >= 1000) {
            type = type > 0 ? (type - 1000) : (type + 1000);

            bubble = this.createBubble();

            this.m_MatrixManager.createBubble(bubble, counter.x, counter.y);
            bubble.setCenterPosition(x, y - Camera.sharedCamera().height + padding / 2);
          }

          if(type === etypes.empty) {
            this.m_MatrixManager.set(etypes.empty, counter.x, counter.y, false);

            if(Game.network) {
              if(Game.server) {
                this.m_Matrix[counter.x][counter.y] = etypes.empty;
              }
            }
          } else if(type === etypes.block) {
            this.m_MatrixManager.set(etypes.block, counter.x, counter.y, false);

            if(Game.network) {
              if(Game.server) {
                this.m_Matrix[counter.x][counter.y] = etypes.block;
              }
            }
          } else if(type === etypes.box) {
            this.m_MatrixManager.set(this.createBox(), counter.x, counter.y, false);

            this.last().setCenterPosition(x, y);
            this.last().onUnHover();

            // TODO: Adjust network usage.
          } else if(type === etypes.change) {
            this.m_MatrixManager.set(this.createChange(), counter.x, counter.y, false);

            this.last().setCenterPosition(x, y);
            this.last().onUnHover();

            // TODO: Adjust network usage.
          } else if(type === etypes.star && !Game.network) {
            var star = this.create();
            star.setId(Element.types.star);
            star.setCurrentFrameIndex(Element.types.star);
            star.setCenterPosition(x, y);

            this.m_MatrixManager.set(star, counter.x, counter.y);
          } else {
            if(type <= -10 || type <= -100) {
              var chain = type <= -100;

              this.m_MatrixManager.set(this.create(), counter.x, counter.y, false);//-100 -110 -120 -130

              this.last().setId(Math.abs(type + (chain ? 100 : 10)) / (chain ? 10 : 1));
              this.last().setCurrentFrameIndex(Math.abs(type + (chain ? 100 : 10)) / (chain ? 10 : 1));

              this.last()._custom = true;

              if(chain) {
                this.last().chain();
              } else {
                MatrixManager.sharedManager().fix(this.last());
              }
            } else {
              this.m_MatrixManager.set(this.create(), counter.x, counter.y, true, i >= this.m_MatrixManager.getSize().y);
            }

            this.last().setCenterPosition(x, y);

            if(bonuses.vertical) this.last().setBonus(Element.bonus.types.vertical);
            if(bonuses.horizontal) this.last().setBonus(Element.bonus.types.horizontal);

            if(type == etypes.chain) this.last().chain();

            if(Game.network) {
              if(Game.server) {
                this.m_Matrix[counter.x][counter.y] = this.last().getId();
              }
            }
          }
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
              cc.MoveTo.create(0.5, cc.p(element.getCenterX(), element.getCenterY() - Camera.sharedCamera().height)),
              cc.CallFunc.create(element.onChangePosition, element, {replaced: true}),
              cc.ScaleTo.create(0.2, 1.1, 0.9),
              cc.ScaleTo.create(0.2, 1.0, 1.0),
              i == this.m_MatrixManager.getSize().y * 2 - 1 && j == (reverse ? 0 : this.m_MatrixManager.getSize().x) ? cc.CallFunc.create(this.onStartAnimationFinish, this, this) : false
            )
          );

          counter++;
        }
      }

      reverse = !reverse;
    }

    this.onStartAnimationStart();
  },
  onLevelFinish: function() {

  },
  onFreeTables: function(x, y) {
  },
  onStartAnimationStart: function() {
    this.m_CurrentRow = 0;

    if(Game.tutorial) {
      Game.sharedScreen().onStartAnimationStartTutorial();
    } else {
      Game.sharedScreen().onStartAnimationStart();
      this.slideToRowStart(this.m_MatrixManager.getSize().y - 7);
    }
  },
  onStartAnimationFinish: function() {
    if(Game.tutorial) {
      Game.sharedScreen().onStartAnimationFinishTutorial();
    } else {
      Game.sharedScreen().onStartAnimationFinish();
    }

    var tops = [];

    for(var x = 0; x < MatrixManager.sharedManager().getSize().x; x++) {
      var top = false;
      for(var y = 0; y < MatrixManager.sharedManager().getSize().y; y++) {
        var element = MatrixManager.sharedManager().get(x, y);

        if(element != etypes.empty) {
          top = y;
        }
      }

      if(top !== false) {
        tops.push(top);
      }
    }

    var fields = [];
    for(var x = 0; x < MatrixManager.sharedManager().getSize().x; x++) {
      for(var y = 0; y < MatrixManager.sharedManager().getSize().y; y++) {
        var element = MatrixManager.sharedManager().get(x, y);

        if((element == etypes.empty && y < MatrixManager.sharedManager().getSize().y - 1) || (y == tops[x] && element != etypes.empty)) {
          var top = MatrixManager.sharedManager().get(x, y + 1);

          if(top != etypes.empty && top != etypes.block) {
            this.m_MatrixArrows2.create().setCenterPosition(top.convertToWorldSpace(cc.p(0, 0)).x + top.getWidth() / 2, top.convertToWorldSpace(cc.p(0, 0)).y - Game.sharedScreen().m_LevelBackground.getPosition().y);
          } else if(y == tops[x]) {
            this.m_MatrixArrows2.create().setCenterPosition(element.convertToWorldSpace(cc.p(0, 0)).x + element.getWidth() / 2, element.convertToWorldSpace(cc.p(0, 0)).y - Game.sharedScreen().m_LevelBackground.getPosition().y + element.getHeight());
          }
        }

        if(!fields[x]) {
          if(element != etypes.empty) {
            this.m_MatrixArrows1.create().setCenterPosition(element.convertToWorldSpace(cc.p(0, 0)).x + element.getWidth() / 2, element.convertToWorldSpace(cc.p(0, 0)).y - Game.sharedScreen().m_LevelBackground.getPosition().y);

            fields[x] = y + 1;
          }
        }
      }
    }

    if(this.m_ElementsBubbles.getCount() > 0) {
      Game.instance.m_BubbleTarget.create();
    }
  },
  scheduleUpdate: function() {
    this._super();

    this.m_ElementsGlows.scheduleUpdate();
    this.m_ElementsIcons.scheduleUpdate();

    if(ElementsManager.bonus) {
      ElementsManager.bonus.resume();
    }
  },
  unscheduleUpdate: function() {
    this._super();

    this.m_ElementsGlows.unscheduleUpdate();
    this.m_ElementsIcons.unscheduleUpdate();

    MatrixManager.sharedManager().m_Busy = true;

    if(ElementsManager.bonus) {
      ElementsManager.bonus.pause();
    }
  },
  clear: function() {
    this.m_ElementsBubbles.removeFromParent();
    this.m_ElementsBubblesPoping.removeFromParent();
    this.m_MatrixArrows1.removeFromParent();
    this.m_MatrixArrows2.removeFromParent();
    this.m_Clipper.removeFromParent();
    this.removeFromParent();
  },
  createBlock: function() {
    this.create();

    this.last().setId(7);
    this.last().setCurrentFrameIndex(7);

    return this.last();
  },
  createBox: function() {
    this.create().setSpecial(Element.types.box);

    return this.last();
  },
  createChange: function() {
    this.create().setSpecial(Element.types.change);

    return this.last();
  },
  createBubble: function() {
    return this.m_ElementsBubbles.create();
  },
  createBonus: function(data, type) {
    var bonus = data.element || data.elements[0];

    for(var i = 0; i < data.icons.length; i++) {
      data.icons[i].runAction(
        cc.Sequence.create(
          cc.DelayTime.create(0.8),
          cc.MoveTo.create(0.2, cc.p(bonus.getCenterX(), bonus.getCenterY() + bonus.getHeight() / 2)),
          false
        )
      );
    }

    ElementsManager.bonus = new PausableTimeout(function() {
      ElementsManager.bonus = false;

      var element = this.create();

      MatrixManager.sharedManager().set(element, bonus.getIndex().x, bonus.getIndex().y);

      element.m_Removed = true;
      element.setId(bonus.getId());
      element.setBonus(type);
      element.setCenterPosition(bonus.getCenterX(), bonus.getCenterY());
      element.setScale(0.0);
      element.runAction(
        cc.Sequence.create(
          cc.ScaleTo.create(0.1, 1.0),
          cc.CallFunc.create(element.onChangePosition, element),
          false
        )
      );
    }.bind(this), (MatrixManager.sharedManager().getType() == MatrixManager.types.war ? 990 : 0));
  },
  getMatrix: function() {
    return this.m_Matrix;
  },
  slideToRow: function(row, delay) {
    var distance = Math.abs(this.m_CurrentRow - row);

    this.m_MatrixManager.m_CurrentSize.y.start = 0 + row - (row > 0 ? 1 : 0);
    this.m_MatrixManager.m_CurrentSize.y.finish = 6 + row;

    Game.sharedScreen().m_LevelBackground.runAction(
      cc.Sequence.create(
        cc.CallFunc.create(this.enableEffect, this, this),
        cc.DelayTime.create(delay ? (delay * distance) : 0.0),
        cc.MoveTo.create(delay ? (0.5 * row) : (0.1 * distance), {x: 0, y: -(this.get(0).getWidth() * row)}),
        cc.CallFunc.create(this.m_PlayerTurn ? MatrixManager.sharedManager().disable : MatrixManager.sharedManager().enable, MatrixManager.sharedManager()),
        cc.CallFunc.create(this.disableEffect, this, this),
        false
      )
    );

    this.m_CurrentRow = row;

    if(this.m_CurrentRow > 0) {
      Game.instance.m_Cloud.runAction(
        cc.Sequence.create(
        cc.DelayTime.create(delay ? (delay * distance) : 0.0),
          cc.FadeIn.create(1.0),
          false
        )
      );
    } else {
      Game.instance.m_Cloud.runAction(
        cc.Sequence.create(
          cc.FadeOut.create(1.0),
          false
        )
      );
    }
  },
  slideToRowStart: function(row) {
    this.slideToRow(row, 0.5);
  },
  enableEffect: function() {
    this.effectsEnabled = true;

    this.m_Elements.forEach(function(element) {
      if(element instanceof Element) {
        element.setOpacity(255);
        element.setVisible(true);
      }
    });
  },
  disableEffect: function() {
    this.effectsEnabled = false;

    this.m_Elements.forEach(function(element) {
      if(element instanceof Element) {
        element.onChangePosition();
      }
    });
  },
  moveDown: function() {
    this.slideToRow(this.m_CurrentRow - this.m_MovesDown[this.m_MoveDown++]);
  }
});

ElementsManager.instance = false;
ElementsManager.sharedManager = function() {
  return ElementsManager.instance ? ElementsManager.instance : new ElementsManager();
};