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

MatrixManager = cc.Node.extend({
  m_Active: false,
  m_Busy: true,
  m_Size: {
    x: 10,
    y: 7
  },
  m_zIndex: 100,
  m_Matrix: false,
  m_CurrentElement1: false,
  m_CurrentElement2: false,
  m_Combinations: false,
  ctor: function() {
    this._super();

    MatrixManager.instance = this;

    this.createMatrix();
  },
  disable: function() {
    this.m_Active = false;
  },
  enable: function() {
    this.m_Active = true;
  },
  active: function() {
    return this.m_Active;
  },
  busy: function() {
    return this.m_Busy;
  },
  unbusy: function() {
    this.m_Busy = false;
  },
  set: function(element, x, y, created) {
    if(element === etypes.empty || element === etypes.block) {
      this.m_Matrix[x][y] = element;
    } else {
      this.m_Matrix[x][y] = element;

      element.setIndex(x, y);

      if(created) {
        element.chooseId(true);
      }

      element.onChangePosition();
    }
  },
  get: function(x, y) {
    if(x >= 0 && y >= 0 && x < this.getSize().x && y < this.getSize().y * 2) {
      return this.m_Matrix[x][y];
    }

    return false;
  },
  remove: function(element) {
    var index = element.getIndex();

    this.m_Matrix[index.x][index.y] = false;
  },
  check: function(element) {
    if(!this.m_CurrentElement1) {
      this.m_CurrentElement1 = element;
    } else {
      this.m_CurrentElement2 = element;

      var x = Math.abs(this.m_CurrentElement1.getIndex().x - this.m_CurrentElement2.getIndex().x);
      var y = Math.abs(this.m_CurrentElement1.getIndex().y - this.m_CurrentElement2.getIndex().y);

      var can = (x <= 1 && y <= 1) && (x + y <= 1);

      if(can) {
        this.replace(this.m_CurrentElement1, this.m_CurrentElement2);
      } else {
        this.m_CurrentElement1.onChangePosition();
        this.m_CurrentElement2.onChangePosition();

        this.m_CurrentElement1 = false;
        this.m_CurrentElement2 = false;

        element.onTouch();
      }
    }
  },
  computer: function(selector, automatic) {
    if(!automatic) this.m_Busy = true;

    this.m_Combinations = [];

    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y; j++) {
        var element = this.m_Matrix[i][j];

        if(!element || element === etypes.empty || element === etypes.block) continue;

        var neighbor = false;
        for(var k = 0; k < 4; k++) {
          switch(k) {
            case 0:
            if(element.getIndex().y < this.getSize().y - 1) neighbor = this.get(element.getIndex().x, element.getIndex().y + 1);
            break;
            case 1:
            neighbor = this.get(element.getIndex().x, element.getIndex().y - 1);
            break;
            case 2:
            neighbor = this.get(element.getIndex().x - 1, element.getIndex().y);
            break;
            case 3:
            neighbor = this.get(element.getIndex().x + 1, element.getIndex().y);
            break;
          }

          if(neighbor && neighbor != etypes.empty && neighbor != etypes.block) {
            var result = this.hasMatchesWith(element, neighbor);
            if(result) {
              this.m_Combinations.push({
                element: element,
                neighbor: neighbor,
                count: result
              });
            }
          }
        }
      }
    }

    if(this.m_Combinations.length > 0) {
      var priority = 0;
      var combination = false;
      var types = [[], [], [], [], [], [], [], [], []];
      var health = Game.sharedScreen().m_Catapults.get(1).m_Health;

      for(var i = 0; i < this.m_Combinations.length; i++) {
        types[this.m_Combinations[i].element.getId()].push(this.m_Combinations[i]);
      }

      if(health < 50) {
        priority = 1;
      }

      if(priority == 0) {
        if(types[0].length < 1) {
          priority = 4;
        }
      }

      for(var i = 0; i < this.m_Combinations.length; i++) {
        if(this.m_Combinations[i].element.getId() == priority) {
          combination = this.m_Combinations[i];
        }
      }

      if(!combination) {
        combination = this.m_Combinations[Random.sharedRandom().random(0, this.m_Combinations.length, true)];
      }

      var id = combination.element.getId();
      for(var i = 0; i < this.m_Combinations.length; i++) {
        if(this.m_Combinations[i].element.getId() == id) {
          if(this.m_Combinations[i].count > combination.count) {
            combination = this.m_Combinations[i];
          }
        }
      }

      if(automatic) {
        return true;
      }

      this.replace(combination.element, combination.neighbor);
    }

    return false;
  },
  replace: function(element, neighbor, back) {
    Sound.sharedSound().play(s_SoundExchange);

    if(neighbor instanceof Element) {
      if(!back) {
        if(this.m_CurrentElement1) this.m_CurrentElement1.onChangePosition();
        if(this.m_CurrentElement2) this.m_CurrentElement2.onChangePosition();
      }

      this.m_CurrentElement1 = element;
      this.m_CurrentElement2 = neighbor;

      this.m_CurrentElement1.getParent().reorderChild(this.m_CurrentElement1, this.m_zIndex);
      this.m_CurrentElement1.runAction(
        cc.Sequence.create(
          cc.ScaleTo.create(0.1, 1.2),
          cc.ScaleTo.create(0.1, 1.0),
          cc.DelayTime.create(0.05),
          back ? cc.CallFunc.create(this.enable, this, this) : cc.CallFunc.create(this.find, this, this),
          false
        )
      );
      this.m_CurrentElement1.runAction(cc.MoveTo.create(0.2, cc.p(this.m_CurrentElement2.getCenterX(), this.m_CurrentElement2.getCenterY())));

      this.m_CurrentElement2.getParent().reorderChild(this.m_CurrentElement2, this.m_zIndex - 1);
      this.m_CurrentElement2.runAction(
        cc.Sequence.create(
          cc.ScaleTo.create(0.1, 0.8),
          cc.ScaleTo.create(0.1, 1.0),
          false
        )
      );
      neighbor.runAction(cc.MoveTo.create(0.2, cc.p(this.m_CurrentElement1.getCenterX(), this.m_CurrentElement1.getCenterY())));

      var x1 = this.m_CurrentElement1.getIndex().x;
      var x2 = this.m_CurrentElement2.getIndex().x;

      var y1 = this.m_CurrentElement1.getIndex().y;
      var y2 = this.m_CurrentElement2.getIndex().y;

      this.set(this.m_CurrentElement1, x2, y2);
      this.set(this.m_CurrentElement2, x1, y1);

      if(back) {
        this.m_CurrentElement1 = false;
        this.m_CurrentElement2 = false;
      }
    } else {
      if(!this.active()) return false;

      var neighbor;
      var index = element.getIndex();

      var positions = {
        top: index.y < this.getSize().y && (this.get(index.x, index.y + 1) != etypes.empty && this.get(index.x, index.y + 1) != etypes.block),
        down: index.y > 0 && (this.get(index.x, index.y - 1) != etypes.empty && this.get(index.x, index.y - 1) != etypes.block),
        left: index.x > 0 && (this.get(index.x - 1, index.y) != etypes.empty && this.get(index.x - 1, index.y) != etypes.block),
        right: index.x < this.getSize().x && (this.get(index.x + 1, index.y) != etypes.empty && this.get(index.x + 1, index.y) != etypes.block)
      };

      if(Game.tutorial) {
        switch(Game.sharedScreen().m_TutorialState) {
          case 5:
          positions.top = false;
          positions.down = false;
          positions.right = false;
          break;
        }
      }

      switch(neighbor) {
        case 'top':
        if(!positions.top) return false;

        neighbor = this.get(index.x, index.y + 1);
        break;
        case 'down':
        if(!positions.down) return false;

        neighbor = this.get(index.x, index.y - 1);
        break;
        case 'left':
        if(!positions.left) return false;

        neighbor = this.get(index.x - 1, index.y);
        break;
        case 'right':
        if(!positions.right) return false;

        neighbor = this.get(index.x + 1, index.y);
        break;
      }

      this.replace(element, neighbor);
    }
  },
  createMatrix: function() {
    this.m_Matrix = Array(this.getSize().x + 1);

    for(var i = 0; i < this.getSize().x + 1; i++) {
      this.m_Matrix[i] = Array(this.getSize().y * 2);
    }
  },
  getSize: function() {
    return this.m_Size;
  },
  clear: function() {
    this.m_PauseTime = Array();

    if(this.m_Timeout) {
      window.clearTimeout(this.m_Timeout);

      this.m_Timeout = false;
    }

    for(var a = 0; a < MatrixManager.pools.length; a++) {
      var bonus = {
        horizontal: 0,
        vertical: 0,

        element: false,
        elements: [],
        icons: []
      };

      var factor = 0;
      var pool = MatrixManager.pools[a];

      for(var i = 0; i < pool.horizontal.length; i++) {
        if(pool.horizontal[i]) {
          if(!pool.horizontal[i].m_Removed) {
            bonus.icons = bonus.icons.concat(pool.horizontal[i].remove());
            bonus.elements.push(pool.horizontal[i]);

            factor++;

            bonus.horizontal++;
          }
        }
      }
      for(var i = 0; i < pool.vertical.length; i++) {
        if(pool.vertical[i]) {
          if(!pool.vertical[i].m_Removed) {
            bonus.icons = bonus.icons.concat(pool.vertical[i].remove());
            bonus.elements.push(pool.vertical[i]);

            factor++;

            bonus.vertical++;
          }
        }
      }
      if(pool.element) {
        if(!pool.element.m_Removed) {
          bonus.element = pool.element;

          factor++;

          ActionsManager.sharedManager().add({
            id: pool.element.getId(),
            factor: factor - 2
          });

          pool.element.remove();

          Game.sharedScreen().onBlow(pool.element);

          if(bonus.horizontal > 3 || bonus.vertical > 3) {
            ElementsManager.sharedManager().createBonus(bonus, Element.bonus.types.bomb);
          } else if(bonus.horizontal >= 2 && bonus.vertical >= 2) {
            ElementsManager.sharedManager().createBonus(bonus, Element.bonus.types.pack);
          } else if(bonus.horizontal >= 3) {
            ElementsManager.sharedManager().createBonus(bonus, Element.bonus.types.vertical);
          } else if(bonus.vertical >= 3) {
            ElementsManager.sharedManager().createBonus(bonus, Element.bonus.types.horizontal);
          }
        }
      }
    }

    MatrixManager.pools = [];

    if(!Game.sharedScreen().m_TutorialRunning) {
      window.setTimeout(function() {
        MatrixManager.sharedManager().lookDown();

        MatrixManager.sharedManager().m_Timeout = window.setTimeout(function() {
          MatrixManager.pause = 0;

          if(!MatrixManager.sharedManager().findAll()) {
            ActionsManager.sharedManager().run();
          }
        }, MatrixManager.pause * 1000);
      }, 1000);
    }
  },
  hasMatchesWith: function(element, neighbor) {
    if(!element || element === etypes.empty || element === etypes.block) return false;
    if(!neighbor || neighbor === etypes.empty || neighbor === etypes.block) return false;

    var index1 = {
      x: -1,
      y: -1
    };
    var index2 = {
      x: -1,
      y: -1
    };

    index1.x = element.getIndex().x;
    index1.y = element.getIndex().y;

    index2.x = neighbor.getIndex().x;
    index2.y = neighbor.getIndex().y;

    this.set(neighbor, index1.x, index1.y);
    this.set(element, index2.x, index2.y);

    var result = this.hasMatches(element);

    MatrixManager.pools = [];

    if(!result) {
      this.set(element, index1.x, index1.y);
      this.set(neighbor, index2.x, index2.y);

      return false;
    } else {
      this.set(element, index1.x, index1.y);
      this.set(neighbor, index2.x, index2.y);

      return result;
    }
  },
  hasMatches: function(element, data) {
    if(!element || element === etypes.empty || element === etypes.block) return false;
    if(element.getId() == etypes.star) return false;

    if(!data) {
      MatrixManager.pools.push(MatrixManager.pool());

      MatrixManager.pools.last().horizontal = [];
      MatrixManager.pools.last().vertical = [];
      MatrixManager.pools.last().element = element;
    }

    var index = element.getIndex();
    var id = element.getId();

    var frames = {
      top: this.get(index.x, index.y + 1),
      down: this.get(index.x, index.y - 1),
      left: this.get(index.x - 1, index.y),
      right: this.get(index.x + 1, index.y)
    };

    var positions = {
      top: index.y < (this.getSize().y - 1) && frames.top && frames.top != etypes.empty && frames.top != etypes.block,
      down: index.y > 0 && frames.down && frames.down != etypes.empty && frames.down != etypes.block,
      left: index.x > 0 && frames.left && frames.left != etypes.empty && frames.left != etypes.block,
      right: index.x < this.getSize().x && frames.right && frames.right != etypes.empty && frames.right != etypes.block
    };

    if(data) {
      if(positions.top) positions.top = data.matches.top;
      if(positions.down) positions.down = data.matches.down;
      if(positions.left) positions.left = data.matches.left;
      if(positions.right) positions.right = data.matches.right;
    }

    var matches = {
      top: 0,
      down: 0,
      left: 0,
      right: 0,
      add: function(matches) {
        this.top += matches.top;
        this.down += matches.down;
        this.left += matches.left;
        this.right += matches.right;
      },
      result: function() {
        var horizontal = 1 + this.left + this.right;
        var vertical = 1 + this.top + this.down;

        if(horizontal < 3) {
          MatrixManager.pools.last().horizontal = [];
        }

        if(vertical < 3) {
          MatrixManager.pools.last().vertical = [];
        }

        if(horizontal >= 3 || vertical >= 3) {
          return (MatrixManager.pools.last().horizontal.length + MatrixManager.pools.last().vertical.length + 1);
        } else {
          MatrixManager.pools.pop();

          return false;
        }
      }
    };

    var neighbor;

    {
      if(positions.top) {
        neighbor = this.get(index.x, index.y + 1);

        if(neighbor != etypes.empty && neighbor != etypes.block) {
          if(neighbor.getId() == id) {
            matches.top++;

            MatrixManager.pools.last().vertical.push(neighbor);

            matches.add(this.hasMatches(neighbor, {
              previous: element,
              matches: {
                top: true,
                down: false,
                left: false,
                right: false
              }
            }));
          }
        }
      }
    }

    {
      if(positions.down) {
        neighbor = this.get(index.x, index.y - 1);

        if(neighbor != etypes.empty && neighbor != etypes.block) {
          if(neighbor.getId() == id) {
            matches.down++;

            MatrixManager.pools.last().vertical.push(neighbor);

            matches.add(this.hasMatches(neighbor, {
              previous: element,
              matches: {
                top: false,
                down: true,
                left: false,
                right: false
              }
            }));
          }
        }
      }
    }

    {
      if(positions.left) {
        neighbor = this.get(index.x - 1, index.y);

        if(neighbor != etypes.empty && neighbor != etypes.block) {
          if(neighbor.getId() == id) {
            matches.left++;

            MatrixManager.pools.last().horizontal.push(neighbor);

            matches.add(this.hasMatches(neighbor, {
              previous: element,
              matches: {
                top: false,
                down: false,
                left: true,
                right: false
              }
            }));
          }
        }
      }
    }

    {
      if(positions.right) {
        neighbor = this.get(index.x + 1, index.y);

        if(neighbor != etypes.empty && neighbor != etypes.block) {
          if(neighbor.getId() == id) {
            matches.right++;

            MatrixManager.pools.last().horizontal.push(neighbor);

            matches.add(this.hasMatches(neighbor, {
              previous: element,
              matches: {
                top: false,
                down: false,
                left: false,
                right: true
              }
            }));
          }
        }
      }
    }

    return data ? matches : matches.result();
  },
  find: function() {
    this.disable();

    MatrixManager.pools = [];

    var result1 = this.hasMatches(this.m_CurrentElement1);
    var result2 = this.hasMatches(this.m_CurrentElement2);

    if(!result1 && !result2) {
      if(!this.m_CurrentElement1.m_Bonus && !this.m_CurrentElement2.m_Bonus) {
        this.replace(this.m_CurrentElement2, this.m_CurrentElement1, true);
      } else {
        this.clear();

        this.m_CurrentElement1.remove(true);
        this.m_CurrentElement2.remove(true);
      }
    } else {
      if(Game.instance.m_PlayerTurn) {
        Game.instance.m_CurrentBlows--;
      }

      this.m_CurrentElement1.onChangePosition(false, true);
      this.m_CurrentElement2.onChangePosition(false, true);

      if(!result1) {
        if(this.m_CurrentElement1.m_Bonus) {
          this.m_CurrentElement1.remove(true);
        }
      }

      if(!result2) {
        if(this.m_CurrentElement2.m_Bonus) {
          this.m_CurrentElement2.remove(true);
        }
      }

      this.m_CurrentElement1 = false;
      this.m_CurrentElement2 = false;

      if(Game.tutorial) {
        Game.sharedScreen().onReplaceTutorial();
      }

      this.clear();
    }
  },
  fillAll: function() {
    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = this.getSize().y; j < this.getSize().y * 2; j++) {
        var frame = this.m_Matrix[i][j];
        if(!frame) {
          element = ElementsManager.sharedManager().create();

          this.set(element, i, j, true);

          var down = this.m_Matrix[i][j - 1];

          if(down && down != etypes.empty && down != etypes.block) {
            var x = down.getCenterX();
            var y = down.getCenterY() + element.getHeight();

            element.setCenterPosition(x, y);
          }
        }
      }
    }

    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y * 2; j++) {
        var frame = this.m_Matrix[i][j];
        if(frame && frame != etypes.empty && frame != etypes.block) {
          frame.setCenterPosition(ElementsManager.sharedManager().getParent().getWidth() / 4 + frame.getWidth() * frame.getIndex().x - frame.getWidth() / 4 + Camera.sharedCamera().coord(4), frame.getHeight() * frame.getIndex().y + Camera.sharedCamera().coord(3));
        }
      }
    }
  },
  findAll: function() {
    MatrixManager.pools = [];

    this.fillAll();

    var combinations = 0;
    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y; j++) {
        if(this.hasMatches(this.m_Matrix[i][j])) {
          combinations++;
        }
      }
    }

    if(combinations > 0) {
      this.clear();
    }

    return combinations > 0;
  },
  lookDown: function(clear) {
    if(!Game.sharedScreen().m_TutorialRunning) {
      for(var j = 0; j < this.getSize().y * 2; j++) {
        for(var i = 0; i < this.getSize().x; i++) {
          var frame = this.m_Matrix[i][j];
          if(frame && frame != etypes.empty && frame != etypes.block) this.m_Matrix[i][j].lookDown(true);
        }
      }
    }
  },
  moveDown: function(element, data, actions) {
    var index = {
      x: element.getIndex().x,
      y: element.getIndex().y,
    };

    if(!this.m_PauseTime[index.x]) this.m_PauseTime[index.x] = 0;

    this.m_Matrix[index.x][index.y] = false;

    var x = element.getCenterX();
    var y = element.getCenterY();
    var w = element.getWidth();
    var h = element.getHeight();

    this.set(element, index.x - data.left + data.right, index.y - data.down);

    actions.unshift(cc.DelayTime.create(this.m_PauseTime[index.x]));
    actions.push(cc.CallFunc.create(element.onChangePosition, element, {replaced: true}));
    actions.push(cc.ScaleTo.create(0.2, 1.1, 0.9));
    actions.push(cc.ScaleTo.create(0.1, 1.0, 1.0));
    actions.push(false);

    var sequence = cc.Sequence.create(actions);

    element.runAction(sequence);

    this.m_PauseTime[index.x] += 0.1;

    if(index.y - data.down < this.getSize().y) {
      MatrixManager.pause = Math.max(MatrixManager.pause, sequence.getDuration() + this.m_PauseTime.max());
    }
  },
  shuffle: function() {
    var counter = 0;
    for(var i = 0; i < this.getSize().x; i++) {
      for(var j = 0; j < this.getSize().y; j++) {
        var frame = this.m_Matrix[i][j];

        if(frame && frame != etypes.empty && frame != etypes.block) {
          if(frame.getId() != Element.types.star) {
            frame.runAction(
              cc.Sequence.create(
                cc.ScaleTo.create(0.25, 0.0),
                cc.CallFunc.create(frame.chooseId, frame, frame),
                cc.ScaleTo.create(0.25, 1.0),
                false
              )
            );

            counter++;
          }
        }
      }
    }
  },
  removeHorizontalLine: function(x, y, element) {
    var sickle1 = ElementsManager.instance.m_ElementsSickles.create();
    var sickle2 = ElementsManager.instance.m_ElementsSickles.create();

    sickle1.setCenterPosition(element.convertToWorldSpace(cc.p(0, 0)).x + element.getWidth() / 2, element.convertToWorldSpace(cc.p(0, 0)).y + element.getHeight() / 2);
    sickle1.setOpacity(255);
    sickle2.setRotation(0);
    sickle1.setFlippedHorizontally(true);
    sickle1.runAction(cc.MoveTo.create(0.5, cc.p(sickle1.getCenterX() - Camera.sharedCamera().center.x, sickle1.getCenterY())));
    sickle1.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(0.4),
        cc.FadeTo.create(0.1, 0.0),
        false
      )
    );

    sickle2.setCenterPosition(element.convertToWorldSpace(cc.p(0, 0)).x + element.getWidth() / 2, element.convertToWorldSpace(cc.p(0, 0)).y + element.getHeight() / 2);
    sickle2.setOpacity(255);
    sickle2.setRotation(0);
    sickle2.setFlippedHorizontally(false);
    sickle2.runAction(cc.MoveTo.create(0.5, cc.p(sickle2.getCenterX() + Camera.sharedCamera().center.x, sickle2.getCenterY())));
    sickle2.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(0.4),
        cc.FadeTo.create(0.1, 0.0),
        false
      )
    );

    var time;

    time = 0.05;
    for(var i = x - 1; i >= 0; i--) {
      var current = this.get(i, y);

      if(current && current != etypes.empty && current != etypes.block && current != etypes.star) {
        current.runAction(
          cc.Sequence.create(
            cc.DelayTime.create(time),
            cc.CallFunc.create(current.remove, current, current),
            false
          )
        );
      }

      time += 0.05;

      if(!this.m_PauseTime[i]) {
        this.m_PauseTime[i] = time;
      } else {
        this.m_PauseTime[i] += time;
      }
    }

    time = 0.05;
    for(var i = x + 1; i < this.getSize().x; i++) {
      var current = this.get(i, y);

      if(current && current != etypes.empty && current != etypes.block && current != etypes.star) {
        current.runAction(
          cc.Sequence.create(
            cc.DelayTime.create(time),
            cc.CallFunc.create(current.remove, current, current),
            false
          )
        );
      }

      time += 0.05;

      if(!this.m_PauseTime[i]) {
        this.m_PauseTime[i] = time;
      } else {
        this.m_PauseTime[i] += time;
      }
    }

    MatrixManager.pause += 1.0;

    Sound.sharedSound().play(s_SoundLine);
  },
  removeVerticalLine: function(x, y, element) {
    var sickle1 = ElementsManager.instance.m_ElementsSickles.create();
    var sickle2 = ElementsManager.instance.m_ElementsSickles.create();

    sickle1.setCenterPosition(element.convertToWorldSpace(cc.p(0, 0)).x + element.getWidth() / 2, element.convertToWorldSpace(cc.p(0, 0)).y + element.getHeight() / 2);
    sickle1.setOpacity(255);
    sickle2.setRotation(-90);
    sickle1.setFlippedHorizontally(false);
    sickle1.runAction(cc.MoveTo.create(0.5, cc.p(sickle1.getCenterX(), sickle1.getCenterY() + Camera.sharedCamera().center.y)));
    sickle1.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(0.4),
        cc.FadeTo.create(0.1, 0.0),
        false
      )
    );

    sickle2.setCenterPosition(element.convertToWorldSpace(cc.p(0, 0)).x + element.getWidth() / 2, element.convertToWorldSpace(cc.p(0, 0)).y + element.getHeight() / 2);
    sickle2.setOpacity(255);
    sickle2.setRotation(90);
    sickle2.setFlippedHorizontally(false);
    sickle2.runAction(cc.MoveTo.create(0.5, cc.p(sickle2.getCenterX(), sickle2.getCenterY() - Camera.sharedCamera().center.y)));
    sickle2.runAction(
      cc.Sequence.create(
        cc.DelayTime.create(0.4),
        cc.FadeTo.create(0.1, 0.0),
        false
      )
    );

    var time;

    time = 0.05;
    for(var i = y - 1; i >= 0; i--) {
      var current = this.get(x, i);

      if(current && current != etypes.empty && current != etypes.block) {
        if(current.getId() != Element.types.star) {
          current.runAction(
            cc.Sequence.create(
              cc.DelayTime.create(time),
              cc.CallFunc.create(current.remove, current, current),
              false
            )
          );
        }
      }

      time += 0.05;
    }

    time = 0.05;
    for(var i = y + 1; i < this.getSize().y; i++) {
      var current = this.get(x, i);

      if(current && current != etypes.empty && current != etypes.block) {
        if(current.getId() != Element.types.star) {
          current.runAction(
            cc.Sequence.create(
              cc.DelayTime.create(time),
              cc.CallFunc.create(current.remove, current, current),
              false
            )
          );
        }
      }

      time += 0.05;
    }

    if(!this.m_PauseTime[x]) {
      this.m_PauseTime[x] = time;
    } else {
      this.m_PauseTime[x] += time;
    }

    Sound.sharedSound().play(s_SoundLine);
  }
});

MatrixManager.pause = 0;
MatrixManager.pools = [];
MatrixManager.pool = function () {
  return {
    horizontal: [],
    vertical: [],
    element: false
  };
};
MatrixManager.instance = false;
MatrixManager.sharedManager = function() {
  return MatrixManager.instance ? MatrixManager.instance : new MatrixManager();
};