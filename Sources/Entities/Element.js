/**
 * Tooflya Inc. Development
 *
 * @author Igor Mats from Tooflya Inc.
 * @copyright (c) 2013 by Igor Mats
 * http://www.tooflya.com/development/
 *
 * License: Attribution NonCommercial NoDerivatives 4.0 International
 *
 * Creative Commons Corporation (“Creative Commons”) is not a law firm and does
 * not provide legal services or legal advice. Distribution of Creative Commons
 * public licenses does not create a lawyer-client or other relationship.
 * Creative Commons makes its licenses and related information available on
 * an “as-is” basis. Creative Commons gives no warranties regarding its licenses,
 * any material licensed under their terms and conditions, or any related
 * information. Creative Commons disclaims all liability for damages resulting
 * from their use to the fullest extent possible.
 *
 * Creative Commons public licenses provide a standard set of terms and
 * conditions that creators and other rights holders may use to share original
 * works of authorship and other material subject to copyright and certain other
 * rights specified in the public license below. The following considerations
 * are for informational purposes only, are not exhaustive, and do not form part
 * of our licenses.
 *
 * Creative Commons may be contacted at creativecommons.org.
 *
 * @version of cocos2d-x is 2.1.4
 *
 */

Element = TiledEntity.extend({
  m_Id: -1,
  m_Index: -1,
  m_Glow: false,
  m_GlowAnimationRunning: false,
  m_Removed: true,
  m_Bonus: false,
  ctor: function() {
    this._super(s_Elements, 8, 6);

    this.m_Index = {
      x: -1,
      y: -1
    };

    this.setAnchorPoint(cc.p(0.5, 0.0));
  },
  onCreate: function() {
    this._super();

    this.m_Bonus = false;

    this.setRotation(0);
  },
  onDestroy: function() {
    this._super();

    this.stopAllActions();

    if(this.m_Icon) {
      this.m_Icon.destroy();
      this.m_Icon.removeFromParent();
    }

    switch(this.getId()) {
      default:
      break;
      case Element.types.star:
      this.m_Id = -1;

      GamePanel.sharedScreen().starred();
      Game.instance.m_Stars++;
      break;
    }
  },
  onRemove: function() {
    var icons = [];

    switch(this.getId()) {
      default:
      this.destroy();

      icons.push(ElementsManager.sharedManager().m_ElementsIcons.create(this));

      ElementsManager.sharedManager().m_ElementsSplashes.create(this);
      for(var i = 0; i < 2; i++) {
        ElementsManager.sharedManager().m_ElementsParts.create({
          element: this,
          index: i
        });
      }

      Sound.sharedSound().play(s_SoundChew[Random.sharedRandom().random(0, 3, true)]);

      Game.instance.updateScore(1);
      break;
      case Element.types.star:
      if(MatrixManager.timeout) {
        MatrixManager.timeout.pause();
      }

      this.runAction(
        cc.Sequence.create(
          cc.Repeat.create(
            cc.Sequence.create(
              cc.RotateTo.create(0.25, 10.0),
              cc.RotateTo.create(0.25, -10),
              false
            ),
          2),
          cc.ScaleTo.create(0.2, 0.0),
          cc.CallFunc.create(this.destroy, this),
          cc.CallFunc.create(MatrixManager.instance.lookDown, MatrixManager.instance),
          false
        )
      );

      MatrixManager.instance.clear();

      Sound.sharedSound().play(s_SoundStar);

      Game.instance.updateScore(1000);
      break;
    }

    switch(this.m_Bonus) {
      case Element.bonus.types.horizontal:
      MatrixManager.sharedManager().removeHorizontalLine(this.getIndex().x, this.getIndex().y, this);

      Game.instance.updateScore(180);
      break;
      case Element.bonus.types.vertical:
      MatrixManager.sharedManager().removeVerticalLine(this.getIndex().x, this.getIndex().y, this);

      Game.instance.updateScore(180);
      break;
      case Element.bonus.types.pack:
      // MatrixManager.sharedManager().removeSquare(this.getIndex().x, this.getIndex().y, this); // Temporarity remove.

      Game.instance.updateScore(250);
      break;
      case Element.bonus.types.bomb:
      var element;

      if(MatrixManager.sharedManager().m_CurrentElement1 === this) {
        element = MatrixManager.sharedManager().m_CurrentElement2;
      } else {
        element = MatrixManager.sharedManager().m_CurrentElement1;
      }

      MatrixManager.sharedManager().removeSimilar(element.getIndex().x, element.getIndex().y, element);

      Game.instance.updateScore(500);
      break;
    }

    return icons;
  },
  onChangePosition: function(target, data) {
    if(this.getId() == Element.types.block) return false;

    if(this.getIndex().y < MatrixManager.sharedManager().getSize().y) {
      this.setVisible(true);

      this.m_Removed = false;

      if(!this.isRegisterTouchable()) {
        this.registerTouchable(true);
      }
    } else {
      this.setVisible(false);

      if(this.isRegisterTouchable()) {
        this.registerTouchable(false);
      }
    }

    if(this.m_Glow) {
      this.m_Glow.destroy();
    }

    if(data) {
      switch(this.getId()) {
        case Element.types.star:
        if(this.getIndex().y == 0) { // TODO: Replace to the last bottom available point.
          this.remove(data);
        }
        break;
      }

      if(this.getIndex().y < MatrixManager.sharedManager().getSize().y) {
        Sound.sharedSound().play(s_SoundDrop[Random.sharedRandom().random(0, 3, true)]);
      }
    }
  },
  onHover: function() {
    if(!this.isRegisterTouchable()) return false;
    if(!MatrixManager.sharedManager().active()) return false;

    if(this.getId() == Element.types.block) return false;

    switch(this.m_Bonus) {
      default:
      this.setCurrentFrameIndex(this.m_Id + this.getHorizontalFramesCount());
      break;
      case Element.bonus.types.horizontal:
      this.setCurrentFrameIndex(this.m_Id + this.getHorizontalFramesCount() * 5);
      break;
      case Element.bonus.types.vertical:
      this.setCurrentFrameIndex(this.m_Id + this.getHorizontalFramesCount() * 3);
      break;
      case Element.bonus.types.pack:
      this.setCurrentFrameIndex(Element.types.pack);
      break;
      case Element.bonus.types.bomb:
      break;
    }
  },
  onUnHover: function() {
    if(this.getId() == Element.types.block) return false;

    switch(this.m_Bonus) {
      default:
      this.setCurrentFrameIndex(this.m_Id);
      break;
      case Element.bonus.types.horizontal:
      this.setCurrentFrameIndex(this.m_Id + this.getHorizontalFramesCount() * 4);
      break;
      case Element.bonus.types.vertical:
      this.setCurrentFrameIndex(this.m_Id + this.getHorizontalFramesCount() * 2);
      break;
      case Element.bonus.types.pack:
      this.setCurrentFrameIndex(Element.types.pack + this.getHorizontalFramesCount() * 1);
      break;
      case Element.bonus.types.bomb:
      this.setCurrentFrameIndex(this.m_Id);
      break;
    }
  },
  onTouch: function() {
    if(!this.isRegisterTouchable()) return false;
    if(!MatrixManager.sharedManager().active()) return false;

    if(this.getId() == Element.types.block) return false;

    if(!this.m_GlowAnimationRunning) {
      this.onUnHover();

      ElementsManager.sharedManager().m_ElementsGlows.create(this);

      MatrixManager.sharedManager().check(this);
    }
  },
  onDragTop: function() {
    this._super();

    MatrixManager.sharedManager().replace(this, 'top');
  },
  onDragDown: function() {
    this._super();

    MatrixManager.sharedManager().replace(this, 'down');
  },
  onDragLeft: function() {
    this._super();

    MatrixManager.sharedManager().replace(this, 'left');
  },
  onDragRight: function() {
    this._super();

    MatrixManager.sharedManager().replace(this, 'right');
  },
  onMouseDragged: function(e) {
    if(this.getNumberOfRunningActions() > 0) return false;

    if(this.getId() == Element.types.block) return false;

    return this._super(e);
  },
  remove: function() {
    this.m_Removed = true;

    MatrixManager.sharedManager().remove(this);

    return this.onRemove();
  },
  setIndex: function(x, y) {
    this.m_Index.x = x;
    this.m_Index.y = y;
  },
  getIndex: function() {
    return this.m_Index;
  },
  setId: function(id) {
    this.m_Id = id;

    switch(id) {
      case Element.types.star:
      if(!this.m_Icon) {
        this.m_Icon = TiledEntity.create(s_Elements, 8, 6, this);
        this.m_Icon.create().setCenterPosition(this.getWidth() / 2, this.getHeight() / 2);
        this.m_Icon.setCurrentFrameIndex(15);
        this.m_Icon.runAction(
          cc.RepeatForever.create(
            cc.Sequence.create(
              cc.FadeTo.create(1.0, 0.0),
              cc.DelayTime.create(0.5),
              cc.FadeTo.create(1.0, 255.0),
              false
            )
          )
        );
      }
      break;
    }
  },
  getId: function() {
    return this.m_Id;
  },
  setBonus: function(type) {
    this.m_Bonus = type;

    /*var icon;
    switch(this.m_Bonus) {
      default:
      icon = this.m_Id + this.getHorizontalFramesCount();
      break;
      case Element.bonus.types.horizontal:
      icon = this.m_Id + this.getHorizontalFramesCount() * 5;
      break;
      case Element.bonus.types.vertical:
      icon = this.m_Id + this.getHorizontalFramesCount() * 3;
      break;
      case Element.bonus.types.pack:
      icon = Element.types.pack;
      break;
      case Element.bonus.types.bomb:
      icon = this.m_Id;
      break;
    }

    if(!this.m_Icon) {
      this.m_Icon = TiledEntity.create(s_Elements, 8, 6, this);
      this.m_Icon.create().setCenterPosition(this.getWidth() / 2, this.getHeight() / 2);
      this.m_Icon.setCurrentFrameIndex(icon);
      this.m_Icon.runAction(
        cc.RepeatForever.create(
          cc.Sequence.create(
            cc.FadeTo.create(1.0, 0.0),
            cc.DelayTime.create(0.5),
            cc.FadeTo.create(1.0, 255.0),
            false
          )
        )
      );
    }*/

    this.onUnHover();
  },
  chooseId: function(created) {
    if(this.getId() == Element.types.star) return false;

    if(Game.tutorial && Game.sharedScreen().m_TutorialState == 1 && created) {
      var index = this.getIndex();

      this.m_Id = Game.instance.m_TutorialMatrix.matrix[index.y][index.x];

      this.setCurrentFrameIndex(this.m_Id);
    } else {
      this.m_Id = Random.sharedRandom().random(0, this.getHorizontalFramesCount() - 3, true);

      if(MatrixManager.sharedManager().hasMatches(this)) {
        this.chooseId();
      }

      this.setCurrentFrameIndex(this.m_Id);
    }
  },
  lookDown: function(strong) {
    if(this.getId() == Element.types.block) return false;

    if(this.getIndex().y > 0) {
      var x = this.getCenterX();
      var y = this.getCenterY();
      var w = this.getWidth();
      var h = this.getHeight();

      var actions = [];
      var repeat = true;
      var data = {
        down: 0,
        left: 0,
        right: 0
      };

      var index = {
        x: this.getIndex().x,
        y: this.getIndex().y
      };

      if(index.y == MatrixManager.sharedManager().getSize().y) {
        var bottom = MatrixManager.sharedManager().get(index.x, index.y - 1);
        if(bottom === etypes.block || bottom === etypes.empty) {
          return false;
        }
      }

      while(repeat) {
        var free = true;
        var current = 0;
        var empty = 0;
        var down = 0;

        while(free) {
          var frame = MatrixManager.sharedManager().get(index.x, index.y - (down + 1));

          if(frame === etypes.block) {
            free = false;
          }

          if(index.y - (down + 1) >= 0 && (!frame || frame === etypes.empty)) {
            if(frame === etypes.empty) {
              empty++;
              current = etypes.empty;
            } else if(frame === etypes.block || frame === etypes.empty) {
              free = false;
            } else {
              empty = 0;
              current = 0;
            }

            data.down++;

            down++;

            actions.push(cc.MoveTo.create(0.1, cc.p(x, y - h)));

            y -= h;
          } else {
            free = false;
          }
        }

        if(current == etypes.empty) {
          data.down -= empty;

          down -= empty;

          for(var i = 0; i < empty; i++) {
            actions.pop();

            y += h;
          }
        }

        index.y -= down;

        var left = 0;
        var right = 0;

        down = 0;

        if(strong) {
          var frames = {
            left: MatrixManager.sharedManager().get(index.x - 1, index.y),
            right: MatrixManager.sharedManager().get(index.x + 1, index.y),
            down: {
              left: MatrixManager.sharedManager().get(index.x - 1, index.y - 1),
              right: MatrixManager.sharedManager().get(index.x + 1, index.y - 1)
            }
          };

          var toper = false;
          var stop = false;

          for(var t = index.y; t < MatrixManager.sharedManager().getSize().y; t++) {
            var element = MatrixManager.sharedManager().get(index.x - 1, t);

            if(!stop) {
              if(!toper) {
                if(element == etypes.empty || element == etypes.block) {
                  toper = true;

                  if(element == etypes.block) {
                    stop = true;
                  }
                }
              } else {
                if(element != etypes.empty && element != etypes.block) {
                  toper = false;
                }
              }
            }
          }

          if((!frames.left || frames.left == etypes.empty || frames.left == etypes.block) && data.right <= 0 && toper) {
            if(!frames.down.left) {
              if(index.x - 1 > 0 && index.y - 1 >= 0) {
                data.left++;
                data.down++;

                left++;
                down++;

                actions.push(cc.MoveTo.create(0.1, cc.p(x - w, y)));
                actions.push(cc.MoveTo.create(0.1, cc.p(x - w, y - h)));

                x -= w;
                y -= h;
              }
            }
          }

          toper = false;
          stop = false;

          for(var t = index.y; t < MatrixManager.sharedManager().getSize().y; t++) {
            var element = MatrixManager.sharedManager().get(index.x + 1, t);

            if(!stop) {
              if(!toper) {
                if(element == etypes.empty || element == etypes.block) {
                  toper = true;

                  if(element == etypes.block) {
                    stop = true;
                  }
                }
              } else {
                if(element != etypes.empty && element != etypes.block) {
                  toper = false;
                }
              }
            }
          }

          if((!frames.right || frames.right == etypes.empty || frames.right == etypes.block) && data.left <= 0 && toper) {
            if(!frames.down.right) {
              if(index.x + 1 < MatrixManager.instance.getSize().x && index.y - 1 >= 0) {
                data.right++;
                data.down++;

                right++;
                down++;

                actions.push(cc.MoveTo.create(0.1, cc.p(x + w, y)));
                actions.push(cc.MoveTo.create(0.1, cc.p(x + w, y - h)));

                x += w;
                y -= h;
              }
            }
          }
        }

        index.x -= left;
        index.x += right;

        index.y -= down;

        repeat = down > 0 && strong;
      }

      if(actions.length > 0) {
        MatrixManager.sharedManager().moveDown(this, data, actions);
      }
    }
  },
  updateBonusAnimation: function() {
    if(!this.m_Bonus) return false;

    switch(this.m_Bonus) {
      case Element.bonus.types.horizontal:
      break;
      case Element.bonus.types.vertical:
      break;
      case Element.bonus.types.pack:
      break;
      case Element.bonus.types.bomb:
      break;
    }
  },
  update: function(time) {
    this._super(time);

    this.updateBonusAnimation();
  },
  deepCopy: function() {
    return Element.create();
  }
});

ElementGlow = AnimatedEntity.extend({
  m_Element: false,
  m_ElementAnimationTime: 1.0,
  m_ElementAnimationTimeElapsed: 0.0,
  ctor: function() {
    this._super(s_ElementsGlow, 1, 7);
  },
  create: function(element) {
    this.m_Element = element;

    this._super();
  },
  onCreate: function() {
    this._super();

    this.m_Element.m_GlowAnimationRunning = true;
    this.m_Element.m_Glow = this;

    this.setCenterPosition(this.m_Element.getCenterX(), this.m_Element.getCenterY() + this.m_Element.getHeight() / 2);
    this.animate(0.06, 1);
  },
  onDestroy: function() {
    this._super();

    this.m_Element.m_GlowAnimationRunning = false;
    this.m_Element.m_Glow = false;
  },
  onAnimationStart: function() {
    this._super();

    this.setVisible(true);
  },
  onAnimationFinish: function() {
    this._super();

    this.setVisible(false);
  },
  update: function(time) {
    this._super(time);

    if(!this.isAnimationRunning()) {
      this.m_ElementAnimationTimeElapsed += time;
      if(this.m_ElementAnimationTimeElapsed >= this.m_ElementAnimationTime) {
        this.m_ElementAnimationTimeElapsed = 0;

        this.animate(0.06, 1);
      }
    }
  },
  deepCopy: function() {
    return ElementGlow.create();
  }
});

var etypes = {
  empty: -1,
  block: -2,
  star: -3
};

Element.colors = [
  cc.c3(211, 33, 17),
  cc.c3(231, 199, 0),
  cc.c3(0, 173, 255),
  cc.c3(223, 34, 232),
  cc.c3(0, 211, 0),
];
Element.types = {
  fire: 0,
  regeneration: 1,
  defence: 2,
  keys: 3,
  run: 4,
  pack: 5,
  star: 6,
  block: 7
};
Element.bonus = {
  types: {
    horizontal: 1,
    vertical: 2,
    pack: 3,
    bomb: 4
  }
};
Element.create = function() {
  var entity = new Element();

  return entity;
};

ElementGlow.create = function() {
  var entity = new ElementGlow();

  return entity;
};
